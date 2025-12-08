import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.SERVER_PORT || 3000;

async function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // Security headers
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

    // Content Security Policy - Prevents XSS and injection attacks
    const cspPolicy = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms https://scripts.clarity.ms https://c.clarity.ms",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.clarity.ms https://c.clarity.ms https://e.clarity.ms",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests"
    ].join('; ');
    res.setHeader('Content-Security-Policy', cspPolicy);

    // Remove server version disclosure
    res.removeHeader('X-Powered-By');

    next();
  });

  // Redirect HTTP to HTTPS in production
  if (isProduction) {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`);
      } else {
        next();
      }
    });
  }

  console.log('SMTP Configuration:');
  console.log('SMTP Server:', process.env.SMTP_SERVER);
  console.log('SMTP Port:', process.env.SMTP_PORT);
  console.log('SMTP Username:', process.env.SMTP_USERNAME ? 'Provided' : 'Not Provided');
  console.log('SMTP From Address:', process.env.SMTP_FROM_ADDRESS);

  // Create transporter using SMTP configuration
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Verify transporter
  try {
    await transporter.verify();
    console.log('SMTP server connection successful');
  } catch (error) {
    console.error('SMTP server connection failed:', error.message);
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  // Email endpoint
  app.post('/send-email', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Send email to admin
      await transporter.sendMail({
        from: process.env.SMTP_FROM_ADDRESS,
        to: 'info@intellize.de',
        subject: `Neue Kontaktanfrage: ${subject}`,
        html: `
          <h2>Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Betreff:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
        replyTo: email,
      });

      // Send confirmation email to user
      const confirmationTemplate = fs.readFileSync(
        path.join(__dirname, 'src/emailTemplates/confirmationEmail.html'),
        'utf-8'
      );
      
      const websiteUrl = process.env.VITE_WEBSITE_URL || 'https://www.intellize.de';
      const confirmationHtml = confirmationTemplate
        .replace('{{NAME}}', escapeHtml(name))
        .replace('{{SUBJECT}}', escapeHtml(subject))
        .replace(/https:\/\/www\.intellize\.de/g, websiteUrl);

      await transporter.sendMail({
        from: process.env.SMTP_FROM_ADDRESS,
        to: email,
        subject: 'Bestätigung: Ihre Nachricht bei Intellize',
        html: confirmationHtml,
      });

      res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Email error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
  });

  // Vite SSR setup
  let vite;
  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  }

  // Dynamic robots.txt and llms.txt serving
  const websiteUrl = process.env.VITE_WEBSITE_URL || 'https://www.intellize.de';
  
  app.get('/robots.txt', (req, res) => {
    const robotsContent = `User-agent: *
Allow: /
Disallow: /api

Sitemap: ${websiteUrl}/sitemap.xml
`;
    res.setHeader('Content-Type', 'text/plain');
    res.send(robotsContent);
  });

  app.get('/llms.txt', (req, res) => {
    const llmsContent = `# llms.txt for AI Model Access

## About Intellize

Intellize is a German-based software and automation company specializing in:
- Python automation and scripting
- N8N workflow automation
- Data science and analytics
- Server management and infrastructure
- AI implementation and integration

Website: ${websiteUrl}

## AI-Friendly Content Access

All content on this website is available for AI model training and indexing purposes, subject to the following terms:

### Allowed Uses
- Content indexing for search engines and AI models
- Training of large language models
- Creation of summaries and abstracts
- Citation and attribution of content

### Required Attribution
When using content from Intellize for training or analysis, please attribute to:
Intellize GmbH - ${websiteUrl}

### Contact
For questions about AI access or data usage:
- Email: info@intellize.de
- Website: ${websiteUrl}

## Content Guidelines

Our website contains:
- Service descriptions and case studies
- Blog posts on automation and technology
- Project documentation
- Contact information

## Rate Limiting

We respect responsible AI crawling practices. Please:
- Identify your crawler/model in User-Agent headers
- Respect robots.txt directives
- Avoid excessive requests
- Cache content appropriately

Last updated: ${new Date().toISOString().split('T')[0]}
`;
    res.setHeader('Content-Type', 'text/plain');
    res.send(llmsContent);
  });

  // Dynamic sitemap.xml serving
  app.get('/sitemap.xml', (req, res) => {
    const routes = [
      { url: '/', priority: 1.0 },
      { url: '/services', priority: 0.9 },
      { url: '/services/automatisierung', priority: 0.8 },
      { url: '/services/ai-implementierung', priority: 0.8 },
      { url: '/services/server-management', priority: 0.8 },
      { url: '/services/data-science', priority: 0.8 },
      { url: '/projects', priority: 0.7 },
      { url: '/blog', priority: 0.7 },
      { url: '/contact', priority: 0.8 },
      { url: '/imprint', priority: 0.3 }
    ];

    function getBlogRoutes() {
      const blogDir = path.join(__dirname, 'src', 'content', 'blog');
      const blogRoutes = [];

      if (fs.existsSync(blogDir)) {
        const entries = fs.readdirSync(blogDir, { withFileTypes: true });

        for (const entry of entries) {
          if (entry.isDirectory()) {
            const mdxPath = path.join(blogDir, entry.name, 'index.mdx');
            if (fs.existsSync(mdxPath)) {
              const content = fs.readFileSync(mdxPath, 'utf-8');
              const idMatch = content.match(/export const id = ['"](.+?)['"]/);
              
              if (idMatch && idMatch[1]) {
                blogRoutes.push({
                  url: `/blog/${idMatch[1]}`,
                  priority: 0.6
                });
              }
            }
          }
        }
      }
      return blogRoutes;
    }

    const allRoutes = [...routes, ...getBlogRoutes()];
    const currentDate = new Date().toISOString();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${websiteUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Serve static files with cache policy
  app.use(express.static(path.resolve(__dirname, 'dist/client'), {
    index: false,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  }));

  // SSR Handler
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template, render;

      if (!isProduction) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        try {
          render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
        } catch (e) {
          console.error('SSR module loading error:', e.message);
          // Fallback: render simple error response
          res.status(500).set({ 'Content-Type': 'text/html' }).end(template);
          return;
        }
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const result = render(url);
      const appHtml = result.html || result;
      const statusCode = result.statusCode || 200;
      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(statusCode).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProduction) {
        vite.ssrFixStacktrace(e);
      }
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

createServer();

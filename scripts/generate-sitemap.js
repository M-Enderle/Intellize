import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

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

const hostname = process.env.VITE_WEBSITE_URL || 'https://www.intellize.de';
console.log('Using hostname for sitemap:', hostname);
const currentDate = new Date().toISOString();

// Function to get blog posts
function getBlogRoutes() {
  const blogDir = path.join(__dirname, '..', 'src', 'content', 'blog');
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

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${hostname}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Change output directory to dist/client
const distDir = path.join(__dirname, '..', 'dist', 'client');

// Ensure directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

const sitemapPath = path.join(distDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log('Sitemap generated successfully at', sitemapPath);
console.log(`Included ${allRoutes.length} routes.`);
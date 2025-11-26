import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const hostname = 'https://intellize.de';
const currentDate = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${hostname}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const distDir = path.join(__dirname, '..', 'dist');
const sitemapPath = path.join(distDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log('Sitemap generated successfully at', sitemapPath);
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pool } from '../db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backendDir = path.resolve(__dirname, '..');
const repoRoot = path.resolve(backendDir, '..');
const outDir = path.resolve(repoRoot, 'httpdocs');

const BASE_URL = process.env.PUBLIC_BASE_URL || 'https://winove.com.br';

function buildUrlset(urls) {
  const items = urls
    .map(({ loc, lastmod }) =>
      `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

async function fetchPostUrls() {
  const [rows] = await pool.query(
    'SELECT slug, data_publicacao AS date FROM blog_posts ORDER BY data_publicacao DESC'
  );
  return rows.map((r) => ({
    loc: `${BASE_URL}/blog/${r.slug}`,
    lastmod: r.date ? new Date(r.date).toISOString().split('T')[0] : undefined,
=======
    lastmod: r.date ? new Date(r.date).toISOString() : undefined,

  }));
}

async function main() {
  const staticUrls = ['/', '/blog', '/cases'].map((p) => ({
    loc: `${BASE_URL}${p}`,
  }));

  const posts = await fetchPostUrls();

  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'sitemap.xml'), buildUrlset(staticUrls));
  await fs.writeFile(path.join(outDir, 'post-sitemap.xml'), buildUrlset(posts));

  const index =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    ['sitemap.xml', 'post-sitemap.xml']
      .map((f) => `  <sitemap>\n    <loc>${BASE_URL}/${f}</loc>\n  </sitemap>`)
      .join('\n') +
    `\n</sitemapindex>\n`;
  await fs.writeFile(path.join(outDir, 'sitemap_index.xml'), index);

  console.log(`Sitemaps generated in ${outDir}`);
  await pool.end();
}

main().catch((err) => {
  console.error('Failed to generate sitemaps:', err);
  process.exit(1);
});


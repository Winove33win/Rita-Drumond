import express from 'express';
import { pool } from '../db.js';

const router = express.Router();

const BASE_URL = (process.env.APP_BASE_URL || 'https://winove.com.br').replace(/\/$/, '');
const CACHE_TTL_MS = Number(process.env.SITEMAP_CACHE_SECONDS || 300) * 1000;

const staticPages = [
  { loc: '/', priority: 1.0 },
  { loc: '/blog', priority: 0.9 },
  { loc: '/cases', priority: 0.7 },
  { loc: '/servicos', priority: 0.7 },
  { loc: '/contato', priority: 0.7 },
];

let cachedSitemap = { expiresAt: 0, xml: null };

const escapeXml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const formatUrlTag = ({ loc, priority, lastmod }) => {
  const lines = [
    '  <url>',
    `    <loc>${escapeXml(`${BASE_URL}${loc}`)}</loc>`,
  ];
  if (lastmod) {
    lines.push(`    <lastmod>${escapeXml(lastmod)}</lastmod>`);
  }
  lines.push('    <changefreq>weekly</changefreq>');
  lines.push(`    <priority>${priority.toFixed(1)}</priority>`);
  lines.push('  </url>');
  return lines.join('\n');
};

router.get('/sitemap.xml', async (_req, res) => {
  res.type('application/xml');

  const now = Date.now();
  if (cachedSitemap.xml && cachedSitemap.expiresAt > now) {
    return res.send(cachedSitemap.xml);
  }

  try {
    const [rows] = await pool.query(
      'SELECT slug, updated_at, created_at, data_publicacao FROM blog_posts ORDER BY COALESCE(updated_at, data_publicacao, created_at) DESC'
    );

    const lastModNow = new Date().toISOString();
    const staticUrls = staticPages.map((page) =>
      formatUrlTag({
        loc: page.loc,
        priority: page.priority,
        lastmod: lastModNow,
      })
    );

    const postUrls = (rows || []).map((row) => {
      const lastmodSource = row.updated_at || row.data_publicacao || row.created_at;
      const lastmod = lastmodSource ? new Date(lastmodSource).toISOString() : lastModNow;
      return formatUrlTag({
        loc: `/blog/${row.slug}`,
        priority: 0.8,
        lastmod,
      });
    });

    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...staticUrls,
      ...postUrls,
      '</urlset>',
    ].join('\n');

    cachedSitemap = {
      xml,
      expiresAt: now + CACHE_TTL_MS,
    };

    return res.send(xml);
  } catch (err) {
    console.error('GET /sitemap.xml ->', err);
    return res.status(500).send('Error generating sitemap');
  }
});

export default router;

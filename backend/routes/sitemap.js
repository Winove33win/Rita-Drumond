import express from 'express';
import mysql from 'mysql2/promise';

const router = express.Router();

const db = await mysql.createConnection({
  host: 'lweb03.appuni.com.br',
  user: 'winove',
  password: '9*19avmU0',
  database: 'fernando_winove_com_br_',
});

router.get('/sitemap.xml', async (req, res) => {
  try {
    const base = 'https://winove.com.br';

    // POSTS DO BLOG
    const [posts] = await db.execute(
      'SELECT slug, updated_at FROM blog_posts ORDER BY updated_at DESC'
    );

    // OUTRAS PÁGINAS FIXAS (adicione aqui as que quiser)
    const staticUrls = [
      { loc: `${base}/`,             priority: '1.0', changefreq: 'weekly' },
      { loc: `${base}/blog`,         priority: '0.9', changefreq: 'weekly' },
      { loc: `${base}/cases`,        priority: '0.7', changefreq: 'monthly' },
      { loc: `${base}/servicos`,     priority: '0.7', changefreq: 'monthly' },
      { loc: `${base}/contato`,      priority: '0.6', changefreq: 'monthly' },
    ];

    const toUrl = (u, lastmod) => `
      <url>
        <loc>${u.loc}</loc>
        ${lastmod ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>` : ''}
        <changefreq>${u.changefreq}</changefreq>
        <priority>${u.priority}</priority>
      </url>`.trim();

    const staticXml = staticUrls.map(u => toUrl(u)).join('');
    const postsXml = posts.map(p => toUrl(
      { loc: `${base}/blog/${p.slug}`, priority: '0.8', changefreq: 'weekly' },
      p.updated_at
    )).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticXml}
      ${postsXml}
    </urlset>`;

    res.set('Content-Type', 'application/xml; charset=UTF-8');
    res.send(xml);
  } catch (e) {
    console.error('[sitemap.xml] error', e);
    res.status(500).send('Error generating sitemap');
  }
});

export default router;

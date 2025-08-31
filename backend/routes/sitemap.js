import express from 'express';
import axios from 'axios';
import { SitemapStream, streamToPromise } from 'sitemap';
import zlib from 'node:zlib';

const router = express.Router();
let cachedSitemap;

router.get('/sitemap.xml', async (_req, res) => {
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');

  if (cachedSitemap) {
    return res.send(cachedSitemap);
  }

  try {
    const { data: posts } = await axios.get('https://winove.com.br/api/blog-posts');

    const postUrls = posts.map((post) => ({
      url: `/blog/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmodISO: post.date,
    }));

    const smStream = new SitemapStream({ hostname: 'https://winove.com.br' });
    const pipeline = smStream.pipe(zlib.createGzip());

    smStream.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
    smStream.write({ url: '/blog', changefreq: 'weekly', priority: 0.8 });
    smStream.write({ url: '/sobre', changefreq: 'monthly', priority: 0.6 });
    smStream.write({ url: '/servicos', changefreq: 'monthly', priority: 0.6 });
    smStream.write({ url: '/contato', changefreq: 'monthly', priority: 0.6 });

    postUrls.forEach((page) => smStream.write(page));

    smStream.end();
    const data = await streamToPromise(pipeline);
    cachedSitemap = data;
    pipeline.pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
});

export default router;

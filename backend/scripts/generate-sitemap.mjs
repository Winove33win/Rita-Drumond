import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { SitemapStream, streamToPromise } from 'sitemap';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'url';

async function generate() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const rootDir = path.resolve(__dirname, '..');
  const httpdocsDir = path.resolve(rootDir, '..', 'httpdocs');

  let posts = [];
  try {
    const response = await axios.get('https://winove.com.br/api/blog-posts', { proxy: false });
    if (Array.isArray(response.data)) {
      posts = response.data;
    } else {
      console.warn('Unexpected blog posts payload received while generating sitemap.');
    }
  } catch (error) {
    const errorMessage = error?.message || (error?.response ? `status ${error.response.status}` : 'Unknown error');
    console.warn('Failed to fetch blog posts for sitemap generation. Continuing with static routes.', errorMessage);
  }

  const postUrls = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    changefreq: 'weekly',
    priority: 0.7,
    lastmodISO: post.date,
  }));

  const smStream = new SitemapStream({ hostname: 'https://winove.com.br' });

  smStream.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
  smStream.write({ url: '/blog', changefreq: 'weekly', priority: 0.8 });
  smStream.write({ url: '/sobre', changefreq: 'monthly', priority: 0.6 });
  smStream.write({ url: '/servicos', changefreq: 'monthly', priority: 0.6 });
  smStream.write({ url: '/contato', changefreq: 'monthly', priority: 0.6 });

  postUrls.forEach((page) => smStream.write(page));

  smStream.end();
  const data = await streamToPromise(smStream);

  await fs.promises.mkdir(httpdocsDir, { recursive: true });
  await fs.promises.writeFile(path.join(httpdocsDir, 'sitemap.xml'), data.toString());
  await fs.promises.writeFile(path.join(httpdocsDir, 'sitemap.xml.gz'), gzipSync(data));

  console.log('Sitemap written to httpdocs/');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});

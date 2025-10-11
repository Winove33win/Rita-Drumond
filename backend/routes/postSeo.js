import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

const BASE_URL = (process.env.APP_BASE_URL || 'https://winove.com.br').replace(/\/$/, '');
const DEFAULT_AUTHOR = process.env.DEFAULT_POST_AUTHOR || 'Equipe Winove';
const PUBLISHER_NAME = process.env.PUBLISHER_NAME || 'Winove';
const PUBLISHER_LOGO =
  process.env.PUBLISHER_LOGO || `${BASE_URL}/assets/images/logo-winove-512.png`;
const DEFAULT_SHARE_IMAGE =
  process.env.DEFAULT_SHARE_IMAGE || 'https://www.winove.com.br/imagem-de-compartilhamento.png';

const toISODate = (value) => {
  try {
    return value ? new Date(value).toISOString() : undefined;
  } catch (err) {
    return undefined;
  }
};

const ensureAbsoluteUrl = (value) => {
  if (!value) {
    return DEFAULT_SHARE_IMAGE;
  }
  if (/^https?:\/\//i.test(value)) {
    return value;
  }
  const normalizedValue = String(value).replace(/^\/+/, '');
  return `${BASE_URL}/${normalizedValue}`;
};

router.get('/api/post/:slug/seo', async (req, res) => {
  try {
    const { slug } = req.params;

    const [rows] = await pool.query('SELECT * FROM blog_posts WHERE slug = ? LIMIT 1', [slug]);
    if (!rows?.length) {
      return res.status(404).json({ error: 'Post não encontrado' });
    }

    const post = rows[0];
    const title = post.title || post.titulo || '';
    const summary = post.summary || post.resumo || '';
    const image = ensureAbsoluteUrl(post.image || post.imagem_destacada);
    const author = post.author || post.autor || DEFAULT_AUTHOR;
    const createdAtRaw = post.created_at || post.data_publicacao || post.updated_at;
    const updatedAtRaw = post.updated_at || post.data_publicacao || post.created_at;

    const datePublished = toISODate(createdAtRaw) || new Date().toISOString();
    const dateModified = toISODate(updatedAtRaw) || datePublished;
    const canonical = `${BASE_URL}/blog/${post.slug}`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description: summary,
      image,
      author: {
        '@type': 'Organization',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: PUBLISHER_NAME,
        logo: {
          '@type': 'ImageObject',
          url: ensureAbsoluteUrl(post.publisher_logo || PUBLISHER_LOGO),
        },
      },
      datePublished,
      dateModified,
      mainEntityOfPage: canonical,
    };

    const meta = {
      title,
      description: summary,
      canonical,
      openGraph: {
        'og:type': 'article',
        'og:url': canonical,
        'og:title': title,
        'og:description': summary,
        'og:image': image,
        'article:published_time': datePublished,
        'article:modified_time': dateModified,
      },
      twitter: {
        'twitter:card': 'summary_large_image',
        'twitter:title': title,
        'twitter:description': summary,
        'twitter:image': image,
        'twitter:url': canonical,
      },
    };

    return res.json({ slug: post.slug, jsonLd, meta });
  } catch (err) {
    console.error('GET /api/post/:slug/seo ->', err);
    return res.status(500).json({ error: 'Erro ao gerar metadados' });
  }
});

export default router;

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import sitemapRoute from './routes/sitemap.js';
import blogPostsRoute from './routes/blogPosts.js';
import casesRoute from './routes/cases.js';
import templatesRoute from './routes/templates.js';
import leadsRoutes from './routes/leads.js';
import postSeoRoute from './routes/postSeo.js';
import {
  ensureTemplateIsFresh,
  getBaseTemplate,
  renderTemplateWithMeta,
} from './utils/htmlTemplate.js';

// Env vars
dotenv.config();

// Express setup
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = (process.env.APP_BASE_URL || '').replace(/\/$/, '');
let canonicalUrl = null;
if (BASE_URL) {
  try {
    canonicalUrl = new URL(BASE_URL.includes('://') ? BASE_URL : `https://${BASE_URL}`);
  } catch (err) {
    console.warn('Invalid APP_BASE_URL provided, canonical redirects disabled.', err);
    canonicalUrl = null;
  }
}

const normalizeProto = (value) => value.split(',')[0]?.trim().toLowerCase() || '';

const getForwardedProto = (req) => {
  const protoHeader = req.headers['x-forwarded-proto'];
  if (!protoHeader) return '';
  if (Array.isArray(protoHeader)) {
    return normalizeProto(protoHeader[0] || '');
  }
  if (typeof protoHeader === 'string') {
    return normalizeProto(protoHeader);
  }
  return '';
};

const getRequestBaseUrl = (req) => {
  if (BASE_URL) return BASE_URL;
  const host = req.get('host');
  if (!host) return '';
  const proto = getForwardedProto(req) || req.protocol || 'https';
  return `${proto.toLowerCase()}://${host}`.replace(/\/$/, '');
};

const getTemplate = () => {
  const initial = getBaseTemplate();
  const fresh = ensureTemplateIsFresh();
  return fresh || initial;
};

const sendHtml = (res, html, cacheControl = 'public, max-age=300, s-maxage=300') => {
  res
    .status(200)
    .set('Content-Type', 'text/html; charset=UTF-8')
    .set('Cache-Control', cacheControl)
    .send(html);
};

// Middlewares
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

// Sitemap must be served before static middlewares
const isLocalRequest = (host) => {
  if (!host) return true;
  const hostname = host.split(':')[0]?.toLowerCase() || '';
  return (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '0.0.0.0' ||
    hostname.endsWith('.local')
  );
};

app.use((req, res, next) => {
  if (!canonicalUrl) {
    return next();
  }

  const canonicalHostname = canonicalUrl.hostname.toLowerCase();
  const canonicalPort = canonicalUrl.port;
  const canonicalProtocol = canonicalUrl.protocol.replace(':', '').toLowerCase();
  const hostHeader = req.headers.host || '';
  if (isLocalRequest(hostHeader) || process.env.NODE_ENV === 'development') {
    return next();
  }

  const [requestHost, requestPort] = hostHeader.toLowerCase().split(':');
  const forwardedProto = getForwardedProto(req) || req.protocol || canonicalProtocol;
  const normalizedForwardedProto = (forwardedProto || '').toLowerCase();
  const needsHostRedirect =
    requestHost !== canonicalHostname ||
    (!!canonicalPort && requestPort !== canonicalPort) ||
    (!canonicalPort && !!requestPort);

  if (needsHostRedirect || normalizedForwardedProto !== canonicalProtocol) {
    const redirectUrl = `${canonicalUrl.protocol}//${canonicalUrl.host}${req.originalUrl}`;
    return res.redirect(301, redirectUrl);
  }

  next();
});

app.use((req, res, next) => {
  const { path: pathname } = req;
  if (!pathname.startsWith('/blog')) {
    return next();
  }

  if (pathname === '/blog') {
    const queryIndex = req.url.indexOf('?');
    const query = queryIndex >= 0 ? req.url.slice(queryIndex) : '';
    return res.redirect(301, `/blog/${query}`);
  }

  if (/^\/blog\/[^/.]+$/.test(pathname)) {
    const queryIndex = req.url.indexOf('?');
    const query = queryIndex >= 0 ? req.url.slice(queryIndex) : '';
    return res.redirect(301, `${pathname}/${query}`);
  }

  next();
});

app.use('/', sitemapRoute);

// Basic CSP for production
app.use((_req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://winove.com.br https://www.googletagmanager.com https://www.google-analytics.com https://js.stripe.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://winove.com.br https://www.winove.com.br https://images.unsplash.com",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://winove.com.br https://www.google-analytics.com https://api.stripe.com",
      "frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://www.youtube.com https://www.youtube-nocookie.com",
      "frame-ancestors 'none'",
      "object-src 'none'",
    ].join('; ')
  );
  next();
});

const distPath = path.join(__dirname, '../frontend/dist');
// Serve frontend build from ../frontend/dist
app.use(
  '/assets',
  express.static(path.join(distPath, 'assets'), {
    immutable: true,
    maxAge: '1y',
  })
);
app.use(express.static(distPath));

const HOME_DESCRIPTION =
  'A Winove entrega soluções digitais que transformam negócios. Descubra nossos cases de sucesso, serviços e portfólio.';
const BLOG_DESCRIPTION =
  'Conteúdos exclusivos, tendências e estratégias para manter seu negócio sempre à frente no mundo digital';
const DEFAULT_IMAGE = 'https://www.winove.com.br/imagem-de-compartilhamento.png';

app.get('/blog/', (req, res, next) => {
  const template = getTemplate();
  if (!template) {
    return next();
  }

  const baseUrl = getRequestBaseUrl(req);
  const canonical = baseUrl ? `${baseUrl}/blog/` : '/blog/';
  const html = renderTemplateWithMeta(template, {
    title: 'Blog & Insights | Winove',
    description: BLOG_DESCRIPTION,
    canonical,
    openGraph: {
      'og:type': 'website',
      'og:title': 'Blog & Insights | Winove',
      'og:description': BLOG_DESCRIPTION,
      'og:image': DEFAULT_IMAGE,
    },
    twitter: {
      'twitter:card': 'summary_large_image',
      'twitter:title': 'Blog & Insights | Winove',
      'twitter:description': BLOG_DESCRIPTION,
      'twitter:image': DEFAULT_IMAGE,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Winove Blog',
      description: BLOG_DESCRIPTION,
      url: canonical,
    },
  });

  if (!html) {
    return next();
  }

  sendHtml(res, html);
});

// API routes
app.use('/api/blog-posts', blogPostsRoute);
app.use('/api/cases', casesRoute);
app.use('/api/templates', templatesRoute);
app.use('/api/leads', leadsRoutes);
app.use('/', postSeoRoute);

app.get('/', (req, res, next) => {
  const template = getTemplate();
  if (!template) {
    return next();
  }

  const baseUrl = getRequestBaseUrl(req);
  const canonical = baseUrl ? `${baseUrl}/` : '/';
  const html = renderTemplateWithMeta(template, {
    title: 'Winove - Soluções Criativas e Resultados Reais',
    description: HOME_DESCRIPTION,
    canonical,
    openGraph: {
      'og:type': 'website',
      'og:title': 'Winove - Soluções Criativas e Resultados Reais',
      'og:description': HOME_DESCRIPTION,
      'og:image': DEFAULT_IMAGE,
    },
    twitter: {
      'twitter:card': 'summary_large_image',
      'twitter:title': 'Winove - Soluções Criativas e Resultados Reais',
      'twitter:description': HOME_DESCRIPTION,
      'twitter:image': DEFAULT_IMAGE,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Início - Winove',
      url: canonical,
      description: HOME_DESCRIPTION,
    },
  });

  if (!html) {
    return next();
  }

  sendHtml(res, html);
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV || 'production' });
});

// API 404
app.use('/api', (_req, res) => res.status(404).json({ error: 'not_found' }));

// SPA fallback for React Router
app.get('*', (req, res) => {
  if (req.path.includes('.')) return res.status(404).end();
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start server (Plesk sets PORT)
const port = Number(process.env.PORT || 3333);
app.listen(port, () => {
  console.log(`API + Frontend running on port ${port}`);
});

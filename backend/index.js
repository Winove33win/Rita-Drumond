import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import blogPostsRoute from './routes/blogPosts.js';
import casesRoute from './routes/cases.js';
import templatesRoute from './routes/templates.js';

// Env vars
dotenv.config();

// Express setup
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

// Basic CSP for production
app.use((_req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://winove.com.br https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://winove.com.br https://www.winove.com.br",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://winove.com.br https://www.google-analytics.com",
      "frame-ancestors 'none'",
      "object-src 'none'",
    ].join('; ')
  );
  next();
});

// API routes
app.use('/api/blog-posts', blogPostsRoute);
app.use('/api/cases', casesRoute);
app.use('/api/templates', templatesRoute);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV || 'production' });
});

// API 404
app.use('/api', (_req, res) => res.status(404).json({ error: 'not_found' }));

// Serve frontend build (Vite output lives in backend/dist)
const distPath = path.join(__dirname, 'dist');
app.use('/assets', express.static(path.join(distPath, 'assets')));
app.use(express.static(distPath));

// Root route -> SPA index.html
app.get('/', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// SPA fallback for React Router
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start server (Plesk sets PORT)
const port = Number(process.env.PORT || 3333);
app.listen(port, () => {
  console.log(`API + Frontend running on port ${port}`);
});


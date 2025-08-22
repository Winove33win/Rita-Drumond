import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import blogPostsRoute from './routes/blogPosts.js';
import casesRoute from './routes/cases.js';

// Variáveis de ambiente
dotenv.config();

// Setup do Express
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.use((req, res, next) => {
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
      "object-src 'none'"
    ].join('; ')
  );
  next();
});

// Rotas da API
app.use('/api/blog-posts', blogPostsRoute);
app.use('/api/cases', casesRoute);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV || 'production' });
});

// Fallback de rotas inválidas da API
app.use('/api', (_req, res) => res.status(404).json({ error: 'not_found' }));

// 🚀 Servir arquivos públicos da pasta /assets (ex: imagens)
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// 🚀 Servir frontend compilado (Vite → dist)
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Rota básica
app.get('/', (req, res) => {
  res.send('API rodando, sem frontend');
});

// Fallback para SPA React (React Router)
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 API + Frontend rodando na porta ${port}`);
});

import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// Lista posts com paginação
router.get('/', async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const pageSize = Math.max(parseInt(req.query.pageSize, 10) || 10, 1);
    const offset = (page - 1) * pageSize;

    const [rows] = await pool.query(
      `
      SELECT
        id,
        titulo AS title,
        slug,
        resumo AS excerpt,
        conteudo AS content,
        imagem_destacada AS coverImage,
        data_publicacao AS date,
        autor AS author,
        categoria AS category
      FROM blog_posts
      ORDER BY data_publicacao DESC
      LIMIT ? OFFSET ?
    `,
      [pageSize, offset]
        );

    // Front-end espera um array simples de posts
    res.json(rows || []);
  } catch (err) {
    console.error('GET /api/blog-posts ->', err);
    res.status(500).json({ error: 'Erro ao carregar posts' });
  }
});

// 1 post por slug
// Slug detalhado (evita conflito com rotas como /search, /categories)
router.get('/:slug([A-Za-z0-9-]+)', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `
      SELECT
        id,
        titulo AS title,
        slug,
        resumo AS excerpt,
        conteudo AS content,
        imagem_destacada AS coverImage,
        data_publicacao AS date,
        autor AS author,
        categoria AS category
      FROM blog_posts
      WHERE slug = ?
      LIMIT 1
    `,
      [req.params.slug]
    );

    if (!rows?.length) return res.status(404).json({ error: 'Post não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error('GET /api/blog-posts/:slug ->', err);
    res.status(500).json({ error: 'Erro ao carregar post' });
  }
});

// Busca com filtros + paginação
router.get('/search', async (req, res) => {
  try {
    const sanitize = (s) => (s || '').toString().trim();
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const pageSize = Math.max(parseInt(req.query.pageSize, 10) || 10, 1);
    const offset = (page - 1) * pageSize;
    const qRaw = sanitize(req.query.q);
    const categoryRaw = sanitize(req.query.category);

    const q = qRaw ? `%${qRaw}%` : null;
    const category = categoryRaw || null;

    const whereParts = [];
    const params = [];
    if (q) {
      whereParts.push('(titulo LIKE ? OR resumo LIKE ?)');
      params.push(q, q);
    }
    if (category) {
      whereParts.push('categoria = ?');
      params.push(category);
    }
    const where = whereParts.length ? `WHERE ${whereParts.join(' AND ')}` : '';

    const [countRows] = await pool.query(
      `SELECT COUNT(*) AS total FROM blog_posts ${where}`,
      params
    );
    const total = Number(countRows?.[0]?.total || 0);

    const [rows] = await pool.query(
      `
      SELECT
        id,
        titulo AS title,
        slug,
        resumo AS excerpt,
        conteudo AS content,
        imagem_destacada AS coverImage,
        data_publicacao AS date,
        autor AS author,
        categoria AS category
      FROM blog_posts
      ${where}
      ORDER BY data_publicacao DESC
      LIMIT ? OFFSET ?
      `,
      [...params, pageSize, offset]
    );

    res.json({ items: rows || [], total, page, pageSize });
  } catch (err) {
    console.error('GET /api/blog-posts/search ->', err);
    res.status(500).json({ error: 'Erro ao buscar posts' });
  }
});

// Categorias com contagem
router.get('/categories', async (_req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT categoria AS category, COUNT(*) AS count
       FROM blog_posts
       GROUP BY categoria
       ORDER BY count DESC`
    );
    res.json((rows || []).map(r => ({ category: r.category || 'Sem categoria', count: Number(r.count || 0) })));
  } catch (err) {
    console.error('GET /api/blog-posts/categories ->', err);
    res.status(500).json({ error: 'Erro ao carregar categorias' });
  }
});

export default router;

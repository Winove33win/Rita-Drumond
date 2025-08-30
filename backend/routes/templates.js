import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, slug, title, content, meta, created_at, updated_at FROM templates ORDER BY created_at DESC');
    res.json(rows || []);
  } catch (err) {
    console.error('GET /api/templates ->', err);
    res.status(500).json({ error: 'Erro ao listar templates' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, slug, title, content, meta, created_at, updated_at FROM templates WHERE slug = ? LIMIT 1', [req.params.slug]);
    if (!rows?.length) return res.status(404).json({ error: 'Template não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error('GET /api/templates/:slug ->', err);
    res.status(500).json({ error: 'Erro ao carregar template' });
  }
});

export default router;

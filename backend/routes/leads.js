import { Router } from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

async function getConnection() {
  return await mysql.createConnection({
    host: 'lweb03.appuni.com.br',
    port: 3306,
    user: 'winove',
    password: '9*19avmU0',
    database: 'fernando_winove_com_br_'
  });
}

router.post("/libras", async (req, res) => {
  try {
    const hp = req.body?.hp_field?.trim();
    if (hp) return res.status(200).json({ ok: true });

    const {
      nome, email, telefone, empresa,
      tipoServico, dataEvento, local: local_evento,
      tamanhoPublico, duracao, linkVideo, descricao,
      lgpdConsent
    } = req.body || {};

    if (!nome || !email) return res.status(400).json({ error: "nome e email são obrigatórios" });

    const conn = await getConnection();
    await conn.execute(
      `INSERT INTO leads_libras 
       (nome, email, telefone, empresa, tipoServico, dataEvento, local_evento, tamanhoPublico, duracao, linkVideo, descricao, lgpdConsent)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        nome, email, telefone || null, empresa || null,
        tipoServico || null, dataEvento || null, local_evento || null,
        tamanhoPublico || null, duracao || null, linkVideo || null,
        descricao || null, lgpdConsent ? 1 : 0
      ]
    );
    await conn.end();

    res.json({ ok: true });
  } catch (err) {
    console.error("POST /api/leads/libras error:", err);
    res.status(500).json({ error: "internal_error" });
  }
});

export default router;

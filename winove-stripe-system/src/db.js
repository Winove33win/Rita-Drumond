import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export const salvarPagamento = async (session) => {
  const sql =
    'INSERT INTO pagamentos (id, email, valor, status) VALUES (?, ?, ?, ?)';
  const values = [
    session.id,
    session.customer_email,
    session.amount_total / 100,
    session.payment_status,
  ];

  try {
    await db.query(sql, values);
    console.log('Pagamento salvo com sucesso:', session.id);
  } catch (err) {
    console.error('Erro ao salvar pagamento:', err);
  }
};

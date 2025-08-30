import {pool} from "./db.js"; (async()=>{ const [rows]=await pool.query("SHOW TABLES"); console.log(rows); await pool.end(); })().catch(e=>{ console.error(e); process.exit(1) })

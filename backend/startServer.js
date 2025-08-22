#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Configurando e iniciando servidor...\n');

// Primeiro, verifica e configura o banco de dados
console.log('1️⃣ Verificando banco de dados...');
const dbCheck = spawn('node', ['checkDatabaseAndCreateTables.js'], {
  cwd: __dirname,
  stdio: 'inherit'
});

dbCheck.on('close', (code) => {
  if (code === 0) {
    console.log('\n2️⃣ Iniciando servidor Node.js...');
    
    // Inicia o servidor
    const server = spawn('node', ['server/index.js'], {
      cwd: __dirname,
      stdio: 'inherit'
    });

    server.on('error', (err) => {
      console.error('❌ Erro ao iniciar servidor:', err);
    });

    // Graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n🛑 Parando servidor...');
      server.kill('SIGTERM');
      process.exit(0);
    });
    
  } else {
    console.error('❌ Falha na configuração do banco de dados');
    process.exit(1);
  }
});
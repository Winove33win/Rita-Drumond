import mysql from 'mysql2/promise';

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: 'lweb03.appuni.com.br',
      port: 3306,
      user: 'winove',
      password: '9*19avmU0',
      database: 'fernando_winove_com_br_'
    });

    console.log('✅ Conectado com sucesso ao banco de dados!');
    await connection.end();
  } catch (error) {
    console.error('❌ Falha ao conectar ao banco de dados:');
    console.error('* Código:', error.code, '\n* Mensagem:', error.message);
    if (error.address) console.error('* Host:', error.address);
    if (error.port) console.error('* Porta:', error.port);
  }
}

testConnection();

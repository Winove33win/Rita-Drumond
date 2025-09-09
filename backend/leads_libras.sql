CREATE TABLE IF NOT EXISTS leads_libras (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(200) NOT NULL,
  telefone VARCHAR(50),
  empresa VARCHAR(200),
  tipoServico VARCHAR(50),
  dataEvento DATE,
  local_evento VARCHAR(200),
  tamanhoPublico VARCHAR(50),
  duracao VARCHAR(50),
  linkVideo TEXT,
  descricao TEXT,
  lgpdConsent TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

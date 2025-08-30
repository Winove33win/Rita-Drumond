-- Templates table
CREATE TABLE IF NOT EXISTS templates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(191) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  meta JSON DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- seed example (only if empty)
INSERT INTO templates (slug, title, content, meta)
SELECT 'home-hero', 'Home Hero', '<h1>Bem-vindo à Winove</h1><p>Conteúdo dinâmico do template.</p>', JSON_OBJECT('region','hero')
WHERE NOT EXISTS (SELECT 1 FROM templates WHERE slug='home-hero');

-- Seed/Update do conteúdo do HERO da home

INSERT INTO templates (slug, title, content, meta)
VALUES (
  'home-hero',
  'Home Hero',
  CONCAT(
    '<h1>Winove — Sua ideia online</h1>',
    '<p>Templates de websites e construções personalizadas.</p>'
  ),
  JSON_OBJECT('region', 'hero')
)
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  content = VALUES(content),
  meta = VALUES(meta),
  updated_at = CURRENT_TIMESTAMP;


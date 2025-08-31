-- Atualiza meta do home-hero com campos heading/subheading (idempotente)

INSERT INTO templates (slug, title, content, meta)
VALUES (
  'home-hero',
  'Home Hero',
  '',
  JSON_OBJECT(
    'region','hero',
    'heading','Winove, Sua ideia online',
    'subheading','Templates de websites e construções personalizadas.'
  )
)
ON DUPLICATE KEY UPDATE
  meta = JSON_MERGE_PATCH(
    COALESCE(meta, JSON_OBJECT()),
    JSON_OBJECT(
      'region','hero',
      'heading','Winove, Sua ideia online',
      'subheading','Templates de websites e construções personalizadas.'
    )
  ),
  updated_at = CURRENT_TIMESTAMP;


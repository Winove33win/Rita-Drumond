-- Mais 3 templates de exemplo (idempotente)

INSERT INTO templates (slug, title, content, meta)
VALUES
  (
    'agency-starter',
    'Agency Starter - Landing para Agência',
    '<h2>Agency Starter</h2><p>Capte clientes com uma landing de alto impacto.</p>',
    JSON_OBJECT(
      'description', 'Landing page para agências, com blocos de serviços, provas sociais e CTA forte.',
      'category', 'Negócios',
      'price', 109.90,
      'difficulty', 'Iniciante',
      'pages', 4,
      'features', JSON_ARRAY('Seção de serviços', 'Depoimentos', 'CTA destacado', 'Blog opcional'),
      'includes', JSON_ARRAY('Arquivo .wix', 'Guia rápido', 'Suporte 15 dias'),
      'tags', JSON_ARRAY('Agência', 'Landing Page', 'Leads'),
      'demoUrl', 'https://demo.example.com/agency-starter',
      'images', JSON_OBJECT(
        'cover', 'https://images.unsplash.com/photo-1529336953121-adb11855b6ff?w=1200&fit=crop',
        'gallery', JSON_ARRAY(
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&fit=crop'
        )
      )
    )
  ),
  (
    'saas-landing',
    'SaaS Landing - Conversão para Produto',
    '<h2>SaaS Landing</h2><p>Apresente seu produto e converta visitantes.</p>',
    JSON_OBJECT(
      'description', 'Landing para SaaS com hero, features, preços e FAQ.',
      'category', 'E-commerce',
      'price', 159.90,
      'originalPrice', 199.90,
      'difficulty', 'Intermediário',
      'pages', 6,
      'features', JSON_ARRAY('Tabela de preços', 'Integração com analytics', 'SEO'),
      'includes', JSON_ARRAY('Arquivo .wix', 'Documentação', 'Suporte 30 dias'),
      'tags', JSON_ARRAY('SaaS', 'Produto', 'Conversão'),
      'demoUrl', 'https://demo.example.com/saas-landing',
      'images', JSON_OBJECT(
        'cover', 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&fit=crop',
        'gallery', JSON_ARRAY(
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&fit=crop'
        )
      )
    )
  ),
  (
    'medical-clinic',
    'Medical Clinic - Clínica e Consultórios',
    '<h2>Medical Clinic</h2><p>Agenda, equipe e especialidades em destaque.</p>',
    JSON_OBJECT(
      'description', 'Site para clínicas com páginas de equipe, serviços e contato.',
      'category', 'Saúde & Fitness',
      'price', 139.90,
      'difficulty', 'Iniciante',
      'pages', 7,
      'features', JSON_ARRAY('Lista de especialidades', 'Perfil de médicos', 'Formulário de contato'),
      'includes', JSON_ARRAY('Arquivo .wix', 'Manual de uso', 'Suporte 30 dias'),
      'tags', JSON_ARRAY('Clínica', 'Saúde', 'Consultório'),
      'demoUrl', 'https://demo.example.com/medical-clinic',
      'images', JSON_OBJECT(
        'cover', 'https://images.unsplash.com/photo-1580281657527-47e4e82fdf87?w=1200&fit=crop',
        'gallery', JSON_ARRAY(
          'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1600&fit=crop'
        )
      )
    )
  )
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  content = VALUES(content),
  meta = VALUES(meta),
  updated_at = CURRENT_TIMESTAMP;


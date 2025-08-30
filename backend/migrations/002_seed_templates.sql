-- Seed de templates (idempotente)
-- Executar no banco configurado em backend/db.js

INSERT INTO templates (slug, title, content, meta)
VALUES
  (
    'business-pro-template',
    'Business Pro - Template Corporativo',
    '<h2>Business Pro</h2><p>Template corporativo moderno e responsivo.</p>',
    JSON_OBJECT(
      'description', 'Template profissional perfeito para presença online impactante.',
      'category', 'Negócios',
      'price', 149.90,
      'originalPrice', 199.90,
      'difficulty', 'Intermediário',
      'pages', 8,
      'features', JSON_ARRAY('Design moderno', 'Responsivo', 'SEO otimizado', 'Blog integrado'),
      'includes', JSON_ARRAY('Arquivo .wix', 'Documentação', 'Suporte 30 dias'),
      'tags', JSON_ARRAY('Corporativo', 'Moderno'),
      'demoUrl', 'https://demo.example.com/business-pro',
      'images', JSON_OBJECT(
        'cover', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&fit=crop',
        'gallery', JSON_ARRAY(
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&fit=crop',
          'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&fit=crop'
        )
      )
    )
  ),
  (
    'restaurant-deluxe',
    'Restaurant Deluxe - Template para Restaurantes',
    '<h2>Restaurant Deluxe</h2><p>Ideal para restaurantes e cafés.</p>',
    JSON_OBJECT(
      'description', 'Template elegante para restaurantes com menu e reservas.',
      'category', 'Alimentação',
      'price', 129.90,
      'difficulty', 'Iniciante',
      'pages', 6,
      'features', JSON_ARRAY('Menu interativo', 'Sistema de reservas', 'Galeria de pratos'),
      'includes', JSON_ARRAY('Arquivo .wix', 'Documentação', 'Suporte 30 dias'),
      'tags', JSON_ARRAY('Restaurante', 'Gastronomia'),
      'demoUrl', 'https://demo.example.com/restaurant-deluxe',
      'images', JSON_OBJECT(
        'cover', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&fit=crop',
        'gallery', JSON_ARRAY(
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600&fit=crop'
        )
      )
    )
  ),
  (
    'portfolio-creative',
    'Portfolio Creative - Template para Criativos',
    '<h2>Portfolio Creative</h2><p>Perfeito para artistas e designers.</p>',
    JSON_OBJECT(
      'description', 'Template minimalista para portfólio criativo.',
      'category', 'Portfolio',
      'price', 99.90,
      'originalPrice', 129.90,
      'difficulty', 'Iniciante',
      'pages', 5,
      'features', JSON_ARRAY('Galeria de projetos', 'Bio personalizada', 'Blog pessoal'),
      'includes', JSON_ARRAY('Arquivo .wix', 'Documentação', 'Suporte 30 dias'),
      'tags', JSON_ARRAY('Portfolio', 'Criativo'),
      'demoUrl', 'https://demo.example.com/portfolio-creative',
      'images', JSON_OBJECT(
        'cover', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&fit=crop',
        'gallery', JSON_ARRAY(
          'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1600&fit=crop'
        )
      )
    )
  ),
  (
    'ecommerce-fashion',
    'E-commerce Fashion - Loja Virtual de Moda',
    '<h2>E-commerce Fashion</h2><p>Completo para vender online.</p>',
    JSON_OBJECT(
      'description', 'Loja virtual moderna e otimizada para conversão.',
      'category', 'E-commerce',
      'price', 199.90,
      'originalPrice', 249.90,
      'difficulty', 'Avançado',
      'pages', 12,
      'features', JSON_ARRAY('Catálogo', 'Carrinho', 'Checkout integrado'),
      'includes', JSON_ARRAY('Arquivo .wix', 'Documentação', 'Suporte 60 dias'),
      'tags', JSON_ARRAY('E-commerce', 'Moda'),
      'demoUrl', 'https://demo.example.com/ecommerce-fashion',
      'images', JSON_OBJECT(
        'cover', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&fit=crop',
        'gallery', JSON_ARRAY(
          'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&fit=crop'
        )
      )
    )
  ),
  (
    'fitness-gym-template',
    'Fitness Gym - Template para Academias',
    '<h2>Fitness Gym</h2><p>Energia e performance para academias.</p>',
    JSON_OBJECT(
      'description', 'Template para academias e personal trainers.',
      'category', 'Saúde & Fitness',
      'price', 139.90,
      'difficulty', 'Intermediário',
      'pages', 7,
      'features', JSON_ARRAY('Agenda de aulas', 'Perfis de instrutores', 'Depoimentos'),
      'includes', JSON_ARRAY('Arquivo .wix', 'Manual de uso', 'Suporte 30 dias'),
      'tags', JSON_ARRAY('Fitness', 'Academia'),
      'demoUrl', 'https://demo.example.com/fitness-gym',
      'images', JSON_OBJECT(
        'cover', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&fit=crop',
        'gallery', JSON_ARRAY(
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&fit=crop'
        )
      )
    )
  ),
  (
    'wedding-planner',
    'Wedding Planner - Template para Casamentos',
    '<h2>Wedding Planner</h2><p>Elegância para eventos especiais.</p>',
    JSON_OBJECT(
      'description', 'Template romântico para wedding planners e fotógrafos.',
      'category', 'Eventos',
      'price', 119.90,
      'difficulty', 'Iniciante',
      'pages', 6,
      'features', JSON_ARRAY('Galeria', 'Formulário de orçamento', 'Timeline de eventos'),
      'includes', JSON_ARRAY('Arquivo .wix', 'Guia de personalização', 'Suporte 30 dias'),
      'tags', JSON_ARRAY('Casamento', 'Eventos'),
      'demoUrl', 'https://demo.example.com/wedding-planner',
      'images', JSON_OBJECT(
        'cover', 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&fit=crop',
        'gallery', JSON_ARRAY(
          'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&fit=crop'
        )
      )
    )
  )
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  content = VALUES(content),
  meta = VALUES(meta),
  updated_at = CURRENT_TIMESTAMP;


export interface Template {
  slug: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  images: {
    cover: string;
    gallery: string[];
  };
  demoUrl: string;
  tags: string[];
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  pages: number;
  responsive: boolean;
  seoOptimized: boolean;
  includes: string[];
}

export const templates: Template[] = [
  {
    slug: "business-pro-template",
    title: "Business Pro - Template Corporativo",
    category: "Negócios",
    price: 149.90,
    originalPrice: 199.90,
    description: "Template profissional perfeito para empresas que desejam uma presença online impactante. Design moderno e responsivo com todas as páginas essenciais para um site corporativo completo.",
    features: [
      "Design moderno e profissional",
      "Totalmente responsivo",
      "SEO otimizado",
      "Animações suaves",
      "Formulários de contato",
      "Seção de depoimentos",
      "Blog integrado",
      "Galeria de projetos"
    ],
    images: {
      cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop"
      ]
    },
    demoUrl: "https://demo.example.com/business-pro",
    tags: ["Corporativo", "Negócios", "Profissional", "Moderno"],
    difficulty: "Intermediário",
    pages: 8,
    responsive: true,
    seoOptimized: true,
    includes: [
      "Arquivo .wix exportável",
      "Documentação completa",
      "Suporte por 30 dias",
      "Tutoriais em vídeo",
      "Imagens premium incluídas"
    ]
  },
  {
    slug: "restaurant-deluxe",
    title: "Restaurant Deluxe - Template para Restaurantes",
    category: "Alimentação",
    price: 129.90,
    description: "Template elegante especialmente desenvolvido para restaurantes, cafés e estabelecimentos gastronômicos. Com design atrativo e funcionalidades específicas para o setor alimentício.",
    features: [
      "Menu interativo",
      "Sistema de reservas",
      "Galeria de pratos",
      "Informações de localização",
      "Integração com redes sociais",
      "Design responsivo",
      "Cores gastronômicas"
    ],
    images: {
      cover: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=800&fit=crop"
      ]
    },
    demoUrl: "https://demo.example.com/restaurant-deluxe",
    tags: ["Restaurante", "Gastronomia", "Elegante", "Reservas"],
    difficulty: "Iniciante",
    pages: 6,
    responsive: true,
    seoOptimized: true,
    includes: [
      "Arquivo .wix exportável",
      "Documentação completa",
      "Suporte por 30 dias",
      "Menu personalizável",
      "Ícones gastronômicos"
    ]
  },
  {
    slug: "portfolio-creative",
    title: "Portfolio Creative - Template para Criativos",
    category: "Portfolio",
    price: 99.90,
    originalPrice: 129.90,
    description: "Template minimalista e elegante perfeito para artistas, designers, fotógrafos e profissionais criativos que desejam showcasar seus trabalhos de forma impactante.",
    features: [
      "Layout minimalista",
      "Galeria de projetos",
      "Animações criativas",
      "Bio personalizada",
      "Formulário de contato",
      "Blog pessoal",
      "Integração social"
    ],
    images: {
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&h=800&fit=crop"
      ]
    },
    demoUrl: "https://demo.example.com/portfolio-creative",
    tags: ["Portfolio", "Criativo", "Minimalista", "Arte"],
    difficulty: "Iniciante",
    pages: 5,
    responsive: true,
    seoOptimized: true,
    includes: [
      "Arquivo .wix exportável",
      "Guia de personalização",
      "Suporte por 15 dias",
      "Ícones criativos",
      "Fontes premium"
    ]
  },
  {
    slug: "ecommerce-fashion",
    title: "E-commerce Fashion - Loja Virtual de Moda",
    category: "E-commerce",
    price: 199.90,
    originalPrice: 249.90,
    description: "Template completo para loja virtual de moda com todas as funcionalidades necessárias para vender online. Design moderno e otimizado para conversões.",
    features: [
      "Catálogo de produtos",
      "Carrinho de compras",
      "Checkout integrado",
      "Filtros avançados",
      "Wishlist",
      "Reviews de produtos",
      "Sistema de promoções",
      "Dashboard administrativo"
    ],
    images: {
      cover: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop"
      ]
    },
    demoUrl: "https://demo.example.com/ecommerce-fashion",
    tags: ["E-commerce", "Moda", "Loja Virtual", "Vendas"],
    difficulty: "Avançado",
    pages: 12,
    responsive: true,
    seoOptimized: true,
    includes: [
      "Arquivo .wix exportável",
      "Documentação completa",
      "Suporte por 60 dias",
      "Configuração de pagamentos",
      "Integração com logistics",
      "Templates de email"
    ]
  },
  {
    slug: "fitness-gym-template",
    title: "Fitness Gym - Template para Academias",
    category: "Saúde & Fitness",
    price: 139.90,
    description: "Template energético e motivacional para academias, personal trainers e estúdios de fitness. Design que inspira ação e movimento.",
    features: [
      "Agenda de aulas",
      "Perfis de instrutores",
      "Planos de membership",
      "Calculadora de IMC",
      "Blog de fitness",
      "Depoimentos",
      "Galeria de resultados"
    ],
    images: {
      cover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1200&h=800&fit=crop"
      ]
    },
    demoUrl: "https://demo.example.com/fitness-gym",
    tags: ["Fitness", "Academia", "Saúde", "Esporte"],
    difficulty: "Intermediário",
    pages: 7,
    responsive: true,
    seoOptimized: true,
    includes: [
      "Arquivo .wix exportável",
      "Manual de uso",
      "Suporte por 30 dias",
      "Imagens de fitness",
      "Ícones esportivos"
    ]
  },
  {
    slug: "wedding-planner",
    title: "Wedding Planner - Template para Casamentos",
    category: "Eventos",
    price: 119.90,
    description: "Template romântico e elegante para wedding planners, fotógrafos de casamento e organizadores de eventos. Design que captura a magia dos momentos especiais.",
    features: [
      "Galeria de casamentos",
      "Pacotes de serviços",
      "Formulário de orçamento",
      "Timeline de eventos",
      "Depoimentos de noivos",
      "Blog de inspirações",
      "Contato direto"
    ],
    images: {
      cover: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop"
      ]
    },
    demoUrl: "https://demo.example.com/wedding-planner",
    tags: ["Casamento", "Eventos", "Romântico", "Elegante"],
    difficulty: "Iniciante",
    pages: 6,
    responsive: true,
    seoOptimized: true,
    includes: [
      "Arquivo .wix exportável",
      "Guia de personalização",
      "Suporte por 30 dias",
      "Imagens românticas",
      "Ícones de casamento"
    ]
  }
];

export const categories = [
  "Todos",
  "Negócios",
  "Alimentação", 
  "Portfolio",
  "E-commerce",
  "Saúde & Fitness",
  "Eventos"
];
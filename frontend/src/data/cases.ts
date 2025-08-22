export interface Case {
  slug: string;
  title: string;
  client: string;
  date: string;
  coverImage: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: string;
  gallery: string[];
  tags: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const cases: Case[] = [
  {
    slug: "ecommerce-techstyle-300-conversoes",
    title: "TechStyle: Aumento de 300% nas Conversões",
    client: "TechStyle E-commerce",
    date: "2024-03-10",
    coverImage: "photo-1460925895917-afdab827c52f",
    excerpt: "Transformamos uma loja online em uma máquina de vendas com UX otimizado e estratégias de conversão avançadas.",
    challenge: "O cliente tinha um e-commerce com baixa taxa de conversão (1.2%), navegação confusa e abandono de carrinho alto (78%). O site não era responsivo e tinha problemas de performance.",
    solution: "Implementamos um redesign completo focado em UX/UI, otimização de performance, checkout simplificado, implementação de prova social, testes A/B contínuos e estratégias de recuperação de carrinho abandonado.",
    results: "Aumento de 300% na taxa de conversão, redução de 45% no abandono de carrinho, melhoria de 250% na velocidade de carregamento e aumento de 180% no ticket médio.",
    gallery: [
      "photo-1556742049-0cfed4f6a45d",
      "photo-1563013544-824ae1b704d3",
      "photo-1460925895917-afdab827c52f"
    ],
    tags: ["E-commerce", "UI/UX", "Performance", "Conversão"],
    metrics: [
      {
        label: "Taxa de Conversão",
        value: "+300%",
        description: "De 1.2% para 4.8%"
      },
      {
        label: "Abandono de Carrinho",
        value: "-45%",
        description: "De 78% para 43%"
      },
      {
        label: "Velocidade",
        value: "+250%",
        description: "De 8s para 2.3s"
      },
      {
        label: "Ticket Médio",
        value: "+180%",
        description: "De R$ 85 para R$ 238"
      }
    ]
  },
  {
    slug: "rebranding-global-corp-150-reconhecimento",
    title: "Global Corp: Rebranding que Gerou 150% Mais Reconhecimento",
    client: "Global Corp Technology",
    date: "2024-01-22",
    coverImage: "photo-1611224923853-80b023f02d71",
    excerpt: "Renovamos completamente a identidade visual de uma multinacional, criando uma marca moderna e memorável.",
    challenge: "A Global Corp tinha uma identidade visual desatualizada que não refletia sua posição de liderança no mercado. A marca era inconsistente em diferentes pontos de contato e tinha baixo reconhecimento (12%) entre o público-alvo.",
    solution: "Desenvolvemos uma nova identidade visual completa incluindo logo, paleta de cores, tipografia, sistema de ícones, templates para materiais de marketing, guidelines de marca e implementação em todos os pontos de contato digitais e físicos.",
    results: "Aumento de 150% no reconhecimento da marca, melhoria de 85% na percepção de modernidade, crescimento de 120% no engajamento em redes sociais e aumento de 95% na geração de leads qualificados.",
    gallery: [
      "photo-1611224923853-80b023f02d71",
      "photo-1542744173-8e7e53415bb0",
      "photo-1551434678-e076c223a692"
    ],
    tags: ["Branding", "Design", "Estratégia", "Identidade Visual"],
    metrics: [
      {
        label: "Reconhecimento",
        value: "+150%",
        description: "De 12% para 30%"
      },
      {
        label: "Percepção de Modernidade",
        value: "+85%",
        description: "Pesquisa brand awareness"
      },
      {
        label: "Engajamento Social",
        value: "+120%",
        description: "Média todas as plataformas"
      },
      {
        label: "Leads Qualificados",
        value: "+95%",
        description: "Atribuição direta à nova marca"
      }
    ]
  },
  {
    slug: "seo-healthcare-500-trafego-organico",
    title: "HealthCare Plus: 500% Mais Tráfego Orgânico",
    client: "HealthCare Plus Clinic",
    date: "2024-02-15",
    coverImage: "photo-1576091160399-112ba8d25d1f",
    excerpt: "Posicionamos uma clínica médica no topo do Google com estratégia de SEO completa e marketing de conteúdo.",
    challenge: "A clínica tinha visibilidade online praticamente zero, com apenas 200 visitantes orgânicos por mês. Não aparecia nas primeiras páginas para nenhuma palavra-chave relevante do setor médico.",
    solution: "Implementamos estratégia completa de SEO técnico, otimização on-page, criação de conteúdo especializado, link building ético, otimização para SEO local e implementação de schema markup médico.",
    results: "Aumento de 500% no tráfego orgânico, 50+ palavras-chave na primeira página, crescimento de 400% em agendamentos online e posição #1 para termos principais da especialidade.",
    gallery: [
      "photo-1576091160399-112ba8d25d1f",
      "photo-1559757148-5c350d0d3c56",
      "photo-1504813184591-01572f98c85f"
    ],
    tags: ["SEO", "Conteúdo", "Healthcare", "Local SEO"],
    metrics: [
      {
        label: "Tráfego Orgânico",
        value: "+500%",
        description: "De 200 para 1.200 visitantes/mês"
      },
      {
        label: "Keywords Top 10",
        value: "50+",
        description: "Palavras-chave na primeira página"
      },
      {
        label: "Agendamentos",
        value: "+400%",
        description: "Via formulário online"
      },
      {
        label: "Posições #1",
        value: "15",
        description: "Termos principais da especialidade"
      }
    ]
  },
  {
    slug: "startup-edtech-roi-8-1",
    title: "EduTech Startup: ROI de 8:1 em Tráfego Pago",
    client: "EduTech Learning Platform",
    date: "2024-01-08",
    coverImage: "photo-1551434678-e076c223a692",
    excerpt: "Geramos um ROI excepcional para startup de educação com campanhas otimizadas de Google Ads e Facebook Ads.",
    challenge: "Startup de educação online com orçamento limitado para marketing, CPA alto (R$ 180) e ROI negativo (-1.5:1). As campanhas não estavam segmentadas adequadamente e o funil de conversão tinha vazamentos.",
    solution: "Reestruturação completa das campanhas, segmentação avançada por persona, otimização do funil de conversão, implementação de remarketing inteligente, testes A/B de criativos e landing pages otimizadas.",
    results: "ROI de 8:1, redução de 70% no CPA, aumento de 350% na taxa de conversão e crescimento de 180% no número de alunos pagantes.",
    gallery: [
      "photo-1551434678-e076c223a692",
      "photo-1522202176988-66273c2fd55f",
      "photo-1434030216411-0b793f4b4173"
    ],
    tags: ["Google Ads", "Facebook Ads", "EdTech", "ROI"],
    metrics: [
      {
        label: "ROI",
        value: "8:1",
        description: "De -1.5:1 para 8:1"
      },
      {
        label: "CPA",
        value: "-70%",
        description: "De R$ 180 para R$ 54"
      },
      {
        label: "Taxa de Conversão",
        value: "+350%",
        description: "De 0.8% para 3.6%"
      },
      {
        label: "Alunos Pagantes",
        value: "+180%",
        description: "Crescimento mensal"
      }
    ]
  }
];

export const getCase = (slug: string): Case | undefined => {
  return cases.find(caseItem => caseItem.slug === slug);
};

export const getRelatedCases = (currentSlug: string, limit: number = 3): Case[] => {
  return cases
    .filter(caseItem => caseItem.slug !== currentSlug)
    .slice(0, limit);
};
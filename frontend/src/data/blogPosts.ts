export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  author: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-tendencias-marketing-digital-2024",
    title: "5 Tendências de Marketing Digital para 2024",
    category: "Marketing Digital",
    readingTime: "8 min",
    author: "Equipe Winove",
    date: "2023-12-15",
    coverImage: "photo-1460925895917-afdab827c52f",
    excerpt: "Descubra as principais estratégias que definirão o marketing digital no próximo ano e como aplicá-las no seu negócio.",
    content: `
      <h2>O marketing digital está em constante evolução</h2>
      <p>Com a chegada de 2024, novas tendências emergem e prometem revolucionar a forma como as empresas se conectam com seus clientes. Neste artigo, exploramos as cinco principais tendências que definirão o cenário do marketing digital no próximo ano.</p>
      
      <h3>1. Inteligência Artificial Generativa</h3>
      <p>A IA generativa está transformando a criação de conteúdo, permitindo personalização em escala nunca vista antes. Empresas que adotarem essas tecnologias terão vantagem competitiva significativa.</p>
      
      <h3>2. Marketing de Voz e Pesquisa por Voz</h3>
      <p>Com o crescimento dos assistentes virtuais, otimizar para pesquisa por voz se torna essencial. O conteúdo conversacional e as palavras-chave de cauda longa ganham ainda mais importância.</p>
      
      <h3>3. Realidade Aumentada no E-commerce</h3>
      <p>A AR está revolucionando a experiência de compra online, permitindo que os consumidores "experimentem" produtos virtualmente antes da compra.</p>
      
      <h3>4. Sustentabilidade e Marketing Verde</h3>
      <p>Consumidores conscientes valorizam marcas sustentáveis. O marketing verde não é apenas uma tendência, mas uma necessidade para o futuro.</p>
      
      <h3>5. Privacidade e Marketing First-Party Data</h3>
      <p>Com o fim dos cookies de terceiros, o foco em dados próprios e estratégias de consentimento transparente se torna fundamental.</p>
      
      <h2>Conclusão</h2>
      <p>Estar à frente dessas tendências é crucial para o sucesso em 2024. Na Winove, ajudamos empresas a implementar essas estratégias de forma eficaz e mensurável.</p>
    `
  },
  {
    slug: "seo-tecnico-transformar-resultados",
    title: "Como o SEO Técnico Pode Transformar Seus Resultados",
    category: "SEO",
    readingTime: "6 min",
    author: "Ana Silva",
    date: "2023-12-12",
    coverImage: "photo-1432888622747-4eb9a8efeb07",
    excerpt: "Aprenda as técnicas avançadas de SEO que podem aumentar significativamente sua visibilidade nos mecanismos de busca.",
    content: `
      <h2>SEO Técnico: A Base de uma Estratégia Sólida</h2>
      <p>Enquanto muitos focam apenas em conteúdo e links, o SEO técnico é a fundação que sustenta toda estratégia de otimização. Vamos explorar como aspectos técnicos podem transformar seus resultados.</p>
      
      <h3>Core Web Vitals: O Novo Padrão</h3>
      <p>O Google prioriza sites que oferecem excelente experiência do usuário. Os Core Web Vitals medem:</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> Velocidade de carregamento</li>
        <li><strong>FID (First Input Delay):</strong> Interatividade</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Estabilidade visual</li>
      </ul>
      
      <h3>Estrutura de URLs e Arquitetura do Site</h3>
      <p>Uma arquitetura bem planejada facilita tanto para usuários quanto para crawlers:</p>
      <ul>
        <li>URLs descritivas e amigáveis</li>
        <li>Hierarquia lógica de páginas</li>
        <li>Navegação intuitiva</li>
      </ul>
      
      <h3>Schema Markup: Dados Estruturados</h3>
      <p>Implementar schema markup ajuda os mecanismos de busca a entender melhor seu conteúdo, resultando em rich snippets e maior CTR.</p>
      
      <h3>Mobile-First e Responsividade</h3>
      <p>Com a indexação mobile-first do Google, garantir que seu site seja totalmente responsivo não é opcional - é essencial.</p>
      
      <h2>Ferramentas Essenciais</h2>
      <p>Para monitorar e melhorar seu SEO técnico, recomendamos:</p>
      <ul>
        <li>Google Search Console</li>
        <li>Google PageSpeed Insights</li>
        <li>Screaming Frog</li>
        <li>GTmetrix</li>
      </ul>
      
      <h2>Resultados Comprovados</h2>
      <p>Implementando essas técnicas, nossos clientes viram aumentos médios de 150% no tráfego orgânico em 6 meses.</p>
    `
  },
  {
    slug: "design-system-marcas-consistentes",
    title: "Design System: O Segredo de Marcas Consistentes",
    category: "Design",
    readingTime: "10 min",
    author: "Carlos Designer",
    date: "2023-12-10",
    coverImage: "photo-1581291518857-4e27b48ff24e",
    excerpt: "Entenda como um design system bem estruturado pode revolucionar a identidade visual da sua marca e melhorar a experiência do usuário.",
    content: `
      <h2>O que é um Design System?</h2>
      <p>Um design system é uma coleção de componentes reutilizáveis, guiados por padrões claros, que podem ser combinados para construir qualquer número de aplicações.</p>
      
      <h3>Benefícios de um Design System</h3>
      <ul>
        <li><strong>Consistência:</strong> Experiência uniforme em todos os pontos de contato</li>
        <li><strong>Eficiência:</strong> Desenvolvimento mais rápido e econômico</li>
        <li><strong>Escalabilidade:</strong> Fácil expansão e manutenção</li>
        <li><strong>Colaboração:</strong> Melhor comunicação entre equipes</li>
      </ul>
      
      <h3>Componentes Essenciais</h3>
      <p>Um design system completo deve incluir:</p>
      
      <h4>1. Tokens de Design</h4>
      <ul>
        <li>Paleta de cores</li>
        <li>Tipografia</li>
        <li>Espaçamentos</li>
        <li>Sombras e elevações</li>
      </ul>
      
      <h4>2. Componentes de Interface</h4>
      <ul>
        <li>Botões e formulários</li>
        <li>Cards e modais</li>
        <li>Navegação</li>
        <li>Feedback e estados</li>
      </ul>
      
      <h4>3. Padrões de Interação</h4>
      <ul>
        <li>Microinterações</li>
        <li>Animações</li>
        <li>Transições</li>
        <li>Estados de hover/focus</li>
      </ul>
      
      <h3>Implementação Prática</h3>
      <p>Para implementar um design system eficaz:</p>
      <ol>
        <li><strong>Auditoria:</strong> Analise componentes existentes</li>
        <li><strong>Padronização:</strong> Defina regras e guidelines</li>
        <li><strong>Documentação:</strong> Crie uma biblioteca viva</li>
        <li><strong>Adoção:</strong> Treine equipes e monitore uso</li>
      </ol>
      
      <h3>Casos de Sucesso</h3>
      <p>Empresas como Airbnb, Uber e Shopify transformaram suas operações com design systems robustos, reduzindo tempo de desenvolvimento em até 60%.</p>
      
      <h2>O Futuro dos Design Systems</h2>
      <p>Com ferramentas como Figma Variables e Design Tokens, o futuro promete ainda mais automação e sincronização entre design e desenvolvimento.</p>
    `
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, category: string, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
};
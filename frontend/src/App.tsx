import { ReactNode, useId } from "react";
import "./App.css";
import heroImg from "./assets/palestra.png";
import portraitImg from "./assets/foto-perfil.png";
import ritaMicrofoneImg from "./assets/rita-microfone.png";
import seloImg from "./assets/selo-sap-speakers.png";
import depoimentoImg from "./assets/depoimentos.jpg";

const magicPillars = [
  {
    title: "Conteúdo autoral",
    description:
      "Histórias reais, dados e pesquisas que traduzem tendências em provocações práticas para o seu público.",
  },
  {
    title: "Experiência imersiva",
    description:
      "Trago recursos multimídia, participação da plateia e dinâmicas que mantêm a energia do início ao fim.",
  },
  {
    title: "Plano de continuidade",
    description:
      "Cada encontro termina com materiais de apoio e caminhos de ação para que o impacto se mantenha vivo.",
  },
];

const impactStats = [
  {
    value: "12+",
    label: "anos guiando jornadas de transformação",
  },
  {
    value: "280+",
    label: "projetos cocriados com marcas e líderes",
  },
  {
    value: "98%",
    label: "dos clientes solicitam novas entregas",
  },
];

const signatureHighlights = [
  {
    heading: "Liderança no singular",
    copy:
      "Cada palestra nasce a partir da escuta das pessoas envolvidas. O resultado é uma experiência que acolhe diferentes trajetórias e desperta decisões alinhadas com propósito.",
  },
  {
    heading: "Comunicação que aproxima",
    copy:
      "Com linguagem acessível e sensível, conecto equipes, clientes e parceiros em torno de objetivos comuns, fortalecendo o sentimento de comunidade.",
  },
  {
    heading: "Resultados que permanecem",
    copy:
      "Mais do que inspiração momentânea, cocriamos compromissos reais. Os eventos ganham follow-ups, guias e rituais para sustentar a transformação.",
  },
];

const experienceOfferings = [
  {
    tag: "Palestra",
    title: "Ao vivo, com plateia engajada",
    description:
      "Histórias, dados e dinâmicas que conectam pessoas e criam um ambiente seguro para conversas profundas e decisões corajosas.",
    highlights: [
      "Formatos de 30 a 90 minutos",
      "Conteúdo cocriado com o cliente",
      "Ritual de abertura para energizar a plateia",
    ],
  },
  {
    tag: "Experiência imersiva",
    title: "A Receita do Legado",
    description:
      "Workshops e trilhas de aprendizagem que integram cultura, estratégia e protagonismo coletivo para gerar mudanças tangíveis.",
    highlights: [
      "Materiais complementares personalizados",
      "Mapeamento de personas e expectativas",
      "Dinâmicas colaborativas para consolidar decisões",
    ],
  },
  {
    tag: "Mentoria",
    title: "Qual é a mágica?",
    description:
      "Programas contínuos para lideranças e equipes que desejam fortalecer repertório, comunicação e presença em cena.",
    highlights: [
      "Encontros online ou presenciais",
      "Planos de ação acompanhados",
      "Feedbacks personalizados por sessão",
    ],
  },
];

const liveMoments = [
  {
    title: "Plateia em ressonância",
    description:
      "Conexão genuína que dá espaço para escuta, participação ativa e construção coletiva de novos caminhos.",
  },
  {
    title: "Conteúdo que mobiliza",
    description:
      "Slides criativos, trilhas sonoras e recursos narrativos que traduzem temas complexos em ações práticas.",
  },
  {
    title: "Compromissos em cena",
    description:
      "Cada encontro termina com pactos reais, registrados e compartilhados para manter o movimento vivo depois do evento.",
  },
];

const testimonials = [
  {
    quote:
      "A presença da Rita elevou todo o evento. Ela traduziu nossos desafios em histórias potentes e entregou um conteúdo que fez o time sair com brilho nos olhos.",
    author: "Luciana Costa",
    role: "Diretora de Pessoas na Vibra Energia",
  },
  {
    quote:
      "Ela conseguiu unir emoção, dados e provocações práticas. O público permaneceu conectado e seguimos utilizando os materiais pós-evento no nosso dia a dia.",
    author: "Diego Martins",
    role: "Head de Comunicação no Senac MG",
  },
  {
    quote:
      "Construímos um encontro sob medida para o nosso momento. Foi emocionante ver o time inteiro assumindo compromissos reais com o que criamos juntos.",
    author: "Patrícia Macedo",
    role: "Head de Cultura na Solinftec",
  },
];

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

const Button = ({ href, children, variant = "primary" }: ButtonProps) => (
  <a className={`button button--${variant}`} href={href}>
    <span>{children}</span>
  </a>
);

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  alignment?: "left" | "center";
};

const SectionHeader = ({ eyebrow, title, description, alignment = "left" }: SectionHeaderProps) => (
  <header className={`section-header section-header--${alignment}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {description && (typeof description === "string" ? <p>{description}</p> : description)}
  </header>
);

type StatCardProps = {
  value: string;
  label: string;
};

const StatCard = ({ value, label }: StatCardProps) => (
  <li className="stat-card">
    <strong>{value}</strong>
    <span>{label}</span>
  </li>
);

type PillarItemProps = {
  index: number;
  title: string;
  description: string;
};

const PillarItem = ({ index, title, description }: PillarItemProps) => (
  <li className="pillar-card">
    <span className="pillar-card__index">{String(index + 1).padStart(2, "0")}</span>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </li>
);

type OfferingCardProps = (typeof experienceOfferings)[number];

const OfferingCard = ({ tag, title, description, highlights }: OfferingCardProps) => (
  <article className="offering-card">
    <header>
      <span className="tag">{tag}</span>
      <h3>{title}</h3>
    </header>
    <p>{description}</p>
    <ul className="offering-card__list">
      {highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
    <Button href="#contato" variant="ghost">
      Falar sobre este formato
    </Button>
  </article>
);

type HighlightCardProps = (typeof signatureHighlights)[number];

const HighlightCard = ({ heading, copy }: HighlightCardProps) => (
  <article className="highlight-card">
    <h3>{heading}</h3>
    <p>{copy}</p>
  </article>
);

type LiveCardProps = (typeof liveMoments)[number];

const LiveCard = ({ title, description }: LiveCardProps) => (
  <article className="live-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

type TestimonialCardProps = (typeof testimonials)[number];

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => (
  <figure className="testimonial-card" role="listitem">
    <blockquote>
      <p>{quote}</p>
    </blockquote>
    <figcaption>
      <strong>{author}</strong>
      <span>{role}</span>
    </figcaption>
  </figure>
);

const SectionDivider = ({ flip = false }: { flip?: boolean }) => {
  const gradientId = useId();

  return (
    <div className={`section-divider${flip ? " section-divider--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" role="presentation">
        <defs>
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#fffaf1" stopOpacity="0" />
            <stop offset="50%" stopColor="#fff2c8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fff9e3" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 72L120 60C240 48 480 24 720 36C960 48 1200 96 1320 108L1440 120V0H0Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
    </div>
  );
};

function App() {
  return (
    <div className="site">
      <header className="hero" id="top">
        <div className="hero__background" aria-hidden="true">
          <img src={heroImg} alt="" />
          <div className="hero__overlay" />
        </div>
        <div className="container">
          <div className="hero__layout grid">
            <aside className="hero__figure grid-span-4">
              <div className="hero__portrait">
                <img src={portraitImg} alt="Retrato de Rita Drumond sorrindo" />
              </div>
              <span className="hero__figure-note">Energia e conexão em cada encontro</span>
            </aside>
            <div className="hero__content grid-span-8">
              <div className="hero__badge">
                <img src={seloImg} alt="" aria-hidden="true" />
                <div>
                  <span className="eyebrow">Reconhecimento</span>
                  <strong>Top Speaker SAP 2023</strong>
                </div>
              </div>
              <p className="hero__eyebrow">Palestrante e consultora</p>
              <h1>Rita Drumond</h1>
              <p className="lead">
                Experiências que unem emoção, estratégia e ação para potencializar pessoas, marcas e comunidades. Uma jornada
                criativa que transforma conhecimento em legado.
              </p>
              <Button href="#contato">Quero a Rita no meu evento</Button>
            </div>
          </div>
        </div>
      </header>

      <SectionDivider />

      <main>
        <section className="section section--intro" id="sobre">
          <div className="container">
            <div className="grid intro__layout">
              <div className="intro__visual grid-span-5">
                <div className="intro__image">
                  <img src={ritaMicrofoneImg} alt="Rita Drumond falando ao microfone" />
                  <span className="intro__image-note">Metodologia centrada nas pessoas</span>
                </div>
                <ul className="stat-grid" aria-label="Indicadores de impacto">
                  {impactStats.map((stat) => (
                    <StatCard key={stat.label} value={stat.value} label={stat.label} />
                  ))}
                </ul>
              </div>
              <div className="intro__content grid-span-7">
                <SectionHeader
                  eyebrow="A receita do legado"
                  title="Uma experiência desenhada com e para o seu público"
                  description={
                    <>
                      <p>
                        O segredo está na combinação entre repertório criativo, curadoria afetiva e direcionamento estratégico. Cada
                        apresentação é cocriada para acolher diferentes trajetórias e direcionar energia para os objetivos que você deseja
                        alcançar.
                      </p>
                      <p>
                        A jornada começa antes do palco, atravessa a entrega ao vivo e segue com materiais e rituais que sustentam o impacto.
                        Assim, o evento se transforma em movimento contínuo.
                      </p>
                    </>
                  }
                />
                <ol className="pillar-grid" aria-label="Etapas da jornada">
                  {magicPillars.map((pillar, index) => (
                    <PillarItem key={pillar.title} index={index} title={pillar.title} description={pillar.description} />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider flip />

        <section className="section section--offerings" id="conteudo">
          <div className="container">
            <SectionHeader
              eyebrow="Conteúdo em movimento"
              title="Formatos que potencializam o seu evento"
              description="Do grande palco aos encontros estratégicos, cocriamos experiências que combinam emoção, método e repertório. Cada entrega é desenhada para gerar pertencimento imediato e resultados sustentáveis."
              alignment="center"
            />
            <div className="grid offerings__grid">
              {experienceOfferings.map((offering) => (
                <OfferingCard key={offering.title} {...offering} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="section section--signature" id="servicos">
          <div className="container">
            <SectionHeader
              eyebrow="Entregas autorais"
              title="Roteiros que combinam emoção e estratégia"
              description="Cada apresentação é construída com base em entrevistas, repertório original e ferramentas de facilitação que envolvem o público do começo ao fim. Assim, criamos experiências que reverberam na cultura da sua empresa."
            />
            <div className="grid signature__body">
              <div className="signature__media grid-span-5">
                <div className="media-card">
                  <img src={ritaMicrofoneImg} alt="Rita Drumond conduzindo palestra com microfone" />
                </div>
                <span className="media-card__note">Cocriação e presença em cena</span>
              </div>
              <div className="signature__grid grid-span-7">
                {signatureHighlights.map((item) => (
                  <HighlightCard key={item.heading} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="section section--journey">
          <div className="container">
            <div className="grid journey__layout">
              <div className="journey__content grid-span-6">
                <SectionHeader
                  eyebrow="Curadoria sensível"
                  title="Momentos para sentir, pensar e agir"
                  description={
                    <>
                      <p>
                        Cada jornada é desenhada para que o público se reconheça nas histórias e saia com repertório aplicável. Do briefing à
                        entrega, mapeio expectativas, rituais e linguagem para que a experiência faça sentido para cada grupo.
                      </p>
                      <ul className="list">
                        <li>Dinâmicas de participação que transformam plateias em protagonistas.</li>
                        <li>Conteúdo multimídia alinhado ao contexto e à identidade da sua marca.</li>
                        <li>Planos de continuidade que prolongam o impacto e incentivam novas ações.</li>
                      </ul>
                    </>
                  }
                />
              </div>
              <div className="journey__gallery grid-span-6">
                <figure className="gallery-card">
                  <img src={heroImg} alt="Rita Drumond em destaque no palco durante apresentação" />
                  <figcaption>Experiências que combinam emoção e estratégia</figcaption>
                </figure>
                <figure className="gallery-card gallery-card--accent">
                  <img src={portraitImg} alt="Rita Drumond sorrindo próxima ao público" />
                  <figcaption>Conexão genuína com diferentes públicos</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider flip />

        <section className="section section--live">
          <div className="container">
            <SectionHeader
              eyebrow="Ao vivo"
              title="Liderando em segurança"
              description="Momentos que mostram conexão real com a plateia, conteúdo aplicável e energia para transformar rotinas. Veja o que acontece quando cocriamos experiências sob medida."
              alignment="center"
            />
            <div className="grid live__grid">
              {liveMoments.map((moment) => (
                <LiveCard key={moment.title} {...moment} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="section section--testimonials" id="cases">
          <div className="container">
            <div className="grid testimonials__layout">
              <div className="testimonials__media grid-span-5">
                <div className="media-card media-card--accent">
                  <img src={depoimentoImg} alt="Plateia aplaudindo Rita Drumond" />
                </div>
                <span className="media-card__note">Plateias inspiradas em todo o Brasil</span>
              </div>
              <div className="testimonials__content grid-span-7">
                <SectionHeader
                  eyebrow="Depoimentos"
                  title="Experiências que deixam marcas duradouras"
                  description="Cada encontro é uma construção coletiva. Os relatos abaixo mostram como a presença da Rita transforma a energia da equipe e cria compromissos que seguem vivos após o evento."
                />
                <div className="testimonial-grid" role="list">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.author} {...testimonial} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="section section--cta" id="contato">
          <div className="container">
            <div className="cta__content">
              <SectionHeader
                eyebrow="Próximo passo"
                title="Vamos cocriar uma experiência inesquecível?"
                description="Envie uma mensagem com o contexto do seu evento, público e objetivos. Retorno com propostas de temas, formatos e desdobramentos para continuarmos a conversa."
                alignment="center"
              />
              <Button href="mailto:contato@ritadrumond.com">Escrever para a Rita</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Rita Drumond. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

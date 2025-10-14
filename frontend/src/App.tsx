import { ReactNode, useEffect, useId } from "react";
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

const emotionalFrames = [
  {
    src: portraitImg,
    alt: "Retrato acolhedor de Rita Drumond sorrindo",
    caption: "Presença que aproxima e acolhe",
    offset: "-8%",
  },
  {
    src: heroImg,
    alt: "Plateia emocionada acompanhando Rita Drumond no palco",
    caption: "Plateias mobilizadas em todo o Brasil",
    offset: "6%",
  },
  {
    src: ritaMicrofoneImg,
    alt: "Rita Drumond no palco segurando o microfone",
    caption: "Narrativas que despertam ação imediata",
    offset: "-4%",
  },
];

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

const Button = ({ href, children, variant = "primary" }: ButtonProps) => (
  <a className={`button button--${variant}`} href={href} data-reveal="fade">
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
  <header className={`section-header section-header--${alignment}`} data-reveal="fade-up">
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
  <li className="stat-card" data-reveal="zoom-in">
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
  <li className="pillar-card" data-reveal="fade-up">
    <span className="pillar-card__index">{String(index + 1).padStart(2, "0")}</span>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </li>
);

type OfferingCardProps = (typeof experienceOfferings)[number];

const OfferingCard = ({ tag, title, description, highlights }: OfferingCardProps) => (
  <article className="offering-card" data-reveal="float-up">
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
  <article className="highlight-card" data-reveal="fade-up">
    <h3>{heading}</h3>
    <p>{copy}</p>
  </article>
);

type LiveCardProps = (typeof liveMoments)[number];

const LiveCard = ({ title, description }: LiveCardProps) => (
  <article className="live-card" data-reveal="fade-up">
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

type TestimonialCardProps = (typeof testimonials)[number];

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => (
  <figure className="testimonial-card" role="listitem" data-reveal="fade-up">
    <blockquote>
      <p>{quote}</p>
    </blockquote>
    <figcaption>
      <strong>{author}</strong>
      <span>{role}</span>
    </figcaption>
  </figure>
);

type VisualSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: ReactNode;
  orientation?: "left" | "right";
  background?: "default" | "surface" | "muted";
  image: {
    src: string;
    alt: string;
    note?: string;
    parallax?: number;
    offset?: string;
  };
  children?: ReactNode;
};

const VisualSection = ({
  id,
  eyebrow,
  title,
  description,
  orientation = "left",
  background = "default",
  image,
  children,
}: VisualSectionProps) => (
  <section className={`section visual-section visual-section--${background}`} id={id}>
    <div className="container">
      <div className={`grid visual-section__grid visual-section__grid--${orientation}`}>
        <figure
          className="visual-section__media grid-span-5"
          data-reveal="float-up"
          data-parallax={image.parallax}
        >
          <div className="visual-section__image" style={{ marginTop: image.offset }}>
            <img src={image.src} alt={image.alt} />
          </div>
          {image.note && <figcaption className="visual-section__note">{image.note}</figcaption>}
        </figure>
        <div className="visual-section__content grid-span-7" data-reveal="fade-up">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
          {children && <div className="visual-section__body">{children}</div>}
        </div>
      </div>
    </div>
  </section>
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
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    ).filter((element) => element.dataset.parallax);

    if (!parallaxElements.length) return;

    let rafId: number | null = null;

    const update = () => {
      parallaxElements.forEach((element) => {
        const speed = Number(element.dataset.parallax || "0.15");
        const rect = element.getBoundingClientRect();
        const offset = rect.top - window.innerHeight / 2;
        const translate = Math.max(-140, Math.min(140, -offset * speed));
        element.style.setProperty("--parallax-translate", `${translate}px`);
      });
      rafId = null;
    };

    const requestTick = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      if (rafId != null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="site">
      <header className="hero" id="top">
        <div className="hero__background" aria-hidden="true" data-parallax="0.08">
          <img src={heroImg} alt="Plateia vibrando durante palestra de Rita Drumond" />
          <div className="hero__overlay" />
        </div>
        <div className="container">
          <div className="hero__content">
            <div className="hero__badge" data-reveal="fade">
              <img src={seloImg} alt="" aria-hidden="true" />
              <div>
                <span className="eyebrow">Reconhecimento</span>
                <strong>Top Speaker SAP 2023</strong>
              </div>
            </div>
            <p className="hero__eyebrow" data-reveal="fade">Palestrante e consultora</p>
            <h1 data-reveal="fade-up">Rita Drumond</h1>
            <p className="lead" data-reveal="fade-up">
              Experiências que unem emoção, estratégia e ação para potencializar pessoas, marcas e comunidades. Uma jornada criativa
              que transforma conhecimento em legado.
            </p>
            <div className="hero__actions">
              <Button href="#contato">Quero a Rita no meu evento</Button>
            </div>
          </div>
        </div>
      </header>

      <SectionDivider />

      <main>
        <VisualSection
          id="sobre"
          eyebrow="A receita do legado"
          title="Uma experiência desenhada com e para o seu público"
          description={
            <>
              <p>
                O segredo está na combinação entre repertório criativo, curadoria afetiva e direcionamento estratégico. Cada apresentação é
                cocriada para acolher diferentes trajetórias e direcionar energia para os objetivos que você deseja alcançar.
              </p>
              <p>
                A jornada começa antes do palco, atravessa a entrega ao vivo e segue com materiais e rituais que sustentam o impacto. Assim, o
                evento se transforma em movimento contínuo.
              </p>
            </>
          }
          orientation="left"
          background="surface"
          image={{
            src: portraitImg,
            alt: "Retrato de Rita Drumond sorrindo",
            note: "Escuta ativa para cocriar cada momento",
            parallax: 0.18,
            offset: "-6%",
          }}
        >
          <div className="visual-section__stack">
            <ul className="stat-grid" aria-label="Indicadores de impacto">
              {impactStats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </ul>
            <ol className="pillar-grid" aria-label="Etapas da jornada">
              {magicPillars.map((pillar, index) => (
                <PillarItem key={pillar.title} index={index} title={pillar.title} description={pillar.description} />
              ))}
            </ol>
          </div>
        </VisualSection>

        <section className="section section--gallery" aria-label="Emoções em cena">
          <div className="container">
            <div className="gallery" role="list">
              {emotionalFrames.map((frame) => (
                <figure
                  key={frame.caption}
                  className="gallery__item"
                  role="listitem"
                  data-reveal="float-up"
                  data-parallax="0.12"
                  style={{ marginTop: frame.offset }}
                >
                  <div className="gallery__image">
                    <img src={frame.src} alt={frame.alt} />
                  </div>
                  <figcaption>{frame.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider flip />

        <VisualSection
          id="servicos"
          eyebrow="Em ação"
          title="Roteiros que combinam emoção e estratégia"
          description="No palco, cada elemento é pensado para mobilizar o público e transformar o conhecimento em compromissos reais."
          orientation="right"
          background="muted"
          image={{
            src: ritaMicrofoneImg,
            alt: "Rita Drumond conduzindo palestra com microfone",
            note: "Palco como espaço de transformação",
            parallax: 0.1,
            offset: "2%",
          }}
        >
          <div className="visual-section__stack visual-section__stack--grid">
            {signatureHighlights.map((item) => (
              <HighlightCard key={item.heading} {...item} />
            ))}
          </div>
        </VisualSection>

        <SectionDivider />

        <VisualSection
          id="cases"
          eyebrow="Depoimentos"
          title="Experiências que deixam marcas duradouras"
          description="Cada encontro é uma construção coletiva. Os relatos abaixo mostram como a presença da Rita transforma a energia da equipe e cria compromissos que seguem vivos após o evento."
          orientation="left"
          background="default"
          image={{
            src: depoimentoImg,
            alt: "Plateia aplaudindo Rita Drumond",
            note: "Plateias inspiradas em todo o Brasil",
            parallax: 0.16,
            offset: "-4%",
          }}
        >
          <div className="testimonial-grid" role="list">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </VisualSection>

        <SectionDivider />

        <section className="section mid-hero" aria-labelledby="mid-hero-title">
          <div className="mid-hero__background" aria-hidden="true" data-parallax="0.08">
            <img src={heroImg} alt="" />
            <div className="mid-hero__overlay" />
          </div>
          <div className="container">
            <div className="mid-hero__content" data-reveal="fade-up">
              <p className="eyebrow">Convite</p>
              <h2 id="mid-hero-title">"O palco é só o começo. A transformação acontece quando seguimos juntos."</h2>
              <Button href="#contato" variant="ghost">
                Construir a próxima experiência
              </Button>
            </div>
          </div>
        </section>

        <SectionDivider />

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

        <SectionDivider flip />

        <VisualSection
          eyebrow="Curadoria sensível"
          title="Momentos para sentir, pensar e agir"
          description={
            <>
              <p>
                Cada jornada é desenhada para que o público se reconheça nas histórias e saia com repertório aplicável. Do briefing à entrega,
                mapeio expectativas, rituais e linguagem para que a experiência faça sentido para cada grupo.
              </p>
              <ul className="list">
                <li>Dinâmicas de participação que transformam plateias em protagonistas.</li>
                <li>Conteúdo multimídia alinhado ao contexto e à identidade da sua marca.</li>
                <li>Planos de continuidade que prolongam o impacto e incentivam novas ações.</li>
              </ul>
            </>
          }
          orientation="right"
          background="default"
          image={{
            src: heroImg,
            alt: "Plateia vibrando com apresentação de Rita Drumond",
            note: "Experiências imersivas do início ao fim",
            parallax: 0.1,
            offset: "4%",
          }}
        />

        <SectionDivider />

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

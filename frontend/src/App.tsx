import { ReactNode, useEffect } from "react";
import "./App.css";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  inHero?: boolean;
};

const impactStats = [
  { value: "12+", label: "anos provocando viradas de chave" },
  { value: "280+", label: "eventos cocriados com lideranças" },
  { value: "98%", label: "dos clientes renovam o convite" },
  { value: "100%", label: "das entregas com plano pós-evento" },
];

const storyBlocks = [
  {
    id: "story-escuta",
    title: "Escuta que transforma palco em conversa",
    copy:
      "Cada roteiro nasce da escuta ativa com o time. A partir das histórias reais, traduzimos o que o público precisa sentir, entender e decidir naquele momento estratégico.",
    image: "/imgs/Rita-drumond (2).jpg",
    alt:
      "Rita Drumond sorrindo enquanto conversa com o público durante uma palestra, plateia desfocada ao fundo",
    direction: "normal" as const,
  },
  {
    id: "story-acao",
    title: "Narrativa que move para a ação",
    copy:
      "Conecto emoção e estratégia com provocações práticas. Cada encontro termina com compromissos claros e materiais que sustentam o movimento depois do evento.",
    image: "/imgs/Rita-drumond (3).jpg",
    alt:
      "Rita Drumond em cena no palco, falando para o público com tela iluminada ao fundo",
    direction: "reverse" as const,
  },
];

const galleryItems = [
  {
    src: "/imgs/rita drumond (8).png",
    alt: "Rita Drumond em recorte PNG sorrindo com os braços abertos",
    caption: "Energia que acolhe",
  },
  {
    src: "/imgs/Rita drumond.png",
    alt: "Rita Drumond no palco com microfone e plateia iluminada",
    caption: "Conexão em grandes palcos",
  },
  {
    src: "/imgs/Rita-drumond (6).jpg",
    alt: "Foto divertida de Rita Drumond com peças de LEGO coloridas",
    caption: "Dinâmicas criativas",
  },
  {
    src: "/imgs/Rita-drumond (2).jpg",
    alt: "Rita Drumond falando para o público com atenção total",
    caption: "Experiências imersivas",
  },
  {
    src: "/imgs/Rita-drumond (3).jpg",
    alt: "Rita Drumond no palco gesticulando com entusiasmo",
    caption: "Histórias que engajam",
  },
];

const formatCards = [
  {
    title: "Palestras assinatura",
    description:
      "Provocações sob medida para eventos corporativos que pedem presença marcante.",
    bullets: [
      "Coleta de briefing com lideranças",
      "Roteiro cocriado com dados e histórias",
      "Ativações de plateia ao vivo",
      "CTA pós-evento enviado em até 24h",
    ],
    thumbnail: "/imgs/rita drumond (6).png",
  },
  {
    title: "Experiências imersivas",
    description:
      "Workshops e jornadas de cocriação para alinhar cultura, estratégia e comportamento.",
    bullets: [
      "Diagnóstico rápido do contexto",
      "Dinâmicas colaborativas",
      "Ferramentas visuais exclusivas",
      "Plano de continuidade guiado",
    ],
    thumbnail: "/imgs/rita drumond (7).png",
  },
  {
    title: "Mentorias e keynotes",
    description:
      "Acompanhamento para lideranças que precisam de repertório e presença em cena.",
    bullets: [
      "Encontros online ou presenciais",
      "Planos de ação acompanhados",
      "Feedback personalizado a cada sessão",
      "Suporte assíncrono entre encontros",
    ],
    thumbnail: "/imgs/rita drumond (8).png",
  },
];

const Button = ({ href, children, variant = "primary", inHero = false }: ButtonProps) => (
  <a
    className={`button button--${variant}${inHero ? " button--hero" : ""}`}
    href={href}
  >
    {children}
  </a>
);

function App() {
  useEffect(() => {
    document.dispatchEvent(new Event("rita:hydrate"));
  }, []);

  return (
    <div className="page">
      <header className="hero layer-hero" id="inicio">
        <div
          aria-hidden="true"
          className="hero__background"
          data-parallax-layer
          data-parallax-speed="0.22"
          data-animate="fade"
        />
        <div className="hero__container container">
          <p className="eyebrow" data-animate="fade" data-animate-delay="80">
            Rita Drumond • Palestrante, facilitadora e estrategista
          </p>
          <h1 className="hero__title" data-animate="slide-up" data-animate-delay="120">
            Histórias em camadas para destravar decisões corajosas
          </h1>
          <p className="hero__claim" data-animate="slide-up" data-animate-delay="160">
            Experiências autorais que combinam emoção e estratégia para mobilizar lideranças, equipes e comunidades inteiras.
          </p>
          <div className="hero__actions" data-animate="fade" data-animate-delay="220">
            <Button href="#contato" variant="primary" inHero>
              Quero cocriar um evento
            </Button>
            <Button href="#formatos" variant="ghost" inHero>
              Ver formatos disponíveis
            </Button>
          </div>
        </div>
        {/* PNG em camadas sobre a próxima seção */}
        <img
          alt="Recorte da Rita Drumond sorrindo de braços abertos"
          className="hero__cutout rita-cutout"
          data-asset
          data-parallax-layer
          data-parallax-speed="0.12"
          height={1080}
          loading="eager"
          src="/imgs/rita drumond (7).png"
          width={1080}
        />
      </header>

      <div aria-hidden="true" className="curve-sep curve-sep--light" />

      <section aria-labelledby="intro-heading" className="section intro" id="intro">
        <div className="container intro__grid">
          <div className="intro__portrait" data-animate="slide-up">
            {/* Retrato clean para reforçar autoridade */}
            <img
              alt="Retrato clean de Rita Drumond em fundo claro"
              data-asset
              height={1344}
              loading="lazy"
              src="/imgs/Rita-drumond (5).jpg"
              width={768}
            />
          </div>
          <div className="intro__content">
            <h2 id="intro-heading" data-animate="slide-up" data-animate-delay="80">
              Presença que inspira, estratégia que entrega
            </h2>
            <p data-animate="fade" data-animate-delay="120">
              Rita Drumond combina storytelling, facilitação e design de experiências para criar encontros que deixam marcas. Cada entrega é cocriada com o cliente para garantir relevância, acolhimento e impacto tangível.
            </p>
            <div className="intro__stats" role="list">
              {impactStats.map((stat, index) => (
                <article
                  className="intro__stat-card"
                  data-animate="fade"
                  data-animate-delay={`${160 + index * 80}`}
                  key={stat.label}
                  role="listitem"
                >
                  <span className="intro__stat-value">{stat.value}</span>
                  <span className="intro__stat-label">{stat.label}</span>
                </article>
              ))}
            </div>
            <div
              className="intro__cta"
              data-animate="slide-up"
              data-animate-delay={`${160 + impactStats.length * 80}`}
            >
              <Button href="#story" variant="secondary">
                Conheça a abordagem completa
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="curve-sep curve-sep--amber" />

      <section aria-labelledby="story-heading" className="section story" id="story">
        <div className="container story__container">
          <header className="story__header" data-animate="fade">
            <p className="eyebrow">Storytelling em movimento</p>
            <h2 id="story-heading">Da emoção à estratégia em cada curva</h2>
            <p>
              Dois capítulos que desenham a jornada do público: da escuta profunda à mobilização coletiva para agir com coragem.
            </p>
          </header>
          <div className="story__blocks">
            {storyBlocks.map((block, index) => (
              <article
                className={`story__block story__block--${block.direction}`}
                data-animate={block.direction === "reverse" ? "slide-left" : "slide-right"}
                data-animate-delay={`${80 + index * 80}`}
                id={block.id}
                key={block.id}
              >
                <div className="story__text">
                  <h3>{block.title}</h3>
                  <p>{block.copy}</p>
                </div>
                <div className="story__media">
                  {/* Blocos em zig-zag para reforçar a narrativa */}
                  <img
                    alt={block.alt}
                    data-asset
                    height={block.id === "story-escuta" ? 5280 : 4480}
                    loading="lazy"
                    src={block.image}
                    width={block.id === "story-escuta" ? 2976 : 3584}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="impact-heading" className="impact" id="impacto">
        <div
          aria-hidden="true"
          className="impact__background"
          data-parallax-layer
          data-parallax-speed="0.18"
        />
        <div className="impact__content" data-animate="fade">
          <h2 id="impact-heading">“Quando a história é viva, a mudança acontece ali mesmo.”</h2>
          <Button href="#contato" variant="primary">
            Quero sentir esse impacto
          </Button>
        </div>
      </section>

      <div aria-hidden="true" className="curve-sep curve-sep--soft" />

      <section aria-labelledby="galeria-heading" className="section gallery" id="galeria">
        <div className="container">
          <header className="gallery__header" data-animate="fade">
            <p className="eyebrow">Momentos ao vivo</p>
            <h2 id="galeria-heading">Camadas da Rita em cena</h2>
            <p>
              Um recorte rápido de encontros recentes — cada imagem revela uma energia diferente para inspirar o próximo evento.
            </p>
          </header>
          <div className="gallery__grid" role="list">
            {galleryItems.map((item, index) => (
              <figure
                className="gallery__item"
                data-animate="fade"
                data-animate-delay={`${80 + index * 40}`}
                key={item.src}
                role="listitem"
              >
                {/* Galeria dinâmica sem vibe de apresentação de slides */}
                <img
                  alt={item.alt}
                  data-asset
                  height={item.src.includes(".png") ? 1080 : item.src.includes("(6)") ? 1152 : item.src.includes("(2)") ? 5280 : 4480}
                  loading="lazy"
                  src={item.src}
                  width={item.src.includes(".png") ? 1080 : item.src.includes("(6)") ? 896 : item.src.includes("(2)") ? 2976 : 3584}
                />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="curve-sep curve-sep--amber" />

      <section aria-labelledby="formatos-heading" className="section formats" id="formatos">
        <div className="container">
          <header className="formats__header" data-animate="fade">
            <p className="eyebrow">Formatos de palestra</p>
            <h2 id="formatos-heading">Escolha a experiência ideal para o seu momento</h2>
            <p>
              Cada formato é adaptado com repertório, dinâmicas e materiais que sustentam a transformação após o encontro.
            </p>
          </header>
          <div className="formats__grid">
            {formatCards.map((card, index) => (
              <article
                className="formats__card"
                data-animate="slide-up"
                data-animate-delay={`${80 + index * 80}`}
                key={card.title}
              >
                <div className="formats__thumb" aria-hidden="true">
                  <img
                    alt=""
                    data-asset
                    height={1080}
                    loading="lazy"
                    src={card.thumbnail}
                    width={1080}
                  />
                </div>
                <div className="formats__body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <ul>
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <Button href="#contato" variant="ghost">
                    Quero esse formato
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-final-heading" className="cta-final" id="contato">
        <div className="cta-final__container container">
          <div className="cta-final__content" data-animate="fade">
            <p className="eyebrow">Próximo passo</p>
            <h2 id="cta-final-heading">Vamos desenhar uma experiência inesquecível?</h2>
            <p>
              Envie sua proposta e cocriamos uma entrega com storytelling visual, participação ativa e planos de continuidade que deixam legado.
            </p>
            <Button href="mailto:contato@ritadrumond.com" variant="primary">
              Solicitar proposta agora
            </Button>
          </div>
          {/* PNG breakout saltando para fora do container */}
          <div className="cta-final__breakout" data-animate="slide-left" data-animate-delay="120">
            <img
              alt="Rita Drumond em recorte PNG inclinada, convidando para conversar"
              className="breakout"
              data-asset
              height={1080}
              loading="lazy"
              src="/imgs/rita drumond (6).png"
              width={1080}
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__content">
          <span>© {new Date().getFullYear()} Rita Drumond Estúdio</span>
          <a href="#inicio">Voltar ao topo</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

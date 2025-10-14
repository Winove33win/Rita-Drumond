import { ReactNode, useEffect } from "react";
import "./App.css";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

type PlaqueCard = {
  thumb: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  text: string;
};

type GalleryItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

const plaqueCards: PlaqueCard[] = [
  {
    thumb: "/imgs/clientes (2).png",
    width: 1080,
    height: 1080,
    alt: "Selo visual com ícones que representam estratégias de legado",
    title: "A RECEITA DO LEGADO",
    text:
      "Descubra como construir e fortalecer sua marca pessoal, inspirando, motivando e criando vínculos que transcendem o dia a dia. Vamos abordar as práticas que líderes visionários utilizam para criar culturas organizacionais onde o legado é uma força propulsora, gerando resultados que vão além do lucro.",
  },
  {
    thumb: "/imgs/clientes (3).png",
    width: 1080,
    height: 1080,
    alt: "Imagem abstrata com ilustração vibrante fazendo referência à magia da Disney",
    title: "QUAL É A MÁGICA?",
    text:
      "Nesta palestra envolvente e inspiradora, vamos desvendar os 7 segredos por trás da excelência na experiência dos clientes da Disney. Você vai descobrir como a magia vai além das atrações e personagens, transformando cada interação com o cliente em uma experiência inesquecível.",
  },
  {
    thumb: "/imgs/clientes (4).png",
    width: 1080,
    height: 1080,
    alt: "Ilustração colorida simbolizando energia e vitalidade",
    title: "REJUVELHECENDO",
    text:
      "Nesta palestra vamos abordar como abraçar a vida com atitude, inovação e vitalidade transformando a forma como você encara os desafios da conexão intergeracional nas equipes, desafiando a ideia do envelhecimento tradicional, mantendo a energia de um jovem e a sabedoria de um experiente e assim transcendendo a idade.",
  },
];

const faixaParagrafos = [
  "Essa palestra é para líderes que querem não só garantir que as regras de segurança sejam seguidas, mas também inspirar a equipe a adotar uma postura de cuidado e prevenção no dia a dia.",
  "A ideia é mostrar que a segurança começa com a liderança e que, quando o líder dá o exemplo, todo mundo segue.",
  "Vamos conversar sobre como o líder pode engajar sua equipe e ter atitudes seguras e como a comunicação clara e direta ajuda a evitar riscos.",
  "Uma boa liderança é também cuidar da segurança de todos.",
];

const institucionalSections = [
  {
    id: "sobre-colaborativo",
    image: "/imgs/Rita-drumond (3).jpg",
    width: 3584,
    height: 4480,
    alt: "Rita Drumond palestrando em palco com expressão vibrante",
    accentImages: [
      {
        src: "/imgs/Rita drumond.png",
        width: 1080,
        height: 1080,
        alt: "Retrato de Rita Drumond sorrindo para a câmera",
      },
      {
        src: "/imgs/rita drumond (6).png",
        width: 1080,
        height: 1080,
        alt: "Recorte PNG de Rita Drumond gesticulando durante apresentação",
      },
    ],
    paragraphs: [
      "Utiliza metodologias colaborativas para encontrar soluções inovadoras. Viajante incansável e leitora ávida, busca constantemente expandir seus conhecimentos e enriquecer sua visão de mundo.",
      "Com paixão por aprender e compartilhar, utiliza metodologias colaborativas para impulsionar a inovação e a resolução de problemas complexos.",
      "Com sólida experiência em coaching, acompanha líderes em suas jornadas de desenvolvimento, gerando resultados excepcionais e alinhados aos objetivos estratégicos das organizações.",
    ],
  },
  {
    id: "sobre-trajetoria",
    image: "/imgs/Rita-drumond (6).jpg",
    width: 896,
    height: 1152,
    alt: "Rita Drumond em dinâmica com peças coloridas de LEGO",
    accentImages: [
      {
        src: "/imgs/rita drumond (7).png",
        width: 1080,
        height: 1080,
        alt: "Recorte PNG de Rita Drumond animada com microfone",
      },
      {
        src: "/imgs/rita drumond (8).png",
        width: 1080,
        height: 1080,
        alt: "Recorte PNG de Rita Drumond acenando com alegria",
      },
    ],
    paragraphs: [
      "Fundadora e CEO da MatKa, orientada para transformar vidas e negócios através do desenvolvimento humano e organizacional.",
      "Administradora com MBA em Gestão de Pessoas, especialista em metodologias inovadoras como LEGO® SERIOUS PLAY® e Estratégia Disney, promove o desenvolvimento de pessoas e a construção de organizações mais engajadas e resilientes.",
      "Uma grande alegria é ser avó, experiência que permite conexão especial com as novas gerações.",
    ],
  },
];

const galleryItems: GalleryItem[] = [
  {
    src: "/imgs/Rita-drumond.jpg",
    width: 4096,
    height: 2296,
    alt: "Rita Drumond no palco interagindo com o público",
    caption: "Conexão em cada encontro",
  },
  {
    src: "/imgs/Rita-drumond (2).jpg",
    width: 2976,
    height: 5280,
    alt: "Rita Drumond em apresentação dinâmica com fundo iluminado",
    caption: "Histórias que inspiram decisões",
  },
  {
    src: "/imgs/Rita-drumond (5).jpg",
    width: 768,
    height: 1344,
    alt: "Retrato vertical de Rita Drumond em fundo neutro",
    caption: "Presença que gera confiança",
  },
  {
    src: "/imgs/Rita-drumond (7).jpg",
    width: 1024,
    height: 1024,
    alt: "Rita Drumond sorrindo em close com fundo vibrante",
    caption: "Energia que acolhe",
  },
  {
    src: "/imgs/Clientes.jpg",
    width: 1920,
    height: 1080,
    alt: "Foto de evento corporativo com plateia atenta",
    caption: "Comunidades em movimento",
  },
  {
    src: "/imgs/Depoimentos 2.jpg",
    width: 1920,
    height: 1080,
    alt: "Visão geral de auditório iluminado durante palestra",
    caption: "Resultados que ecoam",
  },
];

const faixaImagens: GalleryItem[] = [
  {
    src: "/imgs/Rita-drumond (3).jpg",
    width: 3584,
    height: 4480,
    alt: "Rita Drumond conversando com o público em auditório",
  },
  {
    src: "/imgs/Rita-drumond (2).jpg",
    width: 2976,
    height: 5280,
    alt: "Rita Drumond gesticulando durante palestra",
  },
  {
    src: "/imgs/Rita-drumond (6).jpg",
    width: 896,
    height: 1152,
    alt: "Detalhe de dinâmica com LEGO facilitada por Rita Drumond",
  },
];

const Button = ({ href, children, variant = "primary" }: ButtonProps) => (
  <a className={`button button--${variant}`} href={href}>
    {children}
  </a>
);

function App() {
  useEffect(() => {
    const layers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax-speed]")
    );
    let ticking = false;

    const updateParallax = () => {
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.parallaxSpeed ?? 0);
        const offset = window.scrollY * speed * -1;
        layer.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    const animated = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animated.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="page">
      <header className="hero" id="inicio">
        <div
          className="hero__background"
          data-parallax-speed="0.18"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(10, 10, 10, 0.65), rgba(10, 10, 10, 0.35)), url("/imgs/Rita-drumond (4).jpg"), url("/imgs/Rita-drumond.jpg")',
          }}
        />
        <div className="hero__content container">
          <div className="hero__text">
            <p className="hero__kicker" data-animate="fade" data-animate-delay="80">
              Rita Drumond
            </p>
            <h1 className="hero__title" data-animate="slide-up" data-animate-delay="120">
              Rita Drumond
            </h1>
            <p className="hero__subtitle" data-animate="slide-up" data-animate-delay="160">
              PALESTRANTE E CONSULTORA
            </p>
            <p className="hero__description" data-animate="slide-up" data-animate-delay="200">
              Inspirando empresas e pessoas a terem mais resultados com criatividade e leveza.
            </p>
            <div className="hero__actions" data-animate="fade" data-animate-delay="260">
              <Button href="#contato" variant="primary">
                Solicitar contato
              </Button>
              <Button href="#sobre" variant="ghost">
                Conheça a trajetória
              </Button>
            </div>
          </div>
          <div className="hero__card" data-animate="slide-left" data-animate-delay="200">
            <img
              src="/imgs/Rita-drumond (5).jpg"
              alt="Retrato vertical de Rita Drumond com expressão acolhedora"
              width={768}
              height={1344}
              loading="eager"
            />
          </div>
        </div>
        <div className="wave wave-bottom" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" role="img">
            <path d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
          </svg>
        </div>
      </header>

      <section className="section plaquinhas" id="plaquinhas">
        <div className="container">
          <div className="section__header" data-animate="fade">
            <h2>Palestras em destaque</h2>
            <p>Temas para provocar ação imediata em eventos, convenções e jornadas corporativas.</p>
          </div>
          <div className="plaquinhas__grid">
            {plaqueCards.map((card) => (
              <article className="plaquinha" key={card.title} data-animate="slide-up">
                <div className="plaquinha__media">
                  <img
                    src={card.thumb}
                    width={card.width}
                    height={card.height}
                    alt={card.alt}
                    loading="lazy"
                  />
                </div>
                <div className="plaquinha__body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="diag-mask diag-mask--amber" aria-hidden="true" />
      </section>

      <section className="section faixa-amarela" id="liderando">
        <div className="container">
          <div className="faixa-amarela__content" data-animate="fade">
            <h2>LIDERANDO EM SEGURANÇA</h2>
            <div className="faixa-amarela__copy">
              {faixaParagrafos.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="faixa-amarela__gallery">
            {faixaImagens.map((item) => (
              <figure key={item.src} data-animate="slide-up">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
        <div className="wave wave-bottom" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" role="img">
            <path d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,112C1120,128,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
          </svg>
        </div>
      </section>

      <section className="section institucional" id="sobre">
        <div className="container institucional__grid">
          {institutionalSections.map((section, index) => (
            <article
              key={section.id}
              className={`institucional__item institucional__item--${index % 2 === 0 ? "normal" : "reverse"}`}
            >
              <div className="institucional__media" data-animate={index % 2 === 0 ? "slide-right" : "slide-left"}>
                <div className="institucional__frame">
                  <img
                    src={section.image}
                    width={section.width}
                    height={section.height}
                    alt={section.alt}
                    loading="lazy"
                  />
                  <div className="institucional__accents">
                    {section.accentImages.map((accent) => (
                      <img
                        key={accent.src}
                        src={accent.src}
                        width={accent.width}
                        height={accent.height}
                        alt={accent.alt}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="institucional__content" data-animate="fade">
                <h2>Rita Drumond</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="wave wave-top" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" role="img">
            <path d="M0,0L80,10.7C160,21,320,43,480,58.7C640,75,800,85,960,74.7C1120,64,1280,32,1360,16L1440,0V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z" />
          </svg>
        </div>
      </section>

      <section className="section cta-escuro" id="cta-escuro">
        <div
          className="cta-escuro__background"
          data-parallax-speed="0.12"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(12, 12, 12, 0.78), rgba(12, 12, 12, 0.92)), url("/imgs/Rita-drumond (8).jpg")',
          }}
        />
        <div className="container cta-escuro__content" data-animate="fade">
          <div>
            <h2>Rita Drumond</h2>
            <p>
              Rejuvenesça suas ideias, abrace a diversidade de pensamentos e crie um legado que transcenda o tempo.
            </p>
            <Button href="#contato" variant="secondary">
              Solicitar contato
            </Button>
          </div>
          <div className="cta-escuro__thumb" data-animate="slide-left">
            <img
              src="/imgs/Depoimentos 2.jpg"
              alt="Auditório iluminado com destaque para o palco de Rita Drumond"
              width={1920}
              height={1080}
              loading="lazy"
            />
          </div>
        </div>
        <div className="diag-mask diag-mask--dark" aria-hidden="true" />
      </section>

      <section className="section galeria" id="galeria">
        <div className="container">
          <div className="section__header" data-animate="fade">
            <h2>Momentos que ficam na memória</h2>
            <p>Uma seleção rápida de encontros que mostram a força da presença e da escuta ativa.</p>
          </div>
          <div className="galeria__grid">
            {galleryItems.map((item) => (
              <figure key={item.src} data-animate="fade">
                <img
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  loading="lazy"
                />
                {item.caption && <figcaption>{item.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </div>
        <div className="diag-mask" aria-hidden="true" />
      </section>

      <section className="section palestras" id="palestras">
        <div className="container palestras__content" data-animate="fade">
          <div>
            <h2>Rita Drumond</h2>
            <p className="palestras__subtitle">Palestras, Workshop's e treinamentos</p>
            <p>
              Imagine uma experiência de aprendizagem que combina a ciência da andragogia, a criatividade do Lego Serious Play e a magia da Metodologia Disney de gestão da experiência do cliente. Nossas palestras e treinamentos são desenhados para envolver e transformar
            </p>
          </div>
          <Button href="#contato" variant="primary">
            Solicitar contato
          </Button>
        </div>
        <div className="wave wave-bottom" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" role="img">
            <path d="M0,96L80,96C160,96,320,96,480,96C640,96,800,96,960,106.7C1120,117,1280,139,1360,149.3L1440,160V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z" />
          </svg>
        </div>
      </section>

      <section className="section equipes" id="contato">
        <div
          className="equipes__background"
          data-parallax-speed="0.1"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(14, 14, 14, 0.84), rgba(14, 14, 14, 0.84)), url("/imgs/Rita-drumond (7).jpg")',
          }}
        />
        <div className="container equipes__content" data-animate="fade">
          <div className="equipes__text">
            <h2>EQUIPES INTERGERACIONAIS E RESULTADOS</h2>
            <p>
              Vamos conversar sobre como o líder pode engajar sua equipe e ter atitudes seguras e como a comunicação clara e direta ajuda a evitar riscos. Um boa liderança é também cuidar da segurança de todos.
            </p>
            <Button href="#inicio" variant="secondary">
              Voltar ao topo
            </Button>
          </div>
          <div className="equipes__cutout" data-animate="slide-left">
            <img
              src="/imgs/rita drumond (7).png"
              alt="Recorte PNG de Rita Drumond sorrindo com os braços abertos"
              width={1080}
              height={1080}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__content">
          <div>
            <p className="footer__signature">Rita Drumond</p>
            <p className="footer__social">Instagram</p>
          </div>
          <p className="footer__quote">
            "Quando o desenvolvimento humano abraça a criatividade, as possibilidades de crescimento se tornam infinitas."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

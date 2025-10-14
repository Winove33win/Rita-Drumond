import { useEffect } from "react";
import "./App.css";

const chipItems = [
  {
    src: "./imgs/Rita-drumond.jpg",
    alt: "Rita no palco durante uma palestra",
    title: "A RECEITA DO LEGADO",
    text: "Descubra como construir e fortalecer sua marca pessoal, inspirando, motivando e criando vínculos que transcendem o dia a dia. Vamos abordar as práticas que líderes visionários utilizam para criar culturas organizacionais onde o legado é uma força propulsora, gerando resultados que vão além do lucro.",
  },
  {
    src: "./imgs/Rita-drumond (2).jpg",
    alt: "Rita conduzindo um encontro com o público",
    title: "QUAL É A MÁGICA?",
    text: "Nesta palestra envolvente e inspiradora, vamos desvendar os 7 segredos por trás da excelência na experiência dos clientes da Disney. Você vai descobrir como a magia vai além das atrações e personagens, transformando cada interação com o cliente em uma experiência inesquecível.",
  },
  {
    src: "./imgs/Rita-drumond (3).jpg",
    alt: "Rita sorrindo e interagindo com a plateia",
    title: "REJUVELHECENDO",
    text: "Nesta palestra vamos abordar como abraçar a vida com atitude, inovação e vitalidade transformando a forma como você encara os desafios da conexão intergeracional nas equipes, desafiando a ideia do envelhecimento tradicional, mantendo a energia de um jovem e a sabedoria de um experiente e assim transcendendo a idade.",
  },
];

const leadershipParagraphs = [
  "Essa palestra é para líderes que querem não só garantir que as regras de segurança sejam seguidas, mas também inspirar a equipe a adotar uma postura de cuidado e prevenção no dia a dia.",
  "A ideia é mostrar que a segurança começa com a liderança e que, quando o líder dá o exemplo, todo mundo segue.",
  "Vamos conversar sobre como o líder pode engajar sua equipe e ter atitudes seguras e como a comunicação clara e direta ajuda a evitar riscos.",
  "Uma boa liderança é também cuidar da segurança de todos.",
];

const leadershipGallery = [
  { src: "./imgs/Rita-drumond (4).jpg", alt: "Rita conduzindo líderes em treinamento" },
  { src: "./imgs/Rita-drumond (5).jpg", alt: "Público atento durante a palestra" },
  { src: "./imgs/Rita-drumond (6).jpg", alt: "Evento corporativo com participação ativa" },
];

const experiencesGallery = [
  { src: "./imgs/Rita-drumond (7).jpg", alt: "Rita celebrando com o público" },
  { src: "./imgs/Rita-drumond (8).jpg", alt: "Registro descontraído após a palestra" },
  { src: "./imgs/Rita drumond.png", alt: "Retrato de Rita com microfone" },
  { src: "./imgs/rita drumond (6).png", alt: "Close de Rita sorrindo" },
  { src: "./imgs/rita drumond (7).png", alt: "Rita em apresentação corporativa" },
  { src: "./imgs/rita drumond (8).png", alt: "Momento inspirador no evento" },
];

const App = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let observer: IntersectionObserver | undefined;
    if (window.IntersectionObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      revealElements.forEach((element) => observer?.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add("in"));
    }

    const anchorCleanups: Array<() => void> = [];
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"], a[href^="/"]'));

    anchors.forEach((anchor) => {
      const handler = (event: MouseEvent) => {
        const href = anchor.getAttribute("href") ?? "";
        document.body.classList.add("is-wiping");

        if (href.startsWith("#")) {
          setTimeout(() => {
            document.body.classList.remove("is-wiping");
          }, 650);
          return;
        }

        event.preventDefault();
        setTimeout(() => {
          window.location.href = anchor.href;
        }, 200);
      };

      anchor.addEventListener("click", handler);
      anchorCleanups.push(() => anchor.removeEventListener("click", handler));
    });

    return () => {
      observer?.disconnect();
      anchorCleanups.forEach((cleanup) => cleanup());
      document.body.classList.remove("is-wiping");
    };
  }, []);

  return (
    <div className="page">
      <header className="hero isolate diag-mask">
        <div className="wrap">
          <div className="container">
            <div className="reveal">
              <h1>
                <span className="ylw">Rita</span> Drumond
              </h1>
              <h2>PALESTRANTE E CONSULTORA</h2>
              <p style={{ maxWidth: "740px", lineHeight: 1.6, opacity: 0.95 }}>
                Inspirando empresas e pessoas a terem mais resultados com criatividade e leveza.
              </p>
              <div
                style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}
              >
                <a className="btn" href="#contato">
                  Solicitar contato
                </a>
                <a className="btn btn-outline" href="#trajetoria">
                  Conheça a trajetória
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-portrait cutout-shadow">
          <img src="./imgs/Rita-drumond (5).jpg" alt="Retrato de Rita Drumond sorrindo" />
        </div>
      </header>
      <div className="spacer" />

      <section className="container sep-top">
        <div className="chips reveal">
          {chipItems.map((chip) => (
            <article className="chip shadow-1" key={chip.title}>
              <img src={chip.src} alt={chip.alt} />
              <div>
                <h4>{chip.title}</h4>
                <p>{chip.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band wave-top wave-bottom sep-bottom">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#FFF7DC" />
              <stop offset="1" stopColor="#FFF06A" />
            </linearGradient>
          </defs>
          <path
            d="M0,32 C240,64 480,0 720,32 960,64 1200,0 1440,32 L1440,64 L0,64 Z"
            fill="url(#g1)"
          />
        </svg>
        <div className="container">
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: "18px", letterSpacing: ".12em", fontWeight: 800 }}
          >
            LIDERANDO EM SEGURANÇA
          </div>
          <div className="reveal" style={{ maxWidth: "860px", margin: "0 auto 24px", lineHeight: 1.6 }}>
            {leadershipParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid grid-3 gallery reveal">
            {leadershipGallery.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g2" x1="0" x2="1">
              <stop offset="0" stopColor="#FFF7DC" />
              <stop offset="1" stopColor="#FFF06A" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L1440,0 L1440,32 C1200,0 960,64 720,32 480,0 240,64 0,32 Z"
            fill="url(#g2)"
          />
        </svg>
      </section>

      <section className="container sep-top" id="trajetoria" style={{ padding: "70px 0 30px" }}>
        <div className="two">
          <div className="reveal">
            <h3>Rita Drumond</h3>
            <p>
              Utiliza metodologias colaborativas para encontrar soluções inovadoras. Viajante incansável e leitora ávida, busca
              constantemente expandir seus conhecimentos e enriquecer sua visão de mundo.
            </p>
            <p>
              Com paixão por aprender e compartilhar, utiliza metodologias colaborativas para impulsionar a inovação e a resolução
              de problemas complexos.
            </p>
            <p>
              Com sólida experiência em coaching, acompanha líderes em suas jornadas de desenvolvimento, gerando resultados
              excepcionais e alinhados aos objetivos estratégicos das organizações.
            </p>
            <p>
              Fundadora e CEO da MatKa, orientada para transformar vidas e negócios através do desenvolvimento humano e
              organizacional.
            </p>
            <p>
              Administradora com MBA em Gestão de Pessoas, especialista em metodologias inovadoras como LEGO® SERIOUS PLAY® e
              Estratégia Disney, promove o desenvolvimento de pessoas e a construção de organizações mais engajadas e resilientes.
            </p>
            <p>Uma grande alegria é ser avó, experiência que permite conexão especial com as novas gerações.</p>
          </div>
          <div className="reveal">
            <img src="./imgs/Rita-drumond (4).jpg" alt="Rita apresentando em evento" />
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "30px 0 80px" }}>
        <div className="two" style={{ gridTemplateColumns: "1fr 1.1fr" }}>
          <div className="reveal">
            <img src="./imgs/Depoimentos 2.jpg" alt="Registro de palestra para equipes" />
          </div>
          <div className="reveal">
            <h3>Rita Drumond</h3>
            <p>Rejuvenesça suas ideias, abrace a diversidade de pensamentos e crie um legado que transcenda o tempo.</p>
            <div style={{ marginTop: "14px" }}>
              <a className="btn" href="#contato">
                Solicitar contato
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "70px" }}>
        <div className="panel-dark reveal shadow-1">
          <div className="row">
            <img src="./imgs/Clientes.jpg" alt="Montagem com destaques de clientes" />
            <div>
              <h4 style={{ margin: "0 0 6px 0", fontSize: "18px" }}>Rita Drumond</h4>
              <p className="mute" style={{ margin: "0 0 10px 0" }}>
                Palestras, Workshop&apos;s e treinamentos
              </p>
              <p className="mute" style={{ margin: "0 0 12px 0" }}>
                Imagine uma experiência de aprendizagem que combina a ciência da andragogia, a criatividade do Lego Serious Play e
                a magia da Metodologia Disney de gestão da experiência do cliente. Nossas palestras e treinamentos são desenhados
                para envolver e transformar
              </p>
              <a className="btn btn-dark" href="#contato">
                Solicitar contato
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-mid">
        <div className="panel reveal">
          <h3 style={{ fontSize: "clamp(26px, 3.4vw, 40px)", margin: "0 0 12px 0" }}>
            “Quando o desenvolvimento humano abraça a criatividade, as possibilidades de crescimento se tornam infinitas.”
          </h3>
          <a className="btn" href="#contato">
            Convidar para o seu evento
          </a>
        </div>
      </section>

      <section className="container" style={{ padding: "70px 0" }}>
        <h3 className="reveal" style={{ fontSize: "clamp(24px, 3vw, 34px)", margin: "0 0 16px 0" }}>
          Experiências
        </h3>
        <div className="grid grid-3 gallery reveal">
          {experiencesGallery.map((item) => (
            <img key={item.src} src={item.src} alt={item.alt} />
          ))}
        </div>
      </section>

      <section className="container" style={{ padding: "10px 0 60px" }}>
        <h3 className="reveal" style={{ fontSize: "clamp(24px, 3vw, 30px)", margin: "0 0 8px 0" }}>
          EQUIPES INTERGERACIONAIS E RESULTADOS
        </h3>
        <p className="reveal" style={{ maxWidth: "860px", lineHeight: 1.6 }}>
          Vamos conversar sobre como o líder pode engajar sua equipe e ter atitudes seguras e como a comunicação clara e direta
          ajuda a evitar riscos. Um boa liderança é também cuidar da segurança de todos.
        </p>
      </section>

      <section className="cta-final">
        <div className="container">
          <div className="box reveal">
            <h3 style={{ fontSize: "clamp(24px, 3vw, 34px)", margin: 0 }}>
              Vamos cocriar uma experiência inesquecível?
            </h3>
            <p className="mute" style={{ maxWidth: "640px", margin: "8px 0 14px" }}>
              Conte sua necessidade e eu levo um roteiro que conecta cultura, objetivos e público.
            </p>
            <a id="contato" className="btn" href="mailto:contato@seudominio.com">
              Solicitar contato
            </a>
            <img className="face cutout-shadow" src="./imgs/Rita-drumond (7).jpg" alt="Rita convidando para contato" />
          </div>
        </div>
      </section>

      <footer style={{ background: "#0f172a", color: "#cbd5e1", padding: "32px 0", textAlign: "center" }}>
        <div className="container" style={{ fontSize: "14px" }}>
          <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>Rita Drumond</div>
          <div style={{ opacity: 0.9 }}>Instagram</div>
          <div style={{ opacity: 0.7, marginTop: "8px" }}>
            Quando o desenvolvimento humano abraça a criatividade, as possibilidades de crescimento se tornam infinitas.
          </div>
        </div>
      </footer>

      <div id="page-overlay" aria-hidden="true" />
    </div>
  );
};

export default App;

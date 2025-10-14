import { useId } from "react";
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

const SectionDivider = ({ flip = false }: { flip?: boolean }) => {
  const gradientId = useId();

  return (
    <div
      className={`section-divider${flip ? " section-divider--flip" : ""}`}
      aria-hidden="true"
    >
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
        <div className="hero__image" aria-hidden="true">
          <img src={heroImg} alt="Rita Drumond palestrando para uma plateia" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <div className="hero__figure">
            <div className="hero__figure-media">
              <img src={portraitImg} alt="Retrato de Rita Drumond sorrindo" />
            </div>
            <span className="hero__figure-note">Energia e conexão em cada encontro</span>
          </div>
          <div className="hero__badge">
            <img src={seloImg} alt="Selo SAP Speakers" />
            <span>Top Speaker SAP 2023</span>
          </div>
          <p className="hero__eyebrow">Palestrante e consultora</p>
          <h1>Rita Drumond</h1>
          <p className="hero__description">
            Experiências que unem emoção, estratégia e ação para potencializar pessoas, marcas e comunidades. Uma jornada
            criativa que transforma conhecimento em legado.
          </p>
          <a className="hero__cta" href="#contato">
            Quero a Rita no meu evento
          </a>
        </div>
      </header>

      <SectionDivider />

      <main>
        <section className="intro" id="sobre">
          <div className="intro__visual">
            <div className="intro__portrait">
              <img src={ritaMicrofoneImg} alt="Rita Drumond falando ao microfone" />
              <div className="intro__portrait-note">Metodologia centrada nas pessoas</div>
            </div>
            <ul className="intro__stats">
              {impactStats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="intro__content">
            <span className="intro__eyebrow">A receita do legado</span>
            <h2>Uma experiência desenhada com e para o seu público</h2>
            <p>
              O segredo está na combinação entre repertório criativo, curadoria afetiva e direcionamento estratégico. Cada
              apresentação é cocriada para acolher diferentes trajetórias e direcionar energia para os objetivos que você
              deseja alcançar.
            </p>
            <p>
              A jornada começa antes do palco, atravessa a entrega ao vivo e segue com materiais e rituais que sustentam o
              impacto. Assim, o evento se transforma em movimento contínuo.
            </p>
            <ol className="intro__roadmap">
              {magicPillars.map((pillar, index) => (
                <li key={pillar.title}>
                  <span className="intro__step-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <SectionDivider flip />

        <section className="signature" id="servicos">
          <div className="signature__header">
            <span className="signature__eyebrow">Entregas autorais</span>
            <h2>Roteiros que combinam emoção e estratégia</h2>
            <p>
              Cada apresentação é construída com base em entrevistas, repertório original e ferramentas de facilitação que
              envolvem o público do começo ao fim. Assim, criamos experiências que reverberam na cultura da sua empresa.
            </p>
          </div>
          <div className="signature__body">
            <div className="signature__media">
              <img src={ritaMicrofoneImg} alt="Rita Drumond conduzindo palestra com microfone" />
              <div className="signature__media-note">Cocriação e presença em cena</div>
            </div>
            <div className="signature__grid">
              {signatureHighlights.map((item) => (
                <article className="signature__card" key={item.heading}>
                  <h3>{item.heading}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="journey">
          <div className="journey__content">
            <span className="journey__eyebrow">Curadoria sensível</span>
            <h2>Momentos para sentir, pensar e agir</h2>
            <p>
              Cada jornada é desenhada para que o público se reconheça nas histórias e saia com repertório aplicável. Do
              briefing à entrega, mapeio expectativas, rituais e linguagem para que a experiência faça sentido para cada grupo.
            </p>
            <ul className="journey__highlights">
              <li>Dinâmicas de participação que transformam plateias em protagonistas.</li>
              <li>Conteúdo multimídia alinhado ao contexto e à identidade da sua marca.</li>
              <li>Planos de continuidade que prolongam o impacto e incentivam novas ações.</li>
            </ul>
          </div>
          <div className="journey__gallery">
            <figure className="journey__photo">
              <img src={heroImg} alt="Rita Drumond em destaque no palco durante apresentação" />
              <figcaption>Experiências que combinam emoção e estratégia</figcaption>
            </figure>
            <figure className="journey__photo journey__photo--accent">
              <img src={portraitImg} alt="Rita Drumond sorrindo próxima ao público" />
              <figcaption>Conexão genuína com diferentes públicos</figcaption>
            </figure>
          </div>
        </section>

        <SectionDivider flip />

        <section className="testimonials" id="cases">
          <div className="testimonials__media">
            <img src={depoimentoImg} alt="Plateia aplaudindo Rita Drumond" />
            <div className="testimonials__media-badge">Plateias inspiradas em todo o Brasil</div>
          </div>
          <div className="testimonials__content">
            <div className="testimonials__header">
              <span className="testimonials__eyebrow">Depoimentos</span>
              <h2>Experiências que deixam marcas duradouras</h2>
              <p>
                Cada encontro é uma construção coletiva. Os relatos abaixo mostram como a presença da Rita transforma a
                energia da equipe e cria compromissos que seguem vivos após o evento.
              </p>
            </div>
            <div className="testimonials__carousel" role="list">
              {testimonials.map((testimonial) => (
                <figure className="testimonial-card" key={testimonial.author} role="listitem">
                  <blockquote>
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="cta" id="contato">
          <div className="cta__content">
            <span className="cta__eyebrow">Próximo passo</span>
            <h2>Vamos cocriar uma experiência inesquecível?</h2>
            <p>
              Envie uma mensagem com o contexto do seu evento, público e objetivos. Retorno com propostas de temas,
              formatos e desdobramentos para continuarmos a conversa.
            </p>
            <a className="cta__button" href="mailto:contato@ritadrumond.com">
              Escrever para a Rita
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Rita Drumond. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

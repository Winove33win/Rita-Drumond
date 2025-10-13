import "./App.css";
import heroImg from "./assets/hero-background.jpg";
import profileImg from "./assets/foto-perfil.png";
import signatureImg from "./assets/rita-microfone.png";
import stageImg from "./assets/palestra.png";
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
];

function App() {
  return (
    <div className="site">
      <header className="hero" id="top">
        <div className="hero__image" aria-hidden="true">
          <img src={heroImg} alt="Rita Drumond palestrando para uma plateia" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
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

      <main>
        <section className="intro" id="sobre">
          <div className="intro__media">
            <img src={profileImg} alt="Retrato de Rita Drumond sorrindo" />
            <div className="intro__label">12 anos guiando jornadas de transformação</div>
          </div>
          <div className="intro__content">
            <span className="intro__eyebrow">A receita do legado</span>
            <h2>Qual é a magia?</h2>
            <p>
              O segredo está na combinação entre repertório criativo, curadoria afetiva e direcionamento estratégico. Cada
              apresentação é desenhada a muitas mãos para que faça sentido para quem organiza e, principalmente, para quem
              participa.
            </p>
            <ul className="intro__list">
              {magicPillars.map((pillar) => (
                <li key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="signature" id="servicos">
          <div className="signature__grid">
            {signatureHighlights.map((item) => (
              <article className="signature__card" key={item.heading}>
                <h3>{item.heading}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="signature__figure">
            <img src={signatureImg} alt="Rita Drumond segurando um microfone" />
          </div>
        </section>

        <section className="journey">
          <div className="journey__content">
            <span className="journey__eyebrow">Curadoria sensível</span>
            <h2>Momentos para sentir, pensar e agir</h2>
            <p>
              Dos bastidores ao palco, cada detalhe é planejado para ampliar a escuta ativa e abrir espaço para reflexões
              honestas. O roteiro integra narrativa, música, recursos visuais e dinâmicas colaborativas para criar um clima de
              confiança.
            </p>
            <p>
              O objetivo é gerar movimento: provocar novas perspectivas, fortalecer vínculos e inspirar decisões que
              reverberam além do evento.
            </p>
          </div>
          <div className="journey__image">
            <img src={stageImg} alt="Rita Drumond se apresentando no palco" />
          </div>
        </section>

        <section className="testimonials" id="cases">
          <div className="testimonials__image">
            <img src={depoimentoImg} alt="Plateia aplaudindo Rita Drumond" />
          </div>
          <div className="testimonials__content">
            <span className="testimonials__eyebrow">Depoimentos</span>
            <h2>Quando a mensagem encontra o público certo</h2>
            <div className="testimonials__list">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.author}>
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

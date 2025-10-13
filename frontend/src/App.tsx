import "./App.css";

const heroMetrics = [
  {
    value: "+120",
    label: "lançamentos acompanhados lado a lado com os clientes",
  },
  {
    value: "92%",
    label: "dos novos projetos chegam por indicação",
  },
  {
    value: "15 dias",
    label: "para apresentarmos as primeiras entregas estratégicas",
  },
];

const services = [
  {
    title: "Posicionamento estratégico",
    description:
      "Construímos narrativas fortes para acelerar a tomada de decisão do seu público e gerar clareza para o time.",
    items: [
      "Mapa de proposta de valor e diferenciais",
      "Storyline para apresentações e pitches",
      "Guia de linguagem e mensagens-chave",
    ],
  },
  {
    title: "Identidade e expressão visual",
    description:
      "Traduzimos a essência da marca em sistemas visuais consistentes, prontos para ganhar escala em qualquer formato.",
    items: [
      "Identidade visual completa",
      "Sistemas modulares para social e produto",
      "Kits de lançamento com templates editáveis",
    ],
  },
  {
    title: "Experiência digital e produtos",
    description:
      "Desenhamos jornadas digitais que conectam estratégia e performance com foco em conversão e retenção.",
    items: [
      "Protótipos navegáveis e testes com usuários",
      "Design systems prontos para desenvolvimento",
      "Otimização contínua com métricas acionáveis",
    ],
  },
];

const cases = [
  {
    name: "Atlas Ventures",
    sector: "Venture Builder",
    result: "Reposicionamento elevou captação em 3x",
    description:
      "Criamos o manifesto e a presença digital da marca, alinhando discurso e produto para atrair investidores estratégicos.",
  },
  {
    name: "Northea Health",
    sector: "Healthtech",
    result: "Experiência digital com NPS 86",
    description:
      "Mapeamos toda a jornada dos pacientes e redesenhamos o aplicativo com foco em confiança, clareza e eficiência operacional.",
  },
  {
    name: "Launa Studio",
    sector: "Arquitetura",
    result: "Site com 2,4x mais leads qualificados",
    description:
      "Reposicionamento completo com foco em projetos autorais, materiais comerciais e suporte ao time comercial.",
  },
];

const approach = [
  {
    title: "Imersão guiada",
    description:
      "Entrevistas, análise de dados e leitura do mercado para descobrir oportunidades, tensões e pontos de destaque.",
  },
  {
    title: "Direcionamento",
    description:
      "Construímos plataformas de marca, jornadas e guidelines que guiam comunicação, produto e cultura interna.",
  },
  {
    title: "Construção colaborativa",
    description:
      "Rodadas semanais para validar hipóteses, evoluir entregas e garantir alinhamento com todas as frentes do projeto.",
  },
  {
    title: "Implementação e transição",
    description:
      "Acompanhamos o time na aplicação das soluções, com materiais prontos, rituais e métricas para o pós-lançamento.",
  },
];

const testimonials = [
  {
    quote:
      "A Rita trouxe clareza para o posicionamento da Northea, conectando produto, comunicação e expansão comercial. Os materiais seguem sendo nosso norte até hoje.",
    author: "Luiza Carvalho",
    role: "Head de Marketing na Northea Health",
  },
  {
    quote:
      "Além do visual impecável, o projeto com a Rita reorganizou nossa proposta de valor e deu argumentos sólidos para o time fechar novos contratos.",
    author: "Márcio Santos",
    role: "Sócio na Atlas Ventures",
  },
];

function App() {
  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="hero__nav">
          <a className="logo" href="#top" aria-label="Ir para o topo">
            Rita Drumond Estúdio
          </a>
          <div className="hero__actions">
            <a className="nav-link" href="#sobre">
              Sobre
            </a>
            <a className="nav-link" href="#servicos">
              Soluções
            </a>
            <a className="nav-link" href="#cases">
              Projetos
            </a>
            <a className="button" href="#contato">
              Vamos conversar
            </a>
          </div>
        </nav>

        <div className="hero__layout">
          <div className="hero__copy">
            <span className="hero__tag">Marca, design e estratégia</span>
            <h1>
              Consultoria criativa para marcas que querem lançar, crescer e liderar.
            </h1>
            <p>
              Lideramos transformações que unem branding, narrativa e experiência digital. Do diagnóstico ao plano de ação, trabalhamos lado a lado com seu time para entregar resultados mensuráveis.
            </p>
            <div className="hero__cta">
              <a className="button" href="#contato">
                Agendar uma reunião
              </a>
              <a className="button button--ghost" href="#servicos">
                Entender nossa abordagem
              </a>
            </div>
          </div>

          <aside className="hero__panel" aria-labelledby="agenda">
            <div className="panel__badge" id="agenda">
              Agenda do próximo ciclo aberta
            </div>
            <p>
              Enviamos um diagnóstico inicial em até 48h após o primeiro contato. Projetos personalizados, com duração média de 8 a 12 semanas.
            </p>
            <ul>
              <li>Blueprint estratégico completo</li>
              <li>Time multidisciplinar dedicado</li>
              <li>Entrega modular com rituais semanais</li>
            </ul>
            <a className="panel__link" href="mailto:contato@ritadrumond.com">
              contato@ritadrumond.com
            </a>
          </aside>
        </div>

        <dl className="hero__metrics">
          {heroMetrics.map((metric) => (
            <div key={metric.value}>
              <dt>{metric.value}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>

        <div className="hero__brands" aria-label="Clientes atendidos">
          <span>Trusted by</span>
          <ul>
            <li>Atlas Ventures</li>
            <li>Northea</li>
            <li>Launa Studio</li>
            <li>Grupo Meta</li>
            <li>ShiftLab</li>
          </ul>
        </div>
      </header>

      <main>
        <section className="section section--about" id="sobre">
          <div className="section__content">
            <span className="section__label">Manifesto</span>
            <h2>Somos parceiros criativos de negócios com ambição.</h2>
            <p>
              Atuamos como extensão estratégica do seu time para conectar dados, visão e execução. Cada projeto é construído de forma colaborativa, com entregas que guiam decisões e aceleram resultados.
            </p>
            <div className="about__grid">
              <article>
                <h3>Visão integrada</h3>
                <p>
                  Do posicionamento à experiência digital, garantimos consistência em toda a jornada da marca.
                </p>
              </article>
              <article>
                <h3>Processos enxutos</h3>
                <p>
                  Ciclos curtos de entrega e validação para responder rápido às mudanças do negócio.
                </p>
              </article>
              <article>
                <h3>Resultados mensuráveis</h3>
                <p>
                  Métricas claras e acompanhamento próximo para evoluir continuamente após o lançamento.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--services" id="servicos">
          <div className="section__content">
            <span className="section__label">Como podemos ajudar</span>
            <h2>Projetos customizados para cada etapa da sua marca.</h2>
            <div className="services__grid">
              {services.map((service) => (
                <article key={service.title}>
                  <header>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </header>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cases" id="cases">
          <div className="section__content">
            <span className="section__label">Resultados recentes</span>
            <h2>Projetos que demonstram a força de uma estratégia clara.</h2>
            <div className="cases__list">
              {cases.map((caseItem) => (
                <article key={caseItem.name}>
                  <div className="case__head">
                    <span className="case__name">{caseItem.name}</span>
                    <span className="case__sector">{caseItem.sector}</span>
                  </div>
                  <p className="case__result">{caseItem.result}</p>
                  <p>{caseItem.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--approach">
          <div className="section__content">
            <span className="section__label">Nossa forma de trabalhar</span>
            <h2>Um processo colaborativo que respeita o ritmo do seu negócio.</h2>
            <div className="approach__steps">
              {approach.map((step, index) => (
                <article key={step.title}>
                  <span className="step__index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--testimonials">
          <div className="section__content">
            <span className="section__label">O que dizem sobre nós</span>
            <h2>Parcerias que continuam depois da entrega.</h2>
            <div className="testimonials__grid">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.author}>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <figcaption>
                    <span>{testimonial.author}</span>
                    <small>{testimonial.role}</small>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cta" id="contato">
          <div className="section__content">
            <h2>Pronto para criar o próximo capítulo da sua marca?</h2>
            <p>
              Conte mais sobre o momento do seu negócio e enviaremos uma proposta personalizada com roadmap, investimento e cronograma.
            </p>
            <div className="cta__actions">
              <a className="button" href="mailto:contato@ritadrumond.com">
                contato@ritadrumond.com
              </a>
              <a
                className="button button--ghost"
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noreferrer"
              >
                Conversar pelo WhatsApp
              </a>
            </div>
            <small>Atendimento de segunda a sexta, das 9h às 18h (BRT).</small>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__content">
          <div>
            <span className="logo">Rita Drumond Estúdio</span>
            <p>
              Branding, design e estratégia digital para negócios que querem liderar com propósito e consistência.
            </p>
          </div>
          <div className="footer__links">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Soluções</a>
            <a href="#cases">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
          <span className="footer__note">© {new Date().getFullYear()} Rita Drumond. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

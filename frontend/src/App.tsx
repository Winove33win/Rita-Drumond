import "./App.css";

const diferenciais = [
  {
    titulo: "Estratégia guiada por dados",
    descricao:
      "Combinamos pesquisas e imersão com métricas de mercado para definir posicionamentos que criam vantagem competitiva.",
  },
  {
    titulo: "Design centrado em pessoas",
    descricao:
      "Prototipamos e validamos cada solução com usuários reais, garantindo jornadas claras e experiências memoráveis.",
  },
  {
    titulo: "Execução ponta a ponta",
    descricao:
      "Do discovery ao lançamento, acompanhamos seu time em cada fase para acelerar entregas com qualidade premium.",
  },
];

const etapas = [
  {
    titulo: "Diagnóstico imersivo",
    descricao:
      "Entrevistas, auditoria de marca e análise de dados para mapear oportunidades e alinhar objetivos.",
  },
  {
    titulo: "Co-criação estratégica",
    descricao:
      "Workshops colaborativos transformam insights em diretrizes e jornadas priorizadas.",
  },
  {
    titulo: "Entrega e acompanhamento",
    descricao:
      "Guias visuais, protótipos navegáveis e rituais de acompanhamento para garantir evolução contínua.",
  },
];

const projetos = [
  "Rebranding completo",
  "Landing pages de alta conversão",
  "Design systems escaláveis",
  "Lançamentos de produtos digitais",
];

function App() {
  return (
    <div className="landing">
      <header className="hero">
        <nav className="hero__nav">
          <span className="logo">Rita Drumond</span>
          <div className="hero__actions">
            <a className="button button--ghost" href="#sobre">
              Sobre
            </a>
            <a className="button" href="#contato">
              Falar com a equipe
            </a>
          </div>
        </nav>

        <div className="hero__content">
          <div className="hero__text">
            <span className="hero__tag">Branding &amp; experiência digital</span>
            <h1>
              Sua marca com clareza, propósito e uma presença digital pronta para converter.
            </h1>
            <p>
              Criamos narrativas, identidades e produtos digitais que destacam seu negócio. Uma consultoria enxuta, focada em resultados reais e parcerias de longo prazo.
            </p>

            <div className="hero__cta">
              <a className="button" href="#contato">
                Agendar conversa
              </a>
              <a className="button button--ghost" href="#diferenciais">
                Ver diferenciais
              </a>
            </div>

            <dl className="hero__stats">
              <div>
                <dt>+70</dt>
                <dd>projetos lançados com crescimento mensurável</dd>
              </div>
              <div>
                <dt>10 anos</dt>
                <dd>construindo marcas e experiências digitais</dd>
              </div>
              <div>
                <dt>98%</dt>
                <dd>dos clientes renovam após o primeiro projeto</dd>
              </div>
            </dl>
          </div>

          <div className="hero__card">
            <h2>Blueprint personalizado</h2>
            <p>
              Receba um roteiro completo com posicionamento, proposta de valor e um plano visual para seu próximo lançamento.
            </p>
            <ul>
              {projetos.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span className="hero__badge">Agenda aberta para o próximo ciclo</span>
          </div>
        </div>
      </header>

      <main>
        <section className="section section--about" id="sobre">
          <div className="section__content">
            <span className="section__label">Por que existimos</span>
            <h2>Transformamos ambições em experiências que conectam.</h2>
            <p>
              Operamos como um hub criativo integrado, guiando marcas na transição para um posicionamento digital consistente. Do discurso à interface, garantimos coesão e impacto em cada ponto de contato.
            </p>
            <div className="about__cards">
              <article>
                <h3>Visão estratégica</h3>
                <p>
                  Facilitamos decisões com roadmaps claros e indicadores acionáveis para que cada investimento tenha retorno comprovado.
                </p>
              </article>
              <article>
                <h3>Time multidisciplinar</h3>
                <p>
                  Designers, estrategistas e storytellers atuam em squads, entregando com velocidade sem perder profundidade.
                </p>
              </article>
              <article>
                <h3>Entrega modular</h3>
                <p>
                  Conduzimos ciclos curtos, liberando resultados tangíveis desde o primeiro sprint para acelerar sua operação.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--features" id="diferenciais">
          <div className="section__content">
            <span className="section__label">Como entregamos valor</span>
            <h2>Diferenciais que elevam o padrão do seu lançamento.</h2>
            <div className="grid grid--features">
              {diferenciais.map((item) => (
                <article key={item.titulo}>
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--process">
          <div className="section__content">
            <span className="section__label">Metodologia colaborativa</span>
            <h2>Uma jornada clara do diagnóstico ao lançamento.</h2>
            <div className="timeline">
              {etapas.map((passo, index) => (
                <article key={passo.titulo}>
                  <span className="timeline__index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{passo.titulo}</h3>
                    <p>{passo.descricao}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cta" id="contato">
          <div className="section__content">
            <h2>Pronto para dar o próximo passo?</h2>
            <p>
              Envie uma mensagem com o desafio da sua marca e retornaremos com um diagnóstico gratuito nas próximas 24 horas.
            </p>
            <div className="cta__actions">
              <a className="button" href="mailto:contato@ritadrumond.com">
                contato@ritadrumond.com
              </a>
              <a className="button button--ghost" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
                Conversar no WhatsApp
              </a>
            </div>
            <small>Atendimento de segunda a sexta, das 9h às 18h.</small>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__content">
          <span className="logo">Rita Drumond</span>
          <p>Branding, estratégia e experiências digitais para negócios que querem liderar.</p>
          <div className="footer__links">
            <a href="#sobre">Sobre</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#contato">Contato</a>
          </div>
          <span className="footer__note">© {new Date().getFullYear()} Rita Drumond. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/lib/seo";

const Cursos = () => {
  useSEO({
    title: "Curso: Como Criar e Gerenciar Sites no Wix | Winove",
    description:
      "Aprenda a criar e gerenciar sites profissionais no Wix com o curso gratuito da Winove.",
    canonical: "https://www.winove.com.br/cursos",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="section--first pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 px-4 py-2">Curso</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Como Criar e Gerenciar Sites no Wix
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comece sua jornada para criar um site profissional com Wix de forma simples e eficiente. Neste curso completo, reunimos anos de experiência da Winove – uma agência especializada em desenvolvimento de sites na plataforma Wix – para ensinar desde os conceitos básicos até recursos avançados.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="prose max-w-none">
          <h2>O Que Você Irá Aprender 📚</h2>
          <p>
            A seguir está a grade de aulas do curso “Como Criar e Gerenciar Sites no Wix”, com módulos baseados em conteúdos já disponíveis no nosso canal do YouTube Winove Online (incluímos links para as aulas gratuitas):
          </p>
          <ol>
            <li>
              <strong>Conceitos Iniciais e Planejamento do Site:</strong> Antes de colocar a mão na massa, é importante definir os objetivos do seu site e organizar ideias. Nesta introdução, você verá dicas sobre como planejar a estrutura e o conteúdo do site antes de começar a construí-lo. (Vídeo: "Como construir um site sozinho? O que eu preciso saber antes de começar?" – 10:40 em <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">youtube.com</a>). Essa aula aborda os preparativos iniciais, garantindo que você tenha clareza de público-alvo, propósito do site e recursos necessários.
            </li>
            <li>
              <strong>Criando sua Conta Wix e Escolhendo um Template:</strong> Aqui você aprenderá a criar uma conta gratuita no Wix e iniciar um novo site. Mostramos como escolher um template profissional ou começar do zero, de acordo com a identidade do seu negócio. O Wix oferece dezenas de modelos personalizáveis e permite criar um site gratuito rapidamente em <a href="https://wix.com" target="_blank" rel="noopener noreferrer">wix.com</a>. Você verá passo a passo como selecionar o design ideal e entender as diferenças entre usar o Wix ADI e o Editor Wix manual.
            </li>
            <li>
              <strong>Dominando o Editor Wix: Layout, Elementos e Design:</strong> Com o site iniciado, vamos explorar a interface do Editor Wix. Nesse módulo, você aprenderá a editar textos, adicionar imagens, botões, vídeos e outros elementos às páginas. Explicamos o sistema de seções e grades do Wix, organizando o layout de forma responsiva. Também mostramos como personalizar cores e fontes para alinhar o visual ao seu branding.
            </li>
            <li>
              <strong>Estrutura do Site: Páginas, Menus e Navegação:</strong> Neste tópico, você aprenderá a criar novas páginas e a organizar o menu de navegação do site. Mostramos como hierarquizar páginas e configurar o menu do cabeçalho e rodapé. Discutimos boas práticas de UX para menu intuitivo e linkagem interna entre páginas.
            </li>
            <li>
              <strong>Recursos Essenciais: Formulários de Contato e Blog:</strong> Todo site profissional precisa de maneiras de engajar visitantes. Aqui, ensinamos como inserir um Formulário de Contato usando as ferramentas prontas do Wix e como configurar o Wix Blog caso você queira publicar artigos ou notícias. Além disso, apresentamos uma solução avançada: como criar um formulário personalizado com banco de dados usando o Wix Velo.
            </li>
            <li>
              <strong>Lojas Online (E-commerce com Wix):</strong> Se você pretende vender produtos ou serviços, o Wix oferece a ferramenta Wix Stores. Neste módulo, mostramos como criar uma loja virtual do zero dentro do Wix: adicionando a página de loja, cadastrando produtos com imagens, preço e estoque, configurando métodos de pagamento e frete.
            </li>
            <li>
              <strong>Páginas Dinâmicas e CMS Avançado:</strong> À medida que seu site cresce, você pode precisar gerenciar conteúdo de forma escalável. Neste módulo avançado, explicamos como usar o Content Manager do Wix para criar coleções de dados e gerar páginas dinâmicas automaticamente.
            </li>
            <li>
              <strong>Otimização e SEO Básico no Wix:</strong> Não basta ter um site bonito – é preciso que ele seja encontrado nos buscadores. Neste módulo, você verá como otimizar seu site para mecanismos de busca usando os recursos do Wix.
            </li>
            <li>
              <strong>Publicação do Site e Gestão Contínua:</strong> Chegou a hora de publicar! Aqui, guiamos você pelos passos finais para lançar seu site. Você aprenderá como publicar seu site no Wix, conectar um domínio personalizado e gerenciar o site após a publicação.
            </li>
          </ol>

          <h2>Perguntas Frequentes (FAQ) 🤔</h2>
          <p>
            <strong>Preciso pagar para usar o Wix ou fazer este curso?</strong> Não. O Wix oferece planos gratuitos onde você pode criar e publicar seu site com um endereço Wix. Todas as aulas do curso são gratuitas, disponíveis no YouTube.
          </p>
          <p>
            <strong>Preciso saber programar ou ter experiência em web design?</strong> Não se preocupe! O curso foi feito para iniciantes. Você não precisa conhecer programação. O Wix utiliza um editor visual intuitivo, permitindo construir páginas apenas arrastando elementos e preenchendo textos e imagens.
          </p>
          <p>
            <strong>O curso aborda Wix Editor ou Wix Studio? Qual a diferença?</strong> Nós cobrimos principalmente o Wix Editor tradicional, que é a versão usada pela maioria dos usuários para criar sites. Entretanto, também apresentamos dicas e recursos do Wix Studio em alguns módulos avançados.
          </p>
          <p>
            <strong>Posso criar uma loja online completa com este curso?</strong> Sim! Temos um módulo dedicado a lojas online onde ensinamos a usar o Wix Stores. Você vai aprender a cadastrar produtos, configurar meios de pagamento e cálculo de frete.
          </p>
          <p>
            <strong>Como tiro dúvidas durante o aprendizado?</strong> Você pode comentar diretamente nos vídeos do YouTube – respondemos por lá sempre que possível. Além disso, mantemos uma comunidade nas redes sociais onde compartilhamos dicas extras.
          </p>
          <p>
            <strong>Receberei algum certificado ao concluir o curso?</strong> Atualmente, por se tratar de um curso aberto e gratuito no YouTube, não emitimos certificados. O objetivo principal é fornecer conhecimento prático para você aplicar imediatamente em seus projetos.
          </p>
          <p>
            <strong>Quais são os próximos passos após concluir este curso?</strong> Após terminar as aulas, recomendamos que você pratique criando outros tipos de site ou adicionando novos recursos ao seu projeto.
          </p>

          <h2>Aulas Grátis no YouTube e Próximos Cursos 🎥🎓</h2>
          <p>
            Além deste curso introdutório gratuito, a Winove oferece e planeja novos treinamentos para você se tornar um expert em Wix e em negócios digitais. Fique de olho nesses conteúdos e oportunidades a seguir:
          </p>
          <ul>
            <li>
              <strong>Curso Wix para Iniciantes (Gratuito no YouTube):</strong> Este é o curso que você acabou de conhecer! Todas as aulas estão disponíveis gratuitamente no nosso canal Winove Online.
            </li>
            <li>
              <strong>Curso Wix Avançado e Velo (Em Breve):</strong> Em desenvolvimento. Um curso pago voltado para usuários que desejam se aprofundar nas ferramentas avançadas do Wix.
            </li>
            <li>
              <strong>Curso de Marketing Digital para Websites (Em Breve):</strong> Em planejamento. Criar um site é o primeiro passo; atrair visitantes e converter vendas é o próximo desafio.
            </li>
          </ul>
          <p>
            Esperamos que este conteúdo tenha ajudado você a entender como criar e gerenciar seu site no Wix. 🚀 Vamos juntos transformar suas ideias em um site de verdade!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cursos;


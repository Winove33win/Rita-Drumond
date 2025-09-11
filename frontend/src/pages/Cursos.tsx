import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useSEO } from "@/lib/seo";

const modules = [
  {
    title: "Planejamento do Site",
    description:
      "Entenda os objetivos e prepare a estrutura antes de começar.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Criando Conta e Template",
    description:
      "Passo a passo para criar conta e escolher o template ideal.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Dominando o Editor",
    description: "Layout, elementos e design responsivo.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Estrutura do Site",
    description: "Páginas, menus e navegação.",
    comingSoon: true,
  },
  {
    title: "Formulários de Contato e Blog",
    description: "Recursos essenciais para engajar visitantes.",
    comingSoon: true,
  },
  {
    title: "Lojas Online",
    description: "E-commerce com Wix Stores.",
    comingSoon: true,
  },
  {
    title: "Páginas Dinâmicas e CMS",
    description: "Content Manager e páginas automáticas.",
    comingSoon: true,
  },
  {
    title: "Otimização e SEO",
    description: "Seja encontrado nos buscadores.",
    comingSoon: true,
  },
  {
    title: "Publicação e Gestão",
    description: "Publique e mantenha seu site.",
    comingSoon: true,
  },
];

const faqs = [
  {
    q: "Preciso pagar para usar o Wix ou fazer este curso?",
    a: "Não. O Wix oferece planos gratuitos e todo o curso está disponível no YouTube sem custo.",
  },
  {
    q: "Preciso saber programar ou ter experiência em web design?",
    a: "Não se preocupe, o curso é para iniciantes e o Wix usa um editor visual intuitivo.",
  },
  {
    q: "O curso aborda Wix Editor ou Wix Studio? Qual a diferença?",
    a: "Cobrimos principalmente o Wix Editor tradicional, com dicas sobre o Wix Studio em módulos avançados.",
  },
  {
    q: "Posso criar uma loja online completa com este curso?",
    a: "Sim! Há um módulo dedicado ao Wix Stores para você vender produtos e serviços.",
  },
  {
    q: "Como tiro dúvidas durante o aprendizado?",
    a: "Comente nos vídeos do YouTube ou participe da nossa comunidade nas redes sociais.",
  },
  {
    q: "Receberei algum certificado ao concluir o curso?",
    a: "No momento não emitimos certificados, o foco é o aprendizado prático.",
  },
];

const Cursos = () => {
  useSEO({
    title: "Curso: Como Criar e Gerenciar Sites no Wix | Winove",
    description:
      "Aprenda a criar e gerenciar sites profissionais no Wix com o curso gratuito da Winove.",
    canonical: "https://www.winove.com.br/cursos",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center min-h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <Badge className="mb-4 px-4 py-2">Curso</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Aprenda a Criar e Gerenciar Sites no Wix
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Domine a plataforma Wix, crie sites incríveis e gerencie seu negócio
            online de forma profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600"
              asChild
            >
              <a
                href="https://www.youtube.com/@winoveonline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comece Agora (Grátis)
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#grade">Ver Grade Completa do Curso</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section
        id="grade"
        className="container mx-auto px-4 py-24 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Grade do Curso</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {modules.map((mod, i) => (
            <Card
              key={i}
              className={cn("flex flex-col", mod.comingSoon && "opacity-60")}
            >
              <CardHeader>
                <CardTitle>{mod.title}</CardTitle>
                <CardDescription>{mod.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                {mod.link ? (
                  <Button asChild className="w-full">
                    <a
                      href={mod.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Assistir no YouTube
                    </a>
                  </Button>
                ) : (
                  <Badge variant="secondary">Em Breve</Badge>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 text-center py-16">
        <p className="text-lg md:text-xl mb-8 font-medium">
          Mais de 5.000 visualizações no canal e dezenas de sites criados pelos
          alunos.
        </p>
      </section>
      <Testimonials />

      {/* FAQ */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Perguntas Frequentes
        </h2>
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto text-left"
        >
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-zinc-900 to-zinc-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Todas essas aulas são gratuitas no nosso canal.
          </h2>
          <p className="text-lg mb-8">
            Inscreva-se no YouTube e comece hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600"
              asChild
            >
              <a
                href="https://www.youtube.com/@winoveonline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Assistir no YouTube
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:contato@winove.com.br?subject=Curso%20Avan%C3%A7ado%20Wix">
                Avise-me sobre o Curso Avançado
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cursos;

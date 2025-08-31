import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Promocoes = () => {
  const promotions = [
    {
      title: "Templates com 20% de desconto",
      description: "Aproveite nossos templates profissionais com um desconto especial neste mês.",
      link: "/templates",
    },
    {
      title: "E-mail Corporativo 10% off",
      description: "Tenha um e-mail profissional com preço reduzido durante o período promocional.",
      link: "/email-corporativo",
    },
    {
      title: "Chat WhatsApp gratuito na contratação de sites",
      description: "Contrate um site e ganhe nosso sistema de chat WhatsApp por tempo limitado.",
      link: "/chat-whatsapp",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Promoções do Mês
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Confira as ofertas especiais que preparamos para você.
          </p>
        </div>
        <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo) => (
            <Card key={promo.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{promo.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>{promo.description}</p>
              </CardContent>
              <CardFooter>
                <Link to={promo.link}>
                  <Button className="btn-primary">Saiba mais</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Promocoes;

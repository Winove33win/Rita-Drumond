import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ActionCard {
  title: string;
  description: string;
  path: string;
}

const actions: ActionCard[] = [
  {
    title: "Voltar para Home",
    description: "Visite a página inicial e descubra nossos serviços.",
    path: "/",
  },
  {
    title: "Explorar Templates",
    description: "Veja nossos modelos personalizados para seu negócio.",
    path: "/templates",
  },
  {
    title: "Ler o Blog",
    description: "Confira artigos e novidades no nosso blog.",
    path: "/blog",
  },
  {
    title: "Ver Cases",
    description: "Conheça os cases de sucesso de nossos clientes.",
    path: "/cases",
  },
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (

    <div className="min-h-screen bg-background text-foreground flex flex-col font-inter">
      <Header />
      <main className="flex-grow container mx-auto px-4 flex flex-col items-center justify-center py-24">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8 text-center">
          Ops! A página que você procura não foi encontrada.
        </p>
        <div className="grid gap-6 w-full max-w-4xl md:grid-cols-2">
          {actions.map((action) => (
            <Card key={action.path}>
              <CardHeader>
                <CardTitle>{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={() => navigate(action.path)}>Ir</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

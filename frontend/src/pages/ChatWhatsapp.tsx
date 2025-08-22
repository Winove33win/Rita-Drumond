import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, QrCode, Plug } from "lucide-react";

const ChatWhatsapp = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5 text-center">
        <div className="container mx-auto">
          <Badge className="mb-4 px-4 py-2">Chat Whatsapp</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Atendimento no Whatsapp
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Conecte seu negócio ao Whatsapp e distribua conversas para diversos usuários com um único número.
          </p>
        </div>
      </section>

      {/* Connection Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Formas de Conexão</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plug className="w-6 h-6 text-primary" />
                  API Oficial
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Integração indicada para operações que exigem estabilidade e alto volume.</p>
                <ul className="list-disc list-inside text-sm">
                  <li>Sem limite prático de contas conectadas.</li>
                  <li>Tempo de resposta otimizado.</li>
                  <li>Recomendado para empresas em crescimento.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="w-6 h-6 text-primary" />
                  Conexão via QR Code
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Opção simples para iniciar rapidamente sem necessidade de homologação.</p>
                <ul className="list-disc list-inside text-sm">
                  <li>Suporta no máximo 3 contas.</li>
                  <li>Tempo de resposta pode variar conforme o dispositivo.</li>
                  <li>Ideal para testes ou pequenas equipes.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center text-muted-foreground max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Um número geral, vários usuários</span>
            </div>
            <p>
              Independentemente da forma de conexão, todas as mensagens chegam a um número único e podem ser atendidas por diferentes usuários simultaneamente.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChatWhatsapp;


import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, PhoneCall, Clock, Plug } from "lucide-react";

const features = [
  { icon: CheckCircle, text: "Chamados abertos, pendentes, resolvidos e chatbot" },
  { icon: CheckCircle, text: "Funil de vendas, exportação das conversas em PDF, logs e registros" },
  { icon: CheckCircle, text: "Sincronização com Typebot, ChatGPT e n8n" },
  { icon: CheckCircle, text: "Gestão de oportunidades com ações, calendário e visualização kanban" },
  { icon: CheckCircle, text: "Mensagens rápidas" },
  { icon: Calendar, text: "Agendamento de mensagens com parâmetros (ex: aniversariantes)" },
  { icon: PhoneCall, text: "Suporte para chamadas VoIP e logs" },
  { icon: CheckCircle, text: "Avaliação de atendimento" },
  { icon: Clock, text: "Horário de atendimento configurável com cadastro de feriados" },
  { icon: Plug, text: "Integração com API externa" },
];

const aiIntegrations = [
  "Typebot", "ChatGPT", "Grok", "Gemini", "Qwen", "Claude", "DeepSeek",
  "n8n", "Dify", "Ollama", "LM Studio", "Dialogflow"
];

const otherIntegrations = [
  "Webhooks", "Meta", "Webchat", "Evolution API", "Wuzapi API",
  "Hub Notificame", "SMS Vapi", "groqCloud"
];

const CentralAtendimento = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5 text-center">
        <div className="container mx-auto">
          <Badge className="mb-4 px-4 py-2">Central de Atendimento</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Plataforma de Atendimento Completa
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Organize suas conversas, automatize processos e integre seu atendimento com as principais ferramentas do mercado.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recursos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <f.icon className="w-5 h-5 text-primary" />
                    {f.text}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Integrações</h2>
          <p className="text-center text-muted-foreground mb-8">Conecte sua central às principais plataformas do mercado.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>IA e Automação</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {aiIntegrations.map(name => (
                  <Badge key={name} variant="secondary">{name}</Badge>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Outras Conexões</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {otherIntegrations.map(name => (
                  <Badge key={name} variant="secondary">{name}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional */}
      <section className="py-16 px-4">
        <div className="container mx-auto space-y-12 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Testar BM</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Verificação para confirmar integração com a Meta. Em caso de erro, o sistema informa imediatamente.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Templates de Configuração</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Modelos prontos para agilizar a implementação de fluxos e integrações.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Valores</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Planos com o mínimo de 5 usuários a partir de <strong>R$ 50,00 por mês</strong>.
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CentralAtendimento;


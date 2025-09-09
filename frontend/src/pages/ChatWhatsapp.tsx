import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessagesSquare, CalendarClock, QrCode, Cpu, ShieldCheck, Users, Bot, Webhook, Settings, Zap, PhoneCall, Clock8, BarChart3, Server, Link as LinkIcon } from "lucide-react";

export default function ChatWhatsapp() {
  return (
      <div className="min-h-screen">
        {/* Hero */}
        <section className="section--first pb-16" aria-labelledby="chatwhats-hero">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge variant="secondary" className="mb-3">WhatsApp Omnichannel</Badge>
            <h1 id="chatwhats-hero" className="text-3xl md:text-5xl font-bold tracking-tight">Chat WhatsApp com automações e IA</h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Conecte um número geral do seu negócio, distribua conversas entre múltiplos atendentes e acelere respostas com fluxos, IA e integrações.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=5519982403845"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">Solicitar integração</Button>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5519982403845"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">Agendar treinamento</Button>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5519982403845"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="ghost" className="underline-offset-4 hover:underline">Falar com especialista</Button>
              </a>
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4" /> Conexão oficial com verificação e auditoria de logs
            </div>
          </div>

          {/* Comparativo QR x API (visual) */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><QrCode className="h-4 w-4" />Conexão via QR Code</CardTitle>
                <CardDescription>Uso rápido, porém limitado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Clock8 className="h-4 w-4" /> Variação de resposta em picos</p>
                <p className="flex items-center gap-2"><PhoneCall className="h-4 w-4" /> Depende do aparelho logado</p>
                <p className="flex items-center gap-2"><BarChart3 className="h-4 w-4" /> <b>~3 sessões</b> estáveis</p>
                <div className="mt-3">
                  <p className="text-xs mb-1">Estabilidade</p>
                  <div className="h-2 rounded bg-muted">
                    <div className="h-2 rounded bg-primary/60 w-2/5" aria-label="estabilidade baixa" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><Cpu className="h-4 w-4" />Conexão via API (recomendada)</CardTitle>
                <CardDescription>Escalável, estável e auditável</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Server className="h-4 w-4" /> Infra estável e auditável</p>
                <p className="flex items-center gap-2"><Users className="h-4 w-4" /> Múltiplos atendentes no mesmo número</p>
                <p className="flex items-center gap-2"><LinkIcon className="h-4 w-4" /> Webhooks, templates e BM/Meta</p>
                <div className="mt-3">
                  <p className="text-xs mb-1">Estabilidade</p>
                  <div className="h-2 rounded bg-muted">
                    <div className="h-2 rounded bg-primary w-4/5" aria-label="estabilidade alta" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </section>

      {/* O que você consegue fazer */}
      <section className="container mx-auto px-4 pb-8" aria-labelledby="chatwhats-acao">
        <h2 id="chatwhats-acao" className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">O que você consegue fazer</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" /> Atendentes múltiplos</CardTitle>
              <CardDescription>Um número, vários usuários</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Direcione ou distribua conversas automaticamente. Permissões por equipe, histórico e ownership de contato.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><MessagesSquare className="h-5 w-5" /> Central de Conversas</CardTitle>
              <CardDescription>Aberto • Pendente • Resolvido • Chatbot</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Exporte conversas em PDF, acesse logs, registre atividades e acompanhe o funil de vendas por conversa.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Bot className="h-5 w-5" /> Sincronização com IA</CardTitle>
              <CardDescription>Typebot, ChatGPT e n8n</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Integre fluxos conversacionais, automações e roteamento inteligente com ferramentas no-code/low-code.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Módulos da plataforma (resumo) */}
      <section className="container mx-auto px-4 py-10" aria-labelledby="chatwhats-modulos">
        <h2 id="chatwhats-modulos" className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Integrações & Conectores</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Webhook className="h-5 w-5" /> Canais & Integrações</CardTitle>
              <CardDescription>Omnichannel & APIs</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><b>IA:</b> Typebot, ChatGPT, Grok, Gemini, Qwen, Claude, DeepSeek, Dify, Ollama, LM Studio, Dialogflow.</p>
              <p><b>Canais & gateways:</b> Webhooks, Meta, Webchat, Evolution API, Wuzapi API, Hub Notificame, SMS Vapi, GroqCloud.</p>
              <p><b>Templates:</b> modelos aprovados e fluxos reutilizáveis.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Settings className="h-5 w-5" /> Templates de configuração</CardTitle>
              <CardDescription>Implante padrões em minutos</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Modelos de mensagens, horários, feriados, SLAs e fluxos de triagem.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Preços */}
      <section className="container mx-auto px-4 py-10" aria-labelledby="chatwhats-precos">
        <h2 id="chatwhats-precos" className="sr-only">Planos e valores</h2>
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5" /> Planos e valores</CardTitle>
            <CardDescription>Mínimo de 5 usuários por conta</CardDescription>
          </CardHeader>
          <CardContent className="text-sm md:text-base text-muted-foreground">
            <p><b>Base:</b> R$ 1.533/ano (plano anual para até 5 usuários).</p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=5519982403845"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm">Solicitar integração</Button>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5519982403845"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="outline">Agendar treinamento</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA final */}
      <section className="container mx-auto px-4 py-10 pb-20" aria-labelledby="chatwhats-cta">
        <h2 id="chatwhats-cta" className="sr-only">Chamada para ação</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-2xl border">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Pronto para profissionalizar seu WhatsApp?</h3>
            <p className="text-muted-foreground">Veja um fluxo completo em 15 minutos.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=5519982403845"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg"><MessagesSquare className="h-4 w-4 mr-2" />Solicitar integração</Button>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5519982403845"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline"><CalendarClock className="h-4 w-4 mr-2" />Agendar treinamento</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


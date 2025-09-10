import { ExternalLink, Info, Eye, Headphones, Sparkles } from "lucide-react";

export default function CinemaCegoSection() {
  return (
    <section id="cinema-cego" className="container mx-auto py-16 md:py-24 px-6">
      {/* Logo + Título */}
      <div className="flex flex-col items-center text-center gap-6">
        <img
          src="/assets/cinema-cego-logo.png"
          alt="Cinema Cego"
          className="h-20 object-contain"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            // evita loop e flicker
            img.onerror = null;
            img.src = "/placeholder.svg";
          }}
        />
        <h2 className="text-3xl md:text-4xl font-bold">
          🎬 Cinema Cego: Transformando o jeito de viver o cinema
        </h2>
        <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
          O <strong>Cinema Cego</strong> nasceu para reinventar a forma de viver a sétima arte.
          Enquanto grande parte das produções audiovisuais exclui quem tem deficiência visual,
          o projeto cria experiências totalmente inclusivas — mostrando que a arte é universal.
        </p>
      </div>

      {/* Fundadora */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <img
          src="/assets/jane-menezes.png"
          alt="Jane Menezes - Fundadora do Cinema Cego"
          className="h-40 w-40 rounded-full object-cover shadow-lg"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            // tenta extensão alternativa uma vez antes do placeholder
            if (!(img as any)._altTried) {
              (img as any)._altTried = true;
              img.src = "/assets/jane-menezes.jpg";
            } else {
              img.onerror = null;
              img.src = "/placeholder.svg";
            }
          }}
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">Jane Menezes • Fundadora</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Com sensibilidade e visão inovadora, <strong>Jane Menezes</strong> idealizou o Cinema Cego
            para romper barreiras no audiovisual e promover experiências que unem tecnologia, arte e acessibilidade.
          </p>
        </div>
      </div>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <a
          href="https://www.cinemacego.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2"
        >
          Visitar site oficial <ExternalLink className="w-4 h-4" />
        </a>
        <a
          href="https://www.cinemacego.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex items-center gap-2"
        >
          Conhecer o projeto <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Audiodescrição */}
      <div className="mt-20 p-8 rounded-2xl glass max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5 text-primary" />
          <p className="uppercase tracking-wide text-sm font-medium text-primary">
            Acessibilidade em foco
          </p>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          👁️‍🗨️ O que é Audiodescrição?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Eye className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-semibold mb-2">Definição</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A <strong>audiodescrição</strong> transforma imagens em palavras. Ela descreve expressões, cenários,
              figurinos e até silêncios significativos de forma clara e dinâmica.
            </p>
          </div>
          <div>
            <Headphones className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-semibold mb-2">Como funciona</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Um roteiro descritivo é narrado por voz treinada e inserido nos intervalos naturais do áudio,
              garantindo ritmo e emoção sem interrupções.
            </p>
          </div>
          <div>
            <Sparkles className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-semibold mb-2">Impacto</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dá autonomia a pessoas com deficiência visual, amplia a experiência cultural para todos
              e reforça o compromisso com inclusão e acessibilidade.
            </p>
          </div>
        </div>
        <p className="mt-6 text-lg font-semibold text-primary text-center">
          ✨ A audiodescrição dá voz às imagens e abre portas para novas formas de viver histórias.
        </p>
      </div>
    </section>
  );
}


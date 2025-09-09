import { useState } from "react";
import { LibrasLeadForm } from "@/components/forms/LibrasLeadForm";
import heroBg from "@/assets/hero-background.jpg";
import { useSEO } from "@/lib/seo";
import CinemaCegoSection from "@/components/CinemaCegoSection";

export default function LibrasPage() {
  const [sent, setSent] = useState(false);

  useSEO({
    title: "Interpretação de Libras em SP e Janela de Libras para Vídeos | Winove",
    description:
      "Cobertura presencial em São Paulo e janela de Libras para vídeos. Equipes certificadas, NBR 15290 e revezamento para eventos >1h. Proposta em até 24h.",
    canonical: "https://www.winove.com.br/servicos/libras",
    noindex: true,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Interpretação de Libras (SP) e Janela de Libras para Vídeos",
      provider: { "@type": "Organization", name: "Winove" },
      areaServed: { "@type": "AdministrativeArea", name: "São Paulo" },
      serviceType: "Libras Presencial; Janela de Libras",
      offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
      audience: {
        "@type": "Audience",
        audienceType: ["Empresas", "Palestrantes", "Produtoras"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Formatos",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Presencial (SP)" } },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Conteúdos gravados (Janela de Libras)",
            },
          },
        ],
      },
    },
  });

  // Assets públicos devem usar caminho absoluto para não quebrar em rotas aninhadas
  const videoSrc = `/assets/hero-libras.mp4?v=2`;
  const posterSrc = heroBg;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HERO — VÍDEO DE FUNDO + OVERLAY (apenas nesta página) */}
      <section className="relative isolate min-h-[70vh] flex items-center">
        {/* Vídeo de fundo (movimento sutil) */}
        <video
          className="absolute inset-0 h-full w-full object-cover motion-safe:opacity-20 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Overlay escuro principal */}
        <div aria-hidden className="absolute inset-0 bg-black/80" />
        {/* Gradiente para reforçar legibilidade (vignette) */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

        {/* Conteúdo do hero */}
        <div className="relative z-10 container mx-auto px-6 pt-[var(--header-h)] pt-24 md:pt-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Interpretação de Libras <span className="text-orange-400">SP presencial</span> &{" "}
              <span className="text-orange-400">conteúdos gravados</span>
            </h1>
            <p className="mt-5 text-lg text-neutral-300">
              Aumente alcance, cumpra a legislação e entregue experiências verdadeiramente inclusivas.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#orcamento" className="px-5 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold">
                Solicitar orçamento
              </a>
              <a
                href="https://wa.me/5519982403845?text=Gostaria%20de%20falar%20sobre%20os%20servi%C3%A7os%20de%20interpreta%C3%A7%C3%A3o%20de%20Libras&utm_source=site&utm_medium=cta&utm_campaign=libras"
                className="px-5 py-3 border border-neutral-700 hover:border-neutral-500 rounded-xl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp sobre interpretação em Libras"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cinema Cego Section */}
      <CinemaCegoSection />

      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold">Por que contratar</h2>
          <ul className="mt-4 space-y-3 text-neutral-300">
            <li>• Cobertura presencial na região de São Paulo.</li>
            <li>• Janela de Libras para vídeos conforme NBR 15290.</li>
            <li>• Escala de intérpretes e revezamento para &gt; 1h.</li>
            <li>• Briefing, glossário, ensaio e QA.</li>
            <li>• Compliance, NF e contratos.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/50">
          <h3 className="font-semibold">Formatos</h3>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
              <div className="text-orange-400 font-semibold">Presencial (SP)</div>
              <p className="text-sm text-neutral-300 mt-2">Palestras, convenções, treinamentos, lançamentos.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
              <div className="text-orange-400 font-semibold">Conteúdos gravados</div>
              <p className="text-sm text-neutral-300 mt-2">Janela de Libras para vídeos, EAD, institucionais.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/50">
          <h2 className="text-2xl font-bold">Como funciona</h2>
          <ol className="mt-4 space-y-3 text-neutral-300">
            <li>1) Briefing do evento ou vídeo</li>
            <li>2) Proposta (escopo, escala, custos e prazos)</li>
            <li>3) Execução (presencial ou estúdio/janela)</li>
            <li>4) QA NBR 15290</li>
            <li>5) Entrega + pós-evento</li>
          </ol>
        </div>
      </section>

      {/* --- CONHEÇA O PESSOAL (antes do orçamento) --- */}
      <section id="equipe" className="container mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold">Conheça o pessoal</h2>
          <p className="mt-2 text-neutral-300">
            Equipe certificada e experiente em interpretação de Libras para eventos e conteúdos gravados.
          </p>
        </div>

        {(() => {
          const team = [
            {
              name: "Camila Azevedo",
              src: `/team/camila.jpg?v=2`,
              formacao: "Bacharelado em Letras/Libras (UFSC) · Certificação Prolibras (MEC)",
            },
            {
              name: "Rafael Nogueira",
              src: `/team/rafael.jpg?v=2`,
              formacao:
                "Licenciatura em Letras/Libras (UFRJ) · Esp. em Tradução e Interpretação de Libras (PUC-SP)",
            },
            {
              name: "Winove",
              src: `/favicon.png`,
              formacao: "Em breve",
            },
          ];

          return (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((m) => (
                <figure
                  key={m.name}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 text-center"
                >
                  <img
                    src={m.src}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"; }}
                    alt={`Foto de ${m.name}`}
                    loading="lazy"
                    decoding="async"
                    width={160}
                    height={160}
                    className="mx-auto h-40 w-40 rounded-full object-cover ring-2 ring-white/10 shadow"
                  />
                  <figcaption className="mt-4 text-lg font-semibold">{m.name}</figcaption>
                  <p className="mt-1 text-sm text-neutral-300">{m.formacao}</p>
                </figure>
              ))}
            </div>
          );
        })()}
      </section>

      <section id="orcamento" className="container mx-auto px-6 py-16 scroll-mt-[var(--header-h)]">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold">Solicite um orçamento</h2>
            <p className="mt-2 text-neutral-300">Retornamos com proposta em até 24 horas úteis.</p>
            <div className="mt-6">
              <LibrasLeadForm onSuccess={() => setSent(true)} />
              {sent && (
                <p className="mt-3 text-green-400">Recebemos seu pedido! Entraremos em contato em breve.</p>
              )}
            </div>
          </div>
          <aside className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/50">
            <h3 className="font-semibold">Requisitos & Compliance</h3>
            <ul className="mt-3 text-sm text-neutral-300 space-y-2">
              <li>• NBR 15290 (janela de Libras para vídeos)</li>
              <li>• Revezamento para atividades &gt; 1h (Lei 14.704/2023)</li>
              <li>• Plano de contingência (intérprete backup quando aplicável)</li>
              <li>• Dress code, contraste e enquadramento para melhor legibilidade</li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}

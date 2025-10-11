# Auditoria de SEO – Winove

## Visão geral
- **Objetivo:** mapear o estado atual de SEO das rotas estáticas e dinâmicas do site Winove (frontend React + Vite) e identificar pontos fortes, lacunas e ações prioritárias.
- **Escopo:** análise de metadados (`<title>`, `meta`, `link rel="canonical"`), dados estruturados, diretivas de indexação e conteúdo renderizado nas páginas expostas via `react-router-dom`.
- **Ferramentas avaliadas:** componente utilitário `SEO` (React Helmet), configurações globais em `index.html` e `robots.txt`, rotas principais (`/`, `/blog`, `/blog/:slug`, `/cases`, `/cases/:slug`, `/templates`, `/templates/:slug`, ofertas de serviços e páginas transacionais).

## Metodologia resumida
1. Inspeção manual dos arquivos de rota (`frontend/src/pages/*.tsx`) e do helper `frontend/src/lib/seo.tsx` para entender os metadados injetados em cada página.
2. Comparação das configurações globais (`frontend/index.html`, `robots.txt`) com as definições específicas de página.
3. Levantamento de estados alternativos (loading, erro) para garantir que páginas dinâmicas tratem `noindex`/`canonical` adequadamente.
4. Registro de gaps e recomendações seguindo boas práticas de SEO técnico (Open Graph, Twitter Cards, dados estruturados, controle de indexação).

## Configurações globais
- O `index.html` define título, descrição, canonical e pacotes OG/Twitter genéricos para toda a aplicação, além de dois blocos de dados estruturados (`Organization` e `WebSite`). 【F:frontend/index.html†L1-L63】
- O `robots.txt` permite indexação completa e declara o `Sitemap`. 【F:robots.txt†L1-L17】
- O helper `SEO` encapsula `<Helmet>` e já cobre `<title>`, descrição, canonical, OG básico, imagem, `noindex` e JSON-LD arbitrário, mas não replica as metas de Twitter nem `og:site_name`. 【F:frontend/src/lib/seo.tsx†L1-L48】

## Rotas estáticas (conteúdo fixo)
| Rota | Metadados | Dados estruturados | Observações |
| --- | --- | --- | --- |
| `/` | Usa `SEO` com título, descrição e canonical; componentes de conteúdo carregados normalmente. 【F:frontend/src/pages/Index.tsx†L19-L41】 | `WebPage` simples com nome e URL. 【F:frontend/src/pages/Index.tsx†L25-L30】 | Boa base, mas sem Twitter Cards dinâmicos.
| `/email-corporativo` | Metadados completos via `SEO`; JSON-LD de `Service`. 【F:frontend/src/pages/EmailCorporativo.tsx†L25-L55】【F:frontend/src/pages/EmailCorporativo.tsx†L31-L39】 | Sim | Conteúdo rico e CTAs claros; considerar `FAQPage` para seção de perguntas frequentes.
| `/chat-whatsapp` | Metadados completos e esquema `Service`. 【F:frontend/src/pages/ChatWhatsapp.tsx†L9-L23】 | Sim | Página extensa com headings consistentes.
| `/central-atendimento` | Metadados e `Service`. 【F:frontend/src/pages/CentralAtendimento.tsx†L9-L23】 | Sim | Estrutura enxuta; sugere-se ampliar conteúdo textual.
| `/cursos` | Metadados e JSON-LD de `Course`. 【F:frontend/src/pages/Cursos.tsx†L61-L85】 | Sim | Possui conteúdo educativo e FAQ.
| `/promocoes` | **Atualizado:** adiciona `SEO` com título/descrição/canonical. 【F:frontend/src/pages/Promocoes.tsx†L26-L68】 | Não | Avaliar uso de marcação `OfferCatalog` para destacar pacotes.
| `/servicos/libras` | Metadados com `noindex` (serviço sazonal) e JSON-LD detalhado. 【F:frontend/src/pages/Libras.tsx†L13-L49】 | Sim | Conteúdo extenso; manter revisão periódica do `noindex`.

## Rotas dinâmicas (conteúdo CMS/API)
| Rota | Metadados | Dados estruturados | Observações |
| --- | --- | --- | --- |
| `/blog` | Usa `SEO` com canonical e descrição; JSON-LD do tipo `Blog` gerado a partir dos posts carregados. 【F:frontend/src/pages/BlogList.tsx†L166-L213】 | `Blog` com cada `BlogPosting` listado. 【F:frontend/src/pages/BlogList.tsx†L150-L156】 | Enquanto a requisição está em progresso o array está vazio → JSON-LD inicial sem posts; considerar fallback estático mínimo.
| `/blog/:slug` | Metadados completos, `og:image`, `article` e JSON-LD `BlogPosting`. Também trata estado “não encontrado” com `noindex`. 【F:frontend/src/pages/BlogPost.tsx†L83-L129】 | Sim | Boa cobertura; validar se `post.coverImage` sempre retorna URL absoluta.
| `/cases` | Lista cases com JSON-LD `CollectionPage` + `CaseStudy`. 【F:frontend/src/pages/CasesList.tsx†L35-L55】 | Sim | Conteúdo enxuto (cards); reforçar texto introdutório para SEO on-page.
| `/cases/:slug` | Metadados dinâmicos, imagem e JSON-LD `CaseStudy`; fallback `noindex` quando não encontra dados. 【F:frontend/src/pages/CaseDetail.tsx†L55-L114】 | Sim | Checar enriquecimento dos campos `metrics`/`gallery` para experiência completa.
| `/templates` | Metadados e JSON-LD `CollectionPage`. 【F:frontend/src/pages/Templates.tsx†L59-L103】 | Sim | Filtro/search ajudam na UX; considerar meta de paginação (`rel=next/prev`) se virar server-side.
| `/templates/:slug` | **Atualizado:** agora injeta metadados dinâmicos, imagem, oferta (`Product` JSON-LD) e trata estados `loading`/`not found` com `noindex`. 【F:frontend/src/pages/TemplateDetail.tsx†L26-L205】 | Sim | Rever descrição padrão (`fallbackDescription`) para evitar duplicidade entre templates vazios.

## Páginas transacionais e utilitárias
| Rota | Estado de indexação | Observações |
| --- | --- | --- |
| `/payment-success` | **Atualizado:** possui `noindex` + canonical próprio. 【F:frontend/src/pages/PaymentSuccess.tsx†L8-L79】 | Evita indexação de páginas de confirmação.
| `/payment-canceled` | **Atualizado:** `noindex` e canonical dedicado. 【F:frontend/src/pages/PaymentCanceled.tsx†L8-L75】 | Inclui CTAs de retomada.
| `/admin` | **Atualizado:** aplica `noindex` tanto no login quanto no painel autenticado. 【F:frontend/src/pages/Admin.tsx†L1-L77】【F:frontend/src/pages/Admin.tsx†L200-L260】 | Importante para impedir exposição do painel.
| `*` (404) | **Atualizado:** `noindex` com canonical dinâmico e sugestões de navegação. 【F:frontend/src/pages/NotFound.tsx†L54-L85】 | Melhora experiência e garante que erros não indexem.

## Lacunas e recomendações
1. **Metadados de rede social:** o helper `SEO` não replica `twitter:*` nem `og:site_name`. Adicionar essas metas garantirá consistência com o `index.html` sem depender apenas do head estático. 【F:frontend/src/lib/seo.tsx†L25-L47】【F:frontend/index.html†L13-L22】
2. **Fallback de dados estruturados:** em `/blog` e `/templates`, os JSON-LD dependem de chamadas cliente. Incluir uma estrutura mínima mesmo antes do carregamento (ex.: lista vazia com data atual) evita flashes de markup ausente. 【F:frontend/src/pages/BlogList.tsx†L150-L173】【F:frontend/src/pages/Templates.tsx†L21-L72】
3. **Controle de canonical dinâmico:** garantir que URLs fornecidas pelas APIs (`coverImage`, `demoUrl`) retornem caminhos absolutos com protocolo para evitar warnings em validadores.
4. **Conteúdo suplementar:** páginas de listagem (`/cases`, `/promocoes`) poderiam receber introduções mais extensas e FAQs para responder intenções de busca long-tail.
5. **Sitemap / páginas órfãs:** `robots.txt` referencia `/sitemap.xml` mas o arquivo não está versionado. Incluir processo de geração automática no deploy para manter o índice dos conteúdos dinâmicos.
6. **Performance & Core Web Vitals:** muitas páginas carregam grids e imagens grandes; validar lazy-loading/`loading="lazy"` em todas as `<img>` (alguns componentes já aplicam, outros não) para preservar LCP.

## Próximos passos sugeridos
- Estender o componente `SEO` para suportar Twitter Cards e parâmetros default (`site_name`, `locale`, `titleTemplate`).
- Criar utilitário central para URLs absolutas de mídia (blog, templates, cases) e evitar divergências quando os dados vêm apenas com caminhos relativos.
- Documentar fluxo de atualização do sitemap e monitorar Google Search Console para garantir que as páginas `noindex` permanecem fora do índice.
- Revisitar periodicamente páginas com `noindex` (ex.: `/servicos/libras`) para confirmar se a estratégia ainda faz sentido comercialmente.


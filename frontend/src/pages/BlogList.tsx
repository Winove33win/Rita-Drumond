import { useEffect, useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/lib/seo";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  category: string;
}

interface CategoryItem { name: string; count: number; }

function calcReadingTime(content: string): string {
  const words = content.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))}`;
}

export const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [categoryItems, setCategoryItems] = useState<CategoryItem[]>([]);

  // Normaliza categorias para filtros consistentes
  const canonicalizeCategory = (raw: string | null | undefined): string => {
    const k = (raw || "").trim().toLowerCase();
    if (!k) return "";
    if (k === "seo") return "SEO";
    if (k === "wix studio" || k === "wix" || k === "editor x") return "Wix Studio";
    if (k === "marketing" || k === "marketing digital" || k === "mkt digital") return "Marketing";
    return raw!.trim().replace(/^(.)/, (m) => m.toUpperCase());
  };

  // Carrega categorias com contagem do servidor
  useEffect(() => {
    const API = import.meta.env.VITE_API_URL || "/api";
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API}/blog-posts/categories`);
        if (!res.ok) return;
        const raw: { category: string; count: number }[] = await res.json();
        const map = new Map<string, number>();
        for (const r of raw) {
          const key = canonicalizeCategory(r.category);
          map.set(key, (map.get(key) || 0) + Number(r.count || 0));
        }
        const priority = ["SEO", "Wix Studio", "Marketing"];
        const others: CategoryItem[] = [];
        map.forEach((count, name) => {
          if (!priority.includes(name)) others.push({ name, count });
        });
        const ordered: CategoryItem[] = [
          ...priority.filter((p) => map.has(p)).map((p) => ({ name: p, count: map.get(p)! })),
          ...others.sort((a, b) => b.count - a.count),
        ];
        setCategoryItems(ordered);
      } catch (err) {
        console.error('fetch categories', err);
      }
    };
    fetchCategories();
  }, []);


  const API = import.meta.env.VITE_API_URL || "/api";
  const fetchPage = async (
    pageToLoad: number,
    reset = false,
    override?: { q?: string; category?: string | null }
  ) => {
    setLoading(true);
    try {
      const qUse = override?.q ?? searchTerm;
      const catUse = override?.category ?? selectedCategory;
      const qs = new URLSearchParams({ page: String(pageToLoad), pageSize: String(PAGE_SIZE) });
      if (qUse) qs.append('q', qUse);
      if (catUse) qs.append('category', catUse);
      const res = await fetch(`${API}/blog-posts/search?${qs.toString()}`);
      if (!res.ok) throw new Error(`${res.status}`);
      const data: { items: BlogPost[]; total: number; page: number; pageSize: number } = await res.json();
      setTotal(data.total || 0);
      setPage(pageToLoad);
      setPosts((prev) => (reset ? data.items : [...prev, ...data.items]));
    } catch (err) {
      console.error('fetch blog-posts/search', err);
    } finally {
      setLoading(false);
    }
  };
  // SEO for Blog list (using loaded posts)
  useSEO({
    title: "Blog & Insights | Winove",
    description: "Conteúdos exclusivos, tendências e estratégias para manter seu negócio sempre à frente no mundo digital",
    canonical: "https://www.winove.com.br/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Winove Blog",
      url: "https://www.winove.com.br/blog",
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        image: p.coverImage,
        datePublished: p.date,
        author: { "@type": "Person", name: p.author },
        url: `https://www.winove.com.br/blog/${p.slug}`,
      })),
    },
  });

  // Carrega a primeira pÃ¡gina
  useEffect(() => {
    fetchPage(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categories = useMemo(() => categoryItems.map((c) => c.name), [categoryItems]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section--first pb-16 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" style={{ animationDelay: '4s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              ConteÃºdos exclusivos, tendÃªncias e estratÃ©gias para manter seu negÃ³cio sempre Ã  frente no mundo digital
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
              />
              <button
                onClick={() => { setSearchTerm(searchInput); fetchPage(1, true, { q: searchInput }); }}
                className="btn-primary px-6 py-2"
              >
                Buscar
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8 flex flex-wrap gap-2">
              <button
                onClick={() => { setSelectedCategory(null); fetchPage(1, true, { category: null }); }}
                className={`px-3 py-1 rounded-full border text-sm ${selectedCategory === null ? 'bg-primary text-primary-foreground' : 'glass text-muted-foreground border-border/20'}`}
              >
                {`Todas${total ? ` (${total})` : ''}`}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); fetchPage(1, true, { category: cat }); }}
                  className={`px-3 py-1 rounded-full border text-sm ${selectedCategory === cat ? 'bg-primary text-primary-foreground' : 'glass text-muted-foreground border-border/20'}`}
                >
                  {cat}{(() => { const item = categoryItems.find((c) => c.name === cat); return item ? ` (${item.count})` : ''; })()}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.length === 0 && !loading ? (
                <p>Nenhum post disponÃ­vel no momento</p>
              ) : (
                posts.map((post, index) => (
                  <article
                    key={post.slug}
                    className="glass rounded-2xl overflow-hidden hover-lift group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Post Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                      {/* Read Time */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full glass text-muted-foreground border border-border/20">
                          {`${calcReadingTime(post.content)} min`}
                        </span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Post Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                      </div>

                      {/* Read More */}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium group/btn"
                      >
                        Ler artigo completo
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))
              )}
            </div>

            {/* Load More */}
            {posts.length < total && (
              <div className="mt-12 text-center">
                <button
                  disabled={loading}
                  onClick={() => fetchPage(page + 1)}
                  className="btn-secondary px-8 py-4 text-lg"
                >
                  {loading ? 'Carregando...' : 'Carregar mais'}
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};




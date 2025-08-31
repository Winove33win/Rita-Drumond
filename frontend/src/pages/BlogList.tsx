import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

function calcReadingTime(content: string): string {
  const words = content.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))}`;
}

export const BlogList = () => {
  const [allPosts, setAllPosts] = useState<BlogPost[] | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const API = import.meta.env.VITE_API_URL || "/api";
      try {
        const res = await fetch(`${API}/blog-posts`);
        if (res.ok) {
          const data: BlogPost[] = await res.json();
          setAllPosts(data);
        } else {
          console.error("API Error:", res.status, res.statusText);
          const text = await res.text();
          console.error("Response body:", text);
        }
      } catch (err) {
        console.error('fetch blog-posts', err);
      }
    };
    load();
  }, []);

  if (!allPosts) {
    return <p>Carregando...</p>;
  }

  const filteredPosts = allPosts.filter(post =>
    (
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    ) && (
      selectedCategory ? post.category === selectedCategory : true
    )

  );

  const categories = Array.from(
    new Set(allPosts.map(p => p.category).filter(Boolean))
  );

  const postsToShow = filteredPosts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-navy relative overflow-hidden">
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
              Conteúdos exclusivos, tendências e estratégias para manter seu negócio sempre à frente no mundo digital
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
                onClick={() => { setSearchTerm(searchInput); setVisibleCount(6); }}
                className="btn-primary px-6 py-2"
              >
                Buscar
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8 flex flex-wrap gap-2">
              <button
                onClick={() => { setSelectedCategory(null); setVisibleCount(6); }}
                className={`px-3 py-1 rounded-full border text-sm ${selectedCategory === null ? 'bg-primary text-primary-foreground' : 'glass text-muted-foreground border-border/20'}`}
              >
                Todas
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setVisibleCount(6); }}
                  className={`px-3 py-1 rounded-full border text-sm ${selectedCategory === cat ? 'bg-primary text-primary-foreground' : 'glass text-muted-foreground border-border/20'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsToShow.length === 0 ? (
                <p>Nenhum post disponível no momento</p>
              ) : (
                postsToShow.map((post, index) => (
                  <article
                    key={post.slug}
                  className="glass rounded-2xl overflow-hidden hover-lift group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
            {postsToShow.length < filteredPosts.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisibleCount(v => v + 6)}
                  className="btn-secondary px-8 py-4 text-lg"
                >
                  Carregar mais
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

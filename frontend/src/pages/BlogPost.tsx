import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Clock, Share2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
}

function calcReadingTime(content: string): string {
  const words = content.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))}`;
}

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const load = async () => {
      if (!slug) return;
      const API = import.meta.env.VITE_API_URL || "/api";
      try {
        const res = await fetch(`${API}/blog-posts/${slug}`);
        if (res.ok) {
          const data: BlogPost = await res.json();
          setPost(data);
          const relRes = await fetch(`${API}/blog-posts`);
          if (relRes.ok) {
            const allPosts: BlogPost[] = await relRes.json();
            const related = allPosts.filter(p => p.slug !== slug).slice(0, 3);
            setRelatedPosts(related);
          } else {
            console.error("Related posts API Error:", relRes.status, relRes.statusText);
            const text = await relRes.text();
            console.error("Related posts response body:", text);
          }
        } else {
          console.error("API Error:", res.status, res.statusText);
          const text = await res.text();
          console.error("Response body:", text);
        }
      } catch (err) {
        console.error('fetch blog-post', err);
      }
    };
    load();
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Post não encontrado</h1>
              <p className="text-muted-foreground mb-8">O post que você está procurando não existe.</p>
              <Link to="/blog" className="btn-primary">
                Voltar ao Blog
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{`${calcReadingTime(post.content)} min`} de leitura</span>
              </div>
            </div>

            {/* Share Button */}
            <div className="mb-8">
              <button className="flex items-center gap-2 px-4 py-2 glass rounded-full text-muted-foreground hover:text-primary transition-colors duration-300">
                <Share2 className="w-4 h-4" />
                Compartilhar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0 bg-gradient-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gradient-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gradient-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Posts Relacionados
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.slug} className="glass rounded-2xl overflow-hidden hover-lift group">
                    <div className="relative h-48 overflow-hidden">
                    <img
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium"
                      >
                        Ler mais →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

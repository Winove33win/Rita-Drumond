import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useQuery } from '@tanstack/react-query';
import { fetchTemplate } from '@/lib/api';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { loadStripe } from "@stripe/stripe-js";
import {
  ArrowLeft,
  Eye,
  CheckCircle,
  Star,
  Download,
  Shield,
  Smartphone,
  Search,
  Users,
  Clock,
  FileText,
} from "lucide-react";

const TemplateDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();

  const { data: template, isLoading } = useQuery({ queryKey: ['template', slug], enabled: !!slug, queryFn: () => fetchTemplate(slug as string) });

  // Show loading while fetching to avoid accessing undefined template
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-24 px-4">
          <div className="container mx-auto text-center py-24">
            <h1 className="text-2xl font-bold mb-2">Carregando template...</h1>
            <p className="text-muted-foreground">Aguarde um instante.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!template) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-24 px-4">
          <div className="container mx-auto text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Template não encontrado</h1>
            <Link to="/templates">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Templates
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handlePurchase = async () => {
    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
      const API = import.meta.env.VITE_API_URL || "/api";

      const response = await fetch(`${API}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: template.slug }),
      });

      const text = await response.text();
      if (!text) throw new Error("Resposta vazia do servidor");
      const { sessionId } = JSON.parse(text);

      if (sessionId && stripe) {
        await stripe.redirectToCheckout({ sessionId });
      } else {
        toast({ title: "Erro", description: "Erro ao criar sessão de pagamento." });
      }
    } catch (err) {
      console.error("Erro ao redirecionar:", err);
      toast({ title: "Erro", description: "Não foi possível redirecionar." });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              to="/templates" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Templates
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={template?.images?.cover || ''}
                  alt={template.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <a 
                    href={template.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button size="lg">
                      <Eye className="w-5 h-5 mr-2" />
                      Ver Demo ao Vivo
                    </Button>
                  </a>
                </div>
              </div>

              {/* Template Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{template.category}</Badge>
                  <Badge variant="outline">{template.difficulty}</Badge>
                  {template.originalPrice && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      -{Math.round(((template.originalPrice - template.price) / template.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl font-bold mb-4">{template.title}</h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(4.9) • 150+ vendas</span>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  {template.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <FileText className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-medium">{template.pages}</div>
                    <div className="text-sm text-muted-foreground">Páginas</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <Smartphone className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-medium">100%</div>
                    <div className="text-sm text-muted-foreground">Responsivo</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <Search className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-medium">SEO</div>
                    <div className="text-sm text-muted-foreground">Otimizado</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-medium">30 dias</div>
                    <div className="text-sm text-muted-foreground">Suporte</div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="features">Recursos</TabsTrigger>
                  <TabsTrigger value="gallery">Galeria</TabsTrigger>
                  <TabsTrigger value="includes">Incluso</TabsTrigger>
                </TabsList>
                
                <TabsContent value="features" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Principais Recursos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(template?.features || []).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="gallery" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(template?.images?.gallery || []).map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${template.title} - Imagem ${index + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="includes" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>O que está incluído</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {(template?.includes || []).map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            {/* Rich HTML content from DB (optional) */}
            {template?.content && (
              <div className="lg:col-span-2 lg:row-start-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Descrição Detalhada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: template.content }} />
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Sidebar */}
            <div className="space-y-6 lg:col-start-3 lg:row-start-1">
              {/* Price Card */}
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-primary">
                        R$ {template.price.toFixed(2).replace('.', ',')}
                      </span>
                      {template.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          R$ {template.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Pagamento único</p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      onClick={handlePurchase}
                      className="w-full btn-primary" 
                      size="lg"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Comprar Template
                    </Button>
                    
                    <a 
                      href={template.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" className="w-full" size="lg">
                        <Eye className="w-5 h-5 mr-2" />
                        Ver Demo
                      </Button>
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Garantia de 7 dias</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Download className="w-4 h-4 text-primary" />
                      <span>Download imediato</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Suporte incluso</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(template?.tags || []).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TemplateDetail;

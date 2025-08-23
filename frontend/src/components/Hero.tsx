import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 md:pt-36 pb-16 flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/15 rounded-full blur-xl animate-glow" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Evoluímos Negócios com{" "}
            </span>
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Estratégia, Tecnologia e Design
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Soluções para transformar sua presença digital em resultados reais
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="https://api.whatsapp.com/send?phone=5519982403845" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-primary text-lg px-12 py-6">
                Transformar Meu Negócio
              </Button>
            </a>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary text-lg px-8 py-6 glass border-primary/30 hover:border-primary/60"
            >
              Conhecer Nossos Cases
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
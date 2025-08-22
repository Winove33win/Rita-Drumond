import { Lightbulb, Eye, Target } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre na vanguarda das tendências digitais, criamos soluções únicas e eficazes para cada desafio."
    },
    {
      icon: Eye,
      title: "Transparência",
      description: "Processos claros, comunicação direta e relatórios detalhados mantêm você informado sobre cada etapa."
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Focamos em métricas que importam e estratégias que geram retorno real para o seu investimento."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Sobre a Winove
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Somos uma agência de estratégia digital especializada em transformar ideias em resultados tangíveis. 
                Com uma abordagem inovadora e foco em performance, desenvolvemos soluções completas que conectam 
                marcas ao seu público-alvo de forma autêntica e eficaz.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é acelerar o crescimento de negócios através de estratégias digitais inteligentes, 
                tecnologia de ponta e design que encanta.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="glass rounded-2xl p-8 hover-lift group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
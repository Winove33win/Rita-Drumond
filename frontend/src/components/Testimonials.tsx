import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                O Que Nossos Clientes Dizem
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Histórias reais de transformação e sucesso
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="glass rounded-3xl p-8 md:p-12 mb-8 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={`https://images.unsplash.com/${currentTest.image}?w=200&h=200&fit=crop&crop=face`}
                  alt={currentTest.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(currentTest.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                  "{currentTest.content}"
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="text-xl font-bold text-foreground">
                    {currentTest.name}
                  </h4>
                  <p className="text-primary font-medium">
                    {currentTest.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {currentTest.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass border border-border/20 flex items-center justify-center hover:border-primary/50 transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass border border-border/20 flex items-center justify-center hover:border-primary/50 transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
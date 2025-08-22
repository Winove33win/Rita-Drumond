export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "CEO",
    company: "TechStart Solutions",
    content: "A Winove transformou completamente nossa presença digital. Em 6 meses, vimos um crescimento de 400% no tráfego orgânico e 250% nas conversões. A equipe é extremamente profissional e orientada a resultados.",
    rating: 5,
    image: "https://winove.com.br/assets/testimonials/carlos-silva.jpg"
  },
  {
    id: 2,
    name: "Ana Martins",
    role: "Diretora de Marketing",
    company: "Fashion Group",
    content: "O trabalho de rebranding da Winove elevou nossa marca a um novo patamar. A identidade visual criada conectou perfeitamente com nosso público-alvo, resultando em um aumento de 180% no engajamento nas redes sociais.",
    rating: 5,
    image: "https://winove.com.br/assets/testimonials/ana-martins.jpg"
  },
  {
    id: 3,
    name: "Roberto Costa",
    role: "Fundador",
    company: "EcoHealth",
    content: "A estratégia de SEO implementada pela Winove nos posicionou na primeira página do Google para todas as palavras-chave relevantes. O ROI foi impressionante: cada real investido retornou 12 em vendas.",
    rating: 5,
    image: "https://winove.com.br/assets/testimonials/roberto-costa.jpg"
  },
  {
    id: 4,
    name: "Marina Santos",
    role: "Proprietária",
    company: "Boutique Luna",
    content: "O e-commerce desenvolvido pela Winove superou todas as expectativas. A plataforma é rápida, intuitiva e as vendas online aumentaram 350% no primeiro trimestre. Recomendo sem hesitação!",
    rating: 5,
    image: "https://winove.com.br/assets/testimonials/marina-santos.jpg"
  }
];

export const getTestimonial = (id: number): Testimonial | undefined => {
  return testimonials.find(testimonial => testimonial.id === id);
};
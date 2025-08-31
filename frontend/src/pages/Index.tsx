import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { useQuery } from '@tanstack/react-query';
import { fetchTemplate } from '@/lib/api';

const Index = () => {
  const { data } = useQuery({
    queryKey: ['template', 'home-hero'],
    queryFn: () => fetchTemplate('home-hero'),
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <Hero heading={data?.heading} subheading={data?.subheading} />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;


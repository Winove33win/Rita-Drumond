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

type Template = {
  id: number;
  slug: string;
  title: string;
  content: string;
  meta?: any;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      {/* dynamic hero — fall back to static if API fails */}
      {
        (() => {
          const { data, isLoading } = useQuery<Template | null>({ queryKey: ['template', 'home-hero'], queryFn: () => fetchTemplate('home-hero') });
          if (isLoading) return <Hero />;
          return <Hero htmlContent={(data as Template | null)?.content} />;
        })()
      }
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

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Início", href: "/", type: "link" },
    { name: "Sobre", href: "/#about", type: "anchor" },
    { name: "Serviços", href: "/#services", type: "anchor" },
    { name: "Portfolio", href: "/#portfolio", type: "anchor" },
    { name: "Templates", href: "/templates", type: "link" },
    { name: "E-mail Corporativo", href: "/email-corporativo", type: "link" },
    { name: "Chat Whatsapp", href: "/chat-whatsapp", type: "link" },
    { name: "Central de Atendimento", href: "/central-atendimento", type: "link" },
    { name: "Blog", href: "/blog", type: "link" },
    { name: "Cases", href: "/cases", type: "link" },
    { name: "Contato", href: "/#contact", type: "anchor" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-border/20">
      <div className="bg-primary text-primary-foreground text-sm flex items-center justify-center py-1">
        <span>Veja as promoções atuais</span>
        <Button className="btn-secondary ml-4 px-3 py-1 text-xs">Ver mais</Button>
      </div>
      <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300">
            Winove
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === "link" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-300 ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://api.whatsapp.com/send?phone=5519982403845" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary">
                Fale Conosco
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass rounded-lg">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                item.type === "link" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-foreground hover:text-primary transition-colors duration-300 ${
                      location.pathname === item.href ? 'text-primary' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a href="https://api.whatsapp.com/send?phone=5519982403845" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary mt-4" onClick={() => setIsMenuOpen(false)}>
                  Fale Conosco
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

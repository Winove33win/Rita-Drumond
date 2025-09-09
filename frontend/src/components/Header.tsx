import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  type: "link" | "anchor";
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Removed "Sobre" and "Portfolio"
  const navItems: NavItem[] = [
    { name: "Início", href: "/", type: "link" },
    { name: "Serviços", href: "#services", type: "anchor" },
    { name: "Libras", href: "/servicos/libras", type: "link" },
    { name: "Templates", href: "/templates", type: "link" },
    { name: "E-mail Corporativo", href: "/email-corporativo", type: "link" },

    // Novas páginas
    { name: "Chat WhatsApp", href: "/chat-whatsapp", type: "link" },

    { name: "Blog", href: "/blog", type: "link" },
    { name: "Cases", href: "/cases", type: "link" },
    { name: "Contato", href: "#contact", type: "anchor" },
  ];

  return (
    <>
    <header className="fixed top-0 w-full z-50 border-b border-border/20">
      {/* Faixa superior */}
      <div className="bg-primary text-primary-foreground text-sm flex items-center justify-center py-1">
        <span>Veja as promoções atuais</span>
        <Link to="/promocoes">
          <Button className="btn-secondary ml-4 px-3 py-1 text-xs">Ver mais</Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300"
          >
            Winove
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-300 ${
                    location.pathname === item.href ? "text-primary" : ""
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
            )}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <a
              href="https://api.whatsapp.com/send?phone=5519982403845"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-primary">Fale Conosco</Button>
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass rounded-lg">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) =>
                item.type === "link" ? (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className="transition-colors text-foreground/60 hover:text-foreground/80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="transition-colors text-foreground/60 hover:text-foreground/80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}

              <a
                href="https://api.whatsapp.com/send?phone=5519982403845"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-primary mt-4" onClick={() => setIsMenuOpen(false)}>
                  Fale Conosco
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

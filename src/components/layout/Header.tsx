import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { to: "/", label: "La Sélection" },
    { to: "/archive", label: "L'Archive" },
    { to: "/a-propos", label: "À Propos" },
    { to: "/faq", label: "FAQ" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Mobile Header
  if (isMobile) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Espace vide pour équilibrer */}
            <div className="w-10" />

            {/* Logo Centre */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logo} 
                alt="objekté" 
                className="h-7 w-auto"
              />
            </Link>

            {/* Menu Hamburger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button 
                  className="p-2 text-foreground/70 hover:text-foreground transition-colors"
                  aria-label="Ouvrir le menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                <div className="flex flex-col mt-8">
                  {/* Logo dans le menu */}
                  <Link to="/" onClick={handleLinkClick} className="mb-8">
                    <img 
                      src={logo} 
                      alt="objekté" 
                      className="h-8 w-auto"
                    />
                  </Link>

                  {/* Liens de navigation */}
                  <nav className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={handleLinkClick}
                        className="text-lg tracking-widest uppercase text-foreground/70 transition-colors duration-300 hover:text-foreground"
                        activeClassName="text-foreground"
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </nav>

                  {/* Séparateur */}
                  <div className="h-px w-full bg-secondary my-8" />

                  {/* Contact */}
                  <a
                    href="https://wa.me/22996991128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Contact WhatsApp
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>
    );
  }

  // Desktop Header
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          {/* Navigation Gauche */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className="text-sm tracking-widest uppercase text-foreground/70 transition-colors duration-300 hover:text-foreground"
              activeClassName="text-foreground"
            >
              La Sélection
            </NavLink>
            <NavLink
              to="/archive"
              className="text-sm tracking-widest uppercase text-foreground/70 transition-colors duration-300 hover:text-foreground"
              activeClassName="text-foreground"
            >
              L'Archive
            </NavLink>
          </div>

          {/* Logo Centre */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img 
              src={logo} 
              alt="objekté" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Droite */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/a-propos"
              className="text-sm tracking-widest uppercase text-foreground/70 transition-colors duration-300 hover:text-foreground"
              activeClassName="text-foreground"
            >
              À Propos
            </NavLink>
            <NavLink
              to="/faq"
              className="text-sm tracking-widest uppercase text-foreground/70 transition-colors duration-300 hover:text-foreground"
              activeClassName="text-foreground"
            >
              FAQ
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

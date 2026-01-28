import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo.png";

const Header = () => {
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

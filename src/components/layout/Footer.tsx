import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "+22996991128";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;

const Footer = () => {
  return (
    <footer className="bg-background border-t border-secondary">
      {/* Section Newsletter */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="font-serif text-2xl italic text-foreground/80 mb-4">
            "Le silence est un luxe."
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Recevez en avant-première les annonces de nos prochaines sélections.
          </p>
        </div>

        {/* Séparateur */}
        <div className="h-px w-full bg-secondary mb-12" />

        {/* Liens et Informations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Navigation */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 text-foreground/60">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  La Sélection
                </Link>
              </li>
              <li>
                <Link 
                  to="/archive" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  L'Archive
                </Link>
              </li>
              <li>
                <Link 
                  to="/a-propos" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Client */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 text-foreground/60">
              Assistance
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Service Client
                </a>
              </li>
              <li>
                <span className="text-sm text-foreground/50">
                  Cotonou, Bénin
                </span>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 text-foreground/60">
              Informations Légales
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/confidentialite" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link 
                  to="/cgv" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link 
                  to="/mentions-legales" 
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px w-full bg-secondary my-12" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg italic text-foreground/60">
            Sans Regret.
          </p>
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} objekté — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

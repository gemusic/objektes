import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Check, MessageCircle, Calendar, Package, Phone, Truck } from "lucide-react";

const WHATSAPP_NUMBER = "+22996991128";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;

interface LocationState {
  transactionId?: string;
  produit?: string;
  montant?: number;
  nom?: string;
  email?: string;
}

const Confirmation = () => {
  const location = useLocation();
  const state = location.state as LocationState || {};
  
  const { 
    transactionId = "N/A", 
    produit = "Le Purificateur Haute Précision",
    montant = 5000,
    nom = "",
    email = ""
  } = state;

  // Calcul de la date de renouvellement (6 mois)
  const renewalDate = new Date();
  renewalDate.setMonth(renewalDate.getMonth() + 6);
  const formattedRenewalDate = renewalDate.toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric'
  });

  // Meta Pixel - Purchase (enrichi pour campagnes Ventes)
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        content_name: produit,
        content_ids: ['purificateur-001'],
        content_type: 'product',
        value: 5000,
        currency: 'XOF',
        transaction_id: transactionId,
        num_items: 2
      });
    }
  }, [produit, transactionId]);

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        
        {/* Hero de Succès */}
        <section className="text-center mb-16">
          {/* Cercle lumineux pulsant */}
          <div className="relative w-24 h-24 mx-auto mb-10">
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-soft" />
            <div className="absolute inset-2 rounded-full bg-primary/10 animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
            <div className="relative w-full h-full rounded-full bg-background border border-primary/30 flex items-center justify-center animate-scale-fade-in">
              <Check className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 
            className="font-serif text-3xl md:text-4xl mb-6 opacity-0 animate-slide-up" 
            style={{ animationDelay: "0.15s" }}
          >
            Votre Sélection est Confirmée
          </h1>
          
          <div 
            className="space-y-4 text-foreground/80 opacity-0 animate-slide-up" 
            style={{ animationDelay: "0.25s" }}
          >
            <p className="font-serif text-lg italic">
              {nom ? `Cher ${nom},` : "Cher client,"} bienvenue dans le cercle objekté.
            </p>
            <p className="text-sm leading-relaxed max-w-md mx-auto">
              Vous venez de poser un geste simple mais décisif pour votre santé 
              et celle de vos proches. Un choix sans regret.
            </p>
          </div>
        </section>

        {/* Récapitulatif Élégant */}
        <section 
          className="mb-14 opacity-0 animate-slide-up" 
          style={{ animationDelay: "0.35s" }}
        >
          <div className="p-8 border border-secondary rounded-sm bg-background">
            <h2 className="font-serif text-sm tracking-widest uppercase text-foreground/60 mb-6">
              Récapitulatif
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-foreground/60">Produit</span>
                <span className="font-medium">{produit}</span>
              </div>
              <div className="h-px bg-secondary" />
              <div className="flex justify-between items-center">
                <span className="text-foreground/60">Montant</span>
                <span className="font-medium">{montant.toLocaleString()} FCFA</span>
              </div>
              <div className="h-px bg-secondary" />
              <div className="flex justify-between items-center">
                <span className="text-foreground/60">Référence</span>
                <span className="font-mono text-xs text-foreground/70">{transactionId}</span>
              </div>
              {email && (
                <>
                  <div className="h-px bg-secondary" />
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/60">Confirmation envoyée à</span>
                    <span className="text-foreground/70">{email}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Timeline : Dans les Prochaines Heures */}
        <section 
          className="mb-14 opacity-0 animate-slide-up" 
          style={{ animationDelay: "0.45s" }}
        >
          <h2 className="font-serif text-xl mb-2">Dans les Prochaines Heures</h2>
          <p className="text-sm text-foreground/60 mb-8">
            Votre expérience objekté commence maintenant.
          </p>
          
          <div className="space-y-8">
            {/* Étape 1 */}
            <div 
              className="flex gap-6 opacity-0 animate-slide-up" 
              style={{ animationDelay: "0.55s" }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="w-px h-full bg-secondary mt-3" />
              </div>
              <div className="pb-8">
                <h3 className="font-medium mb-1">Préparation Soignée</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Votre colis est préparé avec le soin réservé aux objets d'exception. 
                  Emballage discret, protection optimale.
                </p>
              </div>
            </div>

            {/* Étape 2 */}
            <div 
              className="flex gap-6 opacity-0 animate-slide-up" 
              style={{ animationDelay: "0.65s" }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="w-px h-full bg-secondary mt-3" />
              </div>
              <div className="pb-8">
                <h3 className="font-medium mb-1">Prise de Contact</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Notre équipe vous contactera personnellement pour convenir 
                  du moment idéal de livraison.
                </p>
              </div>
            </div>

            {/* Étape 3 */}
            <div 
              className="flex gap-6 opacity-0 animate-slide-up" 
              style={{ animationDelay: "0.75s" }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-1">Remise en Main Propre</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Livraison directe chez vous à Cotonou, sans intermédiaire. 
                  Votre satisfaction est notre priorité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Votre Prochain Rendez-vous */}
        <section 
          className="mb-14 opacity-0 animate-slide-up" 
          style={{ animationDelay: "0.85s" }}
        >
          <div className="p-8 bg-primary/5 rounded-sm border border-primary/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-serif text-lg mb-2">Votre Prochain Rendez-vous</h2>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  Dans environ 6 mois, vos deux unités auront accompli leur mission de purification. 
                  Nous serons là pour vous accompagner dans le renouvellement — sans effort, sans oubli.
                </p>
                <p className="text-sm">
                  <span className="text-foreground/60">Date estimée :</span>{" "}
                  <span className="font-medium capitalize">{formattedRenewalDate}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Teaser Sélection n°2 */}
        <section 
          className="mb-14 opacity-0 animate-slide-up" 
          style={{ animationDelay: "0.95s" }}
        >
          <div className="text-center py-10 border-t border-b border-secondary">
            <p className="text-xs tracking-widest uppercase text-foreground/50 mb-4">
              Bientôt
            </p>
            <h2 className="font-serif text-2xl mb-4">Sélection n°2</h2>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-md mx-auto mb-6">
              Nous préparons déjà la prochaine pièce maîtresse de votre quotidien. 
              Une sélection unique, choisie avec la même rigueur pour transformer 
              un autre aspect de votre vie.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-foreground/20 px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-foreground/5"
            >
              Être informé en priorité
            </a>
          </div>
        </section>

        {/* Assistance Concierge */}
        <section 
          className="mb-14 opacity-0 animate-slide-up" 
          style={{ animationDelay: "1.05s" }}
        >
          <div className="text-center">
            <p className="text-sm text-foreground/60 mb-4">
              Une question ? Notre concierge personnel est à votre disposition.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-foreground/5"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Contacter le Concierge
            </a>
          </div>
        </section>

        {/* Bouton Retour */}
        <section 
          className="text-center opacity-0 animate-slide-up" 
          style={{ animationDelay: "1.15s" }}
        >
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
          >
            Retour à l'Accueil
          </Link>
        </section>

      </div>
    </Layout>
  );
};

export default Confirmation;

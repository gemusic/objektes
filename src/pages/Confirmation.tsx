import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Check } from "lucide-react";

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
    montant = 14000,
    nom = "",
    email = ""
  } = state;

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-20">
        {/* Message de Confirmation */}
        <section className="text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 animate-fade-in">
            <Check className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Sélection n°1 : Validée ✅
          </h1>
          
          <div className="space-y-4 text-foreground/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p>
              Merci pour votre confiance{nom ? `, ${nom}` : ""}.
            </p>
            <p>
              Votre paiement de <strong>{montant.toLocaleString()} FCFA</strong> a été reçu avec succès.
            </p>
            <p>
              Vous venez d'investir dans votre santé, votre tranquillité et votre confort quotidien.
            </p>
          </div>
        </section>

        {/* Détails de Transaction */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <div className="p-6 bg-secondary/20 rounded-lg">
            <h2 className="font-serif text-lg mb-4">Détails de la Transaction</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground/70">Produit</span>
                <span>{produit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Montant</span>
                <span>{montant.toLocaleString()} FCFA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Référence</span>
                <span className="font-mono text-xs">{transactionId}</span>
              </div>
              {email && (
                <div className="flex justify-between">
                  <span className="text-foreground/70">Confirmation envoyée à</span>
                  <span>{email}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Prochaine Étape */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="font-serif text-xl mb-4">Prochaine Étape</h2>
          <div className="h-px w-full bg-secondary mb-6" />
          
          <div className="space-y-4 text-foreground/80">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary text-sm">1</span>
              </div>
              <div>
                <p className="font-medium">Email de confirmation</p>
                <p className="text-sm text-foreground/60">
                  Un email détaillé vient de vous être envoyé à l'adresse fournie.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary text-sm">2</span>
              </div>
              <div>
                <p className="font-medium">Préparation en cours</p>
                <p className="text-sm text-foreground/60">
                  Votre colis est actuellement préparé par notre service logistique.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary text-sm">3</span>
              </div>
              <div>
                <p className="font-medium">Livraison à Cotonou</p>
                <p className="text-sm text-foreground/60">
                  Un livreur vous contactera dans les 2 heures pour confirmer votre présence 
                  et finaliser la remise en main propre.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Assistance Directe */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.35s" }}>
          <h2 className="font-serif text-xl mb-4">Assistance Directe</h2>
          <div className="h-px w-full bg-secondary mb-6" />
          
          <p className="text-foreground/80 mb-4">
            Pour toute question urgente, notre concierge WhatsApp est disponible immédiatement :
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground/20 px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-foreground/5"
          >
            Contacter le Service Client
          </a>
        </section>

        {/* Bouton Retour */}
        <section className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
          >
            Retour à la Sélection
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default Confirmation;

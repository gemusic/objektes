import Layout from "@/components/layout/Layout";

const WHATSAPP_NUMBER = "+22996991128";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;

const Confidentialite = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-16 animate-fade-in">
          Politique de Confidentialité
        </h1>

        <div className="space-y-12">
          {/* Section 1 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">1.</span>
              Philosophie de Protection
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed">
              Chez objekté, le respect de votre vie privée est une extension de notre promesse de calme. 
              Nous ne collectons que les données strictement nécessaires pour assurer une livraison précise 
              à Cotonou et une communication fluide. Nous ne vendons, ne louons, ni ne partageons jamais 
              vos informations avec des tiers à des fins publicitaires.
            </p>
          </section>

          {/* Section 2 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">2.</span>
              Données Collectées
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed mb-4">
              Pour traiter votre sélection, nous collectons les informations suivantes :
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Identité :</strong> Nom et prénom.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Contact :</strong> Adresse email (pour l'envoi de la confirmation de sélection).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Logistique :</strong> Numéro de téléphone et adresse géographique à Cotonou (pour la coordination du livreur).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Paiement :</strong> Les transactions sont traitées via des plateformes sécurisées. objekté n'a jamais accès à vos numéros de carte bancaire ou codes secrets Mobile Money.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">3.</span>
              Utilisation des Données
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed mb-4">
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Valider votre commande et vous envoyer votre reçu par email.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Permettre à notre service logistique de vous livrer dans les délais convenus.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Vous informer de la disponibilité de la prochaine sélection dans l'Archive (uniquement si vous avez choisi de vous inscrire à notre lettre d'information).</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">4.</span>
              Sécurité et Conservation
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed">
              Vos informations sont stockées sur des serveurs sécurisés. Nous conservons vos données 
              de livraison pour une durée de 2 ans afin de faciliter votre service après-vente et 
              la gestion des renouvellements (unités de filtration).
            </p>
          </section>

          {/* Section 5 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">5.</span>
              Vos Droits
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed mb-4">
              Conformément à la loi n° 2017-20 portant Code du numérique en République du Bénin, 
              vous disposez d'un droit d'accès, de modification ou de suppression de vos données personnelles.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Pour exercer ce droit, il vous suffit de contacter notre{" "}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Service Client
              </a>.
            </p>
          </section>

          {/* Section 6 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.35s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">6.</span>
              Cookies
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed">
              Notre site utilise des cookies dits "techniques" uniquement pour maintenir le contenu 
              de votre panier et assurer la stabilité de votre navigation. Aucun cookie de pistage 
              publicitaire n'est utilisé.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-secondary text-center">
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Confidentialite;

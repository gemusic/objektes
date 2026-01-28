import Layout from "@/components/layout/Layout";

const WHATSAPP_NUMBER = "+22996991128";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;

const CGV = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-16 animate-fade-in">
          Conditions Générales de Vente
        </h1>

        <div className="space-y-12">
          {/* Article 1 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">1.</span>
              Objet
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed">
              Les présentes CGV régissent les ventes effectuées par objekté de l'Objet n°01 
              (Le Purificateur Haute Précision) et de toute sélection future aux clients résidant 
              exclusivement à Cotonou, Bénin. Toute commande validée sur le site implique l'adhésion 
              sans réserve aux présentes conditions.
            </p>
          </section>

          {/* Article 2 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">2.</span>
              Produits et Disponibilité
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed">
              objekté propose un seul objet à la fois pour garantir une qualité de service optimale. 
              Nos offres sont valables tant qu'elles sont visibles sur le site et dans la limite des 
              stocks disponibles. Les caractéristiques techniques sont présentées avec la plus grande 
              précision possible sur la page "L'Examen".
            </p>
          </section>

          {/* Article 3 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">3.</span>
              Prix
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed">
              Les prix sont indiqués en Francs CFA (FCFA) et sont nets. Le prix de l'Objet n°01 
              est fixé à <strong>14 000 FCFA</strong>. La livraison à Cotonou est offerte gratuitement par objekté.
            </p>
          </section>

          {/* Article 4 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">4.</span>
              Commande et Paiement
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Validation :</strong> La commande est ferme dès la validation du paiement électronique.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Paiement :</strong> Seuls les paiements via Mobile Money (MTN MoMo, Moov Money) ou Cartes Bancaires sont acceptés.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Absence de paiement à la livraison :</strong> Pour des raisons logistiques et de sécurité, aucune transaction en espèces ne sera effectuée lors de la remise du colis.</span>
              </li>
            </ul>
          </section>

          {/* Article 5 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">5.</span>
              Livraison (Cotonou Uniquement)
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Zone :</strong> Nous livrons exclusivement dans la zone urbaine de Cotonou.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Délais :</strong> Toute commande passée avant 12h est livrée le jour même. Après 12h, la livraison intervient le lendemain matin.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Modalités :</strong> Le client s'engage à être joignable sur le numéro de téléphone fourni lors de la commande pour coordonner la remise avec le livreur.</span>
              </li>
            </ul>
          </section>

          {/* Article 6 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.35s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">6.</span>
              Droit de Rétractation et Retours
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed mb-4">
              Conformément à notre promesse <strong>"Sans Regret"</strong> :
            </p>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Si l'objet présente un défaut de fabrication ou ne s'adapte pas à votre installation (malgré l'usage des adaptateurs fournis), vous disposez de <strong>48 heures</strong> après la livraison pour demander un échange ou un remboursement.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>L'objet doit être retourné dans son emballage d'origine avec tous ses accessoires.</span>
              </li>
            </ul>
          </section>

          {/* Article 7 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">7.</span>
              Garantie et Service Après-Vente (SAV)
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed">
              objekté assure un support technique via{" "}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                WhatsApp
              </a>{" "}
              pour l'installation et l'entretien (nettoyage de la cartouche). La garantie ne couvre pas 
              les dommages résultant d'une mauvaise manipulation ou d'un choc après livraison.
            </p>
          </section>

          {/* Article 8 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">8.</span>
              Litiges
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed">
              En cas de contestation, nous privilégions toujours une solution amiable. 
              À défaut, les tribunaux de Cotonou seront seuls compétents.
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

export default CGV;

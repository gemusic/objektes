import Layout from "@/components/layout/Layout";

const WHATSAPP_NUMBER = "+22996991128";

const MentionsLegales = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-16 animate-fade-in">
          Mentions Légales
        </h1>

        <div className="space-y-12">
          {/* Section 1 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">1.</span>
              Éditeur du Site
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le site objekté (ci-après « le Site ») est édité par :
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Nom / Raison Sociale :</strong> [NOM OU NOM DE L'ENTREPRISE À COMPLÉTER]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Siège Social :</strong> Cotonou, République du Bénin</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Contact :</strong> [ADRESSE EMAIL À COMPLÉTER]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Numéro de téléphone :</strong> {WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>IFU :</strong> [NUMÉRO IFU SI DISPONIBLE]</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">2.</span>
              Hébergement
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le Site est hébergé par :
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Nom de l'hébergeur :</strong> [NOM DE L'HÉBERGEUR À COMPLÉTER]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Adresse :</strong> [ADRESSE DE L'HÉBERGEUR À COMPLÉTER]</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">3.</span>
              Propriété Intellectuelle
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed">
              L'ensemble des éléments constituant le Site (textes, graphismes, logos, photographies, 
              icônes, sons, vidéos) sont la propriété exclusive d'objekté ou de leurs auteurs respectifs.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
              des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, 
              sauf autorisation écrite préalable.
            </p>
          </section>

          {/* Section 4 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">4.</span>
              Protection des Données Personnelles
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed">
              Conformément à la loi n° 2017-20 portant Code du numérique en République du Bénin, 
              l'utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données 
              personnelles le concernant. Ces droits s'exercent par email à l'adresse : [ADRESSE EMAIL À COMPLÉTER].
            </p>
          </section>

          {/* Section 5 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-2xl mb-4 flex items-baseline gap-3">
              <span className="text-primary">5.</span>
              Limitation de Responsabilité
            </h2>
            <div className="h-px w-full bg-secondary mb-6" />
            <p className="text-foreground/80 leading-relaxed">
              objekté ne pourra être tenu responsable des dommages directs ou indirects causés au matériel 
              de l'utilisateur lors de l'accès au Site. Bien que nous apportions le plus grand soin à la 
              sélection de nos objets, les informations techniques sont issues des données fabricants et 
              sont fournies à titre indicatif.
            </p>
          </section>
        </div>

        {/* Note pour compléter */}
        <div className="mt-16 p-6 bg-secondary/30 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Note :</strong> Les informations entre [CROCHETS] doivent être complétées 
            avec vos données officielles avant la mise en production du site.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-12 border-t border-secondary text-center">
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default MentionsLegales;

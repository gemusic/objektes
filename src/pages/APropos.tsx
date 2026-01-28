import Layout from "@/components/layout/Layout";

const APropos = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4 animate-fade-in">
            Le Manifeste
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            À Propos d'objekté
          </h1>
        </div>

        <div className="space-y-16">
          {/* Section 1 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-2xl md:text-3xl mb-6">
              Le Filtre dans le Chaos
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                À Cotonou, nous sommes entourés d'options… mais rarement de certitudes.
              </p>
              <p>
                Entre marchés saturés et produits à obsolescence programmée, l'acte d'achat 
                est devenu un stress et une source de méfiance.
              </p>
              <p>
                <strong>objekté est né d'une conviction simple : vous méritez de déléguer votre confiance.</strong>
              </p>
              <p>
                Nous ne sommes pas une boutique supplémentaire ; nous sommes votre filtre ultime, 
                celui qui transforme le chaos en clarté.
              </p>
            </div>
          </section>

          {/* Séparateur */}
          <div className="h-px w-full bg-secondary" />

          {/* Section 2 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <h2 className="font-serif text-2xl md:text-3xl mb-6">
              Le Majordome Moderne
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Notre rôle ? Celui d'un majordome discret, expert et rigoureux.
              </p>
              <p>
                Nous parcourons, testons et éliminons des centaines de références 
                pour n'en retenir qu'une seule vérité.
              </p>
              <p className="font-medium">
                Quand un objet apparaît sur objekté, il a passé notre protocole strict :
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Justesse :</strong> Il répond à une friction réelle de votre quotidien à Cotonou.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Pérennité :</strong> Conçu pour durer, bien au-delà des standards habituels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Sobriété :</strong> Design et usage pensés pour respecter votre espace et votre calme.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Séparateur */}
          <div className="h-px w-full bg-secondary" />

          {/* Section 3 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-2xl md:text-3xl mb-6">
              La Philosophie "Sans Regret"
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Nous croyons en l'<strong>Essentialisme Premium</strong> : acheter moins, mais acheter mieux.
              </p>
              <p>
                Chaque Objet de notre archive est une promesse tenue.
              </p>
              <p className="font-serif text-xl italic text-foreground/70 py-4">
                La promesse que vous n'aurez jamais à regretter cet investissement.
              </p>
              <p>
                Si un objet sélectionné par nos soins vous déçoit, nous avons échoué dans notre mission de filtre.
              </p>
            </div>
          </section>

          {/* Séparateur */}
          <div className="h-px w-full bg-secondary" />

          {/* Section 4 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.35s" }}>
            <h2 className="font-serif text-2xl md:text-3xl mb-6">
              Un Engagement Local
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                objekté est ancré à Cotonou. Nous connaissons vos défis : qualité de l'eau, 
                instabilité des réseaux, besoin de fiabilité.
              </p>
              <p>
                C'est pourquoi nous avons choisi la <strong>proximité absolue</strong> :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-6 bg-secondary/20 rounded-lg">
                  <p className="font-serif text-lg">Logistique locale</p>
                </div>
                <div className="text-center p-6 bg-secondary/20 rounded-lg">
                  <p className="font-serif text-lg">Service humain</p>
                </div>
                <div className="text-center p-6 bg-secondary/20 rounded-lg">
                  <p className="font-serif text-lg">Réactivité totale</p>
                </div>
              </div>
            </div>
          </section>

          {/* Séparateur */}
          <div className="h-px w-full bg-secondary" />

          {/* Section 5 */}
          <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="font-serif text-2xl md:text-3xl mb-6">
              Votre Temps est un Luxe
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Ne perdez plus de temps à comparer des produits médiocres.
              </p>
              <p>
                <strong>Nous avons déjà fait le travail pour vous.</strong>
              </p>
              <p>
                Bienvenue dans une nouvelle ère de consommation :
              </p>
              <p className="font-serif text-xl text-center py-6">
                Calme, clarté et confiance retrouvée.
              </p>
            </div>
          </section>
        </div>

        {/* Signature */}
        <div className="mt-16 pt-12 border-t border-secondary text-center">
          <p className="font-serif text-2xl italic text-primary">
            objekté — La sélection juste.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default APropos;

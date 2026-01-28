import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

const Archive = () => {
  return (
    <Layout>
      {/* Section Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 animate-fade-in">
          La Cohérence du Temps
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Chaque objet sélectionné par objekté est conçu pour rester pertinent, 
          même après avoir quitté le devant de la scène.
        </p>
        <p className="text-foreground/70 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Voici la trace de nos recherches, de nos tests et de notre exigence absolue.
        </p>
      </section>

      {/* Séparateur */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-secondary" />
      </div>

      {/* Section Le Catalogue Silencieux */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-serif text-2xl text-center mb-16">
          Le Catalogue Silencieux
        </h2>

        <div className="space-y-12">
          {/* Carte Sélection n°1 — Actuelle */}
          <div className="border border-secondary rounded-lg p-8 md:p-12 transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <p className="font-serif text-lg italic text-primary mb-2">
                  Sélection n°1
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-4">
                  Le Purificateur Haute Précision
                </h3>
                <Badge className="bg-primary text-primary-foreground mb-6">
                  Sélection Actuelle
                </Badge>
                <p className="text-muted-foreground leading-relaxed">
                  La fin des bonbonnes à Cotonou. Une barrière de 7 couches 
                  entre le réseau et votre santé.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="/examen"
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                >
                  Voir l'Objet Actuel
                </Link>
              </div>
            </div>
          </div>

          {/* Carte Sélection n°00 — Prochainement */}
          <div className="border border-secondary rounded-lg p-8 md:p-12 opacity-60">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <p className="font-serif text-lg italic text-foreground/50 mb-2">
                  Sélection n°00
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground/70">
                  [PROCHAINEMENT]
                </h3>
                <Badge variant="secondary" className="mb-6">
                  En cours de tests
                </Badge>
                <p className="text-muted-foreground leading-relaxed">
                  Nous testons actuellement durabilité et impact. La prochaine sélection 
                  ne sera révélée qu'une fois sa justesse confirmée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-secondary" />
      </div>

      {/* Section Renouvellement */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-2xl mb-6">
          Besoin de renouveler vos unités de filtration ?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Après 6 mois d'utilisation, vos deux unités auront accompli leur mission. 
          Renouvelez-les pour continuer à profiter d'une eau pure.
        </p>
        <Link
          to="/paiement"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
        >
          Commander 2 nouvelles unités — 14 000 FCFA
        </Link>
        <p className="text-sm text-foreground/50 mt-6">
          Même quand nous passons à la Sélection n°2, vous pouvez toujours maintenir 
          vos objets à leur performance maximale.
        </p>
      </section>

      {/* Séparateur */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-secondary" />
      </div>

      {/* Section Philosophie de l'Archive */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-serif text-2xl text-center mb-12">
          Pourquoi un seul objet à la fois ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4">
              <span className="font-serif text-primary">1</span>
            </div>
            <p className="text-foreground/80">
              Le bruit est l'ennemi de la clarté.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4">
              <span className="font-serif text-primary">2</span>
            </div>
            <p className="text-foreground/80">
              Une seule sélection à la fois garantit attention totale 
              et contrôle qualité absolu.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4">
              <span className="font-serif text-primary">3</span>
            </div>
            <p className="text-foreground/80">
              Une fois qu'un objet entre dans l'Archive, il laisse place 
              à la prochaine solution essentielle.
            </p>
          </div>
        </div>
      </section>

      {/* Footer de Page */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif text-xl italic text-foreground/70 mb-8">
            "Une sélection passée n'est jamais obsolète, elle est simplement pérenne."
          </p>
          <Link
            to="/"
            className="inline-block border border-foreground/20 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-foreground/5"
          >
            Retour à la Sélection Actuelle
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Archive;

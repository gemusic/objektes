import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import img1 from "@/assets/img1.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Section Héros */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Estampille */}
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-6 animate-fade-in">
            Sélection n°1 — Cotonou, Bénin
          </p>

          {/* Titre Principal */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Le Purificateur<br />Haute Précision
          </h1>

          {/* Accroche */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            L'eau la plus pure. Directement à la source.<br />
            Sans effort, sans compromis.
          </p>

          {/* Image Produit */}
          <div className="relative max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <img
              src={img1}
              alt="Le Purificateur Haute Précision objekté"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* CTA Principal */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/paiement"
              className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
            >
              Sélectionner — 14 000 FCFA
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Deux unités incluses, chacune offrant environ 3 mois de filtration — soit 6 mois d'eau pure.
            </p>
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-secondary" />
      </div>

      {/* Section Manifeste */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">
          Le filtre qui impose la tranquillité dans un monde imprévisible
        </h2>
        <div className="max-w-2xl mx-auto space-y-6 text-foreground/80 leading-relaxed">
          <p>
            À Cotonou, la qualité de l'eau et l'état des canalisations échappent à votre contrôle. 
            La vétusté invisible des réseaux transforme un geste quotidien en un risque silencieux 
            pour votre santé.
          </p>
          <p>
            <strong>objekté n'est pas une boutique : c'est votre Majordome Moderne.</strong>
          </p>
          <p>
            Nous filtrons le marché pour ne retenir qu'une seule vérité : la meilleure solution pour vous. 
            Vous n'achetez pas simplement un accessoire, mais la certitude d'une eau cristalline, sans odeur, 
            directement à la source, pour protéger ce qui compte le plus : votre famille et votre tranquillité d'esprit.
          </p>
        </div>
      </section>

      {/* Séparateur */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-secondary" />
      </div>

      {/* Section Les 3 Piliers */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl text-center mb-4">
          La Promesse "Sans Regret"
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Les 3 Piliers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Pilier 1 */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-primary">1</span>
            </div>
            <h3 className="font-serif text-xl mb-4">L'Essentiel</h3>
            <p className="text-foreground/70 leading-relaxed">
              Une filtration hybride à 7 couches. La membrane en céramique haute densité bloque 
              tous les sédiments (rouille, boue, sable), tandis que le charbon actif absorbe chlore 
              et métaux lourds. Rien de superflu. Juste l'efficacité pure.
            </p>
          </div>

          {/* Pilier 2 */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-primary">2</span>
            </div>
            <h3 className="font-serif text-xl mb-4">La Clarté</h3>
            <p className="text-foreground/70 leading-relaxed">
              Finies les bonbonnes de 25L et le coût des packs d'eau. 14 000 FCFA pour deux unités, 
              chacune offrant environ 3 mois de filtration — soit 6 mois d'eau pure. Votre esprit 
              et votre budget respirent enfin.
            </p>
          </div>

          {/* Pilier 3 */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-primary">3</span>
            </div>
            <h3 className="font-serif text-xl mb-4">La Fiabilité</h3>
            <p className="text-foreground/70 leading-relaxed">
              Installation universelle en moins de 2 minutes, sans outils. Si le filtre ne s'adapte pas 
              ou ne répond pas à vos attentes, nous le reprenons sous 24h. C'est notre engagement : 
              zéro compromis.
            </p>
          </div>
        </div>
      </section>

      {/* Section Logistique */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-3">Livraison Gratuite</h3>
              <p className="text-foreground/70">
                Seulement à Cotonou. Chez vous aujourd'hui ou demain.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-3">Stock Limité</h3>
              <p className="text-foreground/70">
                Chaque objet est unique. Nous ne gérons qu'un seul produit à la fois 
                pour garantir l'excellence absolue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

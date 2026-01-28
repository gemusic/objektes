import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img5 from "@/assets/img5.png";

const Examen = () => {
  return (
    <Layout>
      {/* En-tête */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-sm tracking-widest uppercase text-primary mb-4 animate-fade-in">
          L'Examen Complet
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Le Purificateur Haute Précision
        </h1>
        <p className="font-serif text-lg italic text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Sélection n°1
        </p>
      </section>

      {/* Image principale */}
      <section className="max-w-3xl mx-auto px-6 mb-16">
        <img
          src={img1}
          alt="Le Purificateur Haute Précision"
          className="w-full h-auto rounded-lg shadow-lg animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        />
      </section>

      {/* Section 1 : Le Constat Froid */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-6 flex items-baseline gap-3">
          <span className="text-primary">1.</span>
          Le Constat Froid
        </h2>
        <div className="h-px w-full bg-secondary mb-8" />
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            À Cotonou, l'eau du réseau circule dans des canalisations dont l'état est invisible et incertain.
          </p>
          <p>
            <strong>Résultat :</strong> un goût de chlore agressif, des sédiments (rouille, boue, sable) 
            qui traînent dans votre verre, et un risque sanitaire réel (calculs rénaux, bactéries, impuretés).
          </p>
          <p>
            La dépendance aux packs d'eau minérale ou aux bonbonnes de 25L n'est pas une fatalité, 
            c'est une charge financière et logistique qui encombre votre quotidien.
          </p>
        </div>
      </section>

      {/* Section 2 : La Réponse objekté */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-6 flex items-baseline gap-3">
          <span className="text-primary">2.</span>
          La Réponse objekté
        </h2>
        <div className="h-px w-full bg-secondary mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <img
            src={img2}
            alt="Installation du purificateur"
            className="w-full h-auto rounded-lg"
          />
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Nous avons choisi ce purificateur pour transformer votre robinet en une source 
              d'eau cristalline instantanée.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 border border-secondary rounded-lg">
            <h3 className="font-serif text-xl mb-3">Technologie Hybride à 7 Couches</h3>
            <p className="text-foreground/80 leading-relaxed">
              Une membrane en céramique haute densité bloque tous les micro-particules, 
              tandis que le charbon actif de noix de coco élimine odeurs et produits chimiques. 
              Ce n'est pas un filtre basique : c'est la sécurité au quotidien.
            </p>
          </div>
          
          <div className="p-6 border border-secondary rounded-lg">
            <h3 className="font-serif text-xl mb-3">Économie Radicale</h3>
            <p className="text-foreground/80 leading-relaxed">
              <strong>14 000 FCFA</strong> suffisent pour remplacer plus de 200 packs d'eau de 1,5L. 
              Le filtre est rentabilisé en moins de 30 jours.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-2">
              <strong>Bonus :</strong> vous recevez deux unités, chacune offrant environ 3 mois de filtration — soit 6 mois d'eau pure au total.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 : L'Usage au Quotidien */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-6 flex items-baseline gap-3">
          <span className="text-primary">3.</span>
          L'Usage au Quotidien
        </h2>
        <div className="h-px w-full bg-secondary mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-secondary/20 rounded-lg">
            <h3 className="font-serif text-lg mb-3">Installation Express</h3>
            <p className="text-sm text-foreground/70">
              Universel et rapide : en moins de 2 minutes, sans outils, grâce aux adaptateurs inclus. 
              S'adapte à tous les robinets standards de Cotonou.
            </p>
          </div>
          
          <div className="p-6 bg-secondary/20 rounded-lg">
            <h3 className="font-serif text-lg mb-3">Levier Intelligent</h3>
            <p className="text-sm text-foreground/70">
              Un geste simple pour passer de l'eau filtrée (boisson, cuisine) à l'eau brute (vaisselle). 
              L'unité dure plus longtemps et reste efficace.
            </p>
          </div>
          
          <div className="p-6 bg-secondary/20 rounded-lg">
            <h3 className="font-serif text-lg mb-3">Maintenance Simplifiée</h3>
            <p className="text-sm text-foreground/70">
              Unité lavable et réutilisable. Si le débit diminue, 
              un petit frottement avec le papier de verre fourni, et elle retrouve sa performance d'origine.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 : Fiche Technique */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-6 flex items-baseline gap-3">
          <span className="text-primary">4.</span>
          Fiche Technique & Santé
        </h2>
        <div className="h-px w-full bg-secondary mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Performance :</strong> Élimine 99% du chlore, des métaux lourds et des résidus de sédiments.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Santé :</strong> Préserve les minéraux essentiels tout en créant un bouclier contre les maladies hydriques.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong>Matériaux :</strong> Plastique ABS alimentaire haute résistance et céramique naturelle.</span>
              </li>
            </ul>
          </div>
          <img
            src={img5}
            alt="Contenu du coffret"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Section 5 : Engagement Logistique */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-6 flex items-baseline gap-3">
          <span className="text-primary">5.</span>
          L'Engagement Logistique
        </h2>
        <div className="h-px w-full bg-secondary mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Livraison Gratuite</h3>
            <p className="text-foreground/80">
              Exclusivement dans la zone de Cotonou.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-4">Contenu du coffret</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• 2 Purificateurs (unités de filtration)</li>
              <li>• Kit complet d'adaptateurs</li>
              <li>• 1 Papier de verre pour entretien</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-6">
            Prêt à transformer votre eau ?
          </h2>
          <Link
            to="/paiement"
            className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 mb-4"
          >
            Commander la Sélection n°1 — 14 000 FCFA
          </Link>
          <p className="text-sm text-muted-foreground">
            Paiement via Mobile Money
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Examen;

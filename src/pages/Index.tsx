import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import img1 from "@/assets/img1.jpg";
import { Droplets, Wrench, Shield, Check, X, Quote, HelpCircle, AlertTriangle, Phone, Truck, Users } from "lucide-react";

const Index = () => {
  // Meta Pixel - ViewContent (obligatoire pour campagnes Ventes)
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Le Purificateur Haute Précision',
        content_category: 'Filtration eau',
        content_ids: ['purificateur-001'],
        content_type: 'product',
        value: 5500,
        currency: 'XOF'
      });
    }
  }, []);

  // Meta Pixel - AddToCart (clic sur le CTA)
  const handleAddToCart = () => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'AddToCart', {
        content_name: 'Le Purificateur Haute Précision',
        content_ids: ['purificateur-001'],
        content_type: 'product',
        value: 5500,
        currency: 'XOF'
      });
    }
  };

  const testimonials = [
    {
      quote: "Mon fils avait souvent mal au ventre après avoir bu l'eau. Depuis le filtre, plus rien. Je dors mieux la nuit.",
      author: "Mme A.",
      role: "mère de 3 enfants",
      location: "Akpakpa"
    },
    {
      quote: "Ma mère a des problèmes de reins. Son médecin lui a conseillé de filtrer l'eau. Ce filtre nous a changé la vie.",
      author: "M. K.",
      role: "fils attentionné",
      location: "Fidjrossè"
    },
    {
      quote: "Avec les enfants, je ne prenais plus de risque. Maintenant l'eau est claire, sans odeur. Ils boivent sans que je m'inquiète.",
      author: "Mme T.",
      role: "mère de famille",
      location: "Cotonou Centre"
    }
  ];

  const faqs = [
    {
      question: "Combien de temps dure le filtre ?",
      answer: "Chaque unité offre environ 3 mois de filtration. Vous recevez 1 unité offrant 3 mois d'eau pure pour protéger votre famille."
    },
    {
      question: "Est-ce compatible avec mon robinet ?",
      answer: "Oui, compatible avec 95% des robinets standard à Cotonou. Testé sur plus de 500 installations. Si ça ne s'adapte pas, nous reprenons le produit sous 24h."
    },
    {
      question: "Comment se passe la livraison ?",
      answer: "Livraison gratuite à Cotonou, aujourd'hui ou demain. Remise en main propre par notre équipe, pas de transporteur externe."
    }
  ];

  return (
    <Layout>
      {/* ========== SECTION 1 : HERO ========== */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Estampille */}
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-6 animate-fade-in">
            Sélection n°1 — Cotonou, Bénin
          </p>

          {/* Titre Principal - Axé bénéfice */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Votre robinet,<br />enfin digne de confiance.
          </h1>

          {/* Accroche émotionnelle - Le problème RENFORCÉ */}
          <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            <p>
              À Cotonou, l'eau qui coule chez vous traverse des canalisations 
              dont vous ignorez l'état. Rouille, sédiments, chlore, métaux lourds…
            </p>
            <p className="mt-4 text-foreground font-medium">
              Chaque jour, sans le savoir, vous fatiguez vos reins.
            </p>
            <p className="mt-2 text-primary font-medium">
              Votre corps filtre ce que votre robinet devrait bloquer.
            </p>
          </div>

          {/* Image Produit */}
          <div className="relative max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
              onClick={handleAddToCart}
              className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
            >
              Protéger ma famille — 5 500 FCFA
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Livraison gratuite à Cotonou. Installation en 2 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-secondary" />
      </div>

      {/* ========== SECTION 2 : LA RÉALITÉ (NOUVELLE) ========== */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-destructive" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Ce que vous ne voyez pas
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Au Bénin, <strong>les maladies rénales sont en hausse constante</strong>. 
            Les médecins pointent du doigt la qualité de l'eau et 
            l'accumulation de métaux lourds dans l'organisme.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Vous ne pouvez pas changer le réseau de distribution.
          </p>
          <p className="text-xl text-primary font-medium">
            Mais vous pouvez protéger ce qui entre chez vous.
          </p>
        </div>
      </section>

      {/* Séparateur */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-secondary" />
      </div>

      {/* ========== SECTION 3 : AVANT / APRÈS ========== */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
          La transformation
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Avant objekté / Après objekté
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* AVANT */}
          <div className="p-8 bg-secondary/30 rounded-lg">
            <h3 className="font-serif text-xl mb-6 text-foreground/70">Avant</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Doute à chaque verre d'eau</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Goût de chlore et odeur suspecte</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Inquiétude silencieuse pour vos reins</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Bonbonnes encombrantes et coûteuses</span>
              </li>
            </ul>
          </div>

          {/* APRÈS */}
          <div className="p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="font-serif text-xl mb-6 text-primary">Après</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Confiance totale à chaque gorgée</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Eau pure, sans odeur ni goût</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Vos reins sont protégés au quotidien</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Solution discrète, directement au robinet</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Secondaire */}
        <div className="text-center mt-12">
          <Link
            to="/paiement"
            onClick={handleAddToCart}
            className="inline-block border border-foreground/20 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-foreground/5"
          >
            Passer à l'eau pure
          </Link>
        </div>
      </section>

      {/* Séparateur */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-secondary" />
      </div>

      {/* ========== SECTION 4 : COMMENT ÇA MARCHE ========== */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
          Installation en 3 étapes
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Sans outils. Sans expertise. 2 minutes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Étape 1 */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl mb-3">1. Vissez</h3>
            <p className="text-foreground/70 leading-relaxed">
              Vissez le filtre directement sur votre robinet. Compatible avec 95% des robinets standard.
            </p>
          </div>

          {/* Étape 2 */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Droplets className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl mb-3">2. Ouvrez</h3>
            <p className="text-foreground/70 leading-relaxed">
              Ouvrez l'eau et laissez couler quelques secondes pour activer la filtration.
            </p>
          </div>

          {/* Étape 3 */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl mb-3">3. Protégez</h3>
            <p className="text-foreground/70 leading-relaxed">
              Buvez une eau pure, sans chlore, sans rouille, sans métaux lourds. Pendant 3 mois.
            </p>
          </div>
        </div>

        {/* Badges de confiance */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Users className="w-5 h-5 text-primary" />
            <span>500+ robinets équipés à Cotonou</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Truck className="w-5 h-5 text-primary" />
            <span>Livraison en main propre</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Phone className="w-5 h-5 text-primary" />
            <span>WhatsApp 7j/7</span>
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-secondary" />
      </div>

      {/* ========== SECTION 5 : TÉMOIGNAGES ========== */}
      <section className="bg-secondary/20 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
            Ils protègent leur famille
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Des familles de Cotonou qui ont fait le choix de l'eau pure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-background p-8 rounded-lg border border-secondary"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="text-sm">
                  <span className="font-medium">{testimonial.author}</span>
                  <span className="text-muted-foreground">, {testimonial.role}</span>
                  <span className="text-muted-foreground block">{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 6 : L'OFFRE ========== */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
          5 500 FCFA pour 3 mois de protection
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Une unité. Zéro souci. Vos reins vous remercieront.
        </p>

        {/* Encadré Offre */}
        <div className="max-w-xl mx-auto p-8 border border-primary/30 rounded-lg bg-primary/5 mb-12">
          <h3 className="font-serif text-2xl mb-6 text-center">Le Purificateur Haute Précision</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Filtration céramique hybride à 7 couches</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Bloque chlore, rouille, sédiments, métaux lourds</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>1 unité incluse (~3 mois de filtration)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Livraison gratuite à Cotonou</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Installation en 2 minutes, sans outils</span>
            </li>
          </ul>
          <div className="text-center">
            <p className="font-serif text-4xl text-primary mb-2">5 500 FCFA</p>
            <p className="text-sm text-muted-foreground">Paiement unique. Pas d'abonnement.</p>
          </div>
        </div>

        {/* Rareté élégante */}
        <div className="bg-foreground/5 p-6 rounded-lg mb-8 text-center">
          <p className="text-foreground/80 leading-relaxed">
            Nous livrons personnellement chaque commande à Cotonou.<br />
            <strong>Pour garantir ce service, nous limitons les livraisons à 20 familles par semaine.</strong>
          </p>
          <p className="text-sm text-primary mt-3 font-medium">
            Les places de cette semaine se remplissent. Réservez la vôtre.
          </p>
        </div>

        {/* Comparaison économique */}
        <div className="bg-secondary/30 p-8 rounded-lg mb-12">
          <h3 className="font-serif text-xl mb-4 text-center">L'économie intelligente</h3>
          <p className="text-center text-foreground/80 leading-relaxed max-w-lg mx-auto">
            En 3 mois, vous dépensez environ <strong>15 000 FCFA</strong> en eau en bouteille ou bonbonnes. 
            Avec objekté, vous économisez <strong>9 500 FCFA</strong>… et vous protégez vos reins.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/paiement"
            onClick={handleAddToCart}
            className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
          >
            Commander maintenant — 5 500 FCFA
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Mobile Money (MTN MoMo / Moov) ou Carte Bancaire
          </p>
        </div>
      </section>

      {/* Séparateur */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-secondary" />
      </div>

      {/* ========== SECTION 7 : GARANTIE + FAQ ========== */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        {/* Garantie */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-3xl mb-4">Notre Engagement</h2>
          <p className="text-foreground/80 max-w-xl mx-auto leading-relaxed">
            Si le filtre ne vous convient pas ou ne s'adapte pas à votre robinet, 
            nous le reprenons sous 24h. <strong>Aucune question posée.</strong>
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Service client WhatsApp disponible 7 jours sur 7.
          </p>
        </div>

        {/* FAQ Compacte */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-xl text-center mb-8 flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Questions fréquentes
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-secondary pb-6 last:border-b-0">
                <h4 className="font-medium mb-2">{faq.question}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faq" className="text-primary text-sm hover:underline">
              Voir toutes les questions →
            </Link>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <Link
            to="/paiement"
            onClick={handleAddToCart}
            className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
          >
            Protéger ma famille — 5 000 FCFA
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Livraison gratuite à Cotonou. Aujourd'hui ou demain.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

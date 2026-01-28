import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_NUMBER = "+22996991128";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;

const FAQ = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4 animate-fade-in">
            La Clarté
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Questions Fréquentes
          </h1>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Tout ce que vous devez savoir avant de faire votre sélection.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1 : Installation & Compatibilité */}
          <section>
            <h2 className="font-serif text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm text-primary">1</span>
              Installation & Compatibilité
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="border border-secondary rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  Est-ce que le purificateur s'adapte à mon robinet ?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  Oui. Chaque objet est livré avec un kit complet d'adaptateurs universels. 
                  Que votre robinet ait un filetage interne ou externe, le montage se fait 
                  manuellement en moins de 2 minutes, sans aucun outil.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-secondary rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  Puis-je l'installer moi-même ?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  Absolument. C'est un dispositif "Plug & Play". Une notice simplifiée accompagne 
                  votre sélection, et notre{" "}
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    concierge WhatsApp
                  </a>{" "}
                  est disponible pour vous guider pas à pas en cas de doute.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Section 2 : Performance & Santé */}
          <section>
            <h2 className="font-serif text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm text-primary">2</span>
              Performance & Santé
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-3" className="border border-secondary rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  Que filtre-t-il exactement ?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  <p className="mb-4">La technologie hybride à 7 couches :</p>
                  <ul className="space-y-2">
                    <li>• Bloque 99 % des sédiments (rouille, boue, sable)</li>
                    <li>• Élimine le goût et l'odeur du chlore</li>
                    <li>• Réduit les métaux lourds</li>
                  </ul>
                  <p className="mt-4">
                    Tout en préservant les minéraux essentiels comme le calcium et le magnésium.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border border-secondary rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  L'eau est-elle réellement potable après filtration ?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  Oui. Le filtre traite l'eau du réseau urbain de Cotonou et élimine les impuretés 
                  liées à la vétusté des canalisations, pour vous offrir une eau cristalline, saine 
                  et prête à boire ou cuisiner.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Section 3 : Entretien & Durabilité */}
          <section>
            <h2 className="font-serif text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm text-primary">3</span>
              Entretien & Durabilité
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-5" className="border border-secondary rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  Quelle est la durée de vie de la cartouche ?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  Chaque cartouche dure environ 6 mois, selon votre consommation.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border border-secondary rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  Comment entretenir le filtre ?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  <p className="mb-4">Si le débit diminue, il suffit de :</p>
                  <ol className="space-y-2">
                    <li>1. Dévisser le compartiment</li>
                    <li>2. Retirer la cartouche en céramique</li>
                    <li>3. La frotter légèrement avec le papier de verre fourni</li>
                  </ol>
                  <p className="mt-4">
                    Cela retire les sédiments accumulés et redonne au filtre sa capacité d'origine.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border border-secondary rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  Où acheter des cartouches de rechange ?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  Elles seront disponibles en permanence dans notre section "Archive", 
                  exclusivement pour nos clients.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Section 4 : Livraison & Garantie */}
          <section>
            <h2 className="font-serif text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm text-primary">4</span>
              Livraison & Garantie
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-8" className="border border-secondary rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  Quels sont les délais de livraison à Cotonou ?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  <ul className="space-y-2">
                    <li>• <strong>Commandes validées avant 12h</strong> → livraison le jour même</li>
                    <li>• <strong>Commandes après 12h</strong> → livraison le lendemain matin</li>
                  </ul>
                  <p className="mt-4">Livraison strictement gratuite dans tout Cotonou.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9" className="border border-secondary rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  Quelle est la garantie ?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  Si l'objet ne s'adapte pas à votre installation malgré les adaptateurs, 
                  ou s'il présente un défaut de fabrication, nous procédons à un échange ou 
                  un remboursement intégral sous 24h.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        {/* CTA Assistance */}
        <div className="mt-16 pt-12 border-t border-secondary text-center">
          <p className="text-muted-foreground mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground/20 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-foreground/5"
          >
            Contacter le Service Client
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;

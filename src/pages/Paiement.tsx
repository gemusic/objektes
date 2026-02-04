import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ProductCarousel from "@/components/ProductCarousel";

const WHATSAPP_NUMBER = "+22996991128";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;

// KKiaPay Configuration
const KKIAPAY_PUBLIC_KEY = "be93f6efefe24a436e8b22c95e490373b2dbc283";

// Configuration EmailJS
const EMAILJS_SERVICE_ID = "service_p4n5ask";
const EMAILJS_TEMPLATE_ID = "template_eubvd3i";
const EMAILJS_PUBLIC_KEY = "aJ3NEMS0ioc1VbC56";

interface FormData {
  email: string;
  nom: string;
  telephone: string;
  adresse: string;
}

const Paiement = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const montant = 5000;
  const produitNom = "Le Purificateur Haute Précision (2 unités)";
  
  const [formData, setFormData] = useState<FormData>({
    email: "",
    nom: "",
    telephone: "",
    adresse: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Charger le script KKiaPay
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.kkiapay.me/k.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Meta Pixel - InitiateCheckout (enrichi pour campagnes Ventes)
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Le Purificateur Haute Précision (2 unités)',
        content_ids: ['purificateur-001'],
        content_type: 'product',
        value: 5000,
        currency: 'XOF',
        num_items: 2
      });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.nom || !formData.telephone || !formData.adresse) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const sendOrderEmail = async (transactionId: string) => {
    try {
      const templateParams = {
        nom: formData.nom,
        email: formData.email,
        telephone: formData.telephone,
        adresse: formData.adresse,
        produit: produitNom,
        montant: montant.toLocaleString(),
        transactionId: transactionId,
        date: new Date().toLocaleString('fr-FR')
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email envoyé avec succès:", response);
      return response.status === 200;
    } catch (error) {
      console.error("Erreur envoi email:", error);
      return false;
    }
  };

  const handlePayment = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Ouvrir le widget KKiaPay
      const kkiapay = (window as any).openKkiapayWidget;
      
      if (kkiapay) {
        kkiapay({
          amount: montant,
          position: "center",
          callback: "",
          data: "",
          theme: "#A66B4C",
          key: KKIAPAY_PUBLIC_KEY,
          sandbox: false
        });

        // Écouter les événements KKiaPay
        (window as any).addKkiapayListener('success', async function(response: any) {
          console.log("Paiement réussi:", response);
          
          // Envoyer l'email de confirmation
          await sendOrderEmail(response.transactionId);
          
          // Rediriger vers la page de confirmation
          navigate("/confirmation", { 
            state: { 
              transactionId: response.transactionId,
              produit: produitNom,
              montant: montant,
              nom: formData.nom,
              email: formData.email
            }
          });
        });

        (window as any).addKkiapayListener('failed', function(error: any) {
          console.error("Paiement échoué:", error);
          toast({
            title: "Paiement échoué",
            description: "Une erreur est survenue lors du paiement. Veuillez réessayer.",
            variant: "destructive"
          });
          setIsSubmitting(false);
        });

        (window as any).addKkiapayListener('close', function() {
          setIsSubmitting(false);
        });
      } else {
        toast({
          title: "Erreur",
          description: "Le système de paiement n'est pas disponible. Veuillez rafraîchir la page.",
          variant: "destructive"
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast({
        title: "Erreur",
        description: "Une erreur inattendue s'est produite.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-primary mb-4 animate-fade-in">
            Le Calme
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Paiement
          </h1>
        </div>

        {/* Galerie Produit */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <h2 className="font-serif text-xl mb-4">Votre Sélection</h2>
          <div className="h-px w-full bg-secondary mb-6" />
          <ProductCarousel />
        </section>

        {/* Récapitulatif */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-serif text-xl mb-4">1. Récapitulatif de la Sélection</h2>
          <div className="h-px w-full bg-secondary mb-6" />
          
          <div className="p-6 bg-secondary/20 rounded-lg space-y-3">
            <div className="flex justify-between">
              <span className="text-foreground/70">
                Sélection n°1 : Le Purificateur Haute Précision (2 unités)
              </span>
              <span className="font-medium">{montant.toLocaleString()} FCFA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/70">Livraison</span>
              <span className="text-primary">Gratuite</span>
            </div>
            <div className="h-px w-full bg-secondary my-3" />
            <div className="flex justify-between text-lg">
              <span className="font-medium">Total à régler</span>
              <span className="font-serif font-semibold">{montant.toLocaleString()} FCFA</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Chaque unité offre environ 3 mois de filtration — soit 6 mois d'eau pure pour vos deux unités.
          </p>
        </section>

        {/* Coordonnées */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <h2 className="font-serif text-xl mb-4">2. Vos Coordonnées</h2>
          <div className="h-px w-full bg-secondary mb-6" />
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-sm">Adresse Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 bg-background border-secondary"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Votre confirmation et votre reçu seront envoyés instantanément par email.
              </p>
            </div>
          </div>
        </section>

        {/* Informations de Livraison */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="font-serif text-xl mb-4">3. Informations de Livraison</h2>
          <div className="h-px w-full bg-secondary mb-6" />
          
          <p className="text-sm text-foreground/70 mb-6">
            Ces informations permettent à notre service de livraison de vous trouver sans faute 
            et de garantir une remise en main propre.
          </p>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="nom" className="text-sm">Nom complet *</Label>
              <Input
                id="nom"
                name="nom"
                type="text"
                placeholder="Votre nom complet"
                value={formData.nom}
                onChange={handleInputChange}
                className="mt-2 bg-background border-secondary"
              />
            </div>
            
            <div>
              <Label htmlFor="telephone" className="text-sm">Numéro de téléphone *</Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="+229 XX XX XX XX"
                value={formData.telephone}
                onChange={handleInputChange}
                className="mt-2 bg-background border-secondary"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Indispensable pour coordonner la remise directement chez vous.
              </p>
            </div>
            
            <div>
              <Label htmlFor="adresse" className="text-sm">Adresse de livraison précise *</Label>
              <Textarea
                id="adresse"
                name="adresse"
                placeholder="Quartier, rue, repères visuels… pour que notre équipe arrive sans détour à Cotonou."
                value={formData.adresse}
                onChange={handleInputChange}
                className="mt-2 bg-background border-secondary min-h-[100px]"
              />
            </div>
          </div>
        </section>

        {/* Mode de Paiement */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.35s" }}>
          <h2 className="font-serif text-xl mb-4">4. Mode de Paiement</h2>
          <div className="h-px w-full bg-secondary mb-6" />
          
          <p className="text-foreground/80 mb-4">
            Le paiement électronique valide immédiatement votre sélection.
          </p>
          <p className="text-foreground/80 mb-6">
            Pour maintenir la fluidité de notre service, <strong>nous n'acceptons aucune transaction en espèces</strong>.
          </p>
          
          <div className="p-4 bg-secondary/20 rounded-lg">
            <p className="text-sm text-foreground/70">
              <strong>Options disponibles :</strong>
            </p>
            <ul className="text-sm text-foreground/70 mt-2 space-y-1">
              <li>• Mobile Money (MTN MoMo / Moov Money)</li>
              <li>• Carte Bancaire (Visa / Mastercard)</li>
            </ul>
          </div>
        </section>

        {/* Bouton de Validation */}
        <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={handlePayment}
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground px-10 py-5 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Traitement en cours..." : `Payer ${montant.toLocaleString()} FCFA`}
          </button>
          
          <p className="text-sm text-muted-foreground text-center mt-6">
            Dès que le paiement est validé, un email de confirmation vous est envoyé. 
            Notre service de livraison vous contactera dans les 2 heures pour organiser 
            la remise en main propre.
          </p>
        </section>

        {/* Assistance */}
        <section className="mt-12 pt-12 border-t border-secondary text-center">
          <p className="text-muted-foreground mb-2">
            Une question sur votre paiement ?
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Contactez notre concierge WhatsApp
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default Paiement;

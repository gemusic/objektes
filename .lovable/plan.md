
# Integration EmailJS pour les notifications de commande

## Resume

Integration du service EmailJS pour envoyer automatiquement les details de commande a `gerernoscommandes@gmail.com` quand un client finalise son paiement.

## Identifiants EmailJS configures

| Element | Valeur |
|---------|--------|
| Service ID | service_p4n5ask |
| Template ID | template_eubvd3i |
| Public Key | aJ3NEMS0ioc1VbC56 |

## Modifications a effectuer

### 1. Installer la dependance EmailJS

Ajouter le package `@emailjs/browser` au projet.

### 2. Modifier `src/pages/Paiement.tsx`

**Changements prevus :**

- **Ligne 1** : Ajouter l'import de EmailJS
- **Lignes 16-20** : Supprimer la configuration SMTP inutilisee (les identifiants Gmail exposes)
- **Lignes 16-20** : Ajouter la configuration EmailJS avec tes identifiants
- **Lignes 97-125** : Remplacer la fonction `sendOrderEmail` simulee par une vraie implementation EmailJS

### Nouveau code de configuration (remplace SMTP_CONFIG)

```typescript
import emailjs from '@emailjs/browser';

// Configuration EmailJS
const EMAILJS_SERVICE_ID = "service_p4n5ask";
const EMAILJS_TEMPLATE_ID = "template_eubvd3i";
const EMAILJS_PUBLIC_KEY = "aJ3NEMS0ioc1VbC56";
```

### Nouvelle fonction sendOrderEmail

```typescript
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

    console.log("Email envoye avec succes:", response);
    return response.status === 200;
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return false;
  }
};
```

## Flux apres implementation

```text
Client remplit le formulaire
         |
         v
Client clique "Payer 14,000 FCFA"
         |
         v
    KKiaPay s'ouvre
         |
         v
  Paiement reussi
         |
         v
EmailJS envoie l'email ------> gerernoscommandes@gmail.com
         |                     (tu recois: nom, email, telephone,
         |                      adresse, produit, montant, date)
         v
Page de confirmation
```

## Resultat attendu

Apres cette modification, des qu'un client termine son paiement KKiaPay, tu recevras immediatement un email a `gerernoscommandes@gmail.com` contenant :

- Nom du client
- Email du client
- Numero de telephone
- Adresse de livraison
- Produit commande
- Montant paye
- ID de transaction
- Date et heure

## Avantages

- Aucun serveur necessaire
- Fonctionne directement depuis le navigateur
- 200 emails gratuits par mois
- Configuration terminee en quelques secondes

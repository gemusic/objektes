

# Plan des Pages Restantes — OBJEKTÉ

## Vue d'ensemble
Ajout de 4 pages supplémentaires au site objekté, en respectant l'identité visuelle minimaliste premium établie (palette Sable Pâle, Anthracite, Terracotta, typographies serif/sans-serif, beaucoup d'espace vide).

---

## Page 1 : L'Archive (La Lignée)

### Section 1 — Introduction de la Collection
- **Titre** : "La Cohérence du Temps" (typographie serif élégante)
- **Sous-titre** : "Chaque objet sélectionné par objekté est conçu pour rester pertinent, même après avoir quitté le devant de la scène."
- Texte d'introduction sur la trace des recherches et de l'exigence

### Section 2 — Le Catalogue Silencieux
Grille verticale très espacée avec 2 cartes :

**Carte Sélection n°1** (style actif)
- Numéro en serif italic : "Sélection n°1"
- Titre : "Le Purificateur Haute Précision"
- Badge statut : "Sélection Actuelle" (Terracotta)
- Résumé : "La fin des bonbonnes à Cotonou. Une barrière de 7 couches entre le réseau et votre santé."
- Bouton : "VOIR L'OBJET ACTUEL" → lien vers /examen

**Carte Sélection n°00** (style grisé/opacité réduite)
- Numéro : "Sélection n°00"
- Titre : "[PROCHAINEMENT]"
- Badge statut : "En cours de tests"
- Résumé : "Nous testons actuellement durabilité et impact. La prochaine sélection ne sera révélée qu'une fois sa justesse confirmée."

### Section 3 — Accès aux Consommables
- Titre : "Besoin d'une cartouche de rechange pour votre Purificateur ?"
- Texte explicatif sur la disponibilité des composants
- Bouton CTA : "COMMANDER UNE CARTOUCHE — 5 000 FCFA" (lien vers page paiement avec paramètre cartouche)

### Section 4 — Philosophie de l'Archive
- Titre : "Pourquoi un seul objet à la fois ?"
- 3 points philosophiques :
  - Le bruit est l'ennemi de la clarté
  - Attention totale et contrôle qualité absolu
  - Place à la prochaine solution essentielle

### Section 5 — Footer de Page
- Citation : *"Une sélection passée n'est jamais obsolète, elle est simplement pérenne."*
- Bouton : "RETOUR À LA SÉLECTION ACTUELLE" → lien vers accueil

---

## Page 2 : Politique de Confidentialité

Page statique avec mise en page sobre et typographie claire.

### Sections
1. **Philosophie de Protection** — Promesse de calme et non-partage des données
2. **Données Collectées** — Liste structurée (Identité, Contact, Logistique, Paiement)
3. **Utilisation des Données** — 3 usages exclusifs listés
4. **Sécurité et Conservation** — Serveurs sécurisés, durée 2 ans
5. **Vos Droits** — Référence à la loi n° 2017-20 du Bénin, email de contact
6. **Cookies** — Cookies techniques uniquement, pas de pistage

### Design
- Titres numérotés en serif
- Corps de texte en sans-serif
- Séparateurs fins Gris Galet entre sections
- Lien "Service Client" vers WhatsApp pour les demandes

---

## Page 3 : Conditions Générales de Vente (CGV)

Page légale complète avec 8 articles structurés.

### Articles
1. **Objet** — Régit les ventes de l'Objet n°01 à Cotonou
2. **Produits et Disponibilité** — Un seul objet à la fois, limite des stocks
3. **Prix** — 14 000 FCFA, livraison gratuite
4. **Commande et Paiement** — Validation, moyens de paiement, pas d'espèces
5. **Livraison (Cotonou uniquement)** — Zone, délais (avant/après 12h), coordination
6. **Droit de Rétractation et Retours** — Promesse "Sans Regret", 48h, conditions
7. **Garantie et Service Après-Vente** — Support WhatsApp, limites de garantie
8. **Litiges** — Solution amiable, tribunaux de Cotonou

### Design
- Structure juridique claire avec numérotation
- Sous-sections avec puces
- Mise en évidence des points clés (délais, prix, garantie)

---

## Page 4 : Mentions Légales

Page d'information légale obligatoire.

### Sections
1. **Éditeur du Site** — Informations avec champs à compléter [PLACEHOLDER]
   - Nom/Raison Sociale
   - Siège Social : Cotonou, République du Bénin
   - Contact email
   - Numéro WhatsApp : +229 96991128
   - IFU (si disponible)

2. **Hébergement** — Informations hébergeur [PLACEHOLDER à compléter]

3. **Propriété Intellectuelle** — Protection des contenus objekté

4. **Protection des Données Personnelles** — Référence loi n° 2017-20, droits RGPD béninois

5. **Limitation de Responsabilité** — Clause standard

### Design
- Format épuré avec titres clairs
- Texte juridique sobre
- Placeholders visibles [ENTRE CROCHETS] pour les informations à fournir ultérieurement

---

## Navigation & Routing

### Nouvelles routes à ajouter
- `/archive` → Page L'Archive
- `/confidentialite` → Politique de Confidentialité
- `/cgv` → Conditions Générales de Vente
- `/mentions-legales` → Mentions Légales

### Mise à jour du Footer
Ajout des liens vers les 3 pages légales dans le footer de toutes les pages :
- Politique de Confidentialité
- CGV
- Mentions Légales

### Mise à jour du Header
Ajout du lien "L'Archive" dans la navigation gauche (à côté de "La Sélection")

---

## Note technique : Envoi d'email SMTP

Comme demandé, l'envoi d'email sera géré côté client avec les credentials SMTP directement dans le code. La fonction utilisera un service d'envoi d'email compatible navigateur (comme EmailJS ou une approche similaire) pour envoyer les informations de commande à gerernoscommandes@gmail.com lors de la validation du paiement.


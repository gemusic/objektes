

# Tunnel de Vente Optimise + Nouveau Prix 5 000 FCFA

## Resume

Transformation complete de la landing page en tunnel de vente haute conversion, tout en preservant l'esprit premium objekté. Le prix passe de 14 000 FCFA a **5 000 FCFA pour les 2 unites** (6 mois de filtration).

---

## Changement de Prix

| Element | Ancienne valeur | Nouvelle valeur |
|---------|-----------------|-----------------|
| Prix | 14 000 FCFA | 5 000 FCFA |
| Nombre d'unites | 2 unites | 2 unites (inchange) |
| Duree filtration | 6 mois | 6 mois (inchange) |

---

## Fichiers a Modifier

### 1. src/pages/Index.tsx

**Restructuration complete en 6 sections optimisees pour la conversion :**

#### Section 1 : Hero (Above the Fold)
```text
[Estampille]
Selection n°1 — Cotonou

[Titre axe benefice]
Votre robinet, enfin digne de confiance.

[Accroche emotionnelle]
A Cotonou, l'eau qui coule chez vous traverse des canalisations 
dont vous ignorez l'etat. Rouille, sediments, chlore... 
chaque verre est un pari silencieux sur votre sante.

[Image Produit]

[CTA Principal]
Proteger ma famille — 5 000 FCFA

[Micro-engagement]
Livraison gratuite a Cotonou. Installation en 2 minutes.
```

#### Section 2 : La Transformation (Avant/Apres)
Grille montrant le changement de vie

#### Section 3 : Comment ca marche
3 etapes simples avec icones

#### Section 4 : Temoignages
3 temoignages authentiques de clients a Cotonou

#### Section 5 : L'Offre
Prix, valeur, economie par rapport aux bonbonnes

#### Section 6 : Garantie + FAQ rapide
Eliminer les dernieres hesitations

**Modifications Meta Pixel :**
- `ViewContent`: value 14000 → 5000
- `AddToCart`: value 14000 → 5000

---

### 2. src/pages/Paiement.tsx

**Modifications :**
- Ligne 34 : `const montant = 14000` → `const montant = 5000`
- Ligne 65 : Meta Pixel InitiateCheckout value → 5000

---

### 3. src/pages/Confirmation.tsx

**Modifications :**
- Ligne 25 : default montant → 5000
- Ligne 36-45 : Meta Pixel Purchase value → 5000

---

## Nouvelle Structure du Tunnel (Index.tsx)

```text
+--------------------------------------------------+
|  SECTION 1 : HERO                                |
|  - Probleme emotionnel immediat                  |
|  - Image produit                                 |
|  - CTA "Proteger ma famille — 5 000 FCFA"        |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  SECTION 2 : AVANT/APRES                         |
|  - Transformation visuelle                       |
|  - CTA secondaire                                |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  SECTION 3 : COMMENT CA MARCHE                   |
|  - 3 etapes ultra-simples                        |
|  - Elimine les objections techniques             |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  SECTION 4 : TEMOIGNAGES                         |
|  - 3 avis clients authentiques                   |
|  - Credibilite sociale                           |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  SECTION 5 : L'OFFRE                             |
|  - Prix : 5 000 FCFA pour 2 unites (6 mois)      |
|  - Comparaison economie vs bonbonnes             |
|  - CTA "Commander maintenant"                    |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  SECTION 6 : GARANTIE + FAQ                      |
|  - Garantie 24h                                  |
|  - 3 questions frequentes                        |
|  - CTA final                                     |
+--------------------------------------------------+
```

---

## Copywriting Cle

### Accroche Hero
> "A Cotonou, l'eau qui coule chez vous traverse des canalisations dont vous ignorez l'etat. Rouille, sediments, chlore... chaque verre est un pari silencieux sur votre sante."

### Proposition de Valeur
> "5 000 FCFA pour 6 mois d'eau pure. Deux unites. Zero souci."

### Comparaison Economique
> "En 6 mois, vous depensez environ 30 000 FCFA en eau en bouteille. Avec objekté, vous economisez 25 000 FCFA... et vous protegez l'environnement."

### Garantie
> "Si le filtre ne vous convient pas ou ne s'adapte pas a votre robinet, nous le reprenons sous 24h. Aucune question posee."

---

## Elements Visuels Preserves

| Element | Status |
|---------|--------|
| Palette Sable/Anthracite/Terracotta | Conservee |
| Typographie serif + sans-serif | Conservee |
| Animations fade-in elegantes | Conservees |
| Style minimaliste premium | Conserve |
| Aucun badge promo agressif | Respecte |

---

## Resume Technique

| Fichier | Modifications |
|---------|---------------|
| `src/pages/Index.tsx` | Restructuration complete + value 5000 |
| `src/pages/Paiement.tsx` | montant = 5000 + Meta Pixel value 5000 |
| `src/pages/Confirmation.tsx` | default montant = 5000 + Meta Pixel value 5000 |


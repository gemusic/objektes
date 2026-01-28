

# Plan : Header Responsive + Carousel Produit sur la Page Paiement

## Problème Identifié

### 1. Header non responsive
Le header actuel affiche tous les liens de navigation sur une seule ligne, ce qui pose problème sur mobile où les éléments se chevauchent ou deviennent illisibles. Les clients sur smartphone (la majorité) ont une mauvaise expérience.

### 2. Absence de galerie produit sur la page Paiement
La page de paiement ne montre pas d'images du produit, ce qui réduit la confiance du client avant l'achat. Un carousel d'images permettrait de rassurer le client sur sa sélection.

---

## Solution Proposée

### Partie 1 : Header Responsive avec Menu Hamburger

**Structure mobile (écrans < 768px) :**
- Logo objekté centré (toujours visible)
- Icône hamburger (menu) à droite
- Au clic sur le menu : panneau latéral (Sheet) qui s'ouvre avec tous les liens de navigation
- Animation fluide d'ouverture/fermeture

**Structure desktop (écrans >= 768px) :**
- Navigation gauche : "La Sélection", "L'Archive"
- Logo centré
- Navigation droite : "À Propos", "FAQ"
- Comportement actuel conservé

**Composants utilisés :**
- Sheet (Radix UI) déjà disponible dans le projet
- Icône Menu de Lucide React
- Hook `useIsMobile` déjà existant dans le projet

### Partie 2 : Carousel Produit sur la Page Paiement

**Position :** En haut de la page, avant le récapitulatif de la sélection

**Fonctionnalités :**
- Affichage des 6 images produit (les anciennes + les nouvelles uploadées)
- Navigation par swipe sur mobile (tactile)
- Boutons précédent/suivant sur desktop
- Indicateurs de dots en dessous pour montrer la position actuelle
- Images en format carré/rectangulaire avec coins arrondis
- Responsive : s'adapte à toutes les tailles d'écran

**Images à intégrer (6 au total) :**
1. img1-2.jpg (citron dans le verre)
2. img2-2.jpg (main tenant le filtre)
3. img3-2.jpg (ambiance tropicale)
4. img4-2.jpg (arc-en-ciel de gouttes)
5. Picsart_26-01-28_08-46-25-380.png (gros plan filtre)
6. Picsart_26-01-28_08-44-14-292.jpg (kit complet avec cartouches)

---

## Détails Techniques

### Fichiers à modifier

**1. `src/components/layout/Header.tsx`**
- Importer le composant Sheet et l'icône Menu
- Ajouter un état pour gérer l'ouverture du menu mobile
- Utiliser le hook `useIsMobile` pour détecter le type d'écran
- Afficher le menu hamburger sur mobile, navigation classique sur desktop

**2. `src/pages/Paiement.tsx`**
- Importer le composant Carousel existant
- Importer les 6 images produit
- Ajouter une section "Galerie Produit" avec le carousel avant le récapitulatif
- Ajouter des dots de navigation personnalisés
- Style cohérent avec le design objekté (coins arrondis, espace négatif)

### Nouvelles images à copier
Les 6 images uploadées seront copiées dans `src/assets/` :
- img1-2.jpg, img2-2.jpg, img3-2.jpg, img4-2.jpg
- Picsart_26-01-28_08-46-25-380.png
- Picsart_26-01-28_08-44-14-292.jpg

---

## Résultat Attendu

### Sur Mobile
- Header compact avec logo centré et menu hamburger
- Menu latéral élégant avec tous les liens
- Carousel d'images swipeable avec les 6 photos du produit
- Experience fluide et intuitive pour les clients smartphone

### Sur Desktop
- Navigation classique conservée
- Carousel avec flèches de navigation
- Transition douce entre les images


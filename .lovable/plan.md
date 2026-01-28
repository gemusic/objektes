

# Plan : Cohérence Visuelle avec l'Affiche Publicitaire + Miniatures Carousel

## Analyse de l'Affiche Publicitaire

L'affiche Meta Ads utilise une esthétique parfaitement alignée avec le site :
- Fond beige/crème texturé (Sable Pâle) - deja OK sur le site
- Typographie serif pour le logo et les titres - deja OK
- Utilisation d'italiques pour les phrases descriptives (style elegant)
- Couleur terracotta/ocre pour les elements importants (prix, liens)
- Beaucoup d'espace negatif - deja OK

**Conclusion** : Le site est deja tres coherent avec l'affiche. Quelques ajustements typographiques mineurs peuvent renforcer cette coherence.

---

## Modification 1 : Miniatures Cliquables pour le Carousel

**Fichier concerne** : `src/components/ProductCarousel.tsx`

**Fonctionnalite** :
Ajouter une rangee de miniatures en dessous de l'image principale qui permettent de naviguer rapidement entre les images.

**Structure visuelle** :
```text
+----------------------------------------+
|                                        |
|         Image Principale               |
|        (grande, swipeable)             |
|                                        |
+----------------------------------------+
|  [img1] [img2] [img3] [img4] [img5] [img6]  |
|    ^                                   |
|   actif (bordure terracotta)           |
+----------------------------------------+
```

**Comportement** :
- Miniatures de 60x60px avec coins arrondis (8px)
- Espacement de 8px entre chaque miniature
- Miniature active : bordure terracotta (2px) + opacite 100%
- Miniatures inactives : bordure grise fine (1px) + opacite 70%
- Clic sur une miniature = navigation directe vers cette image
- Sur mobile : miniatures scrollables horizontalement si necessaire
- Transition fluide lors du changement d'image

**Remplacement des dots** :
Les miniatures remplaceront les dots actuels car elles offrent une meilleure experience utilisateur et montrent un apercu de chaque image.

---

## Modification 2 : Renforcement de la Coherence Typographique

**Fichier concerne** : `src/index.css`

**Ajouts CSS** :
Ajouter une classe utilitaire pour le style italique serif elegant utilise sur l'affiche :
- `.text-elegant` : Applique la police serif en italique pour les citations et phrases descriptives premium

**Usage sur les pages** :
Cette classe pourra etre utilisee sur les phrases descriptives pour matcher le style "Protocole Hydratation" de l'affiche.

---

## Resume des Fichiers a Modifier

| Fichier | Action |
|---------|--------|
| `src/components/ProductCarousel.tsx` | Ajout des miniatures cliquables sous l'image principale |
| `src/index.css` | Ajout de la classe `.text-elegant` pour le style italique serif |

---

## Resultat Final

### Page Paiement - Carousel Ameliore
- Image principale grand format (swipeable sur mobile)
- 6 miniatures cliquables en dessous
- Miniature active clairement identifiee par une bordure terracotta
- Navigation fluide entre les images

### Coherence avec l'Affiche
- Memes couleurs (Sable Pale, Anthracite, Terracotta)
- Meme typographie serif elegante
- Meme atmosphere calme et premium
- Aucun dephasage visuel pour les visiteurs venant des Meta Ads


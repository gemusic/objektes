

# Plan : Ajout des Miniatures Produit au Carousel

## Objectif
Remplacer les indicateurs a points (dots) actuels par des miniatures cliquables des images produit pour une meilleure experience utilisateur sur la page de paiement.

---

## Modification a effectuer

**Fichier** : `src/components/ProductCarousel.tsx`

### Changements

**1. Remplacement de la section "Dots Navigation" (lignes 92-107)**

La section actuelle avec les petits points sera remplacee par une rangee de miniatures cliquables.

**2. Structure des miniatures**

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

**3. Specifications visuelles**

| Element | Style |
|---------|-------|
| Taille miniature | 60x60px (w-15 h-15) |
| Coins | Arrondis (rounded-lg, ~8px) |
| Espacement | gap-2 (8px entre chaque) |
| Miniature active | Bordure Terracotta 2px + opacite 100% |
| Miniatures inactives | Bordure grise fine 1px + opacite 70% |
| Transition | Fluide (transition-all duration-300) |

**4. Comportement**

- Clic sur une miniature = navigation directe vers cette image (`scrollTo(index)`)
- Sur mobile : conteneur scrollable horizontalement si necessaire (`overflow-x-auto`)
- Synchronisation automatique avec le swipe de l'image principale

---

## Code a implementer

Remplacer les lignes 92-107 (section Dots Navigation) par :

```tsx
{/* Thumbnails Navigation */}
<div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
  {productImages.map((image, index) => (
    <button
      key={index}
      onClick={() => scrollTo(index)}
      className={cn(
        "flex-shrink-0 w-15 h-15 rounded-lg overflow-hidden transition-all duration-300",
        selectedIndex === index
          ? "ring-2 ring-primary ring-offset-2 opacity-100"
          : "ring-1 ring-secondary opacity-70 hover:opacity-100"
      )}
      aria-label={`Voir image ${index + 1}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
    </button>
  ))}
</div>
```

---

## Resultat Attendu

- 6 miniatures alignees horizontalement sous l'image principale
- Miniature active clairement identifiee par une bordure Terracotta
- Navigation instantanee au clic sur n'importe quelle miniature
- Experience tactile fluide sur mobile avec scrollable horizontal
- Coherence visuelle avec le design objekté et l'affiche publicitaire


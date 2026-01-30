

# Ajout des Événements de Conversion Meta Pixel

## Objectif

Ajouter les événements `InitiateCheckout` et `Purchase` aux pages existantes pour optimiser tes campagnes Meta Ads, **sans modifier** la logique de paiement KKiaPay ni le design.

---

## Modifications

### 1. Page Paiement (`src/pages/Paiement.tsx`)

**Ajout d'un seul `useEffect`** après le useEffect KKiaPay existant (ligne 56) :

```tsx
// Meta Pixel - InitiateCheckout
useEffect(() => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout', {
      value: 14000,
      currency: 'XOF',
      content_name: 'Le Purificateur Haute Précision (2 unités)'
    });
  }
}, []);
```

**Ce qui ne change pas** : Tout le reste (formulaire, KKiaPay, redirections, emails)

---

### 2. Page Confirmation (`src/pages/Confirmation.tsx`)

**Ajout d'un seul `useEffect`** après la déclaration de `formattedRenewalDate` (ligne 34) :

```tsx
// Meta Pixel - Purchase
useEffect(() => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Purchase', {
      value: montant,
      currency: 'XOF',
      content_name: produit,
      transaction_id: transactionId
    });
  }
}, []);
```

**Note** : Il faut aussi ajouter `useEffect` à l'import React (ligne 1).

**Ce qui ne change pas** : Tout le design, animations, copywriting, timeline

---

## Résumé des Modifications

| Fichier | Modification | Impact |
|---------|-------------|--------|
| `src/pages/Paiement.tsx` | +1 useEffect (6 lignes) | Aucun sur le design/paiement |
| `src/pages/Confirmation.tsx` | +1 useEffect (6 lignes) + import useEffect | Aucun sur le design/animations |

---

## Données Envoyées à Meta

| Événement | Moment | Données |
|-----------|--------|---------|
| `InitiateCheckout` | Chargement page Paiement | value: 14000, currency: XOF |
| `Purchase` | Chargement page Confirmation | value: montant, transaction_id, currency: XOF |

---

## Résultat

Après redéploiement sur https://objekte.store :
- Meta Events Manager recevra les événements de conversion
- Tu pourras optimiser tes campagnes pour les achats
- Tu pourras créer des audiences de personnes ayant initié un checkout mais pas acheté


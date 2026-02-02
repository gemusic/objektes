
# Configuration complete du Meta Pixel pour les campagnes Ventes

## Diagnostic du probleme

Le Meta Pixel (ID: `1256971542983914`) est deja installe dans `index.html`, mais les evenements ne remontent pas correctement dans le Gestionnaire d'evenements de Meta pour plusieurs raisons :

| Evenement | Status actuel | Probleme |
|-----------|---------------|----------|
| PageView | Installe | OK mais peut ne pas etre detecte si le site n'est pas publie/visite |
| ViewContent | Manquant | Indispensable pour les campagnes Ventes |
| AddToCart | Manquant | Necessaire pour le tracking du funnel |
| InitiateCheckout | Installe | OK |
| Purchase | Installe | OK mais sans content_type et content_ids |

Pour que Meta puisse optimiser tes campagnes pour les **Ventes**, il faut :
1. Ajouter les evenements manquants (ViewContent, AddToCart)
2. Enrichir les evenements existants avec les parametres requis par Meta
3. Ajouter le Domain Verification (verification de domaine)

---

## Evenements a ajouter/modifier

### 1. ViewContent (page Index.tsx)

Cet evenement indique a Meta que quelqu'un regarde un produit. C'est **obligatoire** pour les campagnes Ventes.

```typescript
// A ajouter dans src/pages/Index.tsx
useEffect(() => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'ViewContent', {
      content_name: 'Le Purificateur Haute Précision',
      content_category: 'Filtration eau',
      content_ids: ['purificateur-001'],
      content_type: 'product',
      value: 14000,
      currency: 'XOF'
    });
  }
}, []);
```

### 2. AddToCart (clic sur "Selectionner")

Cet evenement se declenche quand l'utilisateur clique sur le bouton CTA.

```typescript
// Modifier le bouton CTA dans Index.tsx
const handleAddToCart = () => {
  if ((window as any).fbq) {
    (window as any).fbq('track', 'AddToCart', {
      content_name: 'Le Purificateur Haute Précision',
      content_ids: ['purificateur-001'],
      content_type: 'product',
      value: 14000,
      currency: 'XOF'
    });
  }
};

// Le bouton devient:
<Link to="/paiement" onClick={handleAddToCart}>
  Sélectionner — 14 000 FCFA
</Link>
```

### 3. Enrichir InitiateCheckout (Paiement.tsx)

Ajouter les parametres content_ids et content_type requis :

```typescript
// Modifier dans src/pages/Paiement.tsx (lignes 59-66)
(window as any).fbq('track', 'InitiateCheckout', {
  content_name: 'Le Purificateur Haute Précision (2 unités)',
  content_ids: ['purificateur-001'],
  content_type: 'product',
  value: 14000,
  currency: 'XOF',
  num_items: 2
});
```

### 4. Enrichir Purchase (Confirmation.tsx)

Ajouter les parametres obligatoires pour les campagnes Ventes :

```typescript
// Modifier dans src/pages/Confirmation.tsx (lignes 40-45)
(window as any).fbq('track', 'Purchase', {
  content_name: produit,
  content_ids: ['purificateur-001'],
  content_type: 'product',
  value: montant,
  currency: 'XOF',
  transaction_id: transactionId,
  num_items: 2
});
```

---

## Fichiers a modifier

| Fichier | Modifications |
|---------|--------------|
| `src/pages/Index.tsx` | Ajouter useEffect + ViewContent, modifier Link pour AddToCart |
| `src/pages/Paiement.tsx` | Enrichir InitiateCheckout avec content_ids/content_type |
| `src/pages/Confirmation.tsx` | Enrichir Purchase avec content_ids/content_type |

---

## Funnel complet apres implementation

```text
Utilisateur arrive sur le site
         |
         v
    [PageView] <-- Deja OK (index.html)
         |
         v
Voit le produit sur Index.tsx
         |
         v
    [ViewContent] <-- A ajouter
         |
         v
Clique "Sélectionner - 14,000 FCFA"
         |
         v
    [AddToCart] <-- A ajouter
         |
         v
Arrive sur la page Paiement
         |
         v
    [InitiateCheckout] <-- A enrichir
         |
         v
Remplit le formulaire + Paye
         |
         v
    [Purchase] <-- A enrichir
```

---

## Etape importante : Verification dans Meta Events Manager

Apres implementation, pour que les evenements apparaissent dans le Gestionnaire d'evenements :

1. **Publier le site** sur `objekte.store`
2. **Visiter le site** depuis un navigateur normal (pas en mode incognito avec bloqueurs de pub)
3. **Attendre 10-15 minutes** que Meta traite les evenements
4. Dans Meta Business Manager, aller dans **Gestionnaire d'evenements > Pixel > Vue d'ensemble**
5. Utiliser l'outil **"Tester les evenements"** pour verifier en temps reel

---

## Parametres requis pour les campagnes Ventes

Selon la documentation Meta que tu as partagee, pour optimiser les campagnes pour les ventes, chaque evenement doit inclure :

- `content_ids` : identifiant unique du produit
- `content_type` : 'product' ou 'product_group'
- `value` : prix en nombre
- `currency` : code devise (XOF)

Ces parametres sont actuellement manquants dans ton code, c'est pourquoi Meta ne peut pas optimiser correctement.

---

## Resume des changements

1. Ajouter `ViewContent` sur la page d'accueil
2. Ajouter `AddToCart` au clic sur le bouton CTA
3. Enrichir `InitiateCheckout` avec les bons parametres
4. Enrichir `Purchase` avec les bons parametres
5. Publier le site et tester avec l'outil Meta Events Manager

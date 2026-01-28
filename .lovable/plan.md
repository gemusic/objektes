

# Plan : Mise à jour de la clé API KKiaPay pour le paiement fonctionnel

## Problème identifié

La clé publique KKiaPay dans le code est incorrecte :
- **Actuelle** : `48c07950f5b311f08be3614e2775ba11`
- **Correcte** : `be93f6efefe24a436e8b22c95e490373b2dbc283`

Le mode `sandbox: false` est déjà correctement configuré pour la production.

---

## Modification à effectuer

**Fichier** : `src/pages/Paiement.tsx`

**Ligne 14** : Mettre à jour la constante `KKIAPAY_PUBLIC_KEY`

```tsx
// Avant
const KKIAPAY_PUBLIC_KEY = "48c07950f5b311f08be3614e2775ba11";

// Après
const KKIAPAY_PUBLIC_KEY = "be93f6efefe24a436e8b22c95e490373b2dbc283";
```

---

## Note de sécurité concernant la clé secrète

La clé secrète (`sk_be1df9e...`) que tu as fournie ne doit **jamais** être ajoutée dans le code frontend. Elle sert uniquement pour les opérations côté serveur (vérification de transactions, remboursements, etc.).

Pour le moment, le paiement fonctionne avec la clé publique seule - c'est le fonctionnement standard de KKiaPay.

---

## Résultat attendu

Après cette modification :
- Le widget KKiaPay s'ouvrira correctement
- Les paiements Mobile Money (MTN MoMo / Moov Money) fonctionneront
- Les paiements par carte bancaire fonctionneront
- Les clients seront redirigés vers la page de confirmation après un paiement réussi


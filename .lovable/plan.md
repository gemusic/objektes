
# Mise a jour du Meta Pixel ID

## Changement demande

| Element | Ancienne valeur | Nouvelle valeur |
|---------|-----------------|-----------------|
| Pixel ID | 1256971542983914 | 1187689413528010 |

## Fichier a modifier

### index.html

Deux modifications dans ce fichier :

1. **Ligne 32** : Changer l'ID dans `fbq('init', ...)`
   - Avant : `fbq('init', '1256971542983914');`
   - Apres : `fbq('init', '1187689413528010');`

2. **Ligne 42** : Changer l'ID dans la balise `<noscript>` (fallback)
   - Avant : `...?id=1256971542983914&ev=PageView...`
   - Apres : `...?id=1187689413528010&ev=PageView...`

## Evenements concernes

Tous les evenements deja configures (ViewContent, AddToCart, InitiateCheckout, Purchase) continueront de fonctionner automatiquement car ils utilisent la fonction globale `fbq()` qui sera initialisee avec le nouveau Pixel ID.

## Verification apres publication

Une fois le site publie avec le nouveau Pixel :

1. Va dans **Meta Business Manager > Gestionnaire d'evenements**
2. Selectionne le Pixel **1187689413528010**
3. Utilise l'outil **"Tester les evenements"**
4. Visite ton site et verifie que les evenements apparaissent en temps reel

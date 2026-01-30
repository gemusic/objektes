
# Synchronisation du deploiement objekte.store

## Diagnostic

Le code dans ce projet Lovable est deja correctement configure :

| Element | Valeur actuelle | Statut |
|---------|-----------------|--------|
| og:title | OBJEKTE - Le Purificateur Haute Precision | OK |
| og:description | Votre corps n'est pas un filtre... | OK |
| og:image | https://objekte.store/og-image.jpg | OK |
| og:url | https://objekte.store | OK |
| twitter:title | OBJEKTE - Le Purificateur Haute Precision | OK |
| twitter:image | https://objekte.store/og-image.jpg | OK |
| Image og-image.jpg | Presente dans /public | OK |
| vercel.json | Rewrite vers index.html | OK |

Le Facebook Debugger affiche encore "Lovable" parce que le site sur `objekte.store` pointe vers une ancienne version qui n'a pas ete mise a jour avec ce code.

---

## Solution

### Etape 1 : Deployer ce projet sur Vercel

Tu dois connecter ce projet Lovable a ton projet Vercel pour que les modifications soient en ligne.

**Option A - Via GitHub :**
1. Exporte ce projet vers GitHub (bouton "GitHub" dans Lovable)
2. Connecte le repo a ton projet Vercel existant
3. Vercel deploiera automatiquement

**Option B - Via Lovable directement :**
1. Utilise la fonction "Publish" de Lovable
2. Configure le domaine personnalise `objekte.store`

---

### Etape 2 : Rafraichir le cache Facebook

Apres le deploiement :
1. Va sur https://developers.facebook.com/tools/debug/
2. Entre `https://objekte.store`
3. Clique sur **"Scrape Again"** (Re-collecter)
4. Verifie que les nouvelles metadonnees apparaissent

---

## Aucune modification de code necessaire

Le code est deja correct. Pas besoin de toucher a `index.html` ou aux autres fichiers. Il faut juste deployer cette version sur `objekte.store`.

---

## Verification finale attendue dans Facebook Debugger

Apres deploiement et "Scrape Again", tu devrais voir :

```text
og:title        : OBJEKTÉ - Le Purificateur Haute Précision
og:description  : Votre corps n'est pas un filtre. Votre organisme mérite...
og:image        : https://objekte.store/og-image.jpg (image de ton produit)
og:url          : https://objekte.store
```

Et l'apercu du lien affichera ton produit au lieu du logo Lovable.

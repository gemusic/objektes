

# Correction des Metadonnees pour Meta Ads

## Le Probleme

Sur ta publicite Meta Ads, on voit affiche **"Lovable App"** et **"Lovable Generated Project"** au lieu de ta marque objekté. C'est un probleme de **balises meta Open Graph** dans `index.html`, pas du Meta Pixel.

---

## Ce qui sera modifie

### Fichier : `index.html`

| Balise | Avant | Apres |
|--------|-------|-------|
| `og:title` | `" "` (vide) | `OBJEKTÉ - Le Purificateur Haute Precision` |
| `og:description` | `" "` (vide) | `Votre corps n'est pas un filtre. Votre organisme merite une barriere absolue. Livraison gratuite a Cotonou.` |
| `og:image` | Image Lovable | Image de ton produit (a definir) |
| `description` | `" "` (vide) | Meme texte que og:description |
| `twitter:site` | `@Lovable` | Supprime ou remplace |
| `twitter:image` | Image Lovable | Image de ton produit |

---

## Code propose

```html
<title>OBJEKTÉ</title>
<meta name="description" content="Votre corps n'est pas un filtre. Votre organisme mérite une barrière absolue. Livraison gratuite à Cotonou." />
<meta name="author" content="OBJEKTÉ" />

<meta property="og:title" content="OBJEKTÉ - Le Purificateur Haute Précision" />
<meta property="og:description" content="Votre corps n'est pas un filtre. Votre organisme mérite une barrière absolue. Livraison gratuite à Cotonou." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://objekte.store" />
<meta property="og:image" content="https://objekte.store/og-image.jpg" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="OBJEKTÉ - Le Purificateur Haute Précision" />
<meta name="twitter:description" content="Votre corps n'est pas un filtre. Votre organisme mérite une barrière absolue." />
<meta name="twitter:image" content="https://objekte.store/og-image.jpg" />
```

---

## A propos du Meta Pixel

Le Meta Pixel (InitiateCheckout, Purchase, PageView) **n'est PAS la cause de ce probleme**. Il sert uniquement au tracking des conversions. Tu peux le garder pour tes campagnes.

Si tu veux quand meme le retirer, je peux le faire, mais ce n'est pas necessaire.

---

## Image Open Graph

Pour l'image `og:image`, tu as deux options :

1. **Utiliser une image existante** : Me donner une image de ton produit que je placerai dans `/public/og-image.jpg`
2. **Utiliser une URL externe** : Si tu as deja une image hebergee quelque part

L'image ideale pour Open Graph est **1200 x 630 pixels**.

---

## Apres deploiement : Rafraichir le cache Facebook

Facebook met en cache les aperçus de liens. Apres deploiement, tu devras :

1. Aller sur https://developers.facebook.com/tools/debug/
2. Entrer `https://objekte.store`
3. Cliquer sur **"Scrape Again"** (Extraire a nouveau)
4. Verifier que les nouvelles metadonnees s'affichent

Ensuite, tes publicites afficheront les bonnes informations.

---

## Resume

```text
AVANT                          APRES
+---------------------+        +---------------------------+
| og:title: " "       |  --->  | og:title: OBJEKTÉ - Le... |
| og:description: " " |  --->  | og:description: Votre...  |
| og:image: lovable   |  --->  | og:image: ton produit     |
+---------------------+        +---------------------------+
         |
         v
   "Lovable App" dans          "OBJEKTÉ" dans
   la publicite Meta           la publicite Meta
```




# Integration du Pixel Meta (Facebook)

## Fichier a modifier

**`index.html`** - C'est le fichier principal de ton site, le pixel y sera charge sur toutes les pages automatiquement.

---

## Emplacement exact

Le pixel Meta doit etre place dans la balise `<head>`, juste avant la fermeture `</head>`. C'est la position recommandee par Meta pour garantir un tracking optimal.

---

## Modification a effectuer

Le fichier `index.html` sera modifie comme suit :

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lovable App</title>
    <meta name="description" content="Lovable Generated Project" />
    <meta name="author" content="Lovable" />

    <meta property="og:title" content="Lovable App" />
    <meta property="og:description" content="Lovable Generated Project" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Lovable" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <!-- Meta Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1256971542983914');
      fbq('track', 'PageView');
    </script>
    <noscript>
      <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1256971542983914&ev=PageView&noscript=1"
      />
    </noscript>
    <!-- End Meta Pixel Code -->
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## Ce que fait le pixel

| Evenement | Description |
|-----------|-------------|
| `PageView` | Enregistre automatiquement chaque visite de page |
| ID Pixel | `1256971542983914` (ton identifiant unique) |

---

## Bonus recommande : Tracking des conversions

Apres cette integration de base, tu pourras ajouter des evenements de conversion pour suivre :

- **Purchase** : Quand un client termine son paiement (page de confirmation)
- **InitiateCheckout** : Quand un client commence le processus de paiement
- **ViewContent** : Quand un client consulte la page produit

Ces evenements supplementaires peuvent etre ajoutes dans les composants React concernes si tu le souhaites.

---

## Resultat attendu

- Le pixel Meta sera actif sur toutes les pages du site
- Chaque visite sera enregistree dans ton Meta Events Manager
- Tu pourras creer des audiences personnalisees pour tes publicites
- Le tracking fonctionnera meme avec JavaScript desactive (grace a la balise noscript)


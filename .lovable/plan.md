

# Correction du 404 sur Vercel + Validation Meta Pixel

## Le probleme

Quand tu accedes directement a `objekte.store/paiement` ou que tu rafraichis la page, Vercel retourne **404: NOT_FOUND** parce que :

1. Ton site est une **SPA (Single Page Application)** avec React Router
2. Le routage se fait **cote client** (dans le navigateur)
3. Vercel cherche un fichier `/paiement` sur le serveur, mais il n'existe pas
4. Il faut dire a Vercel : "Toutes les routes doivent renvoyer vers `index.html`"

---

## Solution

Ajouter un fichier `vercel.json` a la racine du projet avec une regle de **rewrite** qui redirige toutes les requetes vers `index.html`.

---

## Modification

### Nouveau fichier : `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Cette configuration dit a Vercel :
- Pour **toute URL** (ex: `/paiement`, `/confirmation`, `/faq`)
- Renvoyer le contenu de `index.html`
- React Router prendra ensuite le relais pour afficher la bonne page

---

## Ce qui ne change pas

| Element | Statut |
|---------|--------|
| Logique de paiement KKiaPay | Intact |
| Formulaire client | Intact |
| Redirections apres paiement | Intact |
| Meta Pixel `InitiateCheckout` | Deja en place |
| Meta Pixel `Purchase` | Deja en place |
| Meta Pixel `PageView` | Deja en place |
| Design et animations | Intact |

---

## Verification de l'implementation Meta Pixel actuelle

Tout est deja correctement configure :

| Fichier | Evenement | Statut |
|---------|-----------|--------|
| `index.html` | PageView (base pixel) | OK |
| `src/pages/Paiement.tsx` | InitiateCheckout | OK (ligne 58-67) |
| `src/pages/Confirmation.tsx` | Purchase | OK (ligne 37-47) |

---

## Apres deploiement

1. Redeploy le projet sur Vercel
2. Teste `objekte.store/paiement` en acces direct - la page doit s'afficher
3. Installe l'extension **Meta Pixel Helper** sur Chrome
4. Visite `/paiement` - tu dois voir `InitiateCheckout` dans l'extension
5. Complete un paiement test - tu dois voir `Purchase` sur `/confirmation`
6. Verifie dans **Meta Events Manager** que les evenements remontent

---

## Resume

```text
+------------------+
|   vercel.json    |  <-- NOUVEAU : redirige toutes les routes vers index.html
+------------------+
         |
         v
+------------------+
|   index.html     |  <-- Meta Pixel base (PageView)
+------------------+
         |
         v
+------------------+
|   React Router   |  <-- Gere /paiement, /confirmation, etc.
+------------------+
         |
    +----+----+
    |         |
    v         v
+--------+ +-------------+
|Paiement| |Confirmation |
+--------+ +-------------+
    |            |
    v            v
InitiateCheckout Purchase
(Meta Pixel)    (Meta Pixel)
```




# Plan Complet : Serveur de Chat, Tracking et Correction Produit

## Resume

Ce projet transforme le site objekté en une plateforme de conversion intelligente avec :
- Correction produit : passage de 2 unités a **1 unite a 5 500 FCFA**
- Systeme de tracking comportemental avance envoye a Lindy AI
- Widget de chat intelligent avec pop-up de premier message
- Backend API pour la communication temps reel avec l'automatisation

---

## Phase 1 : Correction du Produit (2 unites -> 1 unite)

### Fichiers a modifier

| Fichier | Modifications |
|---------|---------------|
| `src/pages/Index.tsx` | 8 occurrences : "2 unites" -> "1 unite", "6 mois" -> "3 mois", correction CTA final "5 000" -> "5 500" |
| `src/pages/Paiement.tsx` | Ligne 35 : "(2 unites)" -> "(1 unite)", lignes recap |
| `src/pages/Confirmation.tsx` | Ligne 47 : `num_items: 2` -> `num_items: 1` |
| `src/pages/Archive.tsx` | Ligne 104 : "2 nouvelles unites" -> "1 nouvelle unite" |

### Details des modifications Index.tsx

```text
AVANT:
- "Vous recevez 2 unités, soit 6 mois d'eau pure"
- "2 unités incluses (~3 mois chacune = 6 mois)"
- "5 500 FCFA pour 6 mois de protection"
- "Deux unités. Zéro souci."
- CTA final : "5 000 FCFA" (erreur a corriger)

APRES:
- "Vous recevez 1 unité offrant 3 mois d'eau pure"
- "1 unité incluse (~3 mois de filtration)"
- "5 500 FCFA pour 3 mois de protection"
- "Une unité. Zéro souci."
- CTA final : "5 500 FCFA"
```

---

## Phase 2 : Systeme de Tracking Comportemental

### Nouveaux fichiers a creer

```text
src/
├── hooks/
│   └── useVisitorTracking.ts      # Hook principal de tracking
├── lib/
│   └── trackingService.ts          # Service d'envoi des donnees
├── types/
│   └── tracking.ts                 # Types TypeScript
```

### Donnees collectees

```typescript
interface TrackingData {
  visitor_id: string;           // ID persistant (localStorage)
  session_id: string;           // ID de session (regenere a chaque visite)
  timestamp: string;            // ISO 8601
  pages_visited: PageVisit[];   // Pages + temps passe + scroll
  clicks: ClickEvent[];         // Clics sur CTA, FAQ, temoignages
  mouse_movements: {
    hesitation_count: number;   // Survol sans clic
    speed_average: number;
  };
  device_info: {
    type: "mobile" | "desktop" | "tablet";
    browser: string;
    location: string;           // Approximatif via timezone/IP
  };
  return_visitor: boolean;
  previous_visits_count: number;
}
```

### Implementation du hook useVisitorTracking

- Genere `visitor_id` persistant (localStorage)
- Genere `session_id` unique a chaque rechargement
- Ecoute les evenements : scroll, clics, mouvements souris
- Detecte les hesitations (survol > 1.5s sans clic)
- Envoie les donnees au backend toutes les 30 secondes ou sur evenement critique (clic CTA)

### Integration dans les pages

Le hook sera integre dans `Layout.tsx` pour tracker globalement, avec des hooks specifiques dans `Index.tsx` pour les interactions produit.

---

## Phase 3 : Backend API (Edge Functions ou API Routes)

### Architecture

Comme le projet est deploye sur Vercel et utilise Vite (pas Next.js), nous avons deux options :

**Option A : Supabase Edge Functions (recommande)**
- Pas besoin de modifier l'architecture Vercel
- Fonctions serverless natives

**Option B : API externe separee**
- Deployer un serveur Node.js separe sur Vercel

Je recommande **Option A** avec Supabase Edge Functions si le projet est connecte a Supabase, sinon **Option B** avec un dossier `api/` pour Vercel.

### Endpoints a creer

```text
POST /api/tracking
  -> Recoit les donnees de tracking
  -> Les transmet a Lindy AI via webhook

POST /api/chat/message
  -> Recoit les messages du visiteur
  -> Les transmet a Lindy AI

POST /api/webhook/lindy-response
  -> Endpoint entrant pour Lindy AI
  -> Stocke le message et le rend disponible

GET /api/chat/messages/:sessionId
  -> Polling pour recuperer les nouveaux messages
```

### Configuration Webhooks

```text
WEBHOOK SORTANT (vers Lindy AI) :
URL: https://public.lindy.ai/api/v1/webhooks/lindy/a2cb8077-4aa9-44f1-847e-35c1d919cfd8
Headers: Authorization: Bearer 3449c526949168326fe053fdd3637fa57a82151ccf075180ba1776ee94c9cc80

WEBHOOK ENTRANT (depuis Lindy AI) :
URL: https://objekt-zen-flow.lovable.app/api/webhook/lindy-response
(A configurer dans Lindy)
```

### Fichiers backend a creer

```text
api/
├── tracking.ts          # Recoit tracking -> envoie a Lindy
├── chat/
│   ├── message.ts       # Messages visiteur -> Lindy
│   └── messages.ts      # GET messages pour polling
└── webhook/
    └── lindy-response.ts # Webhook entrant Lindy
```

---

## Phase 4 : Widget de Chat

### Nouveaux composants

```text
src/components/chat/
├── ChatWidget.tsx           # Composant principal
├── ChatBubble.tsx           # Bouton flottant
├── ChatPopup.tsx            # Modal premier message
├── ChatFullscreen.tsx       # Interface plein ecran
├── ChatMessage.tsx          # Bulle de message
├── ChatInput.tsx            # Zone de saisie
└── ProductCard.tsx          # Carte produit dans le chat
```

### Design

**Couleurs (selon la charte objekté) :**
- Primaire : Terracotta (#A66B4C)
- Fond : Sable Pale (#F5F2ED)
- Texte : Anthracite (#2D2D2D)

**Bulle flottante :**
- Position : bottom-right, 24px du bord
- Taille : 56px x 56px
- Icone : MessageCircle
- Animation : pulse subtil + badge de notification

**Pop-up premier message :**
- Modal centre avec overlay semi-transparent
- Affiche le message personnalise de Lindy
- Boutons : "Discuter" (ouvre chat) / "X" (ferme)

**Interface plein ecran :**
- 100% viewport (100vh, 100vw)
- Header avec bouton retour + logo objekté
- Zone de messages scrollable
- Zone de saisie fixe en bas

**Carte produit :**
- Image du purificateur
- Nom + prix (5 500 FCFA)
- Bouton "Commander maintenant" -> /paiement

### Flux utilisateur

```text
1. Visiteur arrive sur le site
   └── Tracking demarre automatiquement

2. Donnees envoyees a Lindy (toutes les 30s)
   └── Lindy analyse le comportement

3. Lindy envoie le premier message
   └── Pop-up s'affiche au centre de l'ecran

4. Visiteur clique "Discuter"
   └── Chat plein ecran s'ouvre

5. Conversation en temps reel
   └── Messages relays via le backend

6. Lindy detecte intention d'achat
   └── Carte produit s'affiche dans le chat

7. Visiteur clique "Commander"
   └── Redirection vers /paiement
```

---

## Phase 5 : Integration dans l'Application

### Modifications App.tsx

```typescript
// Ajouter le provider de chat
<ChatProvider>
  <BrowserRouter>
    {/* ... routes */}
  </BrowserRouter>
  <ChatWidget /> {/* Widget global */}
</ChatProvider>
```

### Modifications Layout.tsx

```typescript
// Ajouter le hook de tracking
const Layout = ({ children }) => {
  useVisitorTracking(); // Initialise le tracking
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
```

---

## Recapitulatif des Fichiers

### Fichiers a modifier

| Fichier | Description |
|---------|-------------|
| `src/pages/Index.tsx` | Prix, quantite, CTA final |
| `src/pages/Paiement.tsx` | Nom produit (1 unite) |
| `src/pages/Confirmation.tsx` | num_items: 1 |
| `src/pages/Archive.tsx` | Texte renouvellement |
| `src/App.tsx` | Ajouter ChatProvider + ChatWidget |
| `src/components/layout/Layout.tsx` | Ajouter tracking |

### Nouveaux fichiers

| Fichier | Description |
|---------|-------------|
| `src/hooks/useVisitorTracking.ts` | Hook de tracking comportemental |
| `src/lib/trackingService.ts` | Service d'envoi au backend |
| `src/types/tracking.ts` | Types TypeScript tracking |
| `src/context/ChatContext.tsx` | Context pour le chat |
| `src/components/chat/ChatWidget.tsx` | Widget principal |
| `src/components/chat/ChatBubble.tsx` | Bouton flottant |
| `src/components/chat/ChatPopup.tsx` | Modal premier message |
| `src/components/chat/ChatFullscreen.tsx` | Interface plein ecran |
| `src/components/chat/ChatMessage.tsx` | Bulle de message |
| `src/components/chat/ChatInput.tsx` | Zone de saisie |
| `src/components/chat/ProductCard.tsx` | Carte produit |
| `api/tracking.ts` | Endpoint tracking |
| `api/chat/message.ts` | Endpoint messages |
| `api/chat/messages.ts` | Polling messages |
| `api/webhook/lindy-response.ts` | Webhook entrant |

---

## Configuration Vercel

Pour les API routes sur Vercel avec Vite :

```json
// vercel.json (modification)
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## Variables d'Environnement

```text
LINDY_WEBHOOK_URL=https://public.lindy.ai/api/v1/webhooks/lindy/a2cb8077-4aa9-44f1-847e-35c1d919cfd8
LINDY_WEBHOOK_SECRET=3449c526949168326fe053fdd3637fa57a82151ccf075180ba1776ee94c9cc80
```

---

## Ordre d'Implementation

1. **Phase 1** : Correction produit (1 unite, 5 500 FCFA)
2. **Phase 2** : Systeme de tracking comportemental
3. **Phase 3** : Backend API (endpoints + webhooks)
4. **Phase 4** : Widget de chat (UI + logique)
5. **Phase 5** : Integration globale + tests

---

## Estimation

| Phase | Complexite |
|-------|------------|
| Phase 1 | Simple (modifications texte) |
| Phase 2 | Moyenne (tracking + localStorage) |
| Phase 3 | Elevee (API + webhooks + stockage) |
| Phase 4 | Elevee (UI complexe + temps reel) |
| Phase 5 | Simple (integration) |
NB : par identifiant unique il ne sera envoyé que 15 secondes de tracking ce qui veut dire que le tracking pour un identifiant unique va durer 15 secondes et après ces 15 secondes là les informations de tracking sont envoyés webhook Lindy.

# Tâches en standby — Portfolio KC-Labs

> Actions manuelles à effectuer côté utilisateur ou choix en attente.
> Mis à jour après l'application des Phases A + B + C (sauf C.3).

---

## 🟡 Actions manuelles à finaliser

### A.2 — Validation publique du témoignage de lilzer
- **État** : témoignage publié sous le nom *lilzer* dans la section Témoignages.
- **À faire** : envoyer un message via Codeur pour obtenir son accord explicite de reprise publique de son nom + retour.
- **Message suggéré** :
  > Bonjour lilzer,
  > Je travaille à enrichir mon portfolio web et j'aimerais y reprendre l'avis très positif que vous avez laissé sur Codeur après notre collaboration sur BETIX. Avez-vous une objection à ce que je publie votre prénom et votre retour, avec un lien vers le projet et vers Codeur ?
  > Si vous préférez l'anonymat, je peux le présenter sous "Client BETIX, mars 2026".
  > Merci pour votre retour,
  > Claude
- **Si refus** : remplacer `name: "lilzer"` par `name: "Client BETIX"` dans [src/data/portfolio-data.ts](src/data/portfolio-data.ts) (section `testimonials`).

### B.1 — Photo professionnelle
- **État** : placeholder "CM" en gradient affiché tant que `avatar.jpg` n'existe pas.
- **À faire** : déposer un fichier `avatar.jpg` dans [public/](public/).
- **Format recommandé** : 800×800 px, WebP ou JPG, < 100 ko, portrait costume sombre (cohérent thème nuit).
- **Bascule automatique** : dès que le fichier existe, la photo réelle remplace le placeholder sans aucune modif de code.
- **Long terme** : prévoir une session photo pro dédiée pour un visuel plus impactant.

### B.2 — Paramétrage Calendly
- **État** : lien Calendly intégré (`https://calendly.com/menyeclaude33/30min`), bouton actif dans la section Contact.
- **À paramétrer côté Calendly** :
  - Buffer **15 min** avant et après chaque créneau
  - Disponibilités : **mardi-jeudi 10h-18h** (éviter lundi matin et vendredi)
  - Question pré-RDV obligatoire : *"Décrivez votre projet en 2-3 lignes"* (filtre les leads peu sérieux)
  - Renommer le créneau : *"Appel découverte KC-Labs"*

### C.2 — Image Open Graph
- **État** : balises Open Graph + Twitter Card en place, pointant vers `/og-image.png` (non créé).
- **À faire** : créer une image **1200×630 px** avec ton nom + slogan + visuel KC-Labs (Canva ou Figma), puis la déposer en `public/og-image.png`.
- **Impact** : actuellement, le partage du portfolio sur LinkedIn/Twitter affiche une carte sans image. Avec l'image, la card devient visuellement attractive.

### C.2 — Indexation Google
- **À faire** une fois le portfolio en prod avec les nouveaux changements :
  1. Soumettre l'URL dans [Google Search Console](https://search.google.com/search-console) pour accélérer l'indexation.
  2. Tester l'aperçu LinkedIn via [post-inspector](https://www.linkedin.com/post-inspector/).
  3. Vérifier dans Google avec `site:claudek027.github.io` (peut prendre quelques jours).

---

## ⏸️ Décisions en attente

### C.3 — Analytics
- **État** : intégralement reporté.
- **Choix à trancher** :
  - **Plausible** (~9 €/mois, essai 30 jours gratuit) — RGPD-compliant sans bandeau cookie, < 1 ko, interface 10× plus simple.
  - **GA4** (gratuit) — bandeau cookie obligatoire, ~50 ko, complexité d'interface.
- **Si tu choisis Plausible** : créer le compte, m'envoyer le snippet, je l'intègre dans [src/app/layout.tsx](src/app/layout.tsx) et configure les goals (Calendly, formulaire, CTAs hero, offres).
- **Goals à tracker** : clic *Voir mes projets* / clic *Me contacter* / clic *Réserver un créneau Calendly* / submit formulaire / clics GitHub & LinkedIn / clics sur CTAs offres.

---

## 🔮 Améliorations long terme (hors plan initial)

### Non priorisées — à activer plus tard
- **Domaine custom** (`kc-labs.fr` ou `claudemenye.fr`) — ~10 €/an, signal pro mais peut attendre.
- **Section Blog / Articles** — nécessite une cadence éditoriale réelle, à activer après 3+ mois de posts LinkedIn confirmés.
- **Chatbot KC-Labs intégré** — démo live de tes compétences IA, à envisager dans 6 mois quand l'archi sera mature.
- **Refonte design plus radicale** — pas nécessaire, le design actuel est déjà au-dessus de la moyenne du marché freelance.

---

## ✅ Phases déjà appliquées (rappel)

- **Phase A** (Quick wins) : slogan baseline hero, section Témoignages, section Offres avec 3 packages.
- **Phase B** (Engagement) : photo placeholder dans About, bouton Calendly, section Expérience pro (Pachamama + KC-Labs).
- **Phase C** (Long terme, partiel) : tabs filtre projets (Tous/IA&ML/Web/Data&IoT), SEO complet (metadata, Open Graph, Twitter Card, Schema.org Person JSON-LD).

---

## 📋 Checklist de pré-déploiement

À cocher avant de pousser en prod sur GitHub Pages :

- [ ] Photo `avatar.jpg` déposée dans `public/` *(B.1)*
- [ ] Image OG `og-image.png` (1200×630) déposée dans `public/` *(C.2)*
- [ ] Calendly paramétré (buffer, dispos, question pré-RDV) *(B.2)*
- [ ] Message envoyé à lilzer pour validation publique *(A.2)*
- [ ] Test mobile (320px) sur les nouvelles sections (Offres, Témoignages, Expérience pro)
- [ ] Test desktop (1440px+) sur la nav (7 items)
- [ ] Lighthouse Mobile ≥ 90 / Desktop ≥ 95
- [ ] Soumission Google Search Console *(C.2)*
- [ ] Test aperçu LinkedIn via post-inspector *(C.2)*

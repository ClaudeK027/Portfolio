# ❓ Questions Fréquentes (FAQ)

## 📦 Installation & Configuration

### Q: Quelle version de Node.js dois-je utiliser ?

**R:** Node.js 18 ou supérieur. Vérifiez avec `node --version`.

### Q: Puis-je utiliser npm, pnpm ou yarn ?

**R:** Oui, les trois fonctionnent. Le projet utilise npm par défaut, mais vous pouvez utiliser :
```bash
pnpm install  # avec pnpm
yarn install  # avec yarn
```

### Q: L'installation échoue avec des erreurs

**R:** Essayez :
```bash
# Supprimez node_modules et le cache
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Q: Docker est-il obligatoire ?

**R:** Non, Docker est optionnel. Vous pouvez développer sans Docker avec `npm run dev`.

---

## 🎨 Personnalisation

### Q: Comment changer les couleurs du thème ?

**R:** Modifiez `src/app/globals.css` :
```css
:root {
  --primary: 207 100% 50%;  /* Votre couleur */
  --accent: 193 100% 50%;   /* Votre accent */
}
```
Format HSL sans `hsl()`. Utilisez un convertisseur en ligne pour passer du HEX au HSL.

### Q: Comment ajouter ma photo/avatar ?

**R:** 
1. Placez votre photo dans `public/avatar.jpg`
2. Dans `src/components/Hero.tsx` ou `About.tsx`, ajoutez :
```tsx
<img src="/avatar.jpg" alt="Votre nom" className="rounded-full w-48 h-48" />
```

### Q: Comment modifier les projets affichés ?

**R:** Dans `src/components/Projects.tsx`, modifiez le tableau `projects` :
```tsx
const projects = [
  {
    title: "Mon Projet",
    description: "Description",
    image: "/images/projet1.jpg",
    tags: ["React", "TypeScript"],
    github: "https://github.com/vous/projet",
    demo: "https://demo.com",
  },
];
```

### Q: Où trouver des images pour mes projets ?

**R:** 
- Vos propres screenshots (recommandé)
- [Unsplash](https://unsplash.com/) - Gratuit
- [Pexels](https://pexels.com/) - Gratuit
- [Pixabay](https://pixabay.com/) - Gratuit

### Q: Comment ajouter mon CV ?

**R:**
1. Placez votre CV dans `public/cv.pdf`
2. Dans `src/components/Navbar.tsx`, le bouton pointe vers :
```tsx
<a href="/cv.pdf" download>Télécharger CV</a>
```

---

## 🚀 Déploiement

### Q: Mon site affiche une page 404 sur GitHub Pages

**R:** Vérifiez :
1. Le fichier `.nojekyll` existe dans `public/`
2. `basePath` dans `next.config.mjs` correspond au nom de votre repo
3. GitHub Pages est activé avec "GitHub Actions" comme source

### Q: Les images ne s'affichent pas après déploiement

**R:** Sur GitHub Pages, utilisez le chemin complet :
```tsx
// Si votre repo s'appelle "Portfolio"
<img src="/Portfolio/image.jpg" alt="" />
```

### Q: Comment déployer sur mon propre domaine ?

**R:** 
1. Créez `public/CNAME` avec votre domaine
2. Configurez les DNS A records vers les IPs GitHub
3. Supprimez `basePath` dans `next.config.mjs`
4. Voir [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md) pour plus de détails

### Q: Le déploiement GitHub Actions échoue

**R:** Vérifiez :
1. Settings > Actions > General > "Read and write permissions" activé
2. Settings > Pages > Source = "GitHub Actions"
3. Le workflow `.github/workflows/deploy.yml` existe
4. La branche est bien `main`

### Q: Quelle est la différence entre GitHub Pages et Vercel ?

**R:**
- **GitHub Pages** : Gratuit, limité aux sites statiques, configuration manuelle
- **Vercel** : Gratuit, optimisé pour Next.js, déploiement automatique, analytics
- Les deux fonctionnent parfaitement pour ce portfolio

---

## 🐳 Docker

### Q: À quoi sert Docker dans ce projet ?

**R:** Docker permet de :
- Avoir un environnement de dev identique pour tous
- Déployer facilement sur un serveur
- Isoler les dépendances

### Q: Comment lancer le projet avec Docker ?

**R:**
```bash
# Développement
docker-compose up

# Production
docker-compose --profile production up
```

### Q: Docker est lent sur Windows

**R:** 
- Utilisez WSL2 pour de meilleures performances
- Ou développez sans Docker avec `npm run dev`

---

## 🎭 Composants & Design

### Q: Comment ajouter une nouvelle section ?

**R:**
1. Créez `src/components/MaSection.tsx`
2. Importez dans `src/app/page.tsx`
3. Ajoutez au menu dans `src/components/Navbar.tsx`

### Q: Comment désactiver les animations ?

**R:** Dans les composants, supprimez ou commentez les props Framer Motion :
```tsx
// Avant
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>

// Après
<div>
```

### Q: Comment ajouter d'autres composants Shadcn/ui ?

**R:** La configuration est prête. Copiez les composants depuis [ui.shadcn.com](https://ui.shadcn.com) dans `src/components/ui/`.

### Q: Les icônes Lucide ne s'affichent pas

**R:** Vérifiez l'import :
```tsx
import { Icon, Autre } from "lucide-react";
```
Liste complète : [lucide.dev](https://lucide.dev/)

---

## 📱 Responsive & Mobile

### Q: Mon site ne s'affiche pas bien sur mobile

**R:** Utilisez les classes Tailwind responsive :
```tsx
<div className="text-sm md:text-base lg:text-lg">
  // sm: mobile, md: tablet, lg: desktop
</div>
```

### Q: Comment tester le responsive ?

**R:**
- Chrome DevTools (F12) > Toggle device toolbar
- Testez sur un vrai appareil
- [Responsively App](https://responsively.app/) (outil gratuit)

---

## 🔧 Développement

### Q: Les changements ne se reflètent pas

**R:**
1. Sauvegardez le fichier
2. Vérifiez la console pour les erreurs
3. Redémarrez le serveur de dev (`Ctrl+C` puis `npm run dev`)
4. Videz le cache du navigateur (`Ctrl+Shift+R`)

### Q: Erreur "Module not found"

**R:**
```bash
npm install  # Réinstallez les dépendances
```

### Q: Erreur TypeScript

**R:** Vérifiez :
1. Les imports sont corrects
2. Les types sont bien définis
3. Consultez le message d'erreur complet

### Q: Le build échoue

**R:**
```bash
npm run lint  # Vérifiez les erreurs
npm run build # Lisez les erreurs de build
```

---

## 📧 Formulaire de contact

### Q: Comment faire fonctionner le formulaire de contact ?

**R:** Plusieurs options :

**Option 1 - Formspree (gratuit)** :
```tsx
<form action="https://formspree.io/f/VOTRE-ID" method="POST">
```

**Option 2 - EmailJS** :
```bash
npm install @emailjs/browser
```
Suivez la doc [EmailJS](https://www.emailjs.com/docs/)

**Option 3 - API personnalisée** :
Créez une API route Next.js

### Q: Le formulaire ne s'envoie pas

**R:** 
1. Vérifiez la console pour les erreurs
2. Vérifiez que le service (Formspree, EmailJS) est configuré
3. Testez la connexion réseau

---

## 🎨 SEO & Performance

### Q: Comment améliorer le SEO ?

**R:**
1. Remplissez les métadonnées dans `src/app/layout.tsx`
2. Ajoutez des balises `alt` à toutes les images
3. Créez un sitemap
4. Optimisez les images (WebP, compression)
5. Ajoutez Google Analytics

### Q: Comment optimiser les performances ?

**R:**
- Utilisez `next/image` pour les images
- Lazy load les composants lourds
- Minimisez les animations sur mobile
- Optimisez les images avant upload

### Q: Comment ajouter des métadonnées Open Graph ?

**R:** Dans `src/app/layout.tsx` :
```tsx
export const metadata = {
  title: "Mon Portfolio",
  description: "Description",
  openGraph: {
    title: "Mon Portfolio",
    description: "Description",
    images: ["/og-image.jpg"],
  },
};
```

---

## 🔐 Sécurité

### Q: Comment protéger mes clés API ?

**R:**
1. Utilisez `.env.local` (déjà dans `.gitignore`)
2. Variables côté client : préfixe `NEXT_PUBLIC_`
3. Variables serveur : pas de préfixe
4. Ne committez JAMAIS de secrets

### Q: Comment ajouter HTTPS ?

**R:**
- **GitHub Pages** : HTTPS automatique
- **Vercel/Netlify** : HTTPS automatique
- **VPS** : Utilisez Let's Encrypt (voir [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md))

---

## 💡 Divers

### Q: Puis-je utiliser ce template pour un usage commercial ?

**R:** Oui, licence MIT. Vous êtes libre de l'utiliser, le modifier et le redistribuer.

### Q: Dois-je créditer ce template ?

**R:** Non obligatoire, mais apprécié ! 😊

### Q: Comment contribuer au projet ?

**R:** Consultez [CONTRIBUTING.md](CONTRIBUTING.md)

### Q: Où obtenir de l'aide ?

**R:**
1. Consultez cette FAQ
2. Lisez le [README.md](README.md)
3. Ouvrez une issue sur GitHub
4. Consultez les docs officielles des technologies

### Q: Le projet fonctionne-t-il avec Next.js 15 ?

**R:** Le template utilise Next.js 14. Pour Next.js 15, des modifications mineures peuvent être nécessaires. Consultez la [migration guide Next.js](https://nextjs.org/docs/app/building-your-application/upgrading).

### Q: Puis-je ajouter un blog ?

**R:** Oui ! Créez :
1. Une nouvelle section Blog
2. Utilisez MDX pour le contenu
3. Ou intégrez un CMS headless (Contentful, Sanity)

### Q: Comment ajouter plusieurs langues ?

**R:** Utilisez `next-intl` ou `i18next` :
```bash
npm install next-intl
```
Consultez la [doc next-intl](https://next-intl-docs.vercel.app/)

---

## 🆘 Toujours bloqué ?

**Créez une issue sur GitHub avec :**
- Description du problème
- Étapes de reproduction
- Messages d'erreur complets
- Environnement (OS, Node version)
- Captures d'écran

**Ressources utiles :**
- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui Docs](https://ui.shadcn.com)
- [Stack Overflow](https://stackoverflow.com)

---

**N'oubliez pas :** Tout le monde commence quelque part. Chaque erreur est une opportunité d'apprendre ! 💪

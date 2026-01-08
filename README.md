# 🚀 Portfolio Template - Modern & Electric

Un template de portfolio moderne et personnalisable construit avec **Next.js 14**, **TypeScript**, **TailwindCSS**, et **Shadcn/ui**. Thème électrique avec noir, bleu électrique, gris et blanc.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)

## ✨ Fonctionnalités

- ⚡ **Next.js 14** avec App Router
- 🎨 **Design moderne** avec thème électrique (Noir, Bleu, Gris, Blanc)
- 🎭 **Animations fluides** avec Framer Motion
- 🎯 **Composants UI** avec Shadcn/ui
- 📱 **Responsive** sur tous les appareils
- 🐳 **Docker** pour développement et production
- 🚀 **Déploiement GitHub Pages** automatisé
- ♿ **Accessible** et optimisé SEO
- 🎨 **100% Personnalisable**

## 🎨 Sections incluses

1. **Hero** - Section d'accueil avec animation
2. **About** - Présentation personnelle
3. **Skills** - Compétences techniques avec catégories
4. **Projects** - Portfolio de projets avec images
5. **Contact** - Formulaire de contact et informations
6. **Footer** - Liens et réseaux sociaux

## 🛠️ Stack Technologique

### Frontend
- **Next.js 14** - Framework React avec SSR/SSG
- **TypeScript** - Typage statique
- **TailwindCSS** - Styling utility-first
- **Shadcn/ui** - Composants UI modernes
- **Framer Motion** - Animations
- **Lucide React** - Icônes

### DevOps
- **Docker** - Containerisation
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hébergement

## 📦 Installation

### Prérequis
- Node.js 18+
- npm ou pnpm
- Docker (optionnel)

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/votre-username/Portfolio.git
cd Portfolio

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env.local

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Installation avec Docker

```bash
# Développement
docker-compose up portfolio-dev

# Production
docker-compose --profile production up portfolio-prod
```

## 🎨 Personnalisation

### 1. Informations personnelles

Modifiez les fichiers suivants pour ajouter vos informations :

#### `src/components/Hero.tsx`
```tsx
<h1>Bonjour, je suis <span>Votre Nom</span></h1>
<p>Développeur Full Stack | Votre titre</p>
```

#### `src/components/About.tsx`
Personnalisez votre présentation et votre parcours.

#### `src/components/Skills.tsx`
Ajoutez/modifiez vos compétences dans le tableau `skillCategories`.

#### `src/components/Projects.tsx`
Remplacez les projets d'exemple par vos propres projets :
```tsx
const projects = [
  {
    title: "Votre Projet",
    description: "Description",
    image: "url-de-l-image",
    tags: ["React", "Node.js"],
    github: "lien-github",
    demo: "lien-demo",
  },
  // ...
];
```

#### `src/components/Contact.tsx`
Mettez à jour vos informations de contact :
```tsx
const contactInfo = [
  { title: "Email", value: "votre@email.com" },
  { title: "Téléphone", value: "+33 X XX XX XX XX" },
  { title: "Localisation", value: "Votre Ville" },
];
```

### 2. Couleurs et thème

Les couleurs sont définies dans `src/app/globals.css` :

```css
:root {
  --primary: 207 100% 50%; /* Bleu électrique #0080FF */
  --accent: 193 100% 50%;  /* Cyan #00D4FF */
  --background: 0 0% 0%;   /* Noir */
  --foreground: 0 0% 100%; /* Blanc */
  /* ... */
}
```

Modifiez ces valeurs HSL pour changer le thème.

### 3. Images et Assets

Placez vos images dans le dossier `public/` :
```
public/
  ├── avatar.jpg
  ├── project1.jpg
  ├── favicon.ico
  └── ...
```

### 4. Métadonnées SEO

Modifiez `src/app/layout.tsx` :
```tsx
export const metadata: Metadata = {
  title: "Votre Nom | Portfolio",
  description: "Votre description",
  keywords: ["vos", "mots-clés"],
};
```

## 🚀 Déploiement

### GitHub Pages

1. **Créez un repository GitHub** nommé `Portfolio`

2. **Activez GitHub Pages** :
   - Allez dans Settings > Pages
   - Source : GitHub Actions

3. **Modifiez `next.config.mjs`** :
   ```js
   const nextConfig = {
     basePath: '/Portfolio',
     assetPrefix: '/Portfolio/',
   };
   ```

4. **Poussez votre code** :
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-username/Portfolio.git
   git push -u origin main
   ```

5. **Le déploiement se fait automatiquement** via GitHub Actions

Votre site sera accessible à : `https://votre-username.github.io/Portfolio`

### Autres plateformes

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Uploadez le dossier 'out' sur Netlify
```

## 🐳 Docker

### Commandes utiles

```bash
# Développement
npm run docker:dev
# ou
docker-compose up portfolio-dev

# Build production
npm run docker:build

# Run production
npm run docker:run
```

## 📝 Scripts disponibles

```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Build pour production
npm run start        # Démarrer le serveur de production
npm run lint         # Linter le code
npm run docker:dev   # Lancer avec Docker (dev)
npm run docker:build # Build Docker image
npm run docker:run   # Run Docker container
```

## 🎯 Structure du projet

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── public/                   # Assets statiques
├── src/
│   ├── app/
│   │   ├── globals.css      # Styles globaux et thème
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Page d'accueil
│   ├── components/
│   │   ├── ui/              # Composants Shadcn/ui
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts         # Utilitaires
├── Dockerfile               # Docker production
├── Dockerfile.dev           # Docker développement
├── docker-compose.yml       # Docker Compose
├── next.config.mjs          # Configuration Next.js
├── tailwind.config.ts       # Configuration Tailwind
├── tsconfig.json            # Configuration TypeScript
└── package.json
```

## 🎨 Personnalisation avancée

### Ajouter une nouvelle section

1. Créez un nouveau composant dans `src/components/`
2. Importez-le dans `src/app/page.tsx`
3. Ajoutez-le au menu dans `src/components/Navbar.tsx`

### Modifier les animations

Les animations utilisent Framer Motion. Exemple :

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Votre contenu */}
</motion.div>
```

### Ajouter des composants Shadcn/ui

```bash
# La configuration est déjà prête
# Vous pouvez installer des composants supplémentaires si nécessaire
# Exemple : npx shadcn-ui@latest add dialog
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier.

## 🌟 Remerciements

- [Next.js](https://nextjs.org/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 📧 Support

Pour toute question ou support, ouvrez une issue sur GitHub.

---

**Créé avec ❤️ et beaucoup de ☕**

N'oubliez pas de ⭐ ce repo si vous l'avez trouvé utile !

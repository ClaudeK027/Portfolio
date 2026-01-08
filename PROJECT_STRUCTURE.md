# 📁 Structure du Projet

Guide complet de l'organisation du projet.

## 🌳 Arborescence

```
Portfolio/
│
├── .github/                    # Configuration GitHub
│   └── workflows/
│       └── deploy.yml         # Workflow CI/CD pour GitHub Pages
│
├── .vscode/                   # Configuration VS Code
│   ├── extensions.json       # Extensions recommandées
│   └── settings.json         # Paramètres de l'éditeur
│
├── public/                    # Fichiers statiques
│   ├── .nojekyll             # Pour GitHub Pages
│   ├── robots.txt            # Configuration SEO
│   ├── avatar.jpg            # Votre photo (à ajouter)
│   ├── cv.pdf                # Votre CV (à ajouter)
│   └── projects/             # Images de projets (à créer)
│
├── src/                       # Code source
│   ├── app/                  # App Router Next.js
│   │   ├── layout.tsx       # Layout principal + métadonnées
│   │   ├── page.tsx         # Page d'accueil
│   │   └── globals.css      # Styles globaux + thème
│   │
│   ├── components/           # Composants React
│   │   ├── ui/              # Composants Shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── badge.tsx
│   │   │
│   │   ├── Hero.tsx         # Section d'accueil
│   │   ├── About.tsx        # Section à propos
│   │   ├── Skills.tsx       # Section compétences
│   │   ├── Projects.tsx     # Section projets
│   │   ├── Contact.tsx      # Section contact
│   │   ├── Navbar.tsx       # Navigation
│   │   └── Footer.tsx       # Pied de page
│   │
│   ├── data/                 # Données du portfolio
│   │   └── portfolio-data.ts # Configuration centralisée
│   │
│   └── lib/                  # Utilitaires
│       └── utils.ts          # Fonctions helper
│
├── Configuration Files
├── .dockerignore             # Fichiers exclus de Docker
├── .env.example              # Template variables d'environnement
├── .eslintrc.json            # Configuration ESLint
├── .gitignore                # Fichiers exclus de Git
├── .prettierrc               # Configuration Prettier
├── components.json           # Configuration Shadcn/ui
├── docker-compose.yml        # Docker Compose
├── Dockerfile                # Docker production
├── Dockerfile.dev            # Docker développement
├── next.config.mjs           # Configuration Next.js
├── package.json              # Dépendances et scripts
├── postcss.config.mjs        # Configuration PostCSS
├── tailwind.config.ts        # Configuration TailwindCSS
└── tsconfig.json             # Configuration TypeScript
│
└── Documentation
    ├── README.md             # Documentation principale
    ├── QUICKSTART.md         # Démarrage rapide (3 min)
    ├── SETUP.md              # Configuration complète
    ├── CUSTOMIZATION_GUIDE.md # Guide de personnalisation
    ├── DEPLOY_GUIDE.md       # Guide de déploiement
    ├── CONTRIBUTING.md       # Guide de contribution
    ├── CHANGELOG.md          # Historique des versions
    ├── FAQ.md                # Questions fréquentes
    ├── PROJECT_STRUCTURE.md  # Ce fichier
    └── LICENSE               # Licence MIT
```

## 📄 Fichiers importants

### Configuration Next.js

| Fichier | Description |
|---------|-------------|
| `next.config.mjs` | Configuration du build et export |
| `src/app/layout.tsx` | Layout racine, métadonnées SEO |
| `src/app/page.tsx` | Page d'accueil (composition) |
| `src/app/globals.css` | Styles globaux et thème |

### Composants

| Fichier | Description | Personnalisable |
|---------|-------------|-----------------|
| `Hero.tsx` | Section d'accueil avec animation | ⭐⭐⭐ |
| `About.tsx` | Présentation personnelle | ⭐⭐⭐ |
| `Skills.tsx` | Grille de compétences | ⭐⭐⭐ |
| `Projects.tsx` | Portfolio de projets | ⭐⭐⭐ |
| `Contact.tsx` | Formulaire et coordonnées | ⭐⭐⭐ |
| `Navbar.tsx` | Navigation responsive | ⭐⭐ |
| `Footer.tsx` | Pied de page | ⭐⭐ |

⭐⭐⭐ = Très personnalisable | ⭐⭐ = Moyennement | ⭐ = Peu

### Configuration

| Fichier | Usage |
|---------|-------|
| `tailwind.config.ts` | Configuration TailwindCSS |
| `tsconfig.json` | Configuration TypeScript |
| `components.json` | Configuration Shadcn/ui |
| `.env.example` | Template des variables d'env |

### Docker

| Fichier | Usage |
|---------|-------|
| `Dockerfile` | Build production optimisé |
| `Dockerfile.dev` | Container de développement |
| `docker-compose.yml` | Orchestration multi-env |
| `.dockerignore` | Fichiers exclus |

### CI/CD

| Fichier | Usage |
|---------|-------|
| `.github/workflows/deploy.yml` | Déploiement automatique |

## 🎯 Fichiers à modifier pour personnaliser

### 🔴 Priorité Haute (obligatoire)

1. **`src/data/portfolio-data.ts`** ⭐⭐⭐
   - Informations personnelles
   - Projets
   - Compétences
   - Liens sociaux

2. **`src/app/layout.tsx`**
   - Métadonnées SEO (title, description)
   
3. **`public/`**
   - Ajoutez `avatar.jpg`
   - Ajoutez `cv.pdf`
   - Ajoutez images de projets

### 🟡 Priorité Moyenne (recommandé)

4. **`src/app/globals.css`**
   - Couleurs du thème (si vous voulez changer)

5. **`next.config.mjs`**
   - basePath (nom de votre repo)

6. **`.env.local`** (créer depuis .env.example)
   - Variables d'environnement

### 🟢 Priorité Basse (optionnel)

7. **Composants individuels**
   - Textes personnalisés
   - Animations
   - Layout

## 📦 Dépendances principales

### Production

```json
{
  "next": "14.2.5",              // Framework React
  "react": "18.3.1",             // Bibliothèque UI
  "framer-motion": "11.3.19",    // Animations
  "lucide-react": "0.424.0",     // Icônes
  "tailwindcss": "3.4.7"         // CSS utility
}
```

### Développement

```json
{
  "typescript": "5.5.4",         // Typage statique
  "eslint": "8.57.0",            // Linter
  "autoprefixer": "10.4.19",     // Préfixes CSS
  "@types/react": "18.3.3"       // Types React
}
```

## 🔧 Scripts disponibles

```bash
npm run dev          # Développement (port 3000)
npm run build        # Build production
npm run start        # Serveur production local
npm run lint         # Vérification du code
npm run docker:dev   # Docker développement
npm run docker:build # Build Docker image
npm run docker:run   # Run Docker container
```

## 📝 Conventions de nommage

### Fichiers

- **Composants React** : PascalCase (`Hero.tsx`, `ContactForm.tsx`)
- **Utilitaires** : camelCase (`utils.ts`, `helpers.ts`)
- **Constantes** : kebab-case (`portfolio-data.ts`)
- **Config** : kebab-case (`next.config.mjs`)

### Code

- **Composants** : PascalCase (`<Button />`, `<Hero />`)
- **Fonctions** : camelCase (`handleSubmit`, `getData`)
- **Constantes** : UPPER_SNAKE_CASE (`MAX_ITEMS`, `API_URL`)
- **Types/Interfaces** : PascalCase (`interface UserProps`)

## 🎨 Organisation CSS

### Tailwind (préféré)

```tsx
<div className="flex items-center justify-center p-4 bg-primary">
```

### Styles globaux

`src/app/globals.css` pour :
- Variables CSS (couleurs du thème)
- Classes utilitaires globales (`.gradient-text`)
- Animations personnalisées
- Reset/normalize

### Styles inline

Utilisez Tailwind autant que possible. CSS inline uniquement si nécessaire.

## 🔄 Workflow de développement

1. **Développement local** : `npm run dev`
2. **Modifications** : Éditez les fichiers dans `src/`
3. **Test** : Vérifiez dans le navigateur
4. **Build** : `npm run build` (test du build)
5. **Commit** : `git add . && git commit -m "message"`
6. **Push** : `git push origin main`
7. **Déploiement** : Automatique via GitHub Actions

## 🚀 Chemins d'import

### Alias configurés

```typescript
import Component from "@/components/Component"  // = src/components/
import { utils } from "@/lib/utils"            // = src/lib/
```

### Imports relatifs

```typescript
import Button from "./Button"           // Même dossier
import Card from "../ui/Card"          // Dossier parent
```

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile paysage */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

Usage :
```tsx
<div className="text-sm md:text-base lg:text-lg">
```

## 🎯 Points d'entrée

### Développement
- URL : `http://localhost:3000`
- Entrée : `src/app/page.tsx`

### Production
- Build : dossier `out/`
- Entry : `out/index.html`

## 📚 Pour aller plus loin

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

---

**Besoin d'aide ?** Consultez la [FAQ](FAQ.md) ou le [README](README.md).

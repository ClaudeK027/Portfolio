# 📘 Guide de Personnalisation Détaillé

Ce guide vous aidera à personnaliser complètement votre portfolio.

## 🎨 Table des matières

1. [Personnalisation du contenu](#personnalisation-du-contenu)
2. [Personnalisation du design](#personnalisation-du-design)
3. [Ajout de nouvelles fonctionnalités](#ajout-de-nouvelles-fonctionnalités)
4. [Configuration avancée](#configuration-avancée)

---

## 📝 Personnalisation du contenu

### Hero Section

**Fichier**: `src/components/Hero.tsx`

```tsx
// Changez votre nom
<span className="gradient-text">Votre Nom</span>

// Changez votre titre
<p className="text-xl md:text-2xl text-muted-foreground mb-8">
  Votre Titre | Votre Spécialité
</p>

// Changez votre description
<p>
  Votre description personnalisée...
</p>

// Modifiez les liens sociaux
const socialLinks = [
  { icon: <Github />, href: "https://github.com/votre-username" },
  { icon: <Linkedin />, href: "https://linkedin.com/in/votre-profile" },
  { icon: <Mail />, href: "mailto:votre@email.com" },
];
```

### About Section

**Fichier**: `src/components/About.tsx`

```tsx
// Personnalisez les highlights
const highlights = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Votre Point Fort 1",
    description: "Description de votre point fort",
  },
  // Ajoutez d'autres highlights...
];

// Modifiez votre parcours
<h3>Mon Parcours</h3>
<p>Votre histoire professionnelle...</p>
```

### Skills Section

**Fichier**: `src/components/Skills.tsx`

```tsx
// Personnalisez vos compétences
const skillCategories = [
  {
    icon: <Layout className="w-8 h-8 text-primary" />,
    title: "Catégorie",
    skills: ["Compétence 1", "Compétence 2", "Compétence 3"],
  },
  // Ajoutez d'autres catégories...
];
```

**Icônes disponibles** (depuis Lucide React):
- Layout, Server, Database, Code2, Smartphone, Zap
- Globe, Terminal, Cloud, Package, GitBranch
- Et des centaines d'autres sur [lucide.dev](https://lucide.dev/)

### Projects Section

**Fichier**: `src/components/Projects.tsx`

```tsx
const projects = [
  {
    title: "Nom du Projet",
    description: "Description courte du projet",
    image: "https://votre-image-url.com/image.jpg", // ou "/projet1.jpg"
    tags: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/vous/projet",
    demo: "https://projet-demo.com",
  },
  // Ajoutez autant de projets que vous voulez...
];
```

**Sources d'images recommandées**:
- Vos propres screenshots (placez-les dans `/public/`)
- [Unsplash](https://unsplash.com/) - Images gratuites
- [Pexels](https://pexels.com/) - Images gratuites
- Captures d'écran de vos projets réels

### Contact Section

**Fichier**: `src/components/Contact.tsx`

```tsx
const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Email",
    value: "votre@email.com",
    link: "mailto:votre@email.com",
  },
  {
    icon: <Phone className="w-6 h-6 text-accent" />,
    title: "Téléphone",
    value: "+33 X XX XX XX XX",
    link: "tel:+33XXXXXXXXX",
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Localisation",
    value: "Votre Ville, Pays",
    link: "#",
  },
];
```

**Intégration du formulaire**:

Pour connecter le formulaire à un service d'email :

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const formData = new FormData(e.target as HTMLFormElement);
  
  // Exemple avec Formspree
  const response = await fetch("https://formspree.io/f/votre-id", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
  
  if (response.ok) {
    alert("Message envoyé !");
  }
};
```

Services recommandés:
- [Formspree](https://formspree.io/) - Gratuit jusqu'à 50 soumissions/mois
- [EmailJS](https://www.emailjs.com/) - Gratuit jusqu'à 200 emails/mois
- [Web3Forms](https://web3forms.com/) - Gratuit et sans limite

---

## 🎨 Personnalisation du design

### Changer les couleurs

**Fichier**: `src/app/globals.css`

```css
:root {
  /* Couleur principale (Bleu électrique) */
  --primary: 207 100% 50%; /* H S L */
  
  /* Couleur accent (Cyan) */
  --accent: 193 100% 50%;
  
  /* Fond (Noir) */
  --background: 0 0% 0%;
  
  /* Texte (Blanc) */
  --foreground: 0 0% 100%;
  
  /* Cartes */
  --card: 0 0% 10%;
  
  /* Secondaire */
  --secondary: 0 0% 16%;
  
  /* Bordures */
  --border: 0 0% 20%;
}
```

**Convertir HEX en HSL**:
```
#0080FF → hsl(207, 100%, 50%)
Format CSS: 207 100% 50%
```

**Générateurs de palettes**:
- [Coolors](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)
- [Paletton](https://paletton.com/)

### Modifier les animations

**Vitesse des animations**:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.8,  // Durée en secondes
    delay: 0.2,     // Délai avant démarrage
    ease: "easeOut" // Type d'easing
  }}
>
```

**Types d'animations**:
```tsx
// Fade in
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

// Slide from bottom
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}

// Slide from right
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}

// Scale up
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}

// Rotate
initial={{ opacity: 0, rotate: -10 }}
animate={{ opacity: 1, rotate: 0 }}
```

### Changer les polices

**Fichier**: `src/app/layout.tsx`

```tsx
import { Inter, Roboto, Poppins } from "next/font/google";

// Choisissez votre police
const font = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

// Dans le JSX
<body className={font.className}>
```

**Polices recommandées**:
- Inter (moderne, sans-serif)
- Poppins (arrondie, moderne)
- Montserrat (géométrique)
- Roboto (classique)
- JetBrains Mono (pour code)

---

## ⚡ Ajout de nouvelles fonctionnalités

### Ajouter une section Blog

1. **Créer le composant** `src/components/Blog.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Titre de l'article",
      description: "Description courte...",
      date: "1er Janvier 2024",
      link: "/blog/article-1",
    },
  ];

  return (
    <section id="blog" className="py-20">
      {/* Votre contenu */}
    </section>
  );
};

export default Blog;
```

2. **Ajouter dans** `src/app/page.tsx`:

```tsx
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main>
      {/* ... autres sections ... */}
      <Blog />
    </main>
  );
}
```

3. **Ajouter au menu** dans `src/components/Navbar.tsx`:

```tsx
const navItems = [
  // ... autres items ...
  { name: "Blog", href: "#blog" },
];
```

### Ajouter un mode sombre/clair

1. **Installer** `next-themes`:

```bash
npm install next-themes
```

2. **Créer un provider** `src/components/theme-provider.tsx`

3. **Ajouter un bouton** de changement de thème dans la navbar

### Ajouter Google Analytics

**Fichier**: `src/app/layout.tsx`

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 🔧 Configuration avancée

### Changer le nom du repository GitHub

Si votre repo ne s'appelle pas "Portfolio":

**Fichier**: `next.config.mjs`

```js
const nextConfig = {
  basePath: '/votre-nom-repo',
  assetPrefix: '/votre-nom-repo/',
};
```

### Ajouter un nom de domaine personnalisé

1. Créez `public/CNAME`:
```
votredomaine.com
```

2. Configurez votre DNS:
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

3. Modifiez `next.config.mjs`:
```js
const nextConfig = {
  basePath: '',
  assetPrefix: '',
};
```

### Optimiser les images

```tsx
import Image from 'next/image';

<Image
  src="/mon-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // Pour les images au-dessus de la ligne de flottaison
/>
```

### Ajouter des métadonnées Open Graph

**Fichier**: `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Votre Portfolio",
  description: "Description",
  openGraph: {
    title: "Votre Portfolio",
    description: "Description",
    images: ["/og-image.jpg"],
    url: "https://votre-site.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Votre Portfolio",
    description: "Description",
    images: ["/og-image.jpg"],
  },
};
```

---

## 💡 Conseils et bonnes pratiques

### Performances

1. **Optimisez vos images** (utilisez WebP, compressez-les)
2. **Lazy loading** pour les images en bas de page
3. **Minimisez les animations** sur mobile

### SEO

1. Ajoutez des balises meta appropriées
2. Utilisez des balises sémantiques HTML
3. Ajoutez un sitemap.xml
4. Créez un robots.txt

### Accessibilité

1. Testez au clavier (Tab, Enter, Esc)
2. Ajoutez des `alt` à toutes les images
3. Utilisez des contrastes suffisants
4. Testez avec un lecteur d'écran

### Mobile First

1. Testez sur différents appareils
2. Vérifiez les touch targets (min 44x44px)
3. Optimisez les performances mobile

---

**Besoin d'aide ?** Consultez la documentation officielle des technologies utilisées ou ouvrez une issue sur GitHub !

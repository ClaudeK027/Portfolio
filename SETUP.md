# 🛠️ Guide de Configuration Rapide

## 📋 Prérequis

- ✅ Node.js 18+ ([nodejs.org](https://nodejs.org))
- ✅ Git ([git-scm.com](https://git-scm.com))
- ✅ VS Code (recommandé)
- ✅ Compte GitHub

## 🚀 Installation (5 minutes)

```bash
# 1. Cloner
git clone https://github.com/VOTRE-USERNAME/Portfolio.git
cd Portfolio

# 2. Installer
npm install

# 3. Configuration
cp .env.example .env.local

# 4. Lancer
npm run dev
```

Ouvrez http://localhost:3000 🎉

## 🎨 Personnalisation rapide

### 1. Informations personnelles

Éditez `src/data/portfolio-data.ts` :
```typescript
export const personalInfo = {
  name: "Votre Nom",
  title: "Votre Titre",
  email: "votre@email.com",
  phone: "+33 X XX XX XX XX",
  location: "Votre Ville",
};

export const socialLinks = {
  github: "https://github.com/vous",
  linkedin: "https://linkedin.com/in/vous",
  email: "mailto:vous@email.com",
};
```

### 2. Projets

Dans le même fichier :
```typescript
export const projects = [
  {
    title: "Mon Projet",
    description: "Description",
    image: "/projects/projet1.jpg",
    tags: ["React", "TypeScript"],
    github: "https://github.com/vous/projet",
    demo: "https://demo.com",
  },
];
```

### 3. Compétences

```typescript
export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript"],
  },
];
```

### 4. Images

Ajoutez dans `public/` :
- `avatar.jpg` (votre photo)
- `cv.pdf` (votre CV)
- `projects/` (screenshots de projets)

## 🚀 Déploiement GitHub Pages

```bash
# 1. Push
git add .
git commit -m "Mon portfolio personnalisé"
git push origin main

# 2. Activer GitHub Pages
# Settings > Pages > Source: GitHub Actions

# 3. Attendre 3-5 minutes
# Site: https://VOTRE-USERNAME.github.io/Portfolio
```

## ✅ Checklist

- [ ] Nom et titre mis à jour
- [ ] Liens sociaux configurés
- [ ] Projets personnalisés
- [ ] Compétences ajoutées
- [ ] Contact mis à jour
- [ ] Images ajoutées
- [ ] Tests local OK
- [ ] Déployé sur GitHub

## 📚 Documentation complète

- [README.md](README.md) - Vue d'ensemble
- [QUICKSTART.md](QUICKSTART.md) - Démarrage rapide
- [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) - Personnalisation détaillée
- [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md) - Options de déploiement
- [FAQ.md](FAQ.md) - Questions fréquentes

## 🆘 Besoin d'aide ?

Consultez la [FAQ](FAQ.md) ou ouvrez une issue sur GitHub.

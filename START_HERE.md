# 🚀 COMMENCEZ ICI !

Bienvenue dans votre template de portfolio moderne ! 

## ⚡ Démarrage Ultra-Rapide (3 minutes)

```bash
# 1. Installation
npm install

# 2. Lancer
npm run dev

# 3. Ouvrir http://localhost:3000
```

## 📝 Personnalisation en 5 étapes

### 1️⃣ Vos informations (2 min)

Ouvrez `src/data/portfolio-data.ts` et modifiez :
```typescript
export const personalInfo = {
  name: "Votre Nom", 
  title: "Votre Titre",
  email: "votre@email.com",
  // ...
};
```

### 2️⃣ Vos projets (5 min)

Dans le même fichier :
```typescript
export const projects = [
  {
    title: "Mon Super Projet",
    description: "Ce que fait le projet",
    image: "/projects/projet1.jpg",
    tags: ["React", "TypeScript"],
    github: "lien-github",
    demo: "lien-demo",
  },
];
```

### 3️⃣ Vos compétences (3 min)

```typescript
export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript"],
  },
];
```

### 4️⃣ Vos images (5 min)

Ajoutez dans le dossier `public/` :
- `avatar.jpg` - Votre photo
- `cv.pdf` - Votre CV
- `projects/projet1.jpg` - Captures d'écran de vos projets

### 5️⃣ Déploiement (10 min)

```bash
# Push sur GitHub
git add .
git commit -m "Mon portfolio personnalisé"
git push origin main

# Activez GitHub Pages
# Settings > Pages > Source: GitHub Actions

# ✅ Site en ligne à https://votre-username.github.io/Portfolio
```

## 📚 Documentation

| Document | Quand l'utiliser |
|----------|------------------|
| [QUICKSTART.md](QUICKSTART.md) | Pour démarrer rapidement |
| [README.md](README.md) | Vue d'ensemble complète |
| [SETUP.md](SETUP.md) | Configuration détaillée |
| [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) | Personnalisation avancée |
| [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md) | Options de déploiement |
| [FAQ.md](FAQ.md) | Problèmes courants |

## 🎨 Thème actuel

- **Couleurs** : Noir, Bleu électrique (#0080FF), Cyan (#00D4FF), Blanc
- **Police** : Inter
- **Animations** : Framer Motion
- **Composants** : Shadcn/ui

Pour changer les couleurs : éditez `src/app/globals.css`

## 🛠️ Technologies utilisées

- ⚡ **Next.js 14** - Framework React moderne
- 🎨 **TailwindCSS** - Styling rapide
- 🎭 **Framer Motion** - Animations fluides
- 📦 **TypeScript** - Code robuste
- 🐳 **Docker** - Déploiement facile

## ✅ Checklist avant déploiement

- [ ] J'ai modifié `src/data/portfolio-data.ts`
- [ ] J'ai ajouté mes images dans `public/`
- [ ] J'ai testé localement (`npm run dev`)
- [ ] J'ai vérifié sur mobile (F12 > Device toolbar)
- [ ] J'ai mis à jour les métadonnées dans `src/app/layout.tsx`
- [ ] J'ai vérifié `next.config.mjs` (basePath = nom du repo)
- [ ] J'ai poussé sur GitHub
- [ ] J'ai activé GitHub Pages

## 🆘 Problème ?

1. **Consultez la [FAQ](FAQ.md)**
2. **Lisez les messages d'erreur**
3. **Vérifiez la console navigateur (F12)**
4. **Ouvrez une issue sur GitHub**

## 🎯 Prochaines étapes

Après avoir déployé votre portfolio :

1. ✨ **Partagez** votre portfolio sur LinkedIn
2. 📧 **Ajoutez** le lien dans votre signature email
3. 💼 **Utilisez-le** dans vos candidatures
4. 🔄 **Mettez à jour** régulièrement vos projets
5. 📱 **Testez** sur différents appareils

## 🌟 Améliorations futures

- [ ] Ajouter un blog
- [ ] Intégrer Google Analytics
- [ ] Ajouter des témoignages
- [ ] Créer une section Expérience
- [ ] Ajouter un mode sombre
- [ ] Intégrer un CMS (Contentful, Sanity)
- [ ] Ajouter des tests (Jest, Playwright)
- [ ] Optimiser les performances (Lighthouse)

## 💡 Conseils

### Pour un bon portfolio

✅ **À FAIRE :**
- Montrer 3-6 projets de qualité
- Utiliser vos propres images
- Écrire des descriptions claires
- Tester sur mobile
- Garder un design épuré
- Mettre à jour régulièrement

❌ **À ÉVITER :**
- Trop de projets
- Images génériques
- Texte trop long
- Design surchargé
- Informations obsolètes
- Liens morts

### SEO

1. Remplissez toutes les métadonnées
2. Ajoutez des balises alt aux images
3. Utilisez des URLs claires
4. Optimisez les images (compression)
5. Ajoutez Google Analytics

### Performance

1. Compressez les images (TinyPNG, Squoosh)
2. Utilisez WebP quand possible
3. Lazy load les images
4. Minimisez les animations sur mobile

## 🤝 Contribuer

Ce projet est open source ! 

- 🐛 Trouvé un bug ? Ouvrez une issue
- ✨ Idée d'amélioration ? Proposez une PR
- 📖 Doc pas claire ? Suggérez des modifications

Voir [CONTRIBUTING.md](CONTRIBUTING.md)

## 📄 Licence

MIT License - Vous êtes libre d'utiliser ce template !

## 🙏 Remerciements

Construit avec :
- [Next.js](https://nextjs.org/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Prêt ? Lancez-vous !

```bash
npm install
npm run dev
```

**Bon coding et bonne chance avec votre portfolio ! 🎉**

*P.S.: N'oubliez pas de ⭐ le repo si vous le trouvez utile !*

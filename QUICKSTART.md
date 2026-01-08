# 🚀 Démarrage Rapide

## Installation en 3 minutes

### 1. Cloner et installer

```bash
git clone https://github.com/votre-username/Portfolio.git
cd Portfolio
npm install
```

### 2. Personnaliser

Modifiez ces fichiers avec vos informations :

- **Hero** : `src/components/Hero.tsx` → Nom, titre, liens sociaux
- **About** : `src/components/About.tsx` → Présentation
- **Skills** : `src/components/Skills.tsx` → Compétences
- **Projects** : `src/components/Projects.tsx` → Projets
- **Contact** : `src/components/Contact.tsx` → Coordonnées

### 3. Lancer

```bash
npm run dev
```

Ouvrez http://localhost:3000

## Déploiement sur GitHub Pages

### Option 1 : Configuration automatique

1. Créez un repo GitHub nommé `Portfolio`
2. Poussez votre code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/Portfolio.git
   git push -u origin main
   ```
3. Activez GitHub Pages dans Settings > Pages > Source: GitHub Actions
4. C'est fait ! Votre site sera à : `https://VOTRE-USERNAME.github.io/Portfolio`

### Option 2 : Avec Docker

```bash
# Développement
docker-compose up

# Production
npm run docker:build
npm run docker:run
```

## Checklist de personnalisation

- [ ] Modifier nom et titre dans Hero
- [ ] Ajouter votre photo/avatar dans `public/`
- [ ] Mettre à jour les liens sociaux (GitHub, LinkedIn, Email)
- [ ] Personnaliser la section About
- [ ] Ajouter vos compétences dans Skills
- [ ] Remplacer les projets d'exemple par les vôtres
- [ ] Mettre à jour les informations de contact
- [ ] Changer le nom du repo dans `next.config.mjs` si nécessaire
- [ ] Ajouter votre CV dans `public/cv.pdf`
- [ ] Tester sur mobile et desktop

## Commandes utiles

```bash
npm run dev          # Développement
npm run build        # Build production
npm run start        # Serveur production local
npm run lint         # Vérifier le code
npm run docker:dev   # Docker développement
```

## Support

- 📖 Lisez le [README.md](README.md) complet
- 🎨 Consultez le [Guide de Personnalisation](CUSTOMIZATION_GUIDE.md)
- 🐛 Ouvrez une issue sur GitHub

---

**Temps total : ~10 minutes** ⚡

# 🎯 Portfolio de Claude MENYE - Data Scientist

## ✅ Informations extraites de votre CV et intégrées

### 📝 Données personnelles
- ✅ **Nom** : Claude MENYE
- ✅ **Titre** : Data Scientist
- ✅ **Statut** : Recherche d'Alternance (1 sem École/3 sem Entreprise)
- ✅ **Localisation** : 69007 - Lyon
- ✅ **Email** : menyeclaude33@outlook.fr
- ✅ **Téléphone** : +33 7 58 67 08 57
- ✅ **LinkedIn** : Claude Menye
- ✅ **GitHub** : claude-menye

### 💼 Expériences intégrées
1. **CHAPIOCK** - Développeur IA | Stage (Mai 2024 - Août 2024)
   - Plateforme e-commerce avec système de recommandation IA

2. **ARTIFY - HEMELGESE** - Développeur IA | Clinique de l'IA (Jan 2024 - Mai 2024)
   - Architecture de transfert de style via IA Générative (SDXL)

3. **SIMCITY** - Data Analyst | Stage (Jun 2023 - Août 2023)
   - Système de ruches connectées IoT

4. **PITCHBOY** - Data Analyst | Clinique de l'IA (Jan 2023 - Mai 2023)
   - Analyse conversationnelle NLP avec API GPT et BERT

### 🎓 Formations intégrées
1. **NEXTA DIGITAL SCHOOL** - Bachelor Data & Business Intelligence (2025-2026)
2. **AUXBURY SCHOOL** - Programme Grande École (2022-2024)
3. **UNIVERSITÉ FAIDHERBE** - ICT & STMG (2020-2022)

### 🛠️ Compétences techniques intégrées
- **Machine Learning** : TensorFlow, Scikit-Learn, PyTorch, Transformers, SDXL
- **Développement Web** : React, Django, JavaScript, HTML/CSS, API REST
- **Programmation** : Python, JavaScript, C/C++, SQL
- **Outils** : Power BI, MS Office, Git, GitHub/GitLab
- **Data & IA** : NLP, Computer Vision, Data Analysis, IoT, API GPT (BERT)
- **Soft Skills** : Autonomie, Adaptabilité, Rigoureux, Proactif, Travail d'équipe

### 🚀 Projets intégrés
1. **Plateforme E-commerce avec IA** - Système de recommandation
2. **Architecture de Style Transfer IA** - SDXL et modèles de diffusion
3. **Système de Ruches Connectées IoT** - Analyse comportementale
4. **Analyse Conversationnelle NLP** - API GPT et BERT

---

## 🚀 Prochaines étapes

### 1️⃣ Ajoutez votre CV PDF
```bash
# Placez votre CV dans le dossier public/
# Nommez-le : cv.pdf
```

### 2️⃣ Ajoutez votre photo (optionnel mais recommandé)
```bash
# Placez votre photo dans public/avatar.jpg
# Format recommandé : 500x500px, JPG ou PNG
```

### 3️⃣ Ajoutez des images de vos projets
```bash
# Créez le dossier : public/projects/
# Ajoutez vos screenshots :
# - projet1.jpg (E-commerce IA)
# - projet2.jpg (Style Transfer)
# - projet3.jpg (IoT Ruches)
# - projet4.jpg (NLP)
```

### 4️⃣ Mettez à jour vos liens GitHub
Dans `src/data/portfolio-data.ts`, ligne 20-21 :
```typescript
export const socialLinks = {
  github: "https://github.com/VOTRE-VRAI-USERNAME", // ⚠️ À mettre à jour
  linkedin: "https://linkedin.com/in/VOTRE-PROFIL", // ⚠️ À mettre à jour
  // ...
};
```

### 5️⃣ Personnalisez les URLs des projets
Dans `src/data/portfolio-data.ts`, ligne 85-116 :
```typescript
// Ajoutez les vrais liens GitHub et démo de vos projets
github: "https://github.com/votre-username/projet-nom",
demo: "https://demo-projet.com",
```

---

## 🧪 Testez localement

```bash
# 1. Installez les dépendances
npm install

# 2. Lancez le serveur de développement
npm run dev

# 3. Ouvrez http://localhost:3000
```

---

## 🐳 Lancer avec Docker

### Option 1 : Docker Compose (Recommandé)
```bash
# Développement
docker-compose up portfolio-dev

# Production
docker-compose --profile production up portfolio-prod
```

### Option 2 : Scripts npm
```bash
# Développement
npm run docker:dev

# Build production
npm run docker:build

# Run production
npm run docker:run
```

---

## 📦 Structure des fichiers modifiés

Tous vos composants utilisent maintenant les données de :
```
src/data/portfolio-data.ts ← 🎯 FICHIER CENTRAL
```

Composants mis à jour :
- ✅ `src/components/Hero.tsx` - Votre nom, titre, description
- ✅ `src/components/About.tsx` - Votre parcours
- ✅ `src/components/Skills.tsx` - Vos compétences
- ✅ `src/components/Projects.tsx` - Vos projets
- ✅ `src/components/Contact.tsx` - Vos coordonnées
- ✅ `src/components/Navbar.tsx` - Lien CV
- ✅ `src/components/Footer.tsx` - Infos et liens
- ✅ `src/app/layout.tsx` - Métadonnées SEO

---

## 🎨 Personnalisation supplémentaire

### Changer les couleurs
Éditez `src/app/globals.css` (lignes 4-30) pour modifier le thème.

### Modifier le texte
Tout est dans `src/data/portfolio-data.ts` - un seul fichier à modifier !

---

## 🚀 Déploiement sur GitHub Pages

### 1. Créez un repository GitHub
```bash
# Nom recommandé : Portfolio
```

### 2. Vérifiez next.config.mjs
```javascript
// Si votre repo s'appelle "Portfolio" :
basePath: '/Portfolio',
assetPrefix: '/Portfolio/',

// Si vous utilisez un domaine personnalisé :
// Supprimez basePath et assetPrefix
```

### 3. Poussez votre code
```bash
git init
git add .
git commit -m "Initial commit - Portfolio Claude MENYE"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/Portfolio.git
git push -u origin main
```

### 4. Activez GitHub Pages
- Allez dans **Settings** > **Pages**
- Source : **GitHub Actions**
- Permissions : Settings > Actions > General > **Read and write permissions**

### 5. Attendez le déploiement (3-5 minutes)
Votre site sera accessible à :
```
https://VOTRE-USERNAME.github.io/Portfolio
```

---

## 📋 Checklist finale

- [ ] npm install effectué
- [ ] npm run dev fonctionne
- [ ] CV ajouté dans public/cv.pdf
- [ ] Photo ajoutée dans public/avatar.jpg (optionnel)
- [ ] Images de projets ajoutées dans public/projects/
- [ ] Liens GitHub/LinkedIn mis à jour dans portfolio-data.ts
- [ ] URLs des projets mises à jour
- [ ] Test local OK sur http://localhost:3000
- [ ] Vérification sur mobile (F12 > Device toolbar)
- [ ] Repository GitHub créé
- [ ] Code poussé sur GitHub
- [ ] GitHub Pages activé
- [ ] Site en ligne fonctionnel

---

## 🆘 Besoin d'aide ?

### Documentation complète
- **START_HERE.md** - Point de départ
- **QUICKSTART.md** - Démarrage rapide
- **README.md** - Vue d'ensemble complète
- **FAQ.md** - Questions fréquentes
- **DEPLOY_GUIDE.md** - Guide de déploiement détaillé

### Commandes utiles
```bash
npm run dev          # Développement local
npm run build        # Test du build
npm run lint         # Vérifier le code
docker-compose up    # Lancer avec Docker
```

---

## 📧 Contact & Profil

**Claude MENYE**
- 📧 Email : menyeclaude33@outlook.fr
- 📱 Téléphone : +33 7 58 67 08 57
- 📍 Localisation : Lyon (69007)
- 💼 LinkedIn : Claude Menye
- 🔗 GitHub : claude-menye

**Formation actuelle** : Bachelor 3 Data & Business Intelligence - NEXTA DIGITAL SCHOOL  
**Recherche** : Alternance 1 sem École / 3 sem Entreprise

---

## 🎯 Objectif

Créer un portfolio professionnel pour mettre en valeur votre expertise en **Data Science** et **IA**, 
et trouver une alternance dans le domaine du Machine Learning et de l'Intelligence Artificielle.

**Bon courage pour votre recherche d'alternance ! 🚀**

---

**Date de création** : 8 Octobre 2024  
**Template** : Next.js 14 + TypeScript + TailwindCSS + Shadcn/ui  
**Thème** : Électrique (Noir, Bleu #0080FF, Cyan #00D4FF)

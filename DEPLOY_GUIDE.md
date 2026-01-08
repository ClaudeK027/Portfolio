# 🚀 Guide de Déploiement Complet

Ce guide couvre toutes les options de déploiement pour votre portfolio.

## 📋 Table des matières

1. [GitHub Pages](#github-pages) ⭐ Recommandé
2. [Vercel](#vercel)
3. [Netlify](#netlify)
4. [Docker sur VPS](#docker-sur-vps)
5. [Domaine personnalisé](#domaine-personnalisé)

---

## 🌐 GitHub Pages

### Configuration initiale

1. **Créez un repository GitHub**
   - Nom : `Portfolio` (ou autre nom)
   - Public

2. **Configurez next.config.mjs**

Si votre repo s'appelle `Portfolio` :
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
};
```

Si vous utilisez un domaine personnalisé ou `username.github.io` :
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

3. **Poussez votre code**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/Portfolio.git
git push -u origin main
```

4. **Activez GitHub Pages**
   - Allez dans **Settings** > **Pages**
   - Source : **GitHub Actions**

5. **Le workflow se lance automatiquement**
   - Attendez quelques minutes
   - Votre site sera à : `https://VOTRE-USERNAME.github.io/Portfolio`

### Mise à jour

```bash
git add .
git commit -m "Update portfolio"
git push
```

Le déploiement est automatique ! ✨

### Troubleshooting GitHub Pages

**Problème : Page 404**
- Vérifiez que `.nojekyll` existe dans `public/`
- Vérifiez `basePath` dans `next.config.mjs`

**Problème : Images ne s'affichent pas**
- Utilisez des chemins relatifs ou absolus avec `basePath`
- Exemple : `/Portfolio/image.jpg` ou stockez sur CDN

**Problème : Workflow échoue**
- Vérifiez les permissions dans Settings > Actions > General
- Activez "Read and write permissions"

---

## ⚡ Vercel

### Déploiement en 1 clic

1. **Visitez [vercel.com](https://vercel.com)**
2. **Connectez votre compte GitHub**
3. **Import votre repository**
4. **Vercel détecte Next.js automatiquement**
5. **Cliquez sur Deploy**

### Avec CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Configuration

Modifiez `next.config.mjs` :
```javascript
const nextConfig = {
  // Pas besoin de basePath pour Vercel
  images: {
    domains: ['votre-cdn.com'], // Si vous utilisez un CDN
  },
};
```

### Variables d'environnement

Dans le dashboard Vercel :
1. **Settings** > **Environment Variables**
2. Ajoutez vos variables
3. Redéployez

### Domaine personnalisé

1. **Settings** > **Domains**
2. **Add Domain**
3. Suivez les instructions DNS

---

## 🌊 Netlify

### Déploiement via Git

1. **Visitez [netlify.com](https://netlify.com)**
2. **Add new site** > **Import an existing project**
3. **Connectez GitHub**
4. **Sélectionnez votre repository**

Configuration du build :
- **Build command** : `npm run build`
- **Publish directory** : `out`

5. **Deploy**

### Avec CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Initialiser
netlify init

# Déployer
netlify deploy

# Déployer en production
netlify deploy --prod
```

### Configuration netlify.toml

Créez `netlify.toml` :
```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Domaine personnalisé

1. **Domain settings**
2. **Add custom domain**
3. Suivez les instructions

---

## 🐳 Docker sur VPS

### Prérequis

- VPS (DigitalOcean, Linode, AWS EC2, etc.)
- Docker installé
- Nom de domaine (optionnel)

### 1. Connectez-vous à votre VPS

```bash
ssh user@votre-vps-ip
```

### 2. Installez Docker

```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Ajoutez votre user au groupe docker
sudo usermod -aG docker $USER
```

### 3. Clonez votre repository

```bash
git clone https://github.com/VOTRE-USERNAME/Portfolio.git
cd Portfolio
```

### 4. Buildez et lancez

```bash
# Build l'image
docker build -t portfolio .

# Lancez le container
docker run -d -p 80:3000 --name portfolio --restart unless-stopped portfolio
```

### 5. Avec Docker Compose

```bash
# Lancez en production
docker-compose --profile production up -d
```

### 6. Configuration Nginx (optionnel)

Pour utiliser un nom de domaine :

```nginx
# /etc/nginx/sites-available/portfolio
server {
    listen 80;
    server_name votredomaine.com www.votredomaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activez le site :
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7. SSL avec Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d votredomaine.com -d www.votredomaine.com
```

### Mises à jour

```bash
cd Portfolio
git pull
docker-compose --profile production down
docker-compose --profile production up -d --build
```

---

## 🌍 Domaine personnalisé

### Avec GitHub Pages

1. **Créez** `public/CNAME` :
```
votredomaine.com
```

2. **Configurez DNS** chez votre registrar :
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: VOTRE-USERNAME.github.io
```

3. **Modifiez** `next.config.mjs` :
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Supprimez basePath et assetPrefix
};
```

4. **Dans GitHub** : Settings > Pages > Custom domain > Ajoutez votre domaine

### Avec Vercel

1. **Dashboard Vercel** > Settings > Domains
2. **Add Domain** > Entrez votre domaine
3. **Suivez les instructions DNS**

Vercel configure automatiquement SSL !

### Avec Netlify

1. **Dashboard Netlify** > Domain settings
2. **Add custom domain**
3. **Suivez les instructions DNS**

SSL automatique aussi !

---

## 🔒 Sécurité

### Headers de sécurité

Ajoutez dans `next.config.mjs` :
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### Variables d'environnement

**Ne committez JAMAIS de secrets !**

Utilisez `.env.local` (dans `.gitignore`) :
```bash
NEXT_PUBLIC_API_URL=https://api.exemple.com
SECRET_KEY=votre-clé-secrète
```

---

## 📊 Monitoring et Analytics

### Google Analytics

`src/app/layout.tsx` :
```tsx
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
  strategy="afterInteractive"
/>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

`src/app/layout.tsx` :
```tsx
import { Analytics } from '@vercel/analytics/react';

<body>
  {children}
  <Analytics />
</body>
```

---

## ✅ Checklist de déploiement

- [ ] Tests en local réussis
- [ ] Build production réussie (`npm run build`)
- [ ] Variables d'environnement configurées
- [ ] Métadonnées SEO remplies
- [ ] Images optimisées
- [ ] Favicons ajoutés
- [ ] robots.txt configuré
- [ ] Domaine configuré (si applicable)
- [ ] SSL activé
- [ ] Analytics configuré
- [ ] Tests sur mobile et desktop
- [ ] Liens fonctionnels
- [ ] Formulaire de contact testé

---

## 🆘 Support

**Problème de déploiement ?**
- Consultez les logs du workflow GitHub Actions
- Vérifiez la console du navigateur
- Lisez les messages d'erreur attentivement
- Ouvrez une issue sur GitHub

**Ressources utiles :**
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

**Bon déploiement ! 🚀**

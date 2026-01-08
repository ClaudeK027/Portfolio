# 🤝 Guide de Contribution

Merci de votre intérêt pour contribuer à ce projet ! Voici comment vous pouvez aider.

## 💡 Types de contributions

- 🐛 Correction de bugs
- ✨ Nouvelles fonctionnalités
- 📝 Amélioration de la documentation
- 🎨 Améliorations du design
- ⚡ Optimisations de performance

## 🚀 Comment contribuer

### 1. Fork le projet

Cliquez sur le bouton "Fork" en haut à droite du repository.

### 2. Clonez votre fork

```bash
git clone https://github.com/votre-username/Portfolio.git
cd Portfolio
```

### 3. Créez une branche

```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
# ou
git checkout -b fix/correction-bug
```

### 4. Installez les dépendances

```bash
npm install
```

### 5. Faites vos modifications

- Suivez les conventions de code existantes
- Testez vos modifications localement
- Assurez-vous que le code compile sans erreur

### 6. Testez vos modifications

```bash
npm run dev     # Test en développement
npm run build   # Test du build production
npm run lint    # Vérification du code
```

### 7. Committez vos changements

Utilisez des messages de commit clairs :

```bash
git add .
git commit -m "feat: ajout de la fonctionnalité X"
# ou
git commit -m "fix: correction du bug Y"
```

**Convention de messages de commit** :
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage, style
- `refactor:` Refactoring
- `perf:` Performance
- `test:` Tests
- `chore:` Tâches de maintenance

### 8. Push vers votre fork

```bash
git push origin feature/ma-nouvelle-fonctionnalite
```

### 9. Créez une Pull Request

1. Allez sur le repository original
2. Cliquez sur "Pull Requests"
3. Cliquez sur "New Pull Request"
4. Sélectionnez votre fork et votre branche
5. Ajoutez un titre et une description claire
6. Soumettez la Pull Request

## 📋 Checklist avant Pull Request

- [ ] Le code compile sans erreur (`npm run build`)
- [ ] Le code respecte les règles ESLint (`npm run lint`)
- [ ] Les modifications sont testées localement
- [ ] La documentation est mise à jour si nécessaire
- [ ] Les messages de commit sont clairs
- [ ] Aucun fichier inutile n'est inclus

## 🎨 Standards de code

### TypeScript

```typescript
// ✅ Bon
interface UserProps {
  name: string;
  email: string;
}

// ❌ Éviter
const user: any = { name: "John" };
```

### React Components

```tsx
// ✅ Bon - Composant fonctionnel avec typage
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

// Utiliser "use client" pour les composants avec interactivité
"use client";
```

### Tailwind CSS

```tsx
// ✅ Bon - Classes organisées
<div className="flex items-center justify-center p-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">

// ❌ Éviter - Classes désordonnées
<div className="text-white bg-primary p-4 rounded-lg flex justify-center items-center transition-colors hover:bg-primary/90">
```

### Nommage

- **Composants** : PascalCase (`Hero.tsx`, `ContactForm.tsx`)
- **Fonctions** : camelCase (`handleSubmit`, `getUserData`)
- **Constantes** : UPPER_SNAKE_CASE (`MAX_ITEMS`, `API_URL`)
- **Fichiers utilitaires** : kebab-case (`utils.ts`, `api-client.ts`)

## 🐛 Rapport de bugs

Si vous trouvez un bug, créez une issue avec :

1. **Titre clair** : "Bug: Description courte"
2. **Description** : Que fait le bug ?
3. **Étapes de reproduction** :
   - Étape 1
   - Étape 2
   - Étape 3
4. **Comportement attendu** : Ce qui devrait se passer
5. **Comportement actuel** : Ce qui se passe actuellement
6. **Environnement** :
   - OS : Windows/Mac/Linux
   - Navigateur : Chrome/Firefox/Safari
   - Version Node.js
7. **Captures d'écran** (si applicable)

## ✨ Suggestions de fonctionnalités

Pour proposer une nouvelle fonctionnalité :

1. **Vérifiez** qu'elle n'existe pas déjà
2. **Créez une issue** avec le label "enhancement"
3. **Décrivez** :
   - Le problème que ça résout
   - Comment ça fonctionnerait
   - Pourquoi c'est utile
4. **Attendez** un retour avant de commencer à coder

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com)

## ❓ Questions

Si vous avez des questions, n'hésitez pas à :
- Ouvrir une issue avec le label "question"
- Contacter les mainteneurs

## 📜 Code de Conduite

- Soyez respectueux et professionnel
- Acceptez les critiques constructives
- Concentrez-vous sur ce qui est meilleur pour la communauté
- Faites preuve d'empathie envers les autres membres

## 🙏 Merci !

Merci de prendre le temps de contribuer ! Vos contributions rendent ce projet meilleur pour tout le monde. 🎉

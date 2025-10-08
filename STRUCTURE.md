# Guide d'Organisation du Code

Ce document explique l'architecture et l'organisation du code du portfolio pour faciliter la maintenance et les futures évolutions.

## 📂 Organisation des Dossiers

### `/src/data` - Données Statiques
Contient toutes les données du portfolio organisées par type. Cette approche permet de :
- Modifier facilement le contenu sans toucher au code des composants
- Maintenir une séparation claire entre données et présentation
- Faciliter la traduction et l'internationalisation

**Fichiers :**
- `projects.ts` : Liste complète des projets avec descriptions en FR/EN
- `education.ts` : Parcours académique et diplômes
- `experiences.ts` : Expériences professionnelles et stages
- `skills.ts` : Compétences techniques organisées par catégorie

### `/src/locales` - Traductions
Fichiers JSON contenant toutes les traductions de l'interface.

**Fichiers :**
- `fr.json` : Traductions françaises (langue par défaut)
- `en.json` : Traductions anglaises

**Structure des traductions :**
```json
{
  "navigation": { ... },
  "hero": { ... },
  "about": { ... },
  "skills": { ... },
  "education": { ... },
  "experience": { ... },
  "projects": { ... },
  "contact": { ... },
  "footer": { ... }
}
```

### `/src/components` - Composants Réutilisables
Composants UI génériques qui peuvent être réutilisés à travers l'application.

**Composants disponibles :**

#### `BackgroundAnimation.tsx`
Animation d'arrière-plan décorative qui s'adapte au mode sombre/clair.

#### `WelcomeSplash.tsx`
Écran de bienvenue affiché au premier chargement de la page.

#### `Section.tsx`
Wrapper générique pour créer des sections cohérentes avec :
- Titre de section stylisé
- Support du mode sombre
- Animations au scroll intégrées

**Utilisation :**
```tsx
<Section id="ma-section" title="Mon Titre" isDark={isDark}>
  {/* Contenu de la section */}
</Section>
```

#### `SkillCard.tsx`
Carte individuelle pour afficher une compétence technique avec :
- Logo de la technologie
- Nom de la compétence
- Badge de niveau (optionnel) : beginner, intermediate, advanced, expert
- Animations au hover

**Utilisation :**
```tsx
<SkillCard
  name="React"
  logo="/images/skills/react.svg"
  level="advanced"
  isDark={isDark}
/>
```

#### `SkillsSection.tsx`
Section complète et professionnelle des compétences incluant :
- Compétences techniques organisées par catégorie
- Langues parlées avec barres de progression
- Compétences personnelles (soft skills)
- Centres d'intérêt

### `/src/hooks` - Hooks Personnalisés
Logique réutilisable encapsulée dans des hooks React.

#### `useScrollAnimation.ts`
Hook pour gérer les animations au scroll. Ajoute automatiquement la classe CSS `scroll-animate-visible` aux éléments avec la classe `scroll-animate` lorsqu'ils entrent dans le viewport.

#### `useTranslation.ts`
Hook pour gérer l'internationalisation avec :
- Changement de langue (FR/EN)
- Chargement automatique des traductions
- Interface simple : `{ language, setLanguage, t }`

**Utilisation :**
```tsx
const { language, setLanguage, t } = useTranslation('fr');
// t.navigation.home, t.hero.title, etc.
```

### `/src/pages` - Pages de l'Application

#### `HomePage.tsx`
Page principale du portfolio contenant toutes les sections :
- Hero (Introduction)
- À propos
- Compétences
- Formation
- Expériences
- Projets
- Contact

#### `ProjectDetailPage.tsx`
Page de détail d'un projet individuel avec informations complètes.

### `/src/utils` - Utilitaires

#### `emailService.ts`
Service pour gérer l'envoi d'emails via Supabase Edge Functions.

## 🎨 Conventions de Code

### Naming Conventions

**Composants :** PascalCase
```tsx
export default function SkillCard() { ... }
```

**Hooks :** camelCase avec préfixe "use"
```tsx
export function useScrollAnimation() { ... }
```

**Fichiers de données :** camelCase
```tsx
export const projects = [ ... ];
```

**Interfaces TypeScript :** PascalCase
```tsx
interface Project { ... }
```

### Structure des Composants

Toujours suivre cet ordre dans les composants :
1. Imports
2. Interfaces/Types
3. Composant principal
4. Exports

**Exemple :**
```tsx
// 1. Imports
import { useState } from 'react';
import { Mail } from 'lucide-react';

// 2. Interfaces
interface MyComponentProps {
  title: string;
  isDark: boolean;
}

// 3. Composant
export default function MyComponent({ title, isDark }: MyComponentProps) {
  const [state, setState] = useState('');

  return (
    <div>
      {title}
    </div>
  );
}
```

### Gestion des Styles

- **Tailwind CSS** pour tous les styles
- Utiliser des classes utilitaires Tailwind
- Éviter les styles inline sauf pour les valeurs dynamiques
- Préférer les variables CSS pour les valeurs réutilisées

### Gestion de l'État

- **useState** pour l'état local des composants
- **Props drilling** pour passer les données (projet de taille moyenne)
- Pour un projet plus large, considérer Context API ou Zustand

## 🔄 Flux de Données

```
data/*.ts (Source de données)
    ↓
pages/HomePage.tsx (Consommation)
    ↓
components/* (Affichage)
```

**Traductions :**
```
locales/*.json (Fichiers JSON)
    ↓
hooks/useTranslation.ts (Chargement)
    ↓
pages/HomePage.tsx (Utilisation)
```

## 🎯 Bonnes Pratiques

### Ajout d'un Nouveau Projet

1. Ajouter l'image dans `public/images/projects/`
2. Ajouter les données dans `src/data/projects.ts`
3. Le projet apparaîtra automatiquement sur la page

### Ajout d'une Nouvelle Compétence

1. Ajouter le logo dans `public/images/skills/`
2. Ajouter la compétence dans la catégorie appropriée de `src/data/skills.ts`
3. Spécifier le niveau (beginner, intermediate, advanced, expert)

### Modification des Traductions

1. Éditer `src/locales/fr.json` pour le français
2. Éditer `src/locales/en.json` pour l'anglais
3. Maintenir la même structure dans les deux fichiers

### Création d'un Nouveau Composant

1. Créer le fichier dans `src/components/`
2. Ajouter les commentaires de documentation JSDoc
3. Définir les interfaces TypeScript pour les props
4. Ajouter le support du mode sombre (prop `isDark`)
5. Tester le composant avant de l'utiliser

## 📝 Documentation du Code

Chaque fichier important doit inclure un commentaire d'en-tête expliquant son rôle :

```tsx
/**
 * NomDuComposant
 *
 * Description claire du rôle du composant.
 * Peut inclure des exemples d'utilisation.
 */
```

## 🐛 Debugging

### Vérifier les Erreurs de Build
```bash
npm run build
```

### Vérifier les Types TypeScript
```bash
npm run typecheck
```

### Vérifier la Qualité du Code
```bash
npm run lint
```

## 🚀 Performance

### Optimisations Appliquées

- **Code Splitting** : Chargement lazy des pages
- **Image Optimization** : Format WebP et compression
- **Tree Shaking** : Suppression du code inutilisé par Vite
- **Minification** : CSS et JS minifiés en production

### Monitoring

Utiliser les DevTools pour :
- Vérifier le temps de chargement
- Analyser la taille des bundles
- Tester la performance sur mobile

## 📦 Déploiement

Le projet génère un build statique dans `/dist` :
```bash
npm run build
```

Compatible avec tous les hébergeurs de sites statiques :
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages

---

Pour toute question sur l'architecture, consultez ce document ou contactez le mainteneur du projet.

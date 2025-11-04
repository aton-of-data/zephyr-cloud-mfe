# Components - Atomic Design Pattern

This folder is organized following the **Atomic Design** pattern, which divides components into different levels of complexity.

## 📁 Structure

```
components/
├── atoms/           # Basic and indivisible components
│   ├── ThemeButton/
│   ├── LanguageButton/
│   └── index.ts
├── molecules/       # Simple combinations of atoms
│   └── index.ts
├── organisms/       # Complex components formed by molecules/atoms
│   └── index.ts
├── templates/       # Layouts that combine organisms
│   └── index.ts
└── index.ts         # Main barrel exports
```

## 🎯 Atomic Design Levels

### Atoms (`atoms/`)
Basic, smallest and indivisible components. They don't make sense alone outside of a context.

**Examples:**
- `ThemeButton` - Button to toggle between light/dark theme
- `LanguageButton` - Button to toggle between languages (PT/EN)

### Molecules (`molecules/`)
Simple combinations of atoms. They begin to have specific functionality and purpose.

**Note:** Currently empty. Add atom combinations here when needed.

### Organisms (`organisms/`)
Complex components that combine molecules and atoms to form functional sections of the interface.

**Note:** Currently empty. Add complex components here when needed.

### Templates (`templates/`)
Layouts that combine organisms to form complete pages.

**Note:** Currently empty. Add layouts here when needed.

## 🔄 Module Federation

The atom components (`ThemeButton` and `LanguageButton`) are exposed via Module Federation and can be imported in the host:

```tsx
import ThemeButton from 'vite_remote/ThemeButton';
import LanguageButton from 'vite_remote/LanguageButton';
```

Configuration is in `vite.config.ts`:
```ts
exposes: {
  './ThemeButton': './src/components/atoms/ThemeButton',
  './LanguageButton': './src/components/atoms/LanguageButton',
  './App': './src/App',
}
```

## 📦 Exports

All components are exported through the main `index.ts` file using barrel exports:

```tsx
// Internal import in remote
import { ThemeButton, LanguageButton } from './components';

// External import via Module Federation (in host)
import ThemeButton from 'vite_remote/ThemeButton';
import LanguageButton from 'vite_remote/LanguageButton';
```

Each Atomic Design level has its own `index.ts` to facilitate exports:

```tsx
export * from './atoms';
export * from './molecules';
export * from './organisms';
export * from './templates';
```

## 🎨 Styles

Each component has its own CSS file within its folder:

```
ThemeButton/
├── ThemeButton.tsx
├── ThemeButton.css
└── index.ts
```

This keeps styles encapsulated and makes maintenance easier.

## 📝 Conventions

1. **Naming**: Use PascalCase for component names
2. **Folders**: Each component should have its own folder with the same name
3. **Index.ts**: Each component should export via `index.ts` within its folder
4. **CSS**: Use CSS Modules or simple CSS files within the component folder
5. **Documentation**: Keep JSDoc in components for better documentation

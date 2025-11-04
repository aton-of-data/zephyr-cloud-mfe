# Components - Atomic Design Pattern

This folder is organized following the **Atomic Design** pattern, which divides components into different levels of complexity.

## 📁 Structure

```
components/
├── atoms/           # Basic and indivisible components
│   └── Button/
├── molecules/       # Simple combinations of atoms
│   └── (empty - using ThemeButton from remote)
├── organisms/       # Complex components formed by molecules/atoms
│   ├── Header/
│   └── Sidebar/
├── templates/       # Layouts that combine organisms
│   └── DashboardLayout/
└── index.ts         # Barrel exports
```

## 🎯 Atomic Design Levels

### Atoms (`atoms/`)
Basic, smallest and indivisible components. They don't make sense alone outside of a context.

**Examples:**
- `Button` - Basic reusable button

### Molecules (`molecules/`)
Simple combinations of atoms. They begin to have specific functionality and purpose.

**Note:** Currently empty. Add atom combinations here when needed.

**Remote Components:** `ThemeButton` and `LanguageButton` are atoms from the **remote** (`vite_remote/ThemeButton`, `vite_remote/LanguageButton`), which is also organized using Atomic Design. See [remote/src/components/README.md](../../../remote/src/components/README.md) for details.

### Organisms (`organisms/`)
Complex components that combine molecules and atoms to form functional sections of the interface.

**Examples:**
- `Header` - Dashboard header
- `Sidebar` - Navigation sidebar

### Templates (`templates/`)
Layouts that combine organisms to form complete pages.

**Examples:**
- `DashboardLayout` - Main dashboard layout

## 🔄 Using Remote Components

The atom components (`ThemeButton` and `LanguageButton`) are being imported from the remote MFE:

```tsx
import ThemeButton from 'vite_remote/ThemeButton';
import LanguageButton from 'vite_remote/LanguageButton';
```

This allows reusing components that are managed in the remote, maintaining consistency between applications. The remote is also organized using **Atomic Design**, where these components are basic atoms.

### Remote Structure

The remote follows the same Atomic Design organization:

```
remote/src/components/
├── atoms/
│   ├── ThemeButton/      # Used in host Sidebar
│   └── LanguageButton/   # Used in host Sidebar
├── molecules/
├── organisms/
└── templates/
```

For more details, see [remote/src/components/README.md](../../../remote/src/components/README.md).

## 📦 Exports

All components are exported through the main `index.ts` file:

```tsx
import { Button } from './components'; // Atom
import { Header, Sidebar } from './components'; // Organisms
import { DashboardLayout } from './components'; // Template
```

## 🎨 Styles

Each component has its own CSS file within its folder:

```
Button/
├── Button.tsx
├── Button.css
└── index.ts
```

This keeps styles encapsulated and makes maintenance easier.

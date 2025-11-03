# Componentes - Atomic Design Pattern

Esta pasta está organizada seguindo o padrão **Atomic Design**, que divide os componentes em diferentes níveis de complexidade.

## 📁 Estrutura

```
components/
├── atoms/           # Componentes básicos e indivisíveis
│   └── Button/
├── molecules/       # Combinações simples de atoms
│   └── (vazio - usando ThemeButton do remote)
├── organisms/       # Componentes complexos formados por molecules/atoms
│   ├── Header/
│   └── Sidebar/
├── templates/       # Layouts que combinam organisms
│   └── DashboardLayout/
└── index.ts         # Barrel exports
```

## 🎯 Níveis do Atomic Design

### Atoms (`atoms/`)
Componentes básicos, menores e indivisíveis. Eles não fazem sentido sozinhos fora de um contexto.

**Exemplos:**
- `Button` - Botão básico reutilizável

### Molecules (`molecules/`)
Combinações simples de atoms. Começam a ter funcionalidade e propósito específico.

**Nota:** O `ThemeButton` está sendo usado do **remote** (`vite_remote/ThemeButton`), por isso não está nesta pasta.

### Organisms (`organisms/`)
Componentes complexos que combinam molecules e atoms para formar seções funcionais da interface.

**Exemplos:**
- `Header` - Cabeçalho do dashboard
- `Sidebar` - Barra lateral de navegação

### Templates (`templates/`)
Layouts que combinam organisms para formar páginas completas.

**Exemplos:**
- `DashboardLayout` - Layout principal do dashboard

## 🔄 Uso do ThemeButton do Remote

O `ThemeButton` está sendo importado do remote MFE:

```tsx
// @ts-expect-error - Remote module
import ThemeButton from 'vite_remote/ThemeButton';
```

Isso permite reutilizar o componente que está gerenciado no remote, mantendo a consistência entre aplicações.

## 📦 Exports

Todos os componentes são exportados através do arquivo `index.ts` principal:

```tsx
import { Button } from './components'; // Atom
import { Header, Sidebar } from './components'; // Organisms
import { DashboardLayout } from './components'; // Template
```

## 🎨 Estilos

Cada componente possui seu próprio arquivo CSS dentro de sua pasta:

```
Button/
├── Button.tsx
├── Button.css
└── index.ts
```

Isso mantém os estilos encapsulados e facilita a manutenção.


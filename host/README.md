# Host App

Main application that orchestrates the Micro Frontends system.

## 📦 Architecture

```mermaid
graph TB
    A[Host App] --> B[DashboardLayout]
    B --> C[Header]
    B --> D[Sidebar]
    B --> E[Remote App Content]
    E -->|consumes| F[Remote Module]
    E -->|consumes| G[Shared State]
    F --> G
```

## 🎯 Responsibility

**Shell** application that:
- 🏗️ **Layout**: Base structure (Header, Sidebar, Content)
- 🔗 **Orchestration**: Consumes remote modules via Module Federation
- 🎨 **UI**: Responsible for user experience

## 🔄 Application Flow

```mermaid
flowchart TB
    A[Bootstrap] --> B[Load Layout]
    B --> C[Lazy Load Remote]
    C --> D[Shared State Init]
    D --> E[Render UI]
```

## 📂 Structure

```
host/
├── src/
│   ├── components/        # Atomic Design structure
│   │   ├── atoms/         # Basic components
│   │   ├── molecules/     # Atom combinations
│   │   ├── organisms/     # Header, Sidebar
│   │   ├── templates/     # DashboardLayout
│   │   └── index.ts       # Barrel exports
│   └── App.tsx            # Shell app
└── vite.config.ts         # Module Federation remotes
```

### 🎯 Atomic Design Organization

Components follow the **Atomic Design** pattern:
- **Atoms**: Basic, indivisible components (currently minimal - using remote atoms)
- **Molecules**: Simple combinations of atoms (currently empty)
- **Organisms**: Complex components (`Header`, `Sidebar`)
- **Templates**: Layout structures (`DashboardLayout`)

The host also consumes atoms from the Remote application (`ThemeButton`, `LanguageButton`) which are also organized using Atomic Design.

See [components/README.md](./src/components/README.md) for detailed documentation.

## 🚀 Loading

```typescript
// Remote configuration
remotes: {
  'vite_remote': {
    entry: 'http://localhost:5174/remoteEntry.js',
  },
  'shared-state': {
    entry: 'http://localhost:5175/remoteEntry.js',
  },
}
```

## 🔗 Dependencies

- **Remote App**: Content and global components
- **Shared State**: Global state (theme, language)
- **Zephyr Cloud**: Automatic deployment and resolution

## 📱 Responsive

- Desktop (≥769px): Sidebar always visible
- Mobile (<769px): Collapsible sidebar
- Suspense boundaries for loading states

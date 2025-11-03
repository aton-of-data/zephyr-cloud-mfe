# Remote App

Library of globally shared components via Module Federation.

## 📦 Architecture

```mermaid
graph TB
    A[Host App] -->|consumes| B[Remote Module]
    B --> C[ThemeButton]
    B --> D[LanguageButton]
    B --> E[Remote App Content]
    C --> F[Shared State]
    D --> F
    E --> F
```

## 🎯 Responsibility

**Reusable** components exposed to the Host:
- 🎨 **ThemeButton**: Toggles light/dark theme
- 🌐 **LanguageButton**: Toggles pt/en language
- 📱 **Remote App**: Main dashboard content

## 🔄 Integration Flow

```mermaid
flowchart LR
    A[Remote Build] --> B[remoteEntry.js]
    B --> C[Module Federation]
    C --> D[Host Lazy Load]
    D --> E[Render in Host]
```

## 📂 Structure

```
remote/
├── src/
│   ├── components/    # Shared components
│   │   ├── ThemeButton
│   │   ├── LanguageButton
│   │   └── App.tsx    # Main content
│   └── App.css        # Isolated styles
└── vite.config.ts     # Module Federation exposes
```

## 🚀 Exposure

```typescript
// Expose in vite.config.ts
exposes: {
  './ThemeButton': './src/components/ThemeButton',
  './LanguageButton': './src/components/LanguageButton',
  './App': './src/App',
}
```

## 🔗 Dependencies

- Consumes **Shared State** for store access
- Shares React, ReactDOM and Zustand with Host
- Independent deployment via Zephyr Cloud

## 📱 Usage in Host

```typescript
// Lazy load in Host
const RemoteApp = lazy(() => import("vite_remote/App"));
const ThemeButton = lazy(() => import("vite_remote/ThemeButton"));

// Render with Suspense
<Suspense fallback={<Loading />}>
  <RemoteApp />
</Suspense>
```

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'shared-state/styles';
import 'shared-state/stores';

/**
 * Remote Application Bootstrap
 *
 * Initializes the React application and imports shared state styles and stores.
 * The theme will be initialized automatically by the store.
 *
 * ```mermaid
 * graph TD
 *   A[bootstrap.tsx] --> B[Import Shared State]
 *   B --> C[Load Styles]
 *   B --> D[Initialize Stores]
 *   D --> E[Theme Auto-initialized]
 *   E --> F[Create React Root]
 *   F --> G[Render App]
 * ```
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

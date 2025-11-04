import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * Remote Application Entry Point
 *
 * Initializes the React application for standalone development.
 * Global styles are not imported here as they should only be in the host.
 *
 * ```mermaid
 * graph LR
 *   A[main.tsx] --> B[Create React Root]
 *   B --> C[Render App]
 *   C --> D[Standalone Mode]
 * ```
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

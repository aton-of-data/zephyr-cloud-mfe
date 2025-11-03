/**
 * Remote Application Bootstrap
 * 
 * Initializes the React application and imports shared state styles and stores.
 * The theme will be initialized automatically by the store.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
// @ts-expect-error - Remote module
import 'shared-state/styles';
// @ts-expect-error - Remote module
import 'shared-state/stores';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

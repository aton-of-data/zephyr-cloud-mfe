/**
 * Remote Application Entry Point
 * 
 * Initializes the React application for standalone development.
 * Global styles are not imported here as they should only be in the host.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

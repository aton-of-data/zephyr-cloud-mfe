import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { withZephyr, ModuleFederationOptions } from 'vite-plugin-zephyr';

const mfConfig: ModuleFederationOptions = {
  name: 'vite_remote',
  filename: 'remoteEntry.js',
  exposes: {
    './ThemeButton': './src/components/ThemeButton',
    './LanguageButton': './src/components/LanguageButton',
    './App': './src/App',
  },
  remotes: {
    'shared-state': {
      name: 'shared-state',
      entry: 'http://localhost:5175/remoteEntry.js',
      type: 'module',
    },
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    zustand: { singleton: true },
  },
};

/**
 * Vite Configuration
 * 
 * Module Federation configuration for the remote application.
 * Exposes ThemeButton, LanguageButton, and App components.
 */
export default defineConfig({
  plugins: [react(), withZephyr({ mfConfig })],
  server: {
    port: 5174,
    strictPort: true,
  },
  experimental: {
    renderBuiltUrl() {
      return { relative: true };
    },
  },
  build: {
    target: 'chrome89',
  },
});

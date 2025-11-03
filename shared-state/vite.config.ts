import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { withZephyr, ModuleFederationOptions } from 'vite-plugin-zephyr';

const mfConfig: ModuleFederationOptions = {
  name: 'shared-state',
  filename: 'remoteEntry.js',
  exposes: {
    './stores': './src/stores',
    './styles': './src/styles/index',
    './i18n': './src/i18n',
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
 * Module Federation configuration for the shared-state application.
 * Exposes stores, styles, and i18n modules.
 */
export default defineConfig({
  plugins: [react(), withZephyr({ mfConfig })],
  server: {
    port: 5175,
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


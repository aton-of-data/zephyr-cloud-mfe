/**
 * Vite Configuration
 * 
 * Module Federation configuration for the host application.
 * Consumes remote modules from vite_remote and shared-state.
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { withZephyr, ModuleFederationOptions } from 'vite-plugin-zephyr';

/**
 * Module Federation Configuration
 * 
 * @type {ModuleFederationOptions}
 */
const mfConfig: ModuleFederationOptions = {
  name: 'vite-host',
  filename: 'remoteEntry.js',
  remotes: {
    'vite_remote': {
      name: 'vite_remote',
      entry: 'http://localhost:5174/remoteEntry.js',
      type: 'module',
    },
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

export default defineConfig({
  plugins: [react(), withZephyr({ mfConfig })],
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    target: 'chrome89',
  },
});

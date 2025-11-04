import { useThemeStore } from './theme';
import { useLanguageStore } from './language';

/**
 * Stores Barrel Export
 *
 * Single entry point for all stores following the Flux pattern.
 * This module exports all store modules and initializes them when loaded.
 *
 * ```mermaid
 * graph TD
 *   A[stores module] --> B[Theme Store]
 *   A --> C[Language Store]
 *   D[Module Import] --> E[Initialize Stores]
 *   E --> F[Stores Ready]
 * ```
 *
 * @module stores
 * @category Shared State
 */
export * from './theme';
export * from './language';

if (typeof window !== 'undefined') {
  useThemeStore.getState();
  useLanguageStore.getState();
}


/**
 * Stores Barrel Export
 * 
 * Single entry point for all stores following the Flux pattern.
 * This module exports all store modules and initializes them when loaded.
 * 
 * @module stores
 * @category Shared State
 */
export * from './theme';
export * from './language';

import { useThemeStore } from './theme';
import { useLanguageStore } from './language';

if (typeof window !== 'undefined') {
  useThemeStore.getState();
  useLanguageStore.getState();
}


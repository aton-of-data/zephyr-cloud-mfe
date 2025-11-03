/**
 * Theme Selectors
 * 
 * Pure functions for reading theme state (Flux-inspired pattern).
 * These selectors provide immutable access to store state and actions.
 * 
 * @module theme/selectors
 * @category Shared State
 */
import type { ThemeStore } from './theme.store';

/**
 * Selects the current theme preference
 * 
 * @param {ThemeStore} state - The theme store state
 * @returns {Theme} The current theme
 */
export const selectTheme = (state: ThemeStore) => state.theme;

/**
 * Selects the resolved theme (after system detection)
 * 
 * @param {ThemeStore} state - The theme store state
 * @returns {ResolvedTheme} The resolved theme
 */
export const selectResolvedTheme = (state: ThemeStore) => state.resolvedTheme;

/**
 * Checks if the resolved theme is dark
 * 
 * @param {ThemeStore} state - The theme store state
 * @returns {boolean} True if theme is dark
 */
export const selectIsDark = (state: ThemeStore) => state.resolvedTheme === 'dark';

/**
 * Checks if the resolved theme is light
 * 
 * @param {ThemeStore} state - The theme store state
 * @returns {boolean} True if theme is light
 */
export const selectIsLight = (state: ThemeStore) => state.resolvedTheme === 'light';

/**
 * Selects the toggle theme action
 * 
 * @param {ThemeStore} state - The theme store state
 * @returns {Function} The toggle theme function
 */
export const selectToggleTheme = (state: ThemeStore) => state.toggleTheme;

/**
 * Selects the set theme action
 * 
 * @param {ThemeStore} state - The theme store state
 * @returns {Function} The set theme function
 */
export const selectSetTheme = (state: ThemeStore) => state.setTheme;


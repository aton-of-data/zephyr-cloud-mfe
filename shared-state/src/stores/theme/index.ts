/**
 * Theme Store Module
 *
 * Barrel export for theme store, types, and selectors.
 * Provides complete theme management functionality for all micro frontends.
 *
 * ```mermaid
 * graph LR
 *   A[theme module] --> B[useThemeStore]
 *   A --> C[Theme Types]
 *   A --> D[Theme Selectors]
 *   D --> E[selectResolvedTheme]
 *   D --> F[selectIsDark]
 * ```
 *
 * @module theme
 * @category Shared State
 */
export { useThemeStore } from './theme.store';
export type { Theme, ResolvedTheme, ThemeStore } from './theme.store';

export {
  selectTheme,
  selectResolvedTheme,
  selectIsDark,
  selectIsLight,
  selectToggleTheme,
  selectSetTheme,
} from './theme.selectors';


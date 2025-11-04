// @ts-expect-error - Remote module
import { useThemeStore, useLanguageStore, selectResolvedTheme, selectT, type ThemeStore } from 'shared-state/stores';
import './ThemeButton.css';

/**
 * ThemeButton Component
 *
 * Button component that allows users to toggle between light and dark themes.
 * Uses Flux-inspired pattern with selectors for state and actions.
 *
 * ```mermaid
 * graph LR
 *   A[User clicks button] --> B[toggleTheme action]
 *   B --> C[Theme Store updates]
 *   C --> D[Apply theme to DOM]
 *   D --> E[Component re-renders]
 *   E --> F[New theme icon/text displayed]
 *   G[Theme Store] --> H[Resolved Theme]
 *   H --> I[Button state updates]
 * ```
 *
 * @component
 * @category Atoms
 * @example
 * ```tsx
 * <ThemeButton />
 * ```
 */
const ThemeButton = () => {
  const t = useLanguageStore(selectT);
  const resolvedTheme = useThemeStore(selectResolvedTheme);
  const toggleTheme = useThemeStore((state: ThemeStore) => state.toggleTheme);

  const ariaLabel = resolvedTheme === 'dark' 
    ? t('switchToLight')
    : t('switchToDark');

  return (
    <button
      className="theme-button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
    >
      <span className="theme-button-icon">
        {resolvedTheme === 'dark' ? '☀️' : '🌙'}
      </span>
      <span className="theme-button-text">
        {resolvedTheme === 'dark' ? t('light') : t('dark')}
      </span>
    </button>
  );
};

export default ThemeButton;


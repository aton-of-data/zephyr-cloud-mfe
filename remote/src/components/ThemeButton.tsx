/**
 * ThemeButton Component
 * 
 * Button component that allows users to toggle between light and dark themes.
 * Uses Flux-inspired pattern with selectors for state and actions.
 * 
 * @component
 * @category Remote
 * @example
 * ```tsx
 * <ThemeButton />
 * ```
 */
// @ts-expect-error - Remote module
import { useThemeStore, useLanguageStore, selectResolvedTheme, selectT, type ThemeStore } from 'shared-state/stores';
import './ThemeButton.css';

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

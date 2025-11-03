/**
 * LanguageButton Component
 * 
 * Button component that allows users to toggle between Portuguese and English languages.
 * Uses Flux-inspired pattern with selectors for state and actions.
 * 
 * @component
 * @category Remote
 * @example
 * ```tsx
 * <LanguageButton />
 * ```
 */
// @ts-expect-error - Remote module
import { useLanguageStore, selectLanguage, selectT, type LanguageStore } from 'shared-state/stores';
import './LanguageButton.css';

const LanguageButton = () => {
  const t = useLanguageStore(selectT);
  const language = useLanguageStore(selectLanguage);
  const toggleLanguage = useLanguageStore((state: LanguageStore) => state.toggleLanguage);

  const labels: Record<'pt' | 'en', string> = {
    pt: t('portuguese'),
    en: t('english'),
  };

  const flags: Record<'pt' | 'en', string> = {
    pt: '🇧🇷',
    en: '🇺🇸',
  };

  const ariaLabel = language === 'pt'
    ? t('switchToEnglish')
    : t('switchToPortuguese');

  return (
    <button
      className="language-button"
      onClick={toggleLanguage}
      aria-label={ariaLabel}
    >
      <span className="language-button-icon">
        {flags[language as 'pt' | 'en']}
      </span>
      <span className="language-button-text">
        {labels[language as 'pt' | 'en']}
      </span>
    </button>
  );
};

export default LanguageButton;


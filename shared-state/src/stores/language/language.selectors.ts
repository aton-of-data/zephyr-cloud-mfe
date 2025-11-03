/**
 * Language Selectors
 * 
 * Pure functions for reading language state (Flux-inspired pattern).
 * These selectors provide immutable access to store state and actions.
 * 
 * @module language/selectors
 * @category Shared State
 */
import type { LanguageStore } from './language.store';
import { translations } from '../../i18n/translations';
import type { Language } from './language.store';

/**
 * Selects the current language
 * 
 * @param {LanguageStore} state - The language store state
 * @returns {Language} The current language
 */
export const selectLanguage = (state: LanguageStore) => state.language;

/**
 * Checks if the current language is Portuguese
 * 
 * @param {LanguageStore} state - The language store state
 * @returns {boolean} True if language is Portuguese
 */
export const selectIsPt = (state: LanguageStore) => state.language === 'pt';

/**
 * Checks if the current language is English
 * 
 * @param {LanguageStore} state - The language store state
 * @returns {boolean} True if language is English
 */
export const selectIsEn = (state: LanguageStore) => state.language === 'en';

/**
 * Selects the toggle language action
 * 
 * @param {LanguageStore} state - The language store state
 * @returns {Function} The toggle language function
 */
export const selectToggleLanguage = (state: LanguageStore) => state.toggleLanguage;

/**
 * Selects the set language action
 * 
 * @param {LanguageStore} state - The language store state
 * @returns {Function} The set language function
 */
export const selectSetLanguage = (state: LanguageStore) => state.setLanguage;

/**
 * Cache for translation functions (one per language)
 * 
 * @type {Map<Language, (key: string) => string>}
 */
const translationFunctionCache = new Map<Language, (key: string) => string>();

/**
 * Gets the translation function for a specific language
 * 
 * @param {Language} language - The language to get translations for
 * @returns {(key: string) => string} The translation function
 */
const getTranslationFunction = (language: Language): ((key: string) => string) => {
  if (!translationFunctionCache.has(language)) {
    const t = (key: string): string => {
      const langTranslations = translations[language] as Record<string, string>;
      return langTranslations[key] || key;
    };
    translationFunctionCache.set(language, t);
  }
  return translationFunctionCache.get(language)!;
};

/**
 * Translation function selector
 * 
 * Returns a stable function reference per language, but creates new reference when language changes.
 * 
 * @param {LanguageStore} state - The language store state
 * @returns {(key: string) => string} The translation function for the current language
 */
export const selectT = (state: LanguageStore) => {
  return getTranslationFunction(state.language);
};


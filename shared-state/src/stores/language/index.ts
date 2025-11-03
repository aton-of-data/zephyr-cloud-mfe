/**
 * Language Store Module
 * 
 * Barrel export for language store, types, and selectors.
 * 
 * @module language
 * @category Shared State
 */
export { useLanguageStore } from "./language.store";
export type { Language, LanguageStore } from "./language.store";

export {
  selectLanguage,
  selectIsPt,
  selectIsEn,
  selectToggleLanguage,
  selectSetLanguage,
  selectT,
} from "./language.selectors";

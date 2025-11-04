/**
 * Language Store Module
 *
 * Barrel export for language store, types, and selectors.
 * Provides complete language management functionality for all micro frontends.
 *
 * ```mermaid
 * graph LR
 *   A[language module] --> B[useLanguageStore]
 *   A --> C[Language Types]
 *   A --> D[Language Selectors]
 *   D --> E[selectT]
 *   D --> F[selectLanguage]
 * ```
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

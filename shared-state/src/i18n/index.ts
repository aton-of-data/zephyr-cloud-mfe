/**
 * i18n Module
 *
 * Internationalization utilities for the application.
 * Exports translation dictionaries for use across all micro frontends.
 *
 * ```mermaid
 * graph LR
 *   A[i18n module] --> B[translations export]
 *   B --> C[Language Selectors]
 *   C --> D[Components]
 * ```
 *
 * @module i18n
 * @category Shared State
 */
export { translations } from './translations';


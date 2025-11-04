/**
 * Atoms
 *
 * Basic, indivisible components. These are the smallest building blocks.
 * Atoms are the foundation of the Atomic Design system.
 *
 * ```mermaid
 * graph LR
 *   A[Atoms] --> B[ThemeButton]
 *   A --> C[LanguageButton]
 *   B --> D[Theme Store]
 *   C --> E[Language Store]
 * ```
 *
 * @module remote/src/components/atoms
 * @category Remote
 */
export { default as ThemeButton } from './ThemeButton';
export { default as LanguageButton } from './LanguageButton';


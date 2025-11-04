/**
 * Styles Barrel Export
 *
 * Exports all shared styles for theme management.
 * Imports global theme CSS variables and classes.
 *
 * ```mermaid
 * graph LR
 *   A[styles module] --> B[theme.css]
 *   B --> C[CSS Variables]
 *   B --> D[Theme Classes]
 *   C --> E[Host App]
 *   C --> F[Remote App]
 * ```
 *
 * @module styles
 * @category Shared State
 */
import './theme.css';


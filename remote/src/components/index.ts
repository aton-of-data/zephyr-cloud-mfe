/**
 * Remote Components
 *
 * Component library exposed via Module Federation from the Remote application.
 * Organized using Atomic Design pattern.
 *
 * ```mermaid
 * graph TD
 *   A[Remote Components] --> B[Atoms]
 *   A --> C[Molecules]
 *   A --> D[Organisms]
 *   A --> E[Templates]
 *   B --> F[ThemeButton]
 *   B --> G[LanguageButton]
 * ```
 *
 * @module remote/src/components
 * @category Remote
 */
export * from './atoms';
export * from './molecules';
export * from './organisms';
export * from './templates';

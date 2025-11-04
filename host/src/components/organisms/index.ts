/**
 * Host Organisms
 *
 * Complex components for the Host application.
 * Organisms are composed of multiple molecules and atoms working together.
 *
 * ```mermaid
 * graph LR
 *   A[Host Organisms] --> B[Header]
 *   A --> C[Sidebar]
 *   B --> D[Menu Toggle]
 *   C --> E[Navigation]
 *   C --> F[Theme/Language Controls]
 * ```
 *
 * @module host/src/components/organisms
 * @category Host
 */
export { default as Header } from './Header';
export { default as Sidebar } from './Sidebar';


/**
 * Host Templates
 *
 * Layout templates for the Host application.
 * Templates define the page-level structure and composition.
 *
 * ```mermaid
 * graph LR
 *   A[Host Templates] --> B[DashboardLayout]
 *   B --> C[Header + Sidebar]
 *   B --> D[Remote Content Area]
 * ```
 *
 * @module host/src/components/templates
 * @category Host
 */
export { default as DashboardLayout } from './DashboardLayout';


/**
 * Host Components
 *
 * Main component library for the Host application.
 * Barrel export for all host components organized by Atomic Design pattern.
 *
 * ```mermaid
 * graph LR
 *   A[Host Components] --> B[Organisms]
 *   A --> C[Templates]
 *   B --> D[Header]
 *   B --> E[Sidebar]
 *   C --> F[DashboardLayout]
 * ```
 *
 * @module host/src/components
 * @category Host
 */
export * from "./organisms";
export * from "./templates";

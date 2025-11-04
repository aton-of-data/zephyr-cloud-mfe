import './stores';
import './styles/theme.css';

/**
 * Shared State MFE Entry Point
 *
 * Initializes stores and styles when this module is imported.
 * This MFE is only for state management, no UI components.
 *
 * ```mermaid
 * graph LR
 *   A[main.tsx] --> B[Initialize Stores]
 *   A --> C[Load Styles]
 *   B --> D[Theme Store Ready]
 *   B --> E[Language Store Ready]
 * ```
 */


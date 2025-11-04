import { DashboardLayout } from "./components";

/**
 * Host App - Shell Application
 *
 * Main entry point that orchestrates the micro frontend architecture.
 * This is the shell application that consumes remote modules via Module Federation.
 *
 * ```mermaid
 * graph LR
 *   A[Host App] --> B[DashboardLayout]
 *   B --> C[Header + Sidebar]
 *   B --> D[Remote MFE via Module Federation]
 * ```
 *
 * @component
 * @category Host
 * @example
 * ```tsx
 * <App />
 * ```
 */
function App() {
  return <DashboardLayout />;
}

export default App;

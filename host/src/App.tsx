/**
 * Host App - Shell Application
 * 
 * Main entry point that orchestrates the micro frontend architecture.
 * This is the shell application that consumes remote modules via Module Federation.
 * 
 * @component
 * @example
 * ```tsx
 * <App />
 * ```
 */
import { DashboardLayout } from "./components";

function App() {
  return <DashboardLayout />;
}

export default App;

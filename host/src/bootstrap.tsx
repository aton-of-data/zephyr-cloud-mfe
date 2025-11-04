import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "shared-state/styles";
import "shared-state/stores";

/**
 * Application Bootstrap
 *
 * Initializes the React application by mounting it to the DOM.
 * Imports shared state styles and stores before rendering the app.
 *
 * ```mermaid
 * graph TD
 *   A[bootstrap.tsx] --> B[Import Shared State]
 *   B --> C[Load Styles]
 *   B --> D[Initialize Stores]
 *   D --> E[Create React Root]
 *   E --> F[Render App with StrictMode]
 * ```
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

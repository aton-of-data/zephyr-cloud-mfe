/**
 * Application Bootstrap
 * 
 * Initializes the React application by mounting it to the DOM.
 * Imports shared state styles and stores before rendering the app.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "shared-state/styles";
import "shared-state/stores";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

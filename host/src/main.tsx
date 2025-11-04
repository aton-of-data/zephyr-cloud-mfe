import { init } from "@module-federation/runtime";

/**
 * Module Federation Runtime Initialization
 *
 * Initializes the Module Federation runtime for the host application.
 * This must be executed before importing the bootstrap module.
 *
 * ```mermaid
 * graph LR
 *   A[main.tsx] --> B[Init Module Federation]
 *   B --> C[Load bootstrap.tsx]
 *   C --> D[React App Renders]
 * ```
 */
init({
  name: "vite-host",
  remotes: [],
});

import("./bootstrap");

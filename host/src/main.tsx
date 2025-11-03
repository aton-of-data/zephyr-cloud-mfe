/**
 * Module Federation Runtime Initialization
 * 
 * Initializes the Module Federation runtime for the host application.
 * This must be executed before importing the bootstrap module.
 */
import { init } from "@module-federation/runtime";

init({
  name: "vite-host",
  remotes: [],
});

import("./bootstrap");

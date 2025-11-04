import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Theme options available in the application
 *
 * @typedef {("light" | "dark" | "system")} Theme
 */
export type Theme = "light" | "dark" | "system";

/**
 * Resolved theme after system detection
 *
 * @typedef {("light" | "dark")} ResolvedTheme
 */
export type ResolvedTheme = "light" | "dark";

/**
 * Theme Store Interface
 *
 * Manages theme state and provides actions to update it.
 *
 * @interface ThemeStore
 */
export interface ThemeStore {
  /** Current theme preference */
  theme: Theme;
  /** Actually applied theme (resolved from system if needed) */
  resolvedTheme: ResolvedTheme;

  /** 
   * Set a specific theme 
   * @param {Theme} theme - The theme to set
   */
  setTheme: (theme: Theme) => void;
  /** Toggle between light and dark themes */
  toggleTheme: () => void;
}

/**
 * Gets the system theme preference
 *
 * @returns {ResolvedTheme} The system theme preference
 */
const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/**
 * Resolves a theme to its actual value
 *
 * @param {Theme} theme - The theme to resolve
 * @returns {ResolvedTheme} The resolved theme
 */
const resolveTheme = (theme: Theme): ResolvedTheme => {
  return theme === "system" ? getSystemTheme() : theme;
};

/**
 * Applies the theme to the document root
 *
 * @param {ResolvedTheme} theme - The theme to apply
 */
const applyTheme = (theme: ResolvedTheme): void => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.setAttribute("data-theme", theme);
};

/**
 * Theme Store
 *
 * Flux-inspired state management for theme preferences using Zustand.
 * Implements unidirectional flow: Action → Store → View with selectors for immutable reads.
 *
 * ```mermaid
 * graph LR
 *   A[Action: setTheme] --> B[Store updates]
 *   C[Action: toggleTheme] --> B
 *   B --> D[Resolve theme]
 *   D --> E[Apply to DOM]
 *   B --> F[Persist to localStorage]
 *   B --> G[Selectors read state]
 *   G --> H[Components re-render]
 *   I[System Preference] --> D
 * ```
 *
 * @module theme/store
 * @category Shared State
 */
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => {
      /**
       * Gets the initial state from localStorage or defaults
       *
       * @returns {Partial<ThemeStore>} The initial theme state
       */
      const getInitialState = (): Partial<ThemeStore> => {
        if (typeof window === "undefined") {
          return { theme: "system", resolvedTheme: "light" };
        }

        let savedTheme: Theme = "system";
        try {
          const stored = localStorage.getItem("theme-storage");
          if (stored) {
            savedTheme = JSON.parse(stored)?.state?.theme || "system";
          }
        } catch {
          savedTheme = "system";
        }

        const resolved = resolveTheme(savedTheme);
        applyTheme(resolved);
        return { theme: savedTheme, resolvedTheme: resolved };
      };

      const initialState = getInitialState();

      if (typeof window !== "undefined") {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
          if (get().theme === "system") {
            const resolved = getSystemTheme();
            applyTheme(resolved);
            set({ resolvedTheme: resolved });
          }
        };

        if (mediaQuery.addEventListener) {
          mediaQuery.addEventListener("change", handleChange);
        } else {
          mediaQuery.addListener(handleChange);
        }
      }

      return {
        theme: (initialState.theme || "system") as Theme,
        resolvedTheme: (initialState.resolvedTheme || "light") as ResolvedTheme,

        setTheme: (theme: Theme) => {
          const resolved = resolveTheme(theme);
          applyTheme(resolved);
          set({ theme, resolvedTheme: resolved });
        },

        toggleTheme: () => {
          const current = get().resolvedTheme;
          const nextTheme: Theme = current === "light" ? "dark" : "light";
          const resolved = resolveTheme(nextTheme);
          applyTheme(resolved);
          set({ theme: nextTheme, resolvedTheme: resolved });
        },
      };
    },
    {
      name: "theme-storage",
      partialize: (state) => ({ theme: state.theme }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const resolved = resolveTheme(state.theme);
          applyTheme(resolved);
          state.resolvedTheme = resolved;
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  const state = useThemeStore.getState();
  if (state.theme) {
    applyTheme(resolveTheme(state.theme));
  } else {
    const resolved = resolveTheme("system");
    applyTheme(resolved);
    useThemeStore.setState({ theme: "system", resolvedTheme: resolved });
  }
}

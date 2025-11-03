/**
 * Language Store
 * 
 * Flux-inspired state management for language preferences using Zustand.
 * Implements unidirectional flow: Action → Store → View with selectors for immutable reads.
 * 
 * @module language/store
 * @category Shared State
 */
import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Supported languages in the application
 * 
 * @typedef {("pt" | "en")} Language
 */
export type Language = "pt" | "en";

/**
 * Language Store Interface
 * 
 * Manages language state and provides actions to update it.
 * 
 * @interface LanguageStore
 */
export interface LanguageStore {
  /** Current language */
  language: Language;

  /** 
   * Set a specific language 
   * @param {Language} language - The language to set
   */
  setLanguage: (language: Language) => void;
  /** Toggle between Portuguese and English */
  toggleLanguage: () => void;
}

/**
 * Language Store Hook
 * 
 * Zustand store for managing language state with persistence.
 */
export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => {
      /**
       * Gets the initial state from localStorage or defaults
       * 
       * @returns {Partial<LanguageStore>} The initial language state
       */
      const getInitialState = (): Partial<LanguageStore> => {
        if (typeof window === "undefined") {
          return { language: "pt" };
        }

        let savedLanguage: Language = "pt";
        try {
          const stored = localStorage.getItem("language-storage");
          if (stored) {
            savedLanguage = JSON.parse(stored)?.state?.language || "pt";
          }
        } catch {
          savedLanguage = "pt";
        }

        return { language: savedLanguage };
      };

      const initialState = getInitialState();

      return {
        language: (initialState.language || "pt") as Language,

        setLanguage: (language: Language) => {
          set({ language });
        },

        toggleLanguage: () => {
          const current = get().language;
          const nextLanguage: Language = current === "pt" ? "en" : "pt";
          set({ language: nextLanguage });
        },
      };
    },
    {
      name: "language-storage",
      partialize: (state) => ({ language: state.language }),
    }
  )
);

if (typeof window !== "undefined") {
  const state = useLanguageStore.getState();
  if (!state.language) {
    useLanguageStore.setState({ language: "pt" });
  }
}

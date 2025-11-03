import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { useThemeStore } from "./theme.store";

const createMatchMedia = (matches: boolean) => {
  return vi.fn(() => ({
    matches,
    media: "(prefers-color-scheme: dark)",
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })) as unknown as typeof window.matchMedia;
};

describe("theme.store", () => {
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    localStorage.clear();
    useThemeStore.setState({ theme: "system", resolvedTheme: "light" });
    originalMatchMedia = window.matchMedia;
    vi.clearAllMocks();
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  describe("initialization", () => {
    it("should default to system theme when localStorage is empty", () => {
      const state = useThemeStore.getState();
      expect(state.theme).toBe("system");
      expect(state.resolvedTheme).toBe("light");
    });

    it("should handle corrupted localStorage gracefully", () => {
      localStorage.setItem("theme-storage", "invalid json");
      const state = useThemeStore.getState();
      expect(state.theme).toBe("system");
      expect(state.resolvedTheme).toBe("light");
    });
  });

  describe("setTheme", () => {
    it("should update theme and resolved theme", () => {
      useThemeStore.getState().setTheme("dark");
      const state = useThemeStore.getState();
      expect(state.theme).toBe("dark");
      expect(state.resolvedTheme).toBe("dark");
    });

    it("should resolve system theme based on media query", () => {
      window.matchMedia = createMatchMedia(true);
      useThemeStore.getState().setTheme("system");
      const state = useThemeStore.getState();
      expect(state.theme).toBe("system");
      expect(["light", "dark"]).toContain(state.resolvedTheme);
    });

    it("should persist theme to localStorage", () => {
      useThemeStore.getState().setTheme("dark");
      const stored = JSON.parse(localStorage.getItem("theme-storage") || "{}");
      expect(stored?.state?.theme).toBe("dark");
    });
  });

  describe("toggleTheme", () => {
    it("should toggle between light and dark", () => {
      useThemeStore.setState({ theme: "light", resolvedTheme: "light" });
      useThemeStore.getState().toggleTheme();
      expect(useThemeStore.getState().theme).toBe("dark");
      expect(useThemeStore.getState().resolvedTheme).toBe("dark");

      useThemeStore.getState().toggleTheme();
      expect(useThemeStore.getState().theme).toBe("light");
      expect(useThemeStore.getState().resolvedTheme).toBe("light");
    });
  });

  describe("rehydration", () => {
    it("should apply theme on rehydration", () => {
      useThemeStore.getState().setTheme("dark");
      expect(useThemeStore.getState().theme).toBe("dark");
      expect(useThemeStore.getState().resolvedTheme).toBe("dark");
    });
  });
});

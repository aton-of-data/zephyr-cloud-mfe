import { describe, it, expect, vi } from "vitest";
import {
  selectTheme,
  selectResolvedTheme,
  selectIsDark,
  selectIsLight,
  selectToggleTheme,
  selectSetTheme,
} from "./theme.selectors";
import type { ThemeStore } from "./theme.store";

describe("theme.selectors", () => {
  const createMockStore = (
    theme: "light" | "dark" | "system",
    resolvedTheme: "light" | "dark" = theme === "system" ? "light" : theme
  ): ThemeStore => ({
    theme,
    resolvedTheme,
    setTheme: vi.fn(),
    toggleTheme: vi.fn(),
  });

  describe("selectTheme and selectResolvedTheme", () => {
    it("should return theme and resolved theme", () => {
      expect(selectTheme(createMockStore("light"))).toBe("light");
      expect(selectResolvedTheme(createMockStore("system", "dark"))).toBe(
        "dark"
      );
    });
  });

  describe("selectIsDark and selectIsLight", () => {
    it("should correctly identify resolved theme", () => {
      expect(selectIsDark(createMockStore("dark", "dark"))).toBe(true);
      expect(selectIsDark(createMockStore("system", "light"))).toBe(false);
      expect(selectIsLight(createMockStore("light", "light"))).toBe(true);
      expect(selectIsLight(createMockStore("system", "dark"))).toBe(false);
    });
  });

  describe("selectToggleTheme and selectSetTheme", () => {
    it("should return action functions", () => {
      const mockToggle = vi.fn();
      const mockSet = vi.fn();
      const state: ThemeStore = {
        theme: "light",
        resolvedTheme: "light",
        setTheme: mockSet,
        toggleTheme: mockToggle,
      };

      const toggleFn = selectToggleTheme(state);
      const setFn = selectSetTheme(state);

      toggleFn();
      setFn("dark");

      expect(mockToggle).toHaveBeenCalledOnce();
      expect(mockSet).toHaveBeenCalledWith("dark");
    });
  });
});

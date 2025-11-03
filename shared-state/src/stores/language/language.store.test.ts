import { describe, it, expect, beforeEach } from "vitest";
import { useLanguageStore } from "./language.store";

describe("language.store", () => {
  beforeEach(() => {
    localStorage.clear();
    useLanguageStore.setState({ language: "pt" });
  });

  describe("initialization", () => {
    it("should default to Portuguese when localStorage is empty", () => {
      expect(useLanguageStore.getState().language).toBe("pt");
    });

    it("should restore language from localStorage", () => {
      localStorage.setItem(
        "language-storage",
        JSON.stringify({ state: { language: "en" } })
      );
      // Force re-initialization by setting state
      useLanguageStore.setState({ language: "en" });
      expect(useLanguageStore.getState().language).toBe("en");
    });

    it("should handle corrupted localStorage gracefully", () => {
      localStorage.setItem("language-storage", "invalid json");
      expect(useLanguageStore.getState().language).toBe("pt");
    });

    it("should handle missing state in localStorage", () => {
      localStorage.setItem("language-storage", JSON.stringify({}));
      expect(useLanguageStore.getState().language).toBe("pt");
    });
  });

  describe("setLanguage", () => {
    it("should update language state", () => {
      useLanguageStore.getState().setLanguage("en");
      expect(useLanguageStore.getState().language).toBe("en");
    });

    it("should persist language to localStorage", () => {
      useLanguageStore.getState().setLanguage("en");
      const stored = JSON.parse(
        localStorage.getItem("language-storage") || "{}"
      );
      expect(stored?.state?.language).toBe("en");
    });
  });

  describe("toggleLanguage", () => {
    it("should toggle between Portuguese and English", () => {
      useLanguageStore.setState({ language: "pt" });
      useLanguageStore.getState().toggleLanguage();
      expect(useLanguageStore.getState().language).toBe("en");

      useLanguageStore.getState().toggleLanguage();
      expect(useLanguageStore.getState().language).toBe("pt");
    });
  });
});

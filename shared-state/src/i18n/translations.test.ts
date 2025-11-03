import { describe, it, expect } from 'vitest';
import { translations } from './translations';

describe('translations', () => {
  it('should have same keys for both languages', () => {
    const ptKeys = Object.keys(translations.pt).sort();
    const enKeys = Object.keys(translations.en).sort();
    expect(ptKeys).toEqual(enKeys);
  });

  it('should have valid translations for sample keys', () => {
    expect(translations.pt.dashboard).toBe('Painel');
    expect(translations.en.dashboard).toBe('Dashboard');
    expect(translations.pt.settings).toBe('Configurações');
    expect(translations.en.settings).toBe('Settings');
  });

  it('should have all keys as non-empty strings', () => {
    const keys = Object.keys(translations.pt) as Array<keyof typeof translations.pt>;
    keys.forEach((key) => {
      expect(typeof translations.pt[key]).toBe('string');
      expect(translations.pt[key].length).toBeGreaterThan(0);
      expect(typeof translations.en[key]).toBe('string');
      expect(translations.en[key].length).toBeGreaterThan(0);
    });
  });
});


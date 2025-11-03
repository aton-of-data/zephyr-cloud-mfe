import { describe, it, expect, vi } from 'vitest';
import {
  selectLanguage,
  selectIsPt,
  selectIsEn,
  selectToggleLanguage,
  selectSetLanguage,
  selectT,
} from './language.selectors';
import type { LanguageStore } from './language.store';

describe('language.selectors', () => {
  const createMockStore = (language: 'pt' | 'en'): LanguageStore => ({
    language,
    setLanguage: vi.fn(),
    toggleLanguage: vi.fn(),
  });

  describe('selectLanguage', () => {
    it('should return current language', () => {
      expect(selectLanguage(createMockStore('pt'))).toBe('pt');
      expect(selectLanguage(createMockStore('en'))).toBe('en');
    });
  });

  describe('selectIsPt and selectIsEn', () => {
    it('should correctly identify language', () => {
      expect(selectIsPt(createMockStore('pt'))).toBe(true);
      expect(selectIsPt(createMockStore('en'))).toBe(false);
      expect(selectIsEn(createMockStore('en'))).toBe(true);
      expect(selectIsEn(createMockStore('pt'))).toBe(false);
    });
  });

  describe('selectToggleLanguage and selectSetLanguage', () => {
    it('should return action functions', () => {
      const mockToggle = vi.fn();
      const mockSet = vi.fn();
      const state: LanguageStore = {
        language: 'pt',
        setLanguage: mockSet,
        toggleLanguage: mockToggle,
      };

      const toggleFn = selectToggleLanguage(state);
      const setFn = selectSetLanguage(state);

      toggleFn();
      setFn('en');

      expect(mockToggle).toHaveBeenCalledOnce();
      expect(mockSet).toHaveBeenCalledWith('en');
    });
  });

  describe('selectT', () => {
    it('should return translation function for current language', () => {
      const tPt = selectT(createMockStore('pt'));
      const tEn = selectT(createMockStore('en'));

      expect(tPt('dashboard')).toBe('Painel');
      expect(tEn('dashboard')).toBe('Dashboard');
    });

    it('should return key when translation is missing', () => {
      const t = selectT(createMockStore('pt'));
      expect(t('nonexistent-key')).toBe('nonexistent-key');
    });

    it('should cache translation functions per language', () => {
      const statePt = createMockStore('pt');
      const stateEn = createMockStore('en');

      const t1 = selectT(statePt);
      const t2 = selectT(statePt);
      const t3 = selectT(stateEn);

      expect(t1).toBe(t2);
      expect(t1).not.toBe(t3);
    });
  });
});


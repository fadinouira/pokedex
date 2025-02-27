import { describe, expect, it } from 'vitest';
import { generateStyleToken } from './style.utils';

describe('UTILS: generateStyleToken', () => {
  it('should generate a CSS variable string for a given color token', () => {
    expect(generateStyleToken('color', 'brand-primary')).toBe('var(--color-brand-primary)');
  });

  it('should return undefined if no token is provided', () => {
    expect(generateStyleToken('color')).toBeUndefined();
  });
});

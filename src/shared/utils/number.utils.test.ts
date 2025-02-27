import { describe, expect, it } from 'vitest';
import { formatWithLeadingZeros, generateRandomNumber } from './number.utils';

describe('UTILS: generateRandomNumber', () => {
  it('should generate a number within the specified range', () => {
    const min = 10;
    const max = 20;
    const randomNum = generateRandomNumber(min, max);
    expect(randomNum).toBeGreaterThanOrEqual(min);
    expect(randomNum).toBeLessThanOrEqual(max);
  });

  it('should return a number within the default range when no arguments are provided', () => {
    const randomNum = generateRandomNumber();
    expect(randomNum).toBeGreaterThanOrEqual(0);
    expect(randomNum).toBeLessThanOrEqual(1000);
  });

  it('should return the same number if min and max are equal', () => {
    const num = generateRandomNumber(5, 5);
    expect(num).toBe(5);
  });
});

describe('UTILS: formatWithLeadingZeros', () => {
  it('should format a number to at least three digits by default', () => {
    expect(formatWithLeadingZeros(1)).toBe('001');
    expect(formatWithLeadingZeros(23)).toBe('023');
    expect(formatWithLeadingZeros(123)).toBe('123');
  });

  it('should format a number to the specified length', () => {
    expect(formatWithLeadingZeros(1, 5)).toBe('00001');
    expect(formatWithLeadingZeros(23, 4)).toBe('0023');
    expect(formatWithLeadingZeros(123, 6)).toBe('000123');
  });

  it('should return the original number as a string if its length matches or exceeds the specified length', () => {
    expect(formatWithLeadingZeros(12345, 5)).toBe('12345');
    expect(formatWithLeadingZeros(123456, 3)).toBe('123456');
  });
});

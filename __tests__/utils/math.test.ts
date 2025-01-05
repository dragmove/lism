import { clamp, isNegative, isPositive } from '@utils/math';

describe('isPositive', () => {
  it('should return true for positive numbers', () => {
    expect(isPositive(5)).toBe(true);
    expect(isPositive(1)).toBe(true);
    expect(isPositive(100)).toBe(true);
  });

  it('should return false for zero and negative numbers', () => {
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(-100)).toBe(false);
  });
});

describe('isNegative', () => {
  it('should return true for negative numbers', () => {
    expect(isNegative(-1)).toBe(true);
    expect(isNegative(-100)).toBe(true);
  });

  it('should return false for positive numbers', () => {
    expect(isNegative(1)).toBe(false);
    expect(isNegative(100)).toBe(false);
  });

  it('should return false for zero', () => {
    expect(isNegative(0)).toBe(false);
  });
});

describe('clamp', () => {
  it('should clamp value above max', () => {
    expect(clamp(9, 0, 5)).toBe(5);
  });

  it('should clamp value below min', () => {
    expect(clamp(-2, 0, 5)).toBe(0);
  });

  it('should return value within range', () => {
    expect(clamp(4, 0, 5)).toBe(4);
  });

  it('should clamp value equal to min', () => {
    expect(clamp(-1, -5, 0)).toBe(-1);
  });
});

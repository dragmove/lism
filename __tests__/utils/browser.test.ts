import { isLandscape, isPortrait } from '@utils/browser';

describe('isPortrait', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'orientation', { value: 0, writable: true });
  });

  afterEach(() => {
    Object.defineProperty(window, 'matchMedia', { value: undefined });
  });

  it('should return true when matchMedia returns true', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({ matches: true }));
    expect(isPortrait()).toBe(true);
  });

  it('should return false when matchMedia returns false', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({ matches: false }));
    expect(isPortrait()).toBe(false);
  });

  it('should return true when orientation is 0', () => {
    Object.defineProperty(window, 'orientation', { value: 0 });
    expect(isPortrait()).toBe(true);
  });

  it('should return true when orientation is 180', () => {
    Object.defineProperty(window, 'orientation', { value: 180 });
    expect(isPortrait()).toBe(true);
  });

  it('should return false when orientation is not 0 or 180', () => {
    Object.defineProperty(window, 'orientation', { value: 90 });
    expect(isPortrait()).toBe(false);
  });
});

describe('isLandscape', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'orientation', { value: 0, writable: true });
  });

  afterEach(() => {
    Object.defineProperty(window, 'matchMedia', { value: undefined });
  });

  it('should return true when matchMedia returns true', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({ matches: true }));
    expect(isLandscape()).toBe(true);
  });

  it('should return false when matchMedia returns false', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({ matches: false }));
    expect(isLandscape()).toBe(false);
  });

  it('should return true when orientation is -90', () => {
    Object.defineProperty(window, 'orientation', { value: -90 });
    expect(isLandscape()).toBe(true);
  });

  it('should return true when orientation is 90', () => {
    Object.defineProperty(window, 'orientation', { value: 90 });
    expect(isLandscape()).toBe(true);
  });

  it('should return false when orientation is not -90 or 90', () => {
    Object.defineProperty(window, 'orientation', { value: 0 });
    expect(isLandscape()).toBe(false);
  });
});

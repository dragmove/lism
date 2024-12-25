import { isElement } from '@utils/dom';

describe('isElement', () => {
  it('should return true for a valid HTML element', () => {
    const div = document.createElement('div');
    expect(isElement(div)).toBe(true);
  });

  it('should return false for a text node', () => {
    const textNode = document.createTextNode('Hello');
    expect(isElement(textNode as any)).toBe(false);
  });

  it('should return false for a non-DOM object', () => {
    const obj = { nodeType: 1 };
    expect(isElement(obj as any)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isElement(null as any)).toBe(false);
  });
});

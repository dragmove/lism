import { el, els, isElement } from '@lism-internal/utils/dom';

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

describe('el', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div id="app">
        <header>Header</header>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
    `;
  });

  it('should return the first matching element for a given selector', () => {
    const header = el('header');
    expect(header).not.toBeNull();
    expect(header?.textContent).toBe('Header');
  });

  it('should return null if no elements match the selector', () => {
    const nonExistent = el('.non-existent');
    expect(nonExistent).toBeNull();
  });
});

describe('els', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div id="app">
        <header>Header</header>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
    `;
  });

  it('should return a NodeList of all matching elements for a given selector', () => {
    const buttons = els('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0].textContent).toBe('Button 1');
    expect(buttons[1].textContent).toBe('Button 2');
  });

  it('should return an empty NodeList if no elements match the selector', () => {
    const nonExistent = els('.non-existent');
    expect(nonExistent).toHaveLength(0);
  });
});

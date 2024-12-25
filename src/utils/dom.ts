import { isDefined, toArray } from './common';

/**
 * Checks if the given element is a valid HTML element.
 *
 * @param ele - The element to check.
 * @returns Returns `true` if the element is a valid HTML element, otherwise `false`.
 *
 * @example
 * ```typescript
 * const div = document.createElement('div');
 * console.log(isElement(div)); // true
 *
 * const textNode = document.createTextNode('Hello');
 * console.log(isElement(textNode)); // false
 * ```
 */
export const isElement = (ele: HTMLElement): boolean => {
  return isDefined(ele) && typeof ele === 'object' && ele.nodeType === 1 && ele instanceof Node;
};

export const el = (selectors: string): HTMLElement | null => document.querySelector(selectors);

export function els(selectors: string): NodeListOf<HTMLElement> {
  return document.querySelectorAll(selectors);
}

export function getClassList(ele: HTMLElement): string[] {
  return ele.classList ? toArray<string>(ele.classList) : ele.className.split(' ');
}

export function hasClass(ele: HTMLElement, className: string): boolean {
  return ele.classList ? ele.classList.contains(className) : ele.className.split(' ').indexOf(className) >= 0;
}

export function addClass(ele: HTMLElement, className: string): void {
  // Refer: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  if (ele.classList) {
    ele.classList.add(className);
  } else {
    if (!hasClass(ele, className)) ele.className = `${ele.className} ${className}`.replace(/\s{2,}/g, ' ');
  }
}

export function removeClass(ele: HTMLElement, className: string): void {
  // Refer: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  if (ele.classList) {
    ele.classList.remove(className);
  } else {
    if (!hasClass(ele, className)) {
      const classes = ele.className.split(' '),
        classIndex = classes.indexOf(className);
      if (classIndex >= 0) classes.splice(classIndex, 1);

      ele.className = classes.join(' ').replace(/\s{2,}/g, ' ');
    }
  }
}

export function getRequestAnimationFrame(): Function {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame
  );
}

export function getCancelAnimationFrame(): (requestId: number) => void | any {
  return (
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.oCancelAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    window.msCancelAnimationFrame
  );
}

export function getPrefixedTransform(): string {
  if (!isDefined(document)) return '';

  const headStyle: CSSStyleDeclaration = (document.head || document.getElementsByTagName('head')[0]).style;
  const transforms: string[] = ['transform', 'webkitTransform', 'msTransform', 'mozTransform', 'oTransform'];
  for (let i = 0, max = transforms.length; i < max; i++) {
    if (transforms[i] in headStyle) return transforms[i];
  }

  return '';
}

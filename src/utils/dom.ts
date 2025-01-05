import { isDefined } from './common';

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

/**
 * Selects a single HTML element based on the provided CSS selector.
 *
 * @param selectors - A string containing one or more CSS selectors to match.
 * @returns The first HTML element that matches the specified selector, or `null` if no matches are found.
 *
 * @example
 * ```typescript
 * const header = el('header');
 * if (header) console.log('Header element found:', header);
 * ```
 */
export const el = (selectors: string): HTMLElement | null => document.querySelector(selectors);

/**
 * Selects all HTML elements that match the provided CSS selector.
 *
 * @param selectors - A string containing one or more CSS selectors to match.
 * @returns A NodeList of all HTML elements that match the specified selector.
 *
 * @example
 * ```typescript
 * const buttons = els('button');
 * buttons.forEach(button => {
 *   console.log('Button element:', button);
 * });
 * ```
 */
export function els(selectors: string): NodeListOf<HTMLElement> {
  return document.querySelectorAll(selectors);
}

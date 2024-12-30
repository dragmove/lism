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
export declare const isElement: (ele: HTMLElement) => boolean;
export declare const el: (selectors: string) => HTMLElement | null;
export declare function els(selectors: string): NodeListOf<HTMLElement>;
export declare function getClassList(ele: HTMLElement): string[];
export declare function hasClass(ele: HTMLElement, className: string): boolean;
export declare function addClass(ele: HTMLElement, className: string): void;
export declare function removeClass(ele: HTMLElement, className: string): void;
export declare function getRequestAnimationFrame(): Function;
export declare function getCancelAnimationFrame(): (requestId: number) => void | any;
export declare function getPrefixedTransform(): string;

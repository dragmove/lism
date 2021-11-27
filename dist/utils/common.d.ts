/**
 * Check if a value is defined
 *
 * @function isDefined
 * @param {?} val
 * @returns {boolean}
 * @example
 * console.log(isDefined(undefined)); // false
 * console.log(isDefined(null)); // false
 * console.log(isDefined(0)); // true
 */
export declare function isDefined(val: unknown): boolean;
/**
 * Make an object immutable
 *
 * @function deepFreeze
 * @param {*} obj
 * @returns {*}
 * @example
 * console.log(deepFreeze({ a: 1, b: 'foo', c: { ca: 1, cb: 'foo' }));
 */
export declare function deepFreeze<T>(obj: T): T;

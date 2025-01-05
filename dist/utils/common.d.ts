export declare function curry2<A, B, R>(fn: (a: A, b: B) => R): (a: A) => (b: B) => R;
export declare function curryr2<A, B, R>(fn: (a: A, b: B) => R): (b: B) => (a: A) => R;
/**
 * Checks if a value is defined (not null or undefined).
 *
 * @template T - The type of the value to check.
 * @param {T | null | undefined} value - The value to check.
 * @returns {value is T} - Returns `true` if the value is defined, otherwise `false`.
 *
 * @example
 * ```typescript
 * isDefined(undefined); // false
 * isDefined(null); // false
 * isDefined(0); // true
 * isDefined('Hello'); // true
 * ```
 */
export declare function isDefined<T>(value: T | null | undefined): value is T;
/**
 * Checks if a value is an instance of Error or a specific error type.
 * @template T - A specific error type that extends the `Error` class.
 *
 * @param {unknown} value - The value to check. It can be of any type.
 * @param {new (...args: any[]) => T} [errorType] - (Optional) A specific error type to validate against.
 * @returns {value is T} Returns `true` if the value is an instance of Error or the specified error type, otherwise `false`.
 *
 * @example
 * ```typescript
 * const error = new Error('An error occurred');
 * console.log(isError(error)); // true
 *
 * const typeError = new TypeError('A type error occurred');
 * console.log(isError(typeError, TypeError)); // true
 * ```
 */
export declare function isError<T extends Error>(value: unknown, errorType?: new (...args: any[]) => T): value is T;
/**
 * Performs a deep freeze on an object, making all its properties immutable.
 * This function recursively calls itself on all nested objects,
 * ultimately ensuring that all properties are read-only.
 *
 * @param {Record<string, unknown>} obj - The object to be frozen
 * @returns {T} The frozen object
 *
 * @example
 * ```typescript
 * const obj = { a: 1, b: { c: 2 } };
 * const frozenObj = deepFreeze(obj);
 * frozenObj.b.c = 3; // TypeError: Cannot assign to read only property 'c'
 * ```
 */
export declare function deepFreeze<T>(obj: T): T;
export declare const gt: (a: number) => (b: number) => boolean;
export declare const lt: (a: number) => (b: number) => boolean;

// TODO: add tsdoc comment
export function curry2<A, B, R>(fn: (a: A, b: B) => R): (a: A) => (b: B) => R {
  return (a: A) => (b: B) => fn.apply(null, [a, b]);
}

// TODO: add tsdoc comment
export function curryr2<A, B, R>(fn: (a: A, b: B) => R): (b: B) => (a: A) => R {
  return (b: B) => (a: A) => fn.apply(null, [a, b]);
}

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
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Checks if a value is a number and not NaN.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is number} - Returns `true` if the value is a number and not NaN, otherwise `false`.
 *
 * @example
 * ```typescript
 * isNumber(123); // true
 * isNumber('123'); // false
 * isNumber(NaN); // false
 * ```
 */
export function isNumber(value: unknown): value is number {
  if (!isDefined(value)) return false;
  return typeof value === 'number' && !isNaN(value);
}

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
export function isError<T extends Error>(value: unknown, errorType?: new (...args: any[]) => T): value is T {
  if (typeof value !== 'object' || value === null) return false;

  if (errorType) {
    if (typeof errorType !== 'function') return false;
    return value instanceof errorType;
  }

  // EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError extends Error
  return value instanceof Error;
}

/**
 * Retrieves the value associated with a given key from an object.
 *
 * @param {T | null | undefined} obj - The object from which to retrieve the value.
 * @param {string} key - The key whose associated value is to be retrieved.
 * @returns {T[keyof T] | undefined} The value associated with the key, or `undefined` if the object is not defined or the key does not exist.
 *
 * @example
 * ```typescript
 * const user = { id: 99, name: 'foo' };
 * console.log(get(user, 'name')); // 'foo'
 * console.log(get(user, 'age')); // undefined
 * console.log(get({}, 'name')); // undefined
 * console.log(get(undefined, 'name')); // undefined
 * console.log(get(null, 'name')); // undefined
 * ```
 */
export function get<T extends Record<string, unknown>>(obj: T | null | undefined, key: string): T[keyof T] | undefined {
  if (!isDefined(obj)) return undefined;
  return obj[key as keyof T];
}

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
export function deepFreeze<T>(obj: T): T {
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
  const propNames: string[] = Object.getOwnPropertyNames(obj);
  for (const name of propNames) {
    const value: unknown = (obj as any)[name];
    if (value && typeof value === 'object') deepFreeze(value);
  }

  return Object.freeze(obj);
}

export const gt = curry2((lhs: number, rhs: number): boolean => lhs < rhs);

export const lt = curry2((lhs: number, rhs: number): boolean => lhs > rhs);

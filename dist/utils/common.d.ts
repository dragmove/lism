import { IArrayLike, IDictionary } from '@shared/interfaces/common';
export declare const hasOwnProp: (v: PropertyKey) => boolean;
export declare function curry2<A, B, R>(fn: (a: A, b: B) => R): (a: A) => (b: B) => R;
export declare function curryr2<A, B, R>(fn: (a: A, b: B) => R): (b: B) => (a: A) => R;
/**
 * Checks if a value is defined (not null or undefined).
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is defined, otherwise `false`.
 *
 * @example
 * ```typescript
 * isDefined(undefined); // false
 * isDefined(null); // false
 * isDefined(0); // true
 * isDefined('Hello'); // true
 * ```
 */
export declare function isDefined(value: unknown): boolean;
export declare function isObject(obj: unknown): boolean;
export declare function isInteger(val: number): boolean;
export declare function isString(val: unknown): val is string;
export declare function isError(val: any, errorType?: unknown): boolean;
export declare const eq: (a: any) => (b: any) => boolean;
export declare const gt: (a: number) => (b: number) => boolean;
export declare const lt: (a: number) => (b: number) => boolean;
export declare function toArray<T>(iterable: IArrayLike<T>): T[];
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
/**
 * Get a property value from object
 *
 * @function get
 * @param {IDictionary} obj
 * @param {string} key
 * @returns {* | undefined}
 * @example
 * get(find(users, (user) => user.id == 99), 'name')
 */
export declare function get<T>(obj: IDictionary<T>, key: string): any | undefined;
export declare function identity<T = any>(val: T): T;
export declare function negate(fn: (any: any) => boolean): (val: any) => boolean;
export declare function rest<T = any>(list: T[], beginIndex?: number): T[];
/**
 * TODO: Add doc
 * @function keys
 * @example
 * keys({ name: 'foo', age: 33}) // ['name', 'age']
 * keys([1, 2, 3, 4]) // ['1', '2', '3', '4']
 * keys(10) // []
 * keys(null) // []
 */
export declare function keys(obj: any): string[];
export declare function values(data: any): any[];
/**
 * TODO: Add doc
 * @function each
 * @example
 * each([0, 1, 2], (item) => console.log(item))
 * each({name: 'foo', age: 30, height: 170}, (item) => console.log(item))
 */
export declare function each(list: any[] | any, iterateeFn: (item: any) => void): any[];
/**
 * TODO: Add doc
 * @function map
 * @example
 * map(filter(users, (user) => user.age > 40), get('name'))
 */
export declare function map(list: any[], mapperFn: (item: any) => void): any[];
/**
 * TODO: Add doc
 * @function removeItem
 * @example
 * removeItem([1, 2, 3], 1) // [1, 3]
 * removeItem([1, 2, 3], 1, 2) // [1]
 */
export declare function removeItem(list: any[], index: number, count?: number): any[];
export declare function shift(list: any[]): {
    first: any;
    array: any[];
};
export declare function pop(list: any[]): {
    last: any;
    array: any[];
};
export declare function first(list: any[]): any;
export declare function dropFirst(list: any[]): any;
export declare function last(list: any[]): any;
export declare function dropLast(list: any[]): any;
export declare function add(list: any[], item: any): any[];
export declare function filter(list: any[], predicateFn: (item: any) => boolean): any[];
export declare function reject(list: any[], predicateFn: (item: any) => boolean): any[];
export declare function compact(list: any[]): any[];
/**
 * TODO: Add doc
 * @function reduce
 * @example
 * reduce([1, 2, 3], add, 0)
 */
export declare function reduce(list: any[], iterateeFn: (memo: any, item: any) => any, memo?: any): any;
/**
 * TODO: Add doc
 * @function pluck
 * @example
 * pluck(users, 'age') // [30, 20, 15, ...]
 */
export declare function pluck(data: any, key: string): any[];
/**
 * TODO: Add doc
 * @function find
 * @example
 * find(users, (user) => user.age > 30)
 */
export declare function find(list: any[], predicateFn: (item: any) => boolean): any | undefined;
/**
 * TODO: Add doc
 * @function findIndex
 * @example
 */
export declare function findIndex(list: any[], predicateFn: (item: any) => boolean): number;
/**
 * TODO: Add doc
 * @function some
 * @example
 */
export declare function some(list: any[], predicateFn: (item: any) => boolean): boolean;
/**
 * TODO: Add doc
 * @function every
 * @example
 */
export declare function every(list: any[], predicateFn: (item: any) => boolean): boolean;
/**
 * TODO: Add doc
 * @function pipe
 * @example
 * const piped = pipe((a: number) => a, (b: number) => b + 99);
 * piped(1) // 100
 */
export declare function pipe(...rest: ((any?: any) => void)[]): (seed: any) => any;
export declare function min(list: any[]): any;
export declare function max(list: any[]): any;
export declare function minBy(list: any[], iterateeFn: (item: any) => void): any;
export declare function maxBy(list: any[], iterateeFn: (item: any) => void): any;
export declare function has<T>(arr: T[], val: T): boolean;
export declare const getUrlCombinedParams: (url: string, parameters?: IDictionary<string | number>) => string;
export declare function toPrice(val: string): string;
export declare function toPrice(val: number): string;
export declare const removeWhitespace: (str?: string, removeEscapeSequence?: boolean) => string;
export declare const escapeHtml: (str: string) => string;
export declare const unescapeHtml: (str: string) => string;
export declare const getFacebookShareUrl: (encodedUrl: string) => string;
export declare const getTwitterShareUrl: (queryParams?: IDictionary<string | number>) => string;
export declare const getLineShareUrl: (url: string) => string;
export declare const getNaverShareUrl: (queryParams?: IDictionary<string>) => string;
export declare const hasKey: (obj?: IDictionary<string>, key?: string) => boolean;
export declare const setProp: (object: IDictionary, key: string, value: any) => any;
export declare const deleteProp: (object: IDictionary, key: string) => any;
export declare const exhaustiveCheck: (params: never, message?: string) => never;

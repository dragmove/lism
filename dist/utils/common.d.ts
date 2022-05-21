export declare function curryr2(fn: (a: any, b: any) => any): (b: any) => (a: any) => any;
/**
 * Check if a value is defined
 *
 * @function isDefined
 * @param {?} val
 * @returns {boolean}
 * @example
 * isDefined(undefined) // false
 * isDefined(null) // false
 * isDefined(0) // true
 */
export declare function isDefined(val: unknown): boolean;
export declare function isObject(obj: unknown): boolean;
/**
 * Make an object immutable
 *
 * @function deepFreeze
 * @param {*} obj
 * @returns {*}
 * @example
 * deepFreeze({ a: 1, b: 'foo', c: { ca: 1, cb: 'foo' })
 */
export declare function deepFreeze<T>(obj: T): T;
/**
 * Get a property value from object
 *
 * @function get
 * @param {*} obj
 * @param {string} key
 * @returns {undefined | *}
 * @example
 * get(find(users, (user) => user.id == 99), 'name')
 */
export declare function get(obj: any, key: string): undefined | any;
export declare function identity(val: any): any;
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

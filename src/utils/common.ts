// Ref: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

const slice = Array.prototype.slice;

const _get = curryr2(get);

const _length = _get('length');

const _values = curryr2(map)(identity);

// TODO: Add doc
export function curryr2(fn: (a: any, b: any) => any) {
  return (b: any) => (a: any) => fn.apply(null, [a, b]);
}

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
export function isDefined(val: unknown): boolean {
  if (val == null || typeof val === 'undefined') return false;
  return true;
}

// TODO: Add doc
export function isObject(obj: unknown): boolean {
  return typeof obj === 'object' && !!obj;
}

/**
 * Make an object immutable
 *
 * @function deepFreeze
 * @param {*} obj
 * @returns {*}
 * @example
 * deepFreeze({ a: 1, b: 'foo', c: { ca: 1, cb: 'foo' })
 */
export function deepFreeze<T>(obj: T): T {
  // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
  const propNames: string[] = Object.getOwnPropertyNames(obj);
  for (const name of propNames) {
    const value: unknown = (obj as any)[name];
    if (value && typeof value === 'object') deepFreeze(value);
  }

  return Object.freeze(obj);
}

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
export function get(obj: any, key: string): undefined | any {
  if (!isDefined(obj)) return undefined;
  return obj[key];
}

// TODO: Add doc
export function identity(val: any): any {
  return val;
}

// TODO: Add doc
export function negate(fn: (any: any) => boolean) {
  return (val: any) => !fn(val);
}

// TODO: Add doc
export function rest<T = any>(list: T[], beginIndex = 1): T[] {
  return slice.call(list, beginIndex);
}

/**
 * TODO: Add doc
 * @function keys
 * @example
 * keys({ name: 'foo', age: 33}) // ['name', 'age']
 * keys([1, 2, 3, 4]) // ['1', '2', '3', '4']
 * keys(10) // []
 * keys(null) // []
 */
export function keys(obj: any): string[] {
  return isObject(obj) ? Object.keys(obj) : [];
}

// TODO: Add doc
export function values(data: any): any[] {
  return _values(data);
}

/**
 * TODO: Add doc
 * @function each
 * @example
 * each([0, 1, 2], (item) => console.log(item))
 * each({name: 'foo', age: 30, height: 170}, (item) => console.log(item))
 */
export function each(
  list: any[] | any,
  iterateeFn: (item: any) => void
): any[] {
  // deal with array and object type (polymorphism)
  const _keys: any[] = keys(list);
  for (let i = 0, max: number = _keys.length; i < max; i++) {
    iterateeFn(list[_keys[i]]);
  }

  return list;
}

/**
 * TODO: Add doc
 * @function map
 * @example
 * map(filter(users, (user) => user.age > 40), get('name'))
 */
export function map(list: any[], mapperFn: (item: any) => void): any[] {
  const result: any[] = [];
  each(list, (item: any) => {
    result.push(mapperFn(item));
  });

  return result;
}

// TODO: Add doc
export function filter(
  list: any[],
  predicateFn: (item: any) => boolean
): any[] {
  const result: any[] = [];
  each(list, (item) => {
    if (predicateFn(item)) result.push(item);
  });

  return result;
}

// TODO: Add doc
export function reject(
  list: any[],
  predicateFn: (item: any) => boolean
): any[] {
  return filter(list, negate(predicateFn));
}

// TODO: Add doc
export function compact(list: any[]): any[] {
  // exclude false values(0, '', false, null, undefined, NaN, ...)
  return filter(list, identity);
}

/**
 * TODO: Add doc
 * @function reduce
 * @example
 * reduce([1, 2, 3], add, 0)
 */
export function reduce(
  list: any[],
  iterateeFn: (memo: any, item: any) => any,
  memo?: any
): any {
  let result = memo;
  if (arguments.length === 2) {
    result = list[0];
    list = rest(list);
  }

  each(list, (item: any): void => {
    result = iterateeFn(result, item);
  });

  return result;
}

/**
 * TODO: Add doc
 * @function pluck
 * @example
 * pluck(users, 'age') // [30, 20, 15, ...]
 */
export function pluck(data: any, key: string) {
  return map(data, _get(key));
}

/**
 * TODO: Add doc
 * @function find
 * @example
 * find(users, (user) => user.age > 30)
 */
export function find(
  list: any[],
  predicateFn: (item: any) => boolean
): any | undefined {
  // deal with array and object type (polymorphism)
  const _keys: any[] = keys(list);
  for (let i = 0, max = keys.length; i < max; i++) {
    const val: any = list[_keys[i]];
    if (predicateFn(val)) return val;
  }

  return undefined;
}

/**
 * TODO: Add doc
 * @function findIndex
 * @example
 */
export function findIndex(
  list: any[],
  predicateFn: (item: any) => boolean
): number {
  // deal with array and object type (polymorphism)
  const _keys: any[] = keys(list);
  for (let i = 0, max = keys.length; i < max; i++) {
    const val: any = list[_keys[i]];
    if (predicateFn(val)) return i;
  }

  return -1;
}

/**
 * TODO: Add doc
 * @function some
 * @example
 */
export function some(
  list: any[],
  predicateFn: (item: any) => boolean
): boolean {
  return findIndex(list, predicateFn || identity) !== -1;
}

/**
 * TODO: Add doc
 * @function every
 * @example
 */
export function every(
  list: any[],
  predicateFn: (item: any) => boolean
): boolean {
  return findIndex(list, negate(predicateFn || identity)) === -1;
}

/**
 * TODO: Add doc
 * @function pipe
 * @example
 * const piped = pipe((a: number) => a, (b: number) => b + 99);
 * piped(1) // 100
 */
export function pipe(...rest: ((any?: any) => void)[]) {
  return (seed: any) => reduce(rest, (memo, fn) => fn.call(null, memo), seed);
}

// FIXME: ing ==========
/*
go(
  1, 
  (a) => a + 1,
  (b) => b * 2
  console.log
);

go(
  users, 
  (users) => filter(users, (user) => user.age < 30),
  (users) => map(users, get('age')),
  console.log
);
를 curryr2를 이용하여 아래와 같이 간단하게 단축시킬 수 있다.

const _filter = curryr2(filter);
const _map = curryr2(map);
go(
  users,
  _filter(user => user.age < 30),
  _map(get('age')),
  console.log
);

go({
  1: users[0],
  2: users[2],
  3: users[3],
},
map(user => user.name.toLowerCase()),
console.log);

const _find = curryr2(find);
go(
  users,
  _find((user) => user.id === 99),
  _get('name'),
  console.log
)
*/
// aid.js의 pipeline과 동일하다.
function go(seed: any, ...rest: (() => void)[]) {
  return pipe(...rest)(seed);
}

/* 
+ examples
min([1, 2, 99, 4, -1]);
minBy([1, 2, 99, 4, -1], Math.abs);
*/
function min(list: any[]): any {
  return reduce(list, (memo, item) => (memo < item ? memo : item));
}

function max(list: any[]): any {
  return reduce(list, (memo, item) => (memo > item ? memo : item));
}

function minBy(list: any[], iterateeFn: (item: any) => void): any {
  return reduce(list, (memo, item) =>
    iterateeFn(memo) < iterateeFn(item) ? memo : item
  );
}

function maxBy(list: any[], iterateeFn: (item: any) => void): any {
  return reduce(list, (memo, item) =>
    iterateeFn(memo) > iterateeFn(item) ? memo : item
  );
}

// Ref: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

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
export function isDefined(val: unknown): boolean {
  if (val == null || typeof val === 'undefined') return false;
  return true;
}

/**
 * Make an object immutable
 *
 * @function deepFreeze
 * @param {*} obj
 * @returns {*}
 * @example
 * console.log(deepFreeze({ a: 1, b: 'foo', c: { ca: 1, cb: 'foo' }));
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

const slice = Array.prototype.slice;
const _get = curryr2(get);
const _length = _get('length');

function negate(fn: (any) => boolean) {
  return (val: any) => {
    return !fn(val);
  };
}

// FIXME: ing
function filter(list: any[], predicateFn: (item: any) => boolean): any[] {
  const result: any[] = [];
  each(list, (item) => {
    if (predicateFn(item)) result.push(item);
  });
  return result;
}

function reject(list: any[], predicateFn: (item: any) => boolean): any[] {
  return filter(list, negate(predicateFn));
}

function compact(list: any[]): any[] {
  // 평가시 false가 되는 값들(0, '', false, null, undefined, ...)을 제외한다.
  return filter(list, identity);
}

function map(list: any[], mapperFn: (item: any) => void): any[] {
  const result: any[] = [];
  each(list, (item) => {
    result.push(mapperFn(item));
  });
  return result;
}

/*
+ examples
each([0, 1, 2], (item) => console.log(item))

each({
  name: 'foo',
  age: 30,
  height: 170
}, (item) => console.log(item))
*/
function each(list: any[], iterateeFn: (item: any) => void): any[] {
  const _keys: any[] = keys(list); // list parameter로 object를 전달받더라도 처리할 수 있도록 다형성을 높여준다.

  for (let i = 0, len = keys.length; i < len; i++) {
    iterateeFn(list[_keys[i]]);
  }
  return list;
}

function get(obj, key): any {
  if (!isDefined(obj)) return undefined;
  return obj[key];
}

function curryr2(fn: (a: any, b: any) => any) {
  return (b: any) => (a: any) => fn.apply(null, [a, b]);
}

function reduce(
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

// FIXME: aid.js 의 rest 함수로 대체하자.
function rest(list: any[], num = 1): any[] {
  return slice.call(list, num);
}

/*
const fn = pipe(
  (a) => a + 1,
  (b) => b * 2
);
console.log(fn(1)); // 4
*/
function pipe(...rest: (() => void)[]) {
  return (seed: any) => reduce(rest, (memo, fn) => fn.call(null, memo), seed);
}

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
*/
// FIXME: aid.js의 pipeline이라 할 수 있다.
function go(seed: any, ...rest: (() => void)[]) {
  return pipe(...rest)(seed);
}

/*
+ 사용 예시
1. 
map(
  filter(users, (user) => user.age > 40),
  get('name')
)

2.
reduce([1, 2, 3], add, 0)
reduce([1, 2, 3], add)
*/

function isObject(obj: any): boolean {
  return typeof obj === 'object' && !!obj;
}

/*
+ examples
keys({ name: 'foo', age: 33}); // [name, age]
keys([1, 2, 3, 4]); // [1, 2, 3, 4]
keys(10); // []
keys(null); // []
*/
function keys(obj: any): any[] {
  return isObject(obj) ? Object.keys(obj) : [];
}

function identity(val: any): any {
  return val;
}

const _values = curryr2(map)(identity);

function values(data: any): any[] {
  return _values(data);
}

/* 
+ examples
pluck(users, 'age') // [30, 20, 15, ...]
*/
function pluck(data: any, key: string) {
  return map(data, _get(key));
}

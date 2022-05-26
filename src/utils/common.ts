// Ref: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

import { IArrayLike, IDictionary } from '@shared/interfaces/common';

const slice = Array.prototype.slice;

const _get = curryr2(get);

const _length = _get('length');

const _values = curryr2(map)(identity);

export const hasOwnProp = Object.prototype.hasOwnProperty;

export function curry2(fn: (a: any, b: any) => any) {
  return (a: any) => (b: any) => fn.apply(null, [a, b]);
}

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

export function isObject(obj: unknown): boolean {
  return typeof obj === 'object' && !!obj;
}

export function isInteger(val: number): boolean {
  // Ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
  return isFinite(val) && Math.floor(val) === val;
}

export function isError(val: any, errorType?: unknown): boolean {
  if (!isDefined(val)) return false;

  const con: unknown = val.constructor;
  if (!isDefined(errorType)) {
    return (
      con === Error ||
      con === EvalError ||
      con === RangeError ||
      con === ReferenceError ||
      con === SyntaxError ||
      con === TypeError ||
      con === URIError
    );
  }

  return con === errorType;
}

export const eq = curry2((lhs: any, rhs: any): boolean => lhs === rhs);
export const gt = curry2((lhs: number, rhs: number): boolean => lhs < rhs);
export const lt = curry2((lhs: number, rhs: number): boolean => lhs > rhs);

export function toArray<T>(iterable: IArrayLike<T>): T[] {
  return slice.call(iterable);
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

export function identity(val: any): any {
  return val;
}

export function negate(fn: (any: any) => boolean) {
  return (val: any) => !fn(val);
}

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

/**
 * TODO: Add doc
 * @function removeItem
 * @example
 * removeItem([1, 2, 3], 1) // [1, 3]
 * removeItem([1, 2, 3], 1, 2) // [1]
 */
export function removeItem(
  list: any[],
  index: number,
  count: number = 1
): any[] {
  const copy = slice.call(list);
  copy.splice(index, count);
  return copy;
}

export function shift(list: any[]): {
  first: any;
  array: any[];
} {
  const copy = slice.call(list);
  const first = copy.shift();
  return {
    first,
    array: copy,
  };
}

export function pop(list: any[]): {
  last: any;
  array: any[];
} {
  const copy = slice.call(list);
  const last = copy.pop();
  return {
    last,
    array: copy,
  };
}

export function first(list: any[]): any {
  return list[0];
}

export function dropFirst(list: any[]): any {
  const copy = slice.call(list);
  copy.shift();
  return copy;
}

export function last(list: any[]): any {
  return list[list.length - 1];
}

export function dropLast(list: any[]): any {
  const copy = slice.call(list);
  copy.pop();
  return copy;
}

export function add(list: any[], item: any): any[] {
  const copy = slice.call(list);
  copy.push(item);
  return copy;
}

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

export function reject(
  list: any[],
  predicateFn: (item: any) => boolean
): any[] {
  return filter(list, negate(predicateFn));
}

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

/*
 * array
 */
export function has<T>(arr: T[], val: T): boolean {
  return arr.includes(val);
}

/*
 * string
 */
export const getUrlCombinedParams = (
  url: string,
  parameters?: IDictionary<string | number>
): string => {
  if (!url) return '';
  if (!parameters) return url;

  let str: string = '';
  for (let key in parameters) {
    if (hasOwnProp.call(parameters, key))
      str += '&' + key + '=' + String(parameters[key]);
  }

  if (str === '') return url;

  var tmpArr = url.split('#'),
    hashStr = isDefined(tmpArr[1]) && tmpArr[1].length ? '#' + tmpArr[1] : '';

  url = tmpArr[0];
  url =
    (url.indexOf('?') >= 0 ? url + str : url + '?' + str.substr(1)) + hashStr;

  return url;
};

export function toPrice(val: string): string;
export function toPrice(val: number): string;
export function toPrice(val: any): string {
  if (typeof val === 'string') return val.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  return new Intl.NumberFormat().format(val);
}

export const removeWhitespace = (
  str = '',
  removeEscapeSequence = false
): string => {
  // Ref: https://msdn.microsoft.com/en-us/library/h21280bw.aspx
  // escape sequence is string like \n, \r, \t, ...
  return removeEscapeSequence ? str.replace(/\s/g, '') : str.replace(/ /g, '');
};

export const escapeHtml = (str: string): string => {
  // Refer: https://github.com/lodash/lodash/blob/master/escape.js

  const htmlEscapes: IDictionary<string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  const regexUnescapedHtml = /[&<>"']/g;
  const regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);

  return regexHasUnescapedHtml.test(str)
    ? str.replace(regexUnescapedHtml, (char: string) => htmlEscapes[char])
    : str;
};

export const unescapeHtml = (str: string): string => {
  // Refer: https://github.com/lodash/lodash/blob/master/unescape.js
  // Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library like [_he_](https://mths.be/he).
  const htmlUnescapes: IDictionary<string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
  };
  const regexEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g;
  const regexHasEscapedHtml = RegExp(regexEscapedHtml.source);

  return regexHasEscapedHtml.test(str)
    ? str.replace(
        regexEscapedHtml,
        (entity: string) => htmlUnescapes[entity] || "'"
      )
    : str;
};

export const getFacebookShareUrl = (encodedUrl: string): string => {
  // when 'share on facebook' button is clicked, call window.open(share url, window name, window features).
  // e.g: window.open(getFacebookShareUrl(window.encodeURIComponent('https://www.google.com/')), 'windowName');
  return `https://www.facebook.com/share.php?u=${encodedUrl}`;
};

// when 'share on twitter' button is clicked.
// e.g: https://twitter.com/intent/tweet?text=Hello%20World&url=https%3A%2F%2Fwww.google.com%2F&hashtags=test,share&via=firstborn_nyc&related=code%3Arecommendation_title_1,jetbrains%3Arecommendation_title_2
export const getTwitterShareUrl = (
  queryParams: IDictionary<string | number> = {
    // Pre-populated UTF-8 and URL-encoded Tweet text. The passed text will appear pre-selected for a Twitter user to delete or edit before posting. The length of your passed Tweet text should not exceed 280 characters when combined with any passed hashtags, via, or url parameters. Passed Tweet text which causes the Tweet to exceed 280 characters in length will require additional editing by a Twitter user before he or she can successfully post.
    // e.g: window.encodeURIComponent('Hello World')
    text: '',

    // A fully-qualified URL with a HTTP or HTTPS scheme, URL-encoded. The provided URL will be shortened by Twitter’s t.co to the number of characters specified by short_url_length.
    // e.g: window.encodeURIComponent('https://www.google.com/')
    url: '',

    // Allow easy discovery of Tweets by topic by including a comma-separated list of hashtag values without the preceding # character.
    // e.g: 'test,share'
    hashtags: '',

    // A Twitter username to associate with the Tweet, such as your site’s Twitter account. The provided username will be appended to the end of the Tweet with the text “via @username”. A logged-out Twitter user will be encouraged to sign-in or join Twitter to engage with the via account’s Tweets. The account may be suggested as an account to follow after the user posts a Tweet.
    // e.g: 'firstborn_nyc'
    via: '',

    // Suggest additional Twitter usernames related to the Tweet as comma-separated values. Twitter may suggest these accounts to follow after the user posts their Tweet. You may provide a brief description of how the account relates to the Tweet with a URL-encoded comma and text after the username.
    // e.g: window.encodeURIComponent('code:recommendation_title_1,jetbrains:recommendation_title_2')
    related: '',

    // The Tweet ID of a parent Tweet in a conversation, such as the initial Tweet from your site or author account.
    // e.g: 525001166233403393
    in_reply_to: -1,
  }
): string => {
  // Refer: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent
  return getUrlCombinedParams('https://twitter.com/intent/tweet', queryParams);
};

export const getLineShareUrl = (url: string): string => {
  // Refer: https://social-plugins.line.me/en/how_to_install#lineitbutton
  // e.g: https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fwww.google.com%2F
  return `https://social-plugins.line.me/lineit/share?url=${url}`;
};

export const getNaverShareUrl = (
  queryParams: IDictionary<string> = {
    url: '', // e.g: window.encodeURIComponent('https://www.google.com/')
    title: '', // e.g: window.encodeURIComponent('Hello World')
  }
): string => {
  // Refer: https://developers.naver.com/docs/share/navershare/
  return getUrlCombinedParams(
    'https://share.naver.com/web/shareView.nhn',
    queryParams
  );
};

// TODO: KakaoTalk share url

/*
 * object
 */
export const hasKey = (
  obj: IDictionary<string> = {},
  key: string = ''
): boolean => hasOwnProp.call(obj, key);

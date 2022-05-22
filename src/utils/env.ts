import { isDefined } from './common';

export function getGlobal(): any | never {
  if (isDefined(globalThis)) return globalThis;

  // Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
  if (isDefined(self)) return self;
  if (isDefined(window)) return window;
  if (isDefined(global)) return global;

  throw Error('[getGlobal] Unable to locate global object');
}

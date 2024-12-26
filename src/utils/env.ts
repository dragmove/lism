import { isDefined } from './common';

export type GlobalThis = typeof globalThis;

export interface GlobalEnv {
  globalThis?: GlobalThis;
  self?: GlobalThis;
  window?: GlobalThis;
  global?: GlobalThis;
}

/**
 * Retrieves the global object in the current environment.
 *
 * This function attempts to return the global object by checking various known global identifiers such as `globalThis`, `self`, `window`, and `global`.
 * If none of these are defined, it throws an error.
 *
 *
 * @param {GlobalEnv} [env=global] - The environment object to check for global identifiers.
 * @returns {GlobalThis} The global object of the current environment.
 * @throws {Error} If no global object is found.
 */
export function getGlobal(env: GlobalEnv = global): GlobalThis | never {
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
  const targets: (keyof GlobalEnv)[] = ['globalThis', 'self', 'window', 'global'];

  for (const target of targets) {
    if (isDefined(env[target])) return env[target] as GlobalThis;
  }

  throw Error('[getGlobal] Unable to locate global object');
}

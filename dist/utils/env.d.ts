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
export declare function getGlobal(env?: GlobalEnv): GlobalThis | never;

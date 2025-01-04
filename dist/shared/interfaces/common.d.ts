/**
 * Represents a value that can be of type `T`, `null`, or `undefined`.
 * Useful for handling optional values in a type-safe manner.
 *
 * @example
 * const value: Maybe<number> = null;
 */
export type Maybe<T> = T | null | undefined;
/**
 * Represents an array-like structure with a length property and indexed access.
 * Useful for working with objects that have array-like behavior.
 *
 * @template T - The type of elements in the array-like structure.
 */
export interface ArrayLike<T> {
    length: number;
    [index: number]: T;
}
/**
 * Represents a dictionary object with string keys and values of type `T`.
 * Useful for creating objects with dynamic keys.
 *
 * @template T - The type of values in the dictionary.
 */
export interface Dictionary<T = any> {
    [key: string]: T;
}
export interface IAddEventListenerOption {
    capture: boolean;
    once: boolean;
    passive: boolean;
}
export interface IRemoveEventListenerOption {
    capture: boolean;
}
export interface IStorage {
    set: (key: string, obj: object) => void;
    get: (key: string) => object | string | null;
    remove: (key: string) => void;
    clear: () => void;
}
/**
 * Represents a 2D point with x and y coordinates.
 */
export interface Point {
    x: number;
    y: number;
}
/**
 * Represents a 3D point extending a 2D point with an additional z coordinate.
 */
export interface Point3d extends Point {
    z: number;
}
export type MakeAllPropsBoolean<T> = {
    [P in keyof T]?: boolean;
};
export type Subset<T> = {
    [K in keyof T]?: T[K];
};

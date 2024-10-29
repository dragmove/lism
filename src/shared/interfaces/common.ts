export interface IArrayLike<T> {
  length: number;
  [index: number]: T;
}

export interface IDictionary<T = any> {
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

export interface Point {
  x: number;
  y: number;
}

export interface Point3d extends Point {
  z: number;
}

export type MakeAllPropsBoolean<T> = {
  [P in keyof T]?: boolean;
};

export type Subset<T> = {
  [K in keyof T]?: T[K];
};

export interface Node {
  key: number;
  data: any;
}

import { IStorage } from '@shared/interfaces/common';
import { eq, isObject } from './common';

export const alert = (message: string | object): void => window.alert(message);

export const confirm = (
  message: string = '',
  okCallback: Function,
  cancelCallback?: Function
) => {
  const confirmFn = (): void => {
    const result: boolean = window.confirm(message);
    if (result) {
      okCallback.call(null);
    } else {
      if (cancelCallback) cancelCallback.call(null);
    }
  };

  return confirmFn;
};

export const isSupportServiceWorker: boolean = 'serviceWorker' in navigator;

export const isSupportTouch: boolean = 'ontouchstart' in window;

export function isPortrait(): boolean {
  // Refer: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
  if ('matchMedia' in window)
    return window.matchMedia('(orientation: portrait)').matches;
  if ('orientation' in window)
    return eq(window.orientation)(0) || eq(window.orientation)(180);
  return false;
}

export function isLandscape(): boolean {
  // Refer: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
  if ('matchMedia' in window)
    return window.matchMedia('(orientation: landscape)').matches;
  if ('orientation' in window)
    return eq(window.orientation)(-90) || eq(window.orientation)(90);
  return false;
}

// https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
export const mqlPortrait = window.matchMedia('(orientation: portrait)');

// https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
export const mqlLandscape = window.matchMedia('(orientation: landscape)');

// sessionStorage
export const storageSession: IStorage = {
  set: (key: string, obj: object): void => {
    const str = isObject(obj) ? JSON.stringify(obj) : String(obj);
    window.sessionStorage.setItem(key, str);
  },

  get: (key: string): object | string | null => {
    const str: string | null = window.sessionStorage.getItem(key);

    if (typeof str === 'string') {
      try {
        return JSON.parse(str);
      } catch (error) {
        return str;
      }
    }

    return str;
  },

  remove: (key: string): void => {
    window.sessionStorage.removeItem(key);
  },

  clear: (): void => {
    window.sessionStorage.clear();
  },
};

// localStorage
export const storageLocal: IStorage = {
  set: (key: string, obj: object): void => {
    const str = isObject(obj) ? JSON.stringify(obj) : String(obj);
    window.localStorage.setItem(key, str);
  },

  get: (key: string): object | string | null => {
    const str = window.localStorage.getItem(key);

    if (typeof str === 'string') {
      try {
        return JSON.parse(str);
      } catch (error) {
        return str;
      }
    }

    return str;
  },

  remove: (key: string): void => {
    window.localStorage.removeItem(key);
  },

  clear: (): void => {
    window.localStorage.clear();
  },
};

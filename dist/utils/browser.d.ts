import { IStorage } from '@shared/interfaces/common';
export declare const alert: (message: string | object) => void;
export declare const confirm: (message: string | undefined, okCallback: Function, cancelCallback?: Function) => () => void;
export declare const isSupportServiceWorker: boolean;
export declare const isSupportTouch: boolean;
/**
 * Determines whether the current device or browser window is in portrait orientation.
 *
 * @returns {boolean} - Returns `true` if the device is in portrait orientation, otherwise returns `false`.
 *
 * @example
 * ```typescript
 * if (isPortrait()) {
 *   // Codes for portrait orientation
 * }
 * ```
 */
export declare function isPortrait(): boolean;
/**
 * Determines whether the current device or browser window is in landscape orientation.
 *
 * @returns {boolean} - Returns `true` if the device is in landscape orientation, otherwise returns `false`.
 *
 * @example
 * ```typescript
 * if (isLandscape()) {
 *   // Codes for landscape orientation
 * }
 * ```
 */
export declare function isLandscape(): boolean;
export declare const mqlPortrait: MediaQueryList;
export declare const mqlLandscape: MediaQueryList;
export declare const storageSession: IStorage;
export declare const storageLocal: IStorage;

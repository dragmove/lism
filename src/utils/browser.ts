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
export function isPortrait(): boolean {
  // @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
  if (typeof window.matchMedia === 'function') {
    return window.matchMedia('(orientation: portrait)').matches;
  }

  const orientation = (window as Window & { orientation?: number }).orientation;
  if (typeof orientation === 'number') {
    return orientation === 0 || orientation === 180;
  }

  return false;
}

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
export function isLandscape(): boolean {
  // @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
  if (typeof window.matchMedia === 'function') {
    return window.matchMedia('(orientation: landscape)').matches;
  }

  const orientation = (window as Window & { orientation?: number }).orientation;
  if (typeof orientation === 'number') {
    return orientation === -90 || orientation === 90;
  }

  return false;
}

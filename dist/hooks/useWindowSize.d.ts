import { type WindowSize } from '@lism-internal/shared/interfaces/browser';
/**
 * A custom hook that returns the current window size (width and height).
 *
 * @returns {WindowSize} An object containing the current width and height of the window.
 *
 * @example
 * ```tsx
 * const { width, height } = useWindowSize();
 * console.log('Current window size:', { width, height });
 * ```
 *
 * @remarks
 * The width and height are updated on window resize events.
 * The initial values are set when the component first mounts.
 */
declare const useWindowSize: () => WindowSize;
export default useWindowSize;

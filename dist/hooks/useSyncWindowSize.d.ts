import { WindowSize } from '@lism-internal/shared/interfaces/browser';
/**
 * A custom hook that returns the current window size (width and height).
 *
 * This hook uses [useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore) hook to ensure that components re-render
 * synchronously with the latest window size, preventing [Tearing](https://github.com/reactwg/react-18/discussions/69) issues during
 * window resize events. The width and height values are always up-to-date
 * and consistent across renders.
 *
 * @returns {WindowSize} An object containing the current width and height of the window.
 *
 * @example
 * ```tsx
 * const { width, height } = useSyncWindowSize();
 * console.log('window size:', { width, height });
 * ```
 *
 * @remarks
 * The width and height are updated on window resize events.
 * The initial values are set when the component first mounts.
 */
declare const useSyncWindowSize: () => WindowSize;
export default useSyncWindowSize;

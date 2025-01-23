import { WindowSize } from '@lism-internal/shared/interfaces/browser';
import { isDefined } from '@lism-internal/utils/common';
import { useSyncExternalStore } from 'react';

const SERVER_SNAPSHOT: WindowSize = { width: 0, height: 0 };

let lastWindowSize: WindowSize = {
  width: isDefined(window) ? window.innerWidth : 0,
  height: isDefined(window) ? window.innerHeight : 0,
};

const store = {
  subscribe: (forceSyncRerender: () => void) => {
    if (isDefined(window)) {
      window.addEventListener('resize', forceSyncRerender);
      return () => {
        window.removeEventListener('resize', forceSyncRerender);
      };
    }
    return () => {};
  },
  getSnapshot: () => {
    if (!isDefined(window)) return SERVER_SNAPSHOT;

    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;

    if (currentWidth === lastWindowSize.width && currentHeight === lastWindowSize.height) {
      return lastWindowSize;
    }

    lastWindowSize = { width: currentWidth, height: currentHeight };
    return lastWindowSize;
  },
  getServerSnapshot: () => SERVER_SNAPSHOT,
};

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
 * console.log('Current window size:', { width, height });
 * ```
 *
 * @remarks
 * The width and height are updated on window resize events.
 * The initial values are set when the component first mounts.
 */
const useSyncWindowSize = (): WindowSize => {
  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
};

export default useSyncWindowSize;

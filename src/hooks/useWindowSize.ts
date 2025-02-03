import { type WindowSize } from '@lism-internal/shared/interfaces/browser';
import { useEffect, useState } from 'react';

/**
 * A custom hook that returns the current window size (width and height).
 *
 * @returns {WindowSize} An object containing the current width and height of the window.
 *
 * @example
 * ```tsx
 * const { width, height } = useWindowSize();
 * console.log('window size:', { width, height });
 * ```
 *
 * @remarks
 * The width and height are updated on window resize events.
 * The initial values are set when the component first mounts.
 */
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window?.innerWidth ?? 0,
        height: window?.innerHeight ?? 0,
      });
    }

    window?.addEventListener('resize', handleResize);
    handleResize();

    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;

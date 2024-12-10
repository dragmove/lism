import { useEffect, useState } from 'react';

export interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

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
 * The initial values are `undefined` until the first resize event is fired.
 */
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    }

    window?.addEventListener('resize', handleResize);
    handleResize();

    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;

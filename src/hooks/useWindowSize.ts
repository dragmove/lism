import { useEffect, useState } from 'react';

export interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

/**
 * Custom hook return window size
 *
 * @function useWindowSize
 * @returns WindowSize
 * @example
 * const windowSize = useWindowSize();
 * console.log('windowSize :', windowSize);
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

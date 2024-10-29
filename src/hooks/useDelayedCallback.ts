import { useEffect, useState } from 'react';

/**
 * Custom hook return a delayed callback
 *
 * @function useDelayedCallback
 * @param {number} delay - millisecond
 * @returns {(callback: () => void) => void | false}
 * @example
 * const delayedCallback = useDelayedCallback(1000);
 * delayedCallback(() => console.log('foo'));
 */
const useDelayedCallback = (delay: number): ((callback: () => void) => void | false) => {
  const [isDelayed, setIsDelayed] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsDelayed(false), delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);

  const delayedCallback = (callback: () => void): void | false => !isDelayed && callback.apply(null);
  return delayedCallback;
};

export default useDelayedCallback;

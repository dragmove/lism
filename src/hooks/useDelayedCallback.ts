import { useEffect, useState } from 'react';

/**
 * Return a delayed callback custom hook
 *
 * @function useDelayedCallback
 * @param {number} delay - millisecond
 * @returns {(callback: () => unknown) => unknown}
 * @example
 * const delayedCallback = useDelayedCallback(1000);
 * delayedCallback(() => console.log('foo'));
 */
const useDelayedCallback = (
  delay: number
): ((callback: () => unknown) => unknown) => {
  const [isDelayed, setIsDelayed] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsDelayed(false), delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);

  const delayedCallback = (callback: () => unknown): unknown =>
    !isDelayed && callback.apply(null);
  return delayedCallback;
};

export default useDelayedCallback;

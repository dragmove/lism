import { useEffect, useState } from 'react';

/**
 * Custom hook that returns a delayed callback function.
 *
 * @function useDelayedCallback
 * @param {number} delay - The delay in milliseconds before the callback can be executed.
 * @returns {(callback: () => void) => void | false} - A function that takes a callback to be executed after the delay.
 * @example
 * const delayedCallback = useDelayedCallback(1000);
 * delayedCallback(() => console.log('foo')); // This will log 'foo' after 1 second.
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

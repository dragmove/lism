import { useEffect, useState } from 'react';

/**
 * Custom hook returns a debounced function.
 *
 * @param {number} delay - The time (in milliseconds) to wait before executing the callback.
 * @returns {(callback: () => void) => void}
 * @example
 * // In this example, we create a debounced function that will print 'foo' to the console after 1 second (1000 milliseconds) of inactivity.
 * const debounce = useDebounce(1000);
 * <button onClick={() => { debounce(() => console.log('foo')); }}>print</button>
 */
const useDebounce = (delay: number): ((callback: () => void) => void) => {
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId, delay]);

  const debounce = (callback: () => void): void => {
    const tid: number = window.setTimeout(() => {
      callback.call(null);
    }, delay);

    setTimeoutId(tid);
  };
  return debounce;
};

export default useDebounce;

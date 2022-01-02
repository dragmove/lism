import { useEffect, useState } from 'react';

/**
 * Custom hook return a debounced function
 *
 * @function useDebounce
 * @param {number} delay - millisecond
 * @returns {(callback: () => void) => void}
 * @example
 * const debounce = useDebounce(1000);
 * <button onClick={() => { debounce(() => console.log('foo')); }}>print</button>
 */
const useDebounce = (delay: number): ((callback: () => void) => void) => {
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(timeoutId);
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

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
declare const useDebounce: (delay: number) => (callback: () => void) => void;
export default useDebounce;

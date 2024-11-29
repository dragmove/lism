/**
 * Custom hook returns a debounced function.
 *
 * @function useDebounce
 * @param {number} delay - The time (in milliseconds) to wait before executing the callback.
 * @returns {(callback: () => void) => void}
 * @example
 * // In this example, we create a debounced function that will print 'foo' to the console after 1 second (1000 milliseconds) of inactivity.
 * const debounce = useDebounce(1000);
 * <button onClick={() => { debounce(() => console.log('foo')); }}>print</button>
 */
declare const useDebounce: (delay: number) => ((callback: () => void) => void);
export default useDebounce;

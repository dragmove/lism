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
declare const useDelayedCallback: (delay: number) => (callback: () => unknown) => unknown;
export default useDelayedCallback;

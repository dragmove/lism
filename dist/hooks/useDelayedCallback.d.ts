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
declare const useDelayedCallback: (delay: number) => (callback: () => void) => void | false;
export default useDelayedCallback;

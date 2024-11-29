/**
 * Custom hook that returns a delayed callback function.
 *
 * @param {number} delay - The delay in milliseconds before the callback can be executed.
 * @returns {(callback: () => void) => void | false} - A function that takes a callback to be executed after the delay.
 * @example
 * const delayedCallback = useDelayedCallback(1000);
 * delayedCallback(() => console.log('foo')); // This will log 'foo' after 1 second.
 */
declare const useDelayedCallback: (delay: number) => ((callback: () => void) => void | false);
export default useDelayedCallback;

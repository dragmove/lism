export interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}
/**
 * Returns the current window size(width and height)
 * @summary Get the current window size
 * @function useWindowSize
 * @returns {WindowSize} - The current window size
 * @example
 * const windowSize = useWindowSize();
 * console.log('windowSize :', windowSize);
 */
declare const useWindowSize: () => WindowSize;
export default useWindowSize;

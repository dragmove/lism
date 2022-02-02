export interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}
/**
 * Custom hook return window size
 *
 * @function useWindowSize
 * @returns WindowSize
 * @example
 * const windowSize = useWindowSize();
 * console.log('windowSize :', windowSize);
 */
declare const useWindowSize: () => WindowSize;
export default useWindowSize;

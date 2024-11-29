import { ReactNode } from 'react';
/**
 * The DelayedFallback component conditionally renders its children or a fallback component
 * based on the `isReadyToRender` prop. It waits for a specified delay (fallbackDelay)
 * before rendering the fallback component.
 *
 * @param {Object} props - The props for the component.
 * @param {ReactNode} props.children - The child elements to render.
 * @param {boolean} props.isReadyToRender - A flag indicating whether the children are ready to be rendered.
 * @param {ReactNode} [props.fallback] - The fallback component to render when `isReadyToRender` is false.
 * @param {number} [props.fallbackDelay=200] - The time (in milliseconds) to wait before rendering the fallback component.
 * @returns {ReactNode} - Returns the children if ready, otherwise returns the fallback component.
 */
declare const DelayedFallback: ({ children, isReadyToRender, fallback, fallbackDelay, }: {
    children: ReactNode;
    isReadyToRender: boolean;
    fallback?: ReactNode;
    /**
     * @defaultValue 200
     */
    fallbackDelay?: number;
}) => ReactNode;
export default DelayedFallback;

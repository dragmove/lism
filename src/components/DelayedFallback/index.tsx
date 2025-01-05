import useDelayedCallback from '@hooks/useDelayedCallback';
import React, { ReactNode } from 'react';

export interface DelayedFallbackProps {
  children: ReactNode;
  isReadyToRender: boolean;
  fallback?: ReactNode;
  /**
   * @defaultValue 200
   */
  fallbackDelay?: number;
}

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
 *
 * @remarks
 * If the duration of fetching data is shorter than the `fallbackDelay` value (default: 200ms),
 * the content is displayed without rendering the fallback. This can make it appear to the user
 * as if the content is displayed instantly.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <DelayedFallback isReadyToRender={isContentLoaded} fallback={<div>Loading...</div>}>
 *   <div>Content is ready!</div>
 * </DelayedFallback>
 *
 * // Custom delay
 * <DelayedFallback isReadyToRender={isContentLoaded} fallback={<div>Loading...</div>} fallbackDelay={500}>
 *   <div>Content is ready!</div>
 * </DelayedFallback>
 * ```
 */
const DelayedFallback = ({
  children,
  isReadyToRender = false,
  fallback,
  fallbackDelay = 200,
}: DelayedFallbackProps): ReactNode => {
  const delayedCallback = useDelayedCallback(fallbackDelay);

  return isReadyToRender ? <>{children}</> : delayedCallback(() => fallback || null) || null;
};

export default DelayedFallback;

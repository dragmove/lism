import React, { ReactNode } from 'react';
import useDelayedCallback from '../../hooks/useDelayedCallback';

interface PropTypes {
  children: ReactNode;
  isReadyToRender: boolean;
  fallback?: ReactNode;
  fallbackDelay?: number;
}

/**
 * A React component that conditionally renders its children or a fallback component
 * based on the `isReadyToRender` prop. It uses a delay before rendering the fallback.
 *
 * @param {PropTypes} props - The component props.
 * @returns {ReactNode} - The rendered children or fallback content.
 */
const DelayedFallback = ({ children, isReadyToRender = false, fallback, fallbackDelay = 200 }: PropTypes): any => {
  const delayedCallback = useDelayedCallback(fallbackDelay);
  return isReadyToRender ? <>{children}</> : delayedCallback(() => fallback);
};

export default DelayedFallback;

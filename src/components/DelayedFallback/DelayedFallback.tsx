import React, { ReactNode } from 'react';
import useDelayedCallback from '../../hooks/useDelayedCallback';

interface PropTypes {
  children: ReactNode;
  isReadyToRender: boolean;
  fallback?: any;
  fallbackDelay?: number;
}

// TODO: Add comments for documentation
const DelayedFallback = ({
  children,
  isReadyToRender = false,
  fallback,
  fallbackDelay = 200,
}: PropTypes): any => {
  const delayedCallback = useDelayedCallback(fallbackDelay);
  return isReadyToRender ? <>{children}</> : delayedCallback(() => fallback);
};

export default DelayedFallback;

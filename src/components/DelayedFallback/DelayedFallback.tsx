import useDelayedRender from '../../hooks/useDelayedCallback';
import React, { ReactNode } from 'react';

interface PropTypes {
  children: ReactNode;
  isReadyToRender: boolean;
  fallback?: any;
  fallbackDelay?: number;
}

const DelayedFallback = ({
  children,
  isReadyToRender = false,
  fallback,
  fallbackDelay = 200,
}: PropTypes): any => {
  const delayedRender = useDelayedRender(fallbackDelay);

  return isReadyToRender ? <>{children}</> : delayedRender(() => fallback);
};

export default DelayedFallback;

// FIXME: Define types
// FIXME: Make test cases
// FIXME: Add documentation comments

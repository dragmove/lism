import { useEffect, useState } from 'react';

const useDelayedCallback = (delay: number): ((callback: any) => any) => {
  const [isDelayed, setIsDelayed] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsDelayed(false), delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);

  const delayedCallback = (callback: any): any =>
    !isDelayed && callback.apply(null);

  return delayedCallback;
};

export default useDelayedCallback;

// FIXME: Define types
// FIXME: Make test cases
// FIXME: Add documentation comments

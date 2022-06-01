import { useEffect, useState } from 'react';

/**
 * Custom hook return whether a component is mounted or not
 *
 * @function useMounted
 * @returns boolean
 * @example
 * const isMounted = useMounted();
 */
const useMounted = (): boolean => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};

export default useMounted;

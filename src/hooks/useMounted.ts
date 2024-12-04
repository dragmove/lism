import { useEffect, useState } from 'react';

/**
 * A custom React hook that determines whether the component is mounted.
 *
 * @returns {boolean} - Returns `true` if the component is mounted, `false` otherwise.
 *
 * @example
 * ```tsx
 * const isMounted = useMounted();
 * console.log(isMounted); // true if the component is mounted
 * ```
 */
const useMounted = (): boolean => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};

export default useMounted;

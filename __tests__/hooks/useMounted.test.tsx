import '@testing-library/jest-dom';

import useMounted from '@hooks/useMounted';
import { renderHook } from '@testing-library/react';

describe('useMounted', () => {
  it('should return true after the component is mounted', () => {
    const { result, rerender } = renderHook(() => useMounted());

    rerender();
    expect(result.current).toBe(true);
  });
});

import '@testing-library/jest-dom';

import useDelayedCallback from '@lism-internal/hooks/useDelayedCallback';
import { render, renderHook } from '@testing-library/react';
import React, { act } from 'react';

describe('useDelayedCallback', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('should return function', () => {
    const { result } = renderHook(() => useDelayedCallback(1000));

    act(() => {
      const delayedCallback = result.current;
      expect(typeof delayedCallback).toEqual('function');
    });
  });

  it('should call callback with delay', () => {
    jest.useFakeTimers();

    let data = null;

    function Component() {
      const delayedCallback = useDelayedCallback(1000);
      delayedCallback(() => {
        data = 'foo';
      });

      return null;
    }
    render(<Component />);

    expect(data).toBe(null);

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(data).toBe('foo');
  });
});

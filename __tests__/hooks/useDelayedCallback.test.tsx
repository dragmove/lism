import useDelayedCallback from '@hooks/useDelayedCallback';
import { act, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

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

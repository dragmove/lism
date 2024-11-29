import '@testing-library/jest-dom';

import useDebounce from '@hooks/useDebounce';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import React, { act } from 'react';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  test('should return function', () => {
    const { result } = renderHook(() => useDebounce(1000));

    act(() => {
      const debouncedFn = result.current;
      expect(typeof debouncedFn).toEqual('function');
    });
  });

  test('should call callback after delay', () => {
    jest.useFakeTimers();

    let data = null;

    function Component() {
      const debounce = useDebounce(100);

      return (
        <>
          <button
            data-testid="test-btn"
            onClick={() => {
              debounce(() => {
                data = 'foo';
              });
            }}
          >
            test button
          </button>
        </>
      );
    }
    render(<Component />);

    expect(data).toBe(null);

    const button = screen.getByTestId('test-btn');
    fireEvent.click(button);

    act(() => {
      jest.advanceTimersByTime(110);
    });
    expect(data).toEqual('foo');
  });

  test('should postpone calling callback after delay', () => {
    jest.useFakeTimers();

    let data = null;

    function Component() {
      const debounce = useDebounce(100);

      return (
        <>
          <button
            data-testid="test-btn"
            onClick={() => {
              debounce(() => {
                data = 'foo';
              });
            }}
          >
            test button
          </button>
        </>
      );
    }
    render(<Component />);

    expect(data).toBe(null);

    const button = screen.getByTestId('test-btn');
    fireEvent.click(button);
    act(() => {
      jest.advanceTimersByTime(70);
    });
    expect(data).toEqual(null);

    fireEvent.click(button);
    act(() => {
      jest.advanceTimersByTime(70);
    });
    expect(data).toEqual(null);

    fireEvent.click(button);
    act(() => {
      jest.advanceTimersByTime(70);
    });
    expect(data).toEqual(null);

    act(() => {
      jest.advanceTimersByTime(40);
    });
    expect(data).toEqual('foo');
  });
});

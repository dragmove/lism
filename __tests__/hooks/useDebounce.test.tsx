import useDebounce from '@hooks/useDebounce';
import {
  act,
  fireEvent,
  render,
  screen,
  renderHook,
} from '@testing-library/react';
import React from 'react';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('should return function', () => {
    const { result } = renderHook(() => useDebounce(1000));

    act(() => {
      const debouncedFn = result.current;
      expect(typeof debouncedFn).toEqual('function');
    });
  });

  it('should call callback after delay', () => {
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

  it('should postpone calling callback after delay', () => {
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

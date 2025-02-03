import '@testing-library/jest-dom';

import useSyncWindowSize from '@lism-internal/hooks/useSyncWindowSize';
import { act, renderHook } from '@testing-library/react';

describe('useSyncWindowSize', () => {
  const resizeWindow = (width: number, height: number) => {
    global.innerWidth = width;
    global.innerHeight = height;
    global.dispatchEvent(new Event('resize'));
  };

  beforeEach(() => {
    global.innerWidth = 1024;
    global.innerHeight = 768;
  });

  it('should return initial window size as number', () => {
    const { result } = renderHook(() => useSyncWindowSize());
    expect(typeof result.current.width).toBe('number');
    expect(typeof result.current.height).toBe('number');
  });

  it('should update window size on resize', () => {
    // Mocking the window resize
    global.innerWidth = 800;
    global.innerHeight = 600;

    const { result } = renderHook(() => useSyncWindowSize());

    // Simulate a resize event
    act(() => {
      resizeWindow(1024, 768);
    });
    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  it('should clean up event listener on unmount', () => {
    // Mocking the window resize
    global.innerWidth = 1900;
    global.innerHeight = 1200;

    const { result, unmount } = renderHook(() => useSyncWindowSize());

    // Simulate resize event before unmount
    act(() => {
      resizeWindow(1024, 768);
    });
    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);

    // Unmount the component. Now simulate another resize, but the hook should not respond
    unmount();
    act(() => {
      resizeWindow(800, 600);
    });
    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  it('should subscribe and unsubscribe to window resize events', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useSyncWindowSize());
    expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));

    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});

import '@testing-library/jest-dom';

import useTouchLeaveRadius from '@lism-internal/hooks/useTouchLeaveRadius';
import { act, renderHook } from '@testing-library/react';
import { TouchEvent } from 'react';

describe('useTouchLeaveRadius', () => {
  it('should throw an error if radius is less than or equal to 0', () => {
    expect(() => useTouchLeaveRadius(0)).toThrow('[useTouchLeaveRadius] The radius must be greater than 0.');
  });

  it('should initialize correctly', () => {
    const { result } = renderHook(() => useTouchLeaveRadius(20));
    expect(result.current.delta).toEqual({ x: 0, y: 0 });
    expect(result.current.isLeave).toBe(false);
  });

  it('should handle touch start correctly', () => {
    const { result } = renderHook(() => useTouchLeaveRadius(20));

    const touchStartEvent = {
      touches: [{ clientX: 50, clientY: 50 }],
    } as unknown as TouchEvent;

    act(() => {
      result.current.handleTouchStart(touchStartEvent);
    });

    expect(result.current.delta).toEqual({ x: 0, y: 0 });
    expect(result.current.isLeave).toBe(false);
  });

  it('should handle touch move correctly within radius', () => {
    const { result } = renderHook(() => useTouchLeaveRadius(20));
    const touchStartEvent = {
      touches: [{ clientX: 50, clientY: 50 }],
    } as unknown as TouchEvent;
    const touchMoveEvent = {
      touches: [{ clientX: 60, clientY: 60 }],
    } as unknown as TouchEvent;

    act(() => {
      result.current.handleTouchStart(touchStartEvent);
      result.current.handleTouchMove(touchMoveEvent);
    });

    expect(result.current.delta).toEqual({ x: 10, y: 10 });
    expect(result.current.isLeave).toBe(false);
  });

  it('should handle touch move correctly outside radius', () => {
    const { result } = renderHook(() => useTouchLeaveRadius(20));
    const touchStartEvent = {
      touches: [{ clientX: 50, clientY: 50 }],
    } as unknown as TouchEvent;
    const touchMoveEvent = {
      touches: [{ clientX: 80, clientY: 70 }],
    } as unknown as TouchEvent;

    act(() => {
      result.current.handleTouchStart(touchStartEvent);
      result.current.handleTouchMove(touchMoveEvent);
    });

    expect(result.current.delta).toEqual({ x: 30, y: 20 });
    expect(result.current.isLeave).toBe(true);
  });

  it('should handle touch end correctly', () => {
    const { result } = renderHook(() => useTouchLeaveRadius(20));
    const touchStartEvent = {
      touches: [{ clientX: 50, clientY: 50 }],
    } as unknown as TouchEvent;
    const touchMoveEvent = {
      touches: [{ clientX: 80, clientY: 70 }],
    } as unknown as TouchEvent;

    act(() => {
      result.current.handleTouchStart(touchStartEvent);
      result.current.handleTouchMove(touchMoveEvent);
      result.current.handleTouchEnd();
    });

    expect(result.current.isLeave).toBe(false);
  });
});

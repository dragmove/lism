import { type Point } from '@lism-internal/shared/interfaces/common';
import { TouchEvent, useCallback, useRef, useState } from 'react';

const calculateDistance = (x1: number, y1: number, x2: number, y2: number): number =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

/**
 * A custom React hook for detecting if a touch event has left a specified radius.
 *
 * @param {number} radius - The radius (in pixels) within which the touch event is considered inside. Must be greater than 0.
 * @throws {Error} Throws an error if the `radius` parameter is less than or equal to 0.
 * @returns {object} An object containing:
 * - `delta`: An object representing the distance moved in the x and y directions.
 * - `isLeave`: A boolean indicating whether the touch event has left the specified radius.
 * - `handleTouchStart`: A callback function to handle the start of a touch event.
 * - `handleTouchMove`: A callback function to handle the movement of a touch event.
 * - `handleTouchEnd`: A callback function to handle the end of a touch event.
 *
 * @example
 * const ExampleComponent = () => {
 *   const { delta, isLeave, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchLeaveRadius(20);
 *   return (
 *     <div
 *       onTouchStart={handleTouchStart}
 *       onTouchMove={handleTouchMove}
 *       onTouchEnd={handleTouchEnd}
 *     >
 *       Touch and move this element in a mobile browser.
 *       <p>Delta: X: {delta.x}, Y: {delta.y}</p>
 *       {isLeave && <p>You have left the specified radius!</p>}
 *     </div>
 *   );
 * };
 */
const useTouchLeaveRadius = (radius: number) => {
  if (radius <= 0) {
    throw new Error('[useTouchLeaveRadius] The radius must be greater than 0.');
  }

  const touchStartRef = useRef<Point>({ x: 0, y: 0 });
  const [isLeave, setIsLeave] = useState(false);
  const [delta, setDelta] = useState<Point>({ x: 0, y: 0 });

  const handleTouchStart = useCallback((event: TouchEvent) => {
    const touch = event.touches[0];
    if (!touch) {
      console.warn('[useTouchLeaveRadius][handleTouchStart] No touch event found.');
      return;
    }

    const { clientX, clientY } = touch;
    touchStartRef.current = { x: clientX, y: clientY };

    setDelta({ x: 0, y: 0 });
    setIsLeave(false);
  }, []);

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) {
        console.warn('[useTouchLeaveRadius][handleTouchMove] No touch event found.');
        return;
      }

      const { clientX, clientY } = touch;
      const { x: startX, y: startY } = touchStartRef.current;

      setDelta({ x: Math.abs(startX - clientX), y: Math.abs(startY - clientY) });

      if (calculateDistance(startX, startY, clientX, clientY) >= radius) {
        setIsLeave(true);
      }
    },
    [radius]
  );

  const handleTouchEnd = useCallback(() => {
    setIsLeave(false);
  }, []);

  return { delta, isLeave, handleTouchStart, handleTouchMove, handleTouchEnd };
};

export default useTouchLeaveRadius;

import { type Point } from '@lism-internal/shared/interfaces/common';
import { TouchEvent } from 'react';
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
declare const useTouchLeaveRadius: (radius: number) => {
    delta: Point;
    isLeave: boolean;
    handleTouchStart: (event: TouchEvent) => void;
    handleTouchMove: (event: TouchEvent) => void;
    handleTouchEnd: () => void;
};
export default useTouchLeaveRadius;

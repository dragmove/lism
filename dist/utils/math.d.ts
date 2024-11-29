/**
 * Checks if a given number is positive.
 *
 * @param {number} value - The number to check.
 * @returns {boolean} - Returns true if the number is greater than zero, otherwise false.
 *
 * @example
 * ```typescript
 * isPositive(5); // returns true
 * isPositive(-3); // returns false
 * isPositive(0); // returns false
 * ```
 */
export declare const isPositive: (value: number) => boolean;
/**
 * Checks if a given number is negative.
 *
 * @param {number} value - The number to check.
 * @returns {boolean} - Returns true if the number is less than zero, otherwise false.
 *
 * @example
 * ```typescript
 * isNegative(-5); // returns true
 * isNegative(3); // returns false
 * isNegative(0); // returns false
 * ```
 */
export declare const isNegative: (value: number) => boolean;
/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param {number} value - The number to clamp.
 * @param {number} min - The minimum value the number can be.
 * @param {number} max - The maximum value the number can be.
 * @returns {number} - Returns the clamped value, which is between min and max.
 *
 * @example
 * ```typescript
 * clamp(9, 0, 5); // returns 5
 * clamp(-2, 0, 5); // returns 0
 * clamp(4, 0, 5); // returns 4
 * clamp(-1, -5, 0) // returns -1
 * ```
 */
export declare const clamp: (value: number, min: number, max: number) => number;

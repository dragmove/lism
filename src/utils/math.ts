import { gt, lt } from './common';

export const isPositive = (number: number): boolean => gt(0)(number);

export const isNegative = (number: number): boolean => lt(0)(number);

export const clamp = (number: number, min: number, max: number): number =>
  Math.max(Math.min(number, max), min);

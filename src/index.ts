import useDebounce from '@hooks/useDebounce';
import { default as useDelayedCallback } from '@hooks/useDelayedCallback';
import useInput from '@hooks/useInput';
import useMounted from '@hooks/useMounted';
import useWindowSize, { type WindowSize } from '@hooks/useWindowSize';
import type { ArrayLike, Dictionary, Maybe, Node, Point, Point3d } from '@shared/interfaces/common';
import { isLandscape, isPortrait } from '@utils/browser';
import { deepFreeze, isDefined } from '@utils/common';
import { isElement } from '@utils/dom';
import { getGlobal, type GlobalEnv, type GlobalThis } from '@utils/env';
import { clamp, isNegative, isPositive } from '@utils/math';
import { getFileExtension } from '@utils/string';
import { DelayedFallback } from './components';

export {
  ArrayLike,
  clamp,
  deepFreeze,
  DelayedFallback,
  Dictionary,
  getFileExtension,
  getGlobal,
  GlobalEnv,
  GlobalThis,
  isDefined,
  isElement,
  isLandscape,
  isNegative,
  isPortrait,
  isPositive,
  Maybe,
  Node,
  Point,
  Point3d,
  useDebounce,
  useDelayedCallback,
  useInput,
  useMounted,
  useWindowSize,
  WindowSize,
};

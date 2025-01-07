import { DelayedFallback, type DelayedFallbackProps } from './components';
import useDebounce from './hooks/useDebounce';
import { default as useDelayedCallback } from './hooks/useDelayedCallback';
import useInput from './hooks/useInput';
import useMounted from './hooks/useMounted';
import useWindowSize, { type WindowSize } from './hooks/useWindowSize';
import type { ArrayLike, Dictionary, Maybe, Point, Point3d } from './shared/interfaces/common';
import type { Node } from './shared/interfaces/dataStructure';
import { isLandscape, isPortrait } from './utils/browser';
import { deepFreeze, isDefined, isError, isNumber } from './utils/common';
import { el, els, isElement } from './utils/dom';
import { getGlobal, type GlobalEnv, type GlobalThis } from './utils/env';
import { clamp, isNegative, isPositive } from './utils/math';
import { getFileExtension } from './utils/string';

export {
  ArrayLike,
  clamp,
  deepFreeze,
  DelayedFallback,
  DelayedFallbackProps,
  Dictionary,
  el,
  els,
  getFileExtension,
  getGlobal,
  GlobalEnv,
  GlobalThis,
  isDefined,
  isElement,
  isError,
  isLandscape,
  isNegative,
  isNumber,
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

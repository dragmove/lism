import useDebounce from '@hooks/useDebounce';
import { default as useDelayedCallback } from '@hooks/useDelayedCallback';
import useInput from '@hooks/useInput';
import useMounted from '@hooks/useMounted';
import useWindowSize, { type WindowSize } from '@hooks/useWindowSize';
import { isLandscape, isPortrait } from '@utils/browser';
import { deepFreeze, isDefined } from '@utils/common';
import { isElement } from '@utils/dom';
import { clamp, isNegative, isPositive } from '@utils/math';
import { getFileExtension } from '@utils/string';
import { DelayedFallback } from './components';

export {
  clamp,
  deepFreeze,
  DelayedFallback,
  getFileExtension,
  isDefined,
  isElement,
  isLandscape,
  isNegative,
  isPortrait,
  isPositive,
  useDebounce,
  useDelayedCallback,
  useInput,
  useMounted,
  useWindowSize,
  WindowSize,
};

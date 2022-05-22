import { isSupportTouch } from '@utils/browser';

export const TOUCH_MOUSE_EVENT: { start: string; move: string; end: string } = {
  start: isSupportTouch ? 'touchstart' : 'mousedown',
  move: isSupportTouch ? 'touchmove' : 'mousemove',
  end: isSupportTouch ? 'touchend' : 'mouseup',
};

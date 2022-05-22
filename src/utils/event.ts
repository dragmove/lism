import { TOUCH_MOUSE_EVENT } from '@shared/constants/event';
import {
  IAddEventListenerOption,
  IRemoveEventListenerOption,
} from '@shared/interfaces/common';
import {
  filter,
  first,
  fromEvent,
  map,
  switchMap,
  tap,
  timeInterval,
} from 'rxjs';
import { isSupportTouch } from './browser';
import { eq, isInteger } from './common';

// Ref: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
export function addListener(
  ele: HTMLElement | null = null,
  type = '',
  listener: (evt: Event) => void,
  options: IAddEventListenerOption = {
    capture: false,
    once: false,
    passive: false,
  }
) {
  if (ele) ele.addEventListener(type, listener, options);
}

// Ref: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
export function removeListener(
  ele: HTMLElement | null = null,
  type = '',
  listener: (evt: Event) => void,
  options: IRemoveEventListenerOption = { capture: false }
) {
  if (ele) ele.removeEventListener(type, listener, options);
}

export const hashChange$ = fromEvent(window, 'hashchange');

export const preventDefaultOperator = (observable$: any) => {
  return observable$.pipe(
    map((evt: Event) => {
      evt.preventDefault();

      return evt;
    })
  );
};

export const stopPropagationOperator = (observable$: any) => {
  return observable$.pipe(
    map((evt: Event) => {
      evt.stopPropagation();

      return evt;
    })
  );
};

export const touchMousePositionOperator = (observable$: any) => {
  return observable$.pipe(
    map((evt: MouseEvent | TouchEvent) => {
      let event, obj;

      if (isSupportTouch) {
        event = evt as TouchEvent;
        obj = {
          event,
          x: event.changedTouches[0].pageX,
          y: event.changedTouches[0].pageY,
          timeStamp: event.timeStamp,
        };
      } else {
        event = evt as MouseEvent;
        obj = {
          event,
          x: event.pageX,
          y: event.pageY,
          timeStamp: evt.timeStamp,
        };
      }

      return obj;
    })
  );
};

// mouse click event
export const getClick$ = (ele: HTMLElement | Document) => {
  return fromEvent(ele, 'click');
};

// mouse N click (one, double, triple, ...) event
export const getNClick$ = ({
  ele,
  clickNum = 1,
  limitTime = Number.MAX_VALUE,
}: {
  ele: HTMLElement | Document;
  clickNum?: number;
  limitTime?: number;
}) => {
  if (!isInteger(clickNum) || clickNum <= 0)
    throw new TypeError(
      '[getNClick$] clickNum parameter type must be Integer. (bigger than 0)'
    );

  if (limitTime <= 0)
    throw new TypeError(
      '[getNClick$] limitTime parameter must be bigger than 0.'
    );

  if (eq(clickNum)(1)) return getClick$(ele);

  let _intervals: number[] = [];

  return getClick$(ele).pipe(
    timeInterval(),
    tap((obj) => _intervals.push(obj.interval)),
    map((obj) => {
      const lastIntervals = _intervals.slice(-(clickNum - 1));
      if (_intervals.length < clickNum) return null;

      const sum = lastIntervals.reduce((acc, cur) => acc + cur);
      if (sum <= limitTime) return obj.value;

      return null;
    }),
    filter((event) => event !== null),
    tap(() => (_intervals = []))
  );
};

// mousedown, mouseup / touchstart, touchend event
// TODO: Specify any types
export const getStart$ = (
  ele: HTMLElement | Document,
  operators: any[] = []
) => {
  let observable = fromEvent(ele, TOUCH_MOUSE_EVENT.start);
  operators.map((operator) => (observable = observable.pipe(operator)));

  return observable;
};

// TODO: Specify any types
export const getEnd$ = (ele: HTMLElement | Document, operators: any[] = []) => {
  let observable = fromEvent(ele, TOUCH_MOUSE_EVENT.end);
  operators.map((operator) => (observable = observable.pipe(operator)));

  return observable;
};

// TODO: Specify any types
export const getTapClick$ = (start$: any, end$: any) => {
  return start$.pipe(
    switchMap(
      (startPos: { event: Event; x: number; y: number; timeStamp: number }) =>
        end$.pipe(
          map(
            (endPos: {
              event: Event;
              x: number;
              y: number;
              timeStamp: number;
            }) => {
              return {
                startEvent: startPos.event,
                endEvent: endPos.event,
                x: endPos.x - startPos.x,
                y: endPos.y - startPos.y,
                elapsedTime: endPos.timeStamp - startPos.timeStamp,
              };
            }
          ),
          first()
        )
    )
  );
};

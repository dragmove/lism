export {};

declare global {
  interface Window {
    webkitRequestAnimationFrame: any;
    mozRequestAnimationFrame: any;
    oRequestAnimationFrame: any;
    msRequestAnimationFrame: any;

    webkitCancelRequestAnimationFrame: any;
    webkitCancelAnimationFrame: any;
    mozCancelRequestAnimationFrame: any;
    mozCancelAnimationFrame: any;
    oCancelRequestAnimationFrame: any;
    oCancelAnimationFrame: any;
    msCancelRequestAnimationFrame: any;
    msCancelAnimationFrame;
  }
}

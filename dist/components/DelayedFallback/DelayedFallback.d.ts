import { ReactNode } from 'react';
interface PropTypes {
    children: ReactNode;
    isReadyToRender: boolean;
    fallback?: any;
    fallbackDelay?: number;
}
declare const DelayedFallback: ({ children, isReadyToRender, fallback, fallbackDelay, }: PropTypes) => any;
export default DelayedFallback;

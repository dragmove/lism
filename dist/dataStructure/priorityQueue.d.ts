import MinHeap from './minHeap';
import { Node } from '@shared/interfaces/common';
declare class PriorityQueue extends MinHeap {
    constructor();
    enqueue(data: any, priority: number): void;
    dequeue(): Node | null;
}
export default PriorityQueue;

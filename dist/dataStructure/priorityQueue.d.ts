import { Node } from '@shared/interfaces/dataStructure';
import MinHeap from './minHeap';
declare class PriorityQueue extends MinHeap {
    constructor();
    enqueue(data: any, priority: number): void;
    dequeue(): Node | null;
}
export default PriorityQueue;

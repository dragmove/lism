import { Node } from '@shared/interfaces/dataStructure';
declare class MinHeap {
    private nodes;
    constructor();
    insert(data: Node): void;
    remove(): Node | null;
    protected heapifyUp(): void;
    protected heapifyDown(): void;
    protected getLeftChildIndex: (index: number) => number;
    protected getRightChildIndex: (index: number) => number;
    protected getParentIndex: (index: number) => number;
    protected hasLeftChild: (index: number) => boolean;
    protected hasRightChild: (index: number) => boolean;
    protected hasParent: (index: number) => boolean;
    protected leftChild: (index: number) => Node;
    protected rightChild: (index: number) => Node;
    protected parent: (index: number) => Node;
    private swap;
}
export default MinHeap;

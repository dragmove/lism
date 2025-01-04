import { Node } from '@shared/interfaces/dataStructure';

class MinHeap {
  private nodes: Node[];

  constructor() {
    this.nodes = [];
  }

  public insert(data: Node): void {
    this.nodes.push(data);
    this.heapifyUp();
  }

  public remove(): Node | null {
    const size: number = this.nodes.length;
    if (size === 0) return null;

    const data: Node = this.nodes[0];
    this.nodes[0] = this.nodes[size - 1];
    this.nodes.splice(size - 1, 1);
    this.heapifyDown();

    return data;
  }

  protected heapifyUp(): void {
    let index: number = this.nodes.length - 1;

    while (this.hasParent(index) && this.parent(index).key > this.nodes[index].key) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  protected heapifyDown(): void {
    let index = 0;

    while (this.hasLeftChild(index)) {
      const smallerChildIndex: number =
        this.hasRightChild(index) && this.rightChild(index).key < this.leftChild(index).key
          ? this.getRightChildIndex(index)
          : this.getLeftChildIndex(index);

      if (this.nodes[index].key < this.nodes[smallerChildIndex].key) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }

  protected getLeftChildIndex = (index: number): number => 2 * index + 1;
  protected getRightChildIndex = (index: number): number => 2 * index + 2;
  protected getParentIndex = (index: number): number => Math.floor((index - 1) / 2);

  protected hasLeftChild = (index: number): boolean => this.getLeftChildIndex(index) < this.nodes.length;
  protected hasRightChild = (index: number): boolean => this.getRightChildIndex(index) < this.nodes.length;
  protected hasParent = (index: number): boolean => this.getParentIndex(index) >= 0;

  protected leftChild = (index: number): Node => this.nodes[this.getLeftChildIndex(index)];
  protected rightChild = (index: number): Node => this.nodes[this.getRightChildIndex(index)];
  protected parent = (index: number): Node => this.nodes[this.getParentIndex(index)];

  private swap(indexA: number, indexB: number): void {
    [this.nodes[indexA], this.nodes[indexB]] = [this.nodes[indexB], this.nodes[indexA]];
  }
}

export default MinHeap;

/*
// original implementation

class MinHeap {
  private storage: number[];

  constructor() {
    this.storage = [];
  }

  public insert(data: number): void {
    this.storage.push(data);
    this.heapifyUp();
  }

  public remove(): number | null {
    const size: number = this.storage.length;
    if (size === 0) return null;

    const data: number = this.storage[0];
    this.storage[0] = this.storage[size - 1];
    this.storage.splice(size - 1, 1);
    this.heapifyDown();

    return data;
  }

  protected heapifyUp(): void {
    let index: number = this.storage.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.storage[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  protected heapifyDown(): void {
    let index = 0;

    while (this.hasLeftChild(index)) {
      const smallerChildIndex: number =
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
          ? this.getRightChildIndex(index)
          : this.getLeftChildIndex(index);

      if (this.storage[index] < this.storage[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }

  protected getLeftChildIndex = (index: number): number => 2 * index + 1;
  protected getRightChildIndex = (index: number): number => 2 * index + 2;
  protected getParentIndex = (index: number): number =>
    Math.floor((index - 1) / 2);

  protected hasLeftChild = (index: number): boolean =>
    this.getLeftChildIndex(index) < this.storage.length;
  protected hasRightChild = (index: number): boolean =>
    this.getRightChildIndex(index) < this.storage.length;
  protected hasParent = (index: number): boolean =>
    this.getParentIndex(index) >= 0;

  protected leftChild = (index: number): number =>
    this.storage[this.getLeftChildIndex(index)];
  protected rightChild = (index: number): number =>
    this.storage[this.getRightChildIndex(index)];
  protected parent = (index: number): number =>
    this.storage[this.getParentIndex(index)];

  private swap(indexA: number, indexB: number): void {
    [this.storage[indexA], this.storage[indexB]] = [
      this.storage[indexB],
      this.storage[indexA],
    ];
  }
}

export default MinHeap;
*/

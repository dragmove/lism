import MinHeap from './minHeap';
import { Node } from './interfaces/common';

class PriorityQueue extends MinHeap {
  constructor() {
    super();
  }

  public enqueue(data: any, priority: number): void {
    this.insert({
      key: priority,
      data,
    });
  }

  public dequeue(): Node | null {
    return this.remove();
  }
}

export default PriorityQueue;

/*
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("foo_30", 30);
priorityQueue.enqueue("foo_5", 5);
priorityQueue.enqueue("foo_10", 10);
priorityQueue.enqueue("foo_20", 20);
priorityQueue.enqueue("foo_8", 8);
priorityQueue.enqueue("foo_15", 15);
priorityQueue.enqueue("foo_7", 7);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
*/

// Очередь на основе связного списка
import Queue from "../Queue/Queue";
import {
  DoubleQueue as IDoubleQueue,
} from "./interface";
import {
  ListNodeVal,
  ListNodeLink
} from "../LinkedList/interface";

export default class DoubleQueue<T> extends Queue<T> implements IDoubleQueue<T> {
  public maxSize: number = 10;
  public length: number = 0;
  public first: ListNodeLink<T> = null;
  public last: ListNodeLink<T> = null;

  constructor(maxSize: number) {
    super(maxSize);
    this.maxSize = maxSize;
    this.first = null;
    this.last = null;
  }

  public pop(): T {
    if (!this.last) {
      throw new Error('Queue is empty');
      // return <T>"error";
    }

    const value = this.last?.value;
    const oldLast = this.deleteLast();
    this.syncQueue();

    this.length--;

    return <T>value;
  }

  public unshift(value: T): void {
    if (this.length != this.maxSize) {
      this.insertFirst(value)

      // if (!this.first) {
      //   this.first = this.queue.first;
      // }
      this.length++;
      this.syncQueue();
    }
  };

  public shift(): T {
    const deleteFirst = this.deleteFirst();
    this.syncQueue();
    this.length--;

    return <T>deleteFirst?.value;
  };

  protected syncQueue() {
    this.first = this.queue.first;
    this.last = this.queue.last;
  }

}

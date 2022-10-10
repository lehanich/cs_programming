// Очередь на основе связного списка
import Queue from "./Queue";
import {
  DoubleQueue as IDoubleQueue,
  ListItemVal,
  ListItemLink
} from "./interface";
import LinkedList from "./LinkedList";

export default class DoubleQueue<T> extends Queue<T> implements IDoubleQueue<T> {
  public maxSize: number = 10;
  public length: number = 0;
  public head: ListItemLink<T> = null;
  public rear: ListItemLink<T> = null;

  constructor(maxSize: number) {
    super(maxSize);
    this.maxSize = maxSize;
    this.head = null;
    this.rear = null;
  }

  // public push(value: ListItemVal<T>): void {
  //   if (this.length < this.maxSize) {
  //     this.add(value)

  //     if (!this.head) {
  //       this.head = this.first;
  //     }
  //     this.length++;
  //     this.rear = this.last;
  //   }
  // }

  public pop(): ListItemVal<T> {
    if (!this.last) {
      return <T>"error";
    }

    const value = this.last?.value;
    const oldLast = this.deleteLast();

    // this.last =  this.last?.prev;

    // if (this.last) {
    //   delete this.last!.next;
    // }
    this.length--;
    // this.head = this.first;

    return <T>value;
  }

  public unshift(value: ListItemVal<T>): void {
    if (this.length != this.maxSize) {
      this.insertFirst(value)

      if (!this.head) {
        this.head = this.first;
      }
      this.length++;
      this.rear = this.last;
    }
  };

  public shift(): ListItemVal<T> {
    const deleteFirst = this.deleteFirst();

    // this.first = this.first?.next;
    // if (this.first) {
    //   delete this.first!.prev;
    // }
    this.length--;

    return <T>deleteFirst?.value;
  };

}

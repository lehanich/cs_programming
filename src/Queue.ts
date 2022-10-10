// Очередь на основе связного списка
import {
  Queue as IQueue,
  ListItemVal,
  ListItemLink
} from "./interface";
import LinkedList from "./LinkedList";

export default class Queue<T> extends LinkedList<T> implements IQueue<T> {
  public maxSize: number = 10;
  public length: number = 0;
  public head: ListItemLink<T> = null;
  public rear: ListItemLink<T> = null;

  constructor(maxSize: number) {
    super();
    this.maxSize = maxSize;
    this.head = null;
    this.rear = null;
  }

  public push(value: ListItemVal<T>): void {
    if (this.length < this.maxSize) {
      this.add(value)

      if (!this.head) {
        this.head = this.first;
      }
      this.length++;
      this.rear = this.last;
    }
  }

  public pop(): ListItemVal<T> {
    if (!this.first) {
      return <T>"error";
    }

    const value = this.first?.value;
    const oldFirst = this.deleteFirst();

    this.length--;
    this.head = this.first;

    return <T>value;
  }

}

// Стек
import {
  Stack as IStack,
  ListItemVal
} from "./interface";

export default class Stack<T> implements IStack<T> {
  readonly maxSize: number;
  public head: ListItemVal<T> | undefined;
  protected top: number;
  protected stackArray: ListItemVal<T>[];

  constructor(size: number) {
    this.maxSize = size;
    this.stackArray = new Array(this.maxSize);
    this.top = 0;
    this.head = undefined;
  }

  push(value: ListItemVal<T>): void {
    if (this.top === this.maxSize) {
      throw console.error("stack overflow");
    }

    this.head = value;
    this.stackArray[this.top] = value;
    this.top++;
  };

  pop(): ListItemVal<T> {
    if (this.top === 0) {
      throw console.error("stack is empty");
    }

    const value = this.stackArray.pop()
    this.top--;
    this.head = this.stackArray[this.top-1];

    return <ListItemVal<T>>value;
  };

  // peek(): ListItemVal<T> {
  //   if (this.top === 0) {
  //     throw console.error("stack is empty");
  //   }

  //   return <ListItemVal<T>>this.stackArray[this.top];
  // };
}

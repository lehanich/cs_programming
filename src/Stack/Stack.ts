// Стек
import {
  Stack as IStack,
} from "./interface";
import {
  ListNodeVal,
} from "../LinkedList/interface";

export default class Stack<T> implements IStack<T> {
  readonly maxSize: number;
  public head: ListNodeVal<T> | undefined;
  protected top: number;
  protected stackArray: ListNodeVal<T>[];

  constructor(size: number) {
    this.maxSize = size;
    this.stackArray = new Array(this.maxSize);
    this.top = 0;
    this.head = undefined;
  }

  push(value: ListNodeVal<T>): void {
    if (this.top === this.maxSize) {
      throw new Error('Stack is overflow');
    }

    this.head = value;
    this.stackArray[this.top] = value;
    this.top++;
  };

  pop(): ListNodeVal<T> {
    if (this.top === 0) {
      throw new Error('Stack is empty');
    }

    const value = this.stackArray.pop()
    this.top--;
    this.head = this.stackArray[this.top-1];

    return <ListNodeVal<T>>value;
  };

  // peek(): ListNodeVal<T> {
  //   if (this.top === 0) {
  //     throw console.error("stack is empty");
  //   }

  //   return <ListNodeVal<T>>this.stackArray[this.top];
  // };
}

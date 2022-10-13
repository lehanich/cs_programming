import {
  ListNodeVal
} from "../LinkedList/interface";

export interface Stack<T> {
  readonly maxSize: number;
  head: ListNodeVal<T> | undefined;
  // top: number;
  // stackArray: ListItemVal<T>[];

  push(value: ListNodeVal<T>): void;
  pop(): ListNodeVal<T>;
}

import {
  ListItemVal
} from "../LinkedList/interface";

export interface Stack<T> {
  readonly maxSize: number;
  head: ListItemVal<T> | undefined;
  // top: number;
  // stackArray: ListItemVal<T>[];

  push(value: ListItemVal<T>): void;
  pop(): ListItemVal<T>;
}

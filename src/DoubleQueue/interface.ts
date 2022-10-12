import {
  ListItemVal,
  ListItemLink
} from "../LinkedList/interface";

export interface DoubleQueue<T> {
  maxSize: number;
  length: number;
  head?: ListItemLink<T>;
  rear?: ListItemLink<T>;

  push(value: ListItemVal<T>): void;
  pop(): ListItemVal<T>;

  unshift(value: ListItemVal<T>): void;
  shift(): ListItemVal<T>;
}

import {
  ListNodeVal,
  ListNodeLink
} from "../LinkedList/interface";

export interface DoubleQueue<T> {
  maxSize: number;
  length: number;
  head?: ListNodeLink<T>;
  rear?: ListNodeLink<T>;

  push(value: ListNodeVal<T>): void;
  pop(): ListNodeVal<T>;

  unshift(value: ListNodeVal<T>): void;
  shift(): ListNodeVal<T>;
}

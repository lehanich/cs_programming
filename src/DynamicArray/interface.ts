
import { ListNodeVal } from "../LinkedList/interface";

export interface  DynamicArray<T> {
  add(element: ArrayItem<T>): void;
  get(index: number): ArrayItem<T>;
}

export type ArrayItem<T> = number | string | undefined | T;

// export type Coordinates<T> = {
//   link:;
//   index
// }

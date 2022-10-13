
export interface  DynamicArray<T> {
  add(element: ArrayItem<T>): void;
  get(index: number): ArrayItem<T>;
}

export type ArrayItem<T> = number | string | undefined;

// export type Coordinates<T> = {
//   link:;
//   index
// }

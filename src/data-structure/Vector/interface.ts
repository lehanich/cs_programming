
export interface  Vector<T> {
  add(element: T): void;
  get(index: number): T | undefined;
}

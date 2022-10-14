import { Vector as IVector } from "./interface";

export default class Vector<T> implements IVector<T> {
  #capacity: number;
  #length: number = 0;
  #buffer: T[] | undefined[];

  constructor(length: number | null) {
    const newLength = length ? length : 10;

    this.#buffer = new Array<T>(newLength);
    this.#capacity = newLength;
  }

  get length() {
    return this.#length;
  }

  public add(element: T) {
    if (this.#length == this.#capacity) {
      this.#changeSize();
    }

    this.#buffer[this.length] = element;
    this.#length++;
  }

  public get(index: number): T | undefined {
    if (index >= this.#capacity) {
      return undefined;
    }

    return <T>this.#buffer[index];
  }

  #changeSize() {
    this.#capacity = this.#capacity * 2;

    const buffer = new Array(this.#capacity);

    for (let i=0; i < this.#length; i++) {
      buffer[i] = this.#buffer[i]
    }

    this.#buffer = buffer;
  }

  public remove(index: number) {
    for (let i=index; i < this.#length; i++) {
      this.#buffer[i] = i < this.#length - 1 ? this.#buffer[i+1] : undefined;
    }
  }
}

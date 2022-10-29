export type Element = string | number | null | undefined;

export default class Range implements Iterable<Element>  { //<T extends string | number>
  #start: number = 0;
  #end: number = 0;
  #isChar: Boolean = false;

  constructor(start: Element, end: Element){
    if (typeof start === "string" && typeof end === "string") {
      this.#start = start.charCodeAt(0);
      this.#end = end.charCodeAt(0);
      this.#isChar = true;
    } else if (typeof start === "number" && typeof end === "number") {
      this.#start = start;
      this.#end = end;
    }
  }

  get length() {
    return this.#end - this.#start + 1;
  }

  [Symbol.iterator]() { // : IterableIterator<T extends number? number : string>
    let value = this.#start - 1;
    let that = this

    return {
      [Symbol.iterator](): IterableIterator<Element> {
        return this;
      },
      next(): IteratorResult<Element> {
        value++

        if (value > that.#end) {
          return {done: true, value: null}
        }

        return  (that.#isChar) ? { done: false, value: String.fromCharCode(value!) } : { done: false, value: value };
      }
    }
  }

  reverse() {
    let value = this.#end + 1;
    let that = this

    return {
      [Symbol.iterator](): IterableIterator<Element> {
        return this;
      },
      next(): IteratorResult<Element> {
        value--;

        if (value < that.#start) {
          return {done: true, value: null}
        }

        return  (that.#isChar) ? { done: false, value: String.fromCharCode(value!) } : { done: false, value: value };
      }
    }
  }
}

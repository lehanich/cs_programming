import LinkedList from "../LinkedList/LinkedList";
import { HashMap as IHashMap } from "./interface";

export default class HashMap<T> implements IHashMap<T> {
  #arraySize: number = 10;
  #hashArray = new Array();

  constructor(size: number) {
    this.#arraySize = size;
    this.#hashArray = new Array(this.#arraySize);

    for(let i=0; i < this.#arraySize; i++) {
      this.#hashArray[i] = new LinkedList();
    }
  }

  public set(key: string | number, value: T): void {
    let index = this.#hashFunction(key);

    for (const el of this.#hashArray[index]) {
      if (el && el.key === key) {
        el.data = value;

        return undefined;
      }
    }

    this.#hashArray[index].add({ key, data: value });
    // console.log
  }
  
  public get(key: string | number): T | undefined | null {
    let index = this.#hashFunction(key);

    for (const el of this.#hashArray[index]) {
      if (el && el.key === key) {
        return el.data
      }
    }

    return undefined;
  }

  #hashCode(str: string) {
    return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
  }

  #hashFunction(key: number | string): number {
    let index = 0;

    if (typeof key === "number") {
      index = key;
    } else {
      index = this.#hashCode(key) % this.#arraySize;
    }
    
    return index;
  }

  public print() {
    return this.#hashArray;
  }
}

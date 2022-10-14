import { HashMap as IHashMap } from "./interface";

export default class HashMap<T> implements IHashMap<T> {
  #multiplier = 101;

  constructor() {

  }

  
  public set(key: string | number, value: T): void {
    let index = null;
    if (typeof key === "number") {
      index = key;
    } else {
      index = this.#hashCode(key) % this.#multiplier;
    }
    console.log
  }
  
  
  public get(key: string | number, value: T): T {
    return value;
  }

  #hashCode(str: string) {
    return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
  }
  
}
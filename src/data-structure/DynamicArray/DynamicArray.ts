import {
  DynamicArray as IDynamicArray,
  ArrayItem
} from "./interface"
import {
  LinkedList as ILinkedList,
} from "../LinkedList/interface"
import LinkedList from "../LinkedList/LinkedList";

export default class DynamicArray<T> implements IDynamicArray<T> {

  public length: number;
  #maxElements: number;
  #maxInNode: number;
  #arrayData: ILinkedList<T[]>;

  constructor(maxElements: number) {
    if (!maxElements) {
      maxElements = 3;
    }

    this.#maxElements = maxElements;
    this.#maxInNode = maxElements;
    this.length = 0;
    this.#arrayData = new LinkedList<T[]>();
    this.#arrayData.add(new Array<T>(maxElements));
  }

  #getIndex(index: number): number {
    if (index >= this.#maxElements) {
      return index % this.#maxElements;
    }

    return index;
  }

  #getNode(index: number): number {
    if (index < this.#maxElements) {
      return 0;
    }

    return Math.floor(index / this.#maxElements);
  }

  public add(element: T): void {
    if (this.length % this.#maxElements === 0 && this.length > 0) {
      this.#arrayData.add(new Array<T>(this.#maxElements));
    }

    let node = this.#getNode(this.length);
    let current = this.#arrayData.first;

    while (node != 0) {
      current = current?.next;
      node--;
    }

    current!.value![this.#getIndex(this.length)] = <T>element;

    this.length++;
  }

  public get(index: number): T | undefined {
    let node = this.#getNode(index);
    let current = this.#arrayData.first;

    while (node != 0) {
      current = current?.next;
      node--;
    }
    
    if (current?.value === undefined) {
      return undefined;
    }

    return <T>current.value[this.#getIndex(index)];
  }

  public print() {
    return this.#arrayData;
  }

  // get values() {
  //   let current = this.#arrayData.first;
  //   const self = this;
  //   return {
  //       *[Symbol.iterator]() {
  //           while (current) {
  //               for(let i=0; i< self.#maxElements; i++){
  //                   if(current!.value![i]){
  //                       yield current!.value![i];
  //                   }
  //               }
  //               current = current.next
  //           }
  //       }
  //   }
  // }

  *[Symbol.iterator](): Iterator<T> { 
    for (const array of this.#arrayData) {
      if (array === undefined) {  // чтобы не проваливаться в ссылку last.next
        return undefined;
      }
      for (let i = 0; i < this.#maxElements; i += 1) {
        yield array[i];
      }
    }
  }

  public delete(index: number): void {

  }
}

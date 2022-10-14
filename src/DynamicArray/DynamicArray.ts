import {
  DynamicArray as IDynamicArray,
  ArrayItem
} from "./interface"
import {
  LinkedList as ILinkedList,
  ListNodeArray
} from "../LinkedList/interface"
import LinkedList from "../LinkedList/LinkedList";
import { ListNodeVal } from "../LinkedList/interface";

export default class DynamicArray<T> implements IDynamicArray<T> {

  public length: number;
  #maxElements: number;
  #maxInNode: number;
  #arrayData: ILinkedList<T>;

  constructor(maxElements: number) {
    if (!maxElements) {
      maxElements = 3;
    }
    this.#maxElements = maxElements;
    this.#maxInNode = maxElements;
    this.length = 0;
    this.#arrayData = new LinkedList();
    const temp: ListNodeArray<T> = new Array(maxElements);
    this.#arrayData.add(<any>temp); //!!!!!!
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

  public add(element: ListNodeVal<T>): void {
    if (this.length < this.#maxElements) {
      let index:number = this.#getIndex(this.length);

      this.#arrayData!.first!.array![index] = element;
      this.length++;

      return undefined;
    }

    if (this.length % this.#maxElements === 0) {
      const temp: ListNodeArray<T> = new Array(this.#maxElements);
      this.#arrayData.add(<any>temp); //!!!!!!
    }

    let index = this.#getIndex(this.length);
    let node = this.#getNode(this.length);
    let current = this.#arrayData.first;

    while (node != 0) {
      current = current?.next;
      node--;
    }

    current!.array![index] = element;

    this.length++;
  }

  public get(index: number): ArrayItem<T> {
    if (index < this.#maxElements) {
      const array = this.#arrayData?.first?.array;

      if (array === undefined) {
        return undefined;
      }

      return array[this.#getIndex(index)];
    }

    let node = this.#getNode(index);
    let current = this.#arrayData.first;

    while (node != 0) {
      current = current?.next;
      node--;
    }
    
    if (current?.array === undefined) {
      return undefined;
    }

    return current.array[this.#getIndex(index)];
  }

  public print() {
    return this.#arrayData;
  }
}
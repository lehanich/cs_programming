
export default class Node<T> {
  static order: number = 4;
  #length: number = 0;
  #dataItems: T[] | null[] = new Array(); // Array(Node.order - 1);
  #childNodes: Node<T>[] | null[] = new Array(); // new Array(Node.order);
  #parent?: Node<T> | undefined;

  constructor() {

  }

  public get length(): number {
    return this.#length;
  }

  public getLength(): number {
    return this.#length;
  }

  public findItem(key: T): number {
    for (let i=0; i<this.length; i++) {
      if (this.#dataItems[i] === key) {
        return i;
      }
    }

    return -1;
  }

  public insertItem(dataItem: T): number {
    if (this.isFull()) {
      return -1;
    }

    this.#length++;

    for (let i = Node.order-2; i >= 0; i--) {
      if (this.#dataItems[i]) {
        if (this.#dataItems[i]! > dataItem) {
          this.#dataItems[i+1] = this.#dataItems[i];
        } else {
          this.#dataItems[i+1] = dataItem;
          return i+1;
        }
      }
    }

    this.#dataItems[0] = dataItem;
    return 0;
  }

  public getItem(index: number): T {
    return <T>this.#dataItems[index];
  }

  public getChild(index: number) {
    return this.#childNodes[index];
  }

  public removeItem(): T {
    let buffer = this.#dataItems[this.length - 1];
    this.#dataItems[this.length - 1] = null;
    this.#length--;
    return <T>buffer;
  }

  public getParent(): Node<T> | undefined {
    return this.#parent;
  }

  public setParent(node: Node<T>): void {
    this.#parent = node;
  }

  public isFull(): Boolean {
    if (this.#length < Node.order - 1) {
      return false;
    }
    
    return true;
  }

  public isLeaf(): Boolean {
    for (let i = 0; i < this.length; i++) {
      if (this.#childNodes[i] !== null && this.#childNodes[i] != undefined) {
        return false;
      }
    }

    return true;
  }

  public print() {
    for (let i = 0; i < this.length; i++) {
      console.log(`/${this.#dataItems[i]}`)
    }
  }

  public connectChild(childIndex: number, child: Node<T>): void {
    this.#childNodes[childIndex] = child;

    if (child != null && child != undefined) {
      child.setParent(this);
    }
  }

  public disconnectChild(childIndex: number): Node<T> {
    let tempNode: Node<T> = <Node<T>>this.#childNodes[childIndex];
    this.#childNodes[childIndex] = null;
    return tempNode;
  }
}

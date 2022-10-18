
export default class Node<T> {
  static order: number = 4;
  #length: number = 0;
  #dataItems: T[] | null[] = new Array(Node.order - 1);
  #childNodes: Node<T>[] | null[] = new Array(Node.order);
  #parent?: Node<T> | undefined;

  constructor() {

  }

  get length () {
    return this.#length;
  }

  findItem(key: T): number {
    for (let i=0; i<this.#dataItems.length; i++) {
      if (this.#dataItems[i] === key) {
        return i;
      }
    }

    return -1;
  }

  insertItem(dataItem: T): number {
    if (this.isFull()) {
      return -1;
    }

    this.#length++;

    for (let i = Node.order-2; i >= 0; i--) {
      if (this.#dataItems[i]! > dataItem) {
        this.#dataItems[i+1] = this.#dataItems[i];
      } else {
        this.#dataItems[i] = dataItem;
        return i;
      }
    }

    this.#dataItems[0] = dataItem;
    return 0;
  }

  getItem(index: number) {
    return this.#dataItems[index];
  }

  getChild(index: number) {
    return this.#childNodes[index];
  }

  removeItem(): T {
    let buffer = this.#dataItems[this.#dataItems.length - 1];
    this.#dataItems[this.#dataItems.length - 1] = null;
    this.#length--;
    return <T>buffer;
  }

  getParent(): Node<T> | undefined {
    return this.#parent;
  }

  setParent(node: Node<T>): void {
    this.#parent = node;
  }

  isFull(): Boolean {
    if (this.#length < Node.order - 1) {
      return false;
    }
    
    return true;
  }

  isLeaf(): Boolean {
    if (this.#childNodes.length === 0) {
      return true
    }

    return false;
  }

  public connectChild(childIndex: number, child: Node<T>): void {
    this.#childNodes[childIndex] = child;

    if (child !== null) {
      child.#parent = this
    }
  }

  public disconnectChild(childIndex: number): Node<T> {
    let tempNode: Node<T> = <Node<T>>this.#childNodes[childIndex];
    this.#childNodes[childIndex] = null;
    return tempNode;
  }
}

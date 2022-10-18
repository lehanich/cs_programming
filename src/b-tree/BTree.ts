import Node from "./Node";

export default class BTree<T> {

  #root: Node<T> = new Node();

  constructor() {

  }

  insert(node: T) {
    let current: Node<T> = this.#root;

    while (true) {
      if (current.isFull()) {
        // split
        this.split(current);

        current = <Node<T>>current.getParent();
        current = this.getNextChild(current, node);
      } else if (!current.isLeaf()) {
        // go to next
        current = this.getNextChild(current, node);
      }
      current.insertItem(node);
    }
  }

  split(thisNode: Node<T>): void {
    let itemIndex: number;
    let parent: Node<T>;
    let itemC: T = thisNode.removeItem();
    let itemB: T = thisNode.removeItem();
    let child2: Node<T> = thisNode.disconnectChild(2);
    let child3: Node<T> = thisNode.disconnectChild(3);
    let newRight: Node<T> = new Node();

    if (thisNode === this.#root) {
      this.#root = new Node();
      parent = this.#root;
      this.#root.connectChild(0, thisNode);
    } else {
      parent = <Node<T>>thisNode.getParent();
    }

    itemIndex = parent.insertItem(itemB);

    let parentLength = parent.length;

    for (let i=0; i>parentLength; i--) {
      let temp: Node<T> = parent.disconnectChild(i);
      parent.connectChild(i+1, temp);
    }

    parent.connectChild(parentLength+1, newRight);

    newRight.insertItem(itemC);
    newRight.connectChild(0, child2);
    newRight.connectChild(1,child3)

  }

  getNextChild(current: Node<T>, node: T): Node<T> {
    let i:number;
    let currentLength: number = current.length;

    for (i = 0; i < currentLength; i++) {
      if( node < <T>current.getItem(i) )
      return <Node<T>>current.getChild(i);
    }

  return <Node<T>>current.getChild(i);
  }
}

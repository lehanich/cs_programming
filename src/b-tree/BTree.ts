import Node from "./Node";

export default class BTree<T> {

  #root: Node<T> = new Node();

  constructor() {

  }

  insert(node: T): void {
    let current: Node<T> = this.#root;
    console.log("start insert " + node)

    while (true) {
      if (current.isFull()) {
        console.log("is full ", node, current)
        // split
        this.split(current);

        current = <Node<T>>current.getParent();
        console.log("get new parent")
        console.dir(current)
        console.log(current.print())
        current = this.getNextChild(current, node);
        console.log("get getNextChild " + node)
        console.dir(current)
        console.log(current.print())
      } else if (current.isLeaf()) {
        console.log("is leaf ", node, current)
        console.log("print " + current.print())
        break;
      } else {
        console.log("next child ", node, current)
        current = this.getNextChild(current, node);
      }
    }

    console.dir(current)
    let item = current.insertItem(node);
    console.log(`inserted node ${node} index ${item}`)
  }

  split(thisNode: Node<T>): void {
    console.dir(thisNode.print());

    let itemIndex: number;

    console.dir("check thisNode "+ String(thisNode.length));
    let parent: Node<T>;
    let itemC: T = thisNode.removeItem();
    console.log("itemC ",itemC);
    let itemB: T = thisNode.removeItem();
    console.log("itemB ",itemB);
    let child2: Node<T> = thisNode.disconnectChild(2);
    console.log("child2 ",child2);
    let child3: Node<T> = thisNode.disconnectChild(3);
    console.log("child3 ",child3);
    let newRight: Node<T> = new Node();

    // console.log("itemC ",itemC);

    // console.log("check root ", thisNode === this.#root);
    if (thisNode === this.#root) {
      // console.dir(String(thisNode.length) );
      // console.dir(thisNode.print());
      this.#root = new Node();
      // console.dir(String(thisNode.length) );
      // console.dir(thisNode.print());
      parent = this.#root;
      this.#root.connectChild(0, thisNode);
      // console.dir("after connectChild");
    } else {
      parent = <Node<T>>thisNode.getParent();
    }

    itemIndex = parent.insertItem(itemB);
    // console.dir("inser B to parent " + itemIndex);

    let parentLength = parent.length;

    for (let i = parentLength - 1; i > itemIndex; i--) {
      let temp: Node<T> = parent.disconnectChild(i);
      parent.connectChild(i+1, temp);
    }

    parent.connectChild(itemIndex+1, newRight);
    // console.dir("inser parent " + parent);

    newRight.insertItem(itemC);
    // console.dir("insertItem newRight  " + newRight);

    // if (!thisNode.isLeaf()) {
      newRight.connectChild(0, child2);
      // console.dir("connectChild 0 child2 newRight  " + newRight);
      newRight.connectChild(1,child3);
      // console.dir("connectChild 1 child3 newRight  " + newRight);
    // }
    // console.log("print")
    parent.print();
    newRight.print();
    // console.log("end print)")

  }

  getNextChild(current: Node<T>, node: T): Node<T> {
    let i:number;
    let currentLength: number = current.length;
    // console.log("enter getNextChild currentLength " + currentLength)
    for (i = 0; i < currentLength; i++) {
      // console.log(" getNextChild check " + current.getItem(i))
      if( node < <T>current.getItem(i) ){
        // console.log(`getNextChild node ${node} i ${i}`)
        return <Node<T>>current.getChild(i);
      }
    }

    return <Node<T>>current.getChild(i);
  }

  print(): void {
    this.recDisplayTree(this.#root, 0, 0);
  }

  recDisplayTree(current: Node<T>, level: number, childNumber: number): void {
    console.log(`level=${level} child=${childNumber} `);
    current.print();

    let items = current.length;
    for (let i = 0; i < items + 1; i++) {
      let nextNode: Node<T> = <Node<T>>current.getChild(i);
      if (nextNode) {
        this.recDisplayTree(nextNode, level+1, i);
      } else {
        return;
      }
    }
  }
}

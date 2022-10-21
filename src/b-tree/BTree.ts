import Node from "./Node";

export default class BTree<T> {

  #root: Node<T> = new Node();

  constructor() {

  }

  insert(node: T): void {
    let current: Node<T> = this.#root;

    while (true) {
      console.log(`insert node ${node} corrent.length ${current.length} is full= ${String(current.isFull())}, is leaf= ${String(current.isLeaf())}` )
      if (current.isLeaf()) {
        if (current.isFull()) {

          let newRight: Node<T> = this.split(current, { value: node, child: null });

          current = <Node<T>>current.getParent();
          current.connectChild(current.length, newRight);
          current = this.getNextChild(current, node);
          break; // insert and exit, need refactor
        } else {
          let item = current.insertItem(node); // insert and exit, need refactor
          break;
        }
      } else {
        current = this.getNextChild(current, node);
      }
    }

    // let item = current.insertItem(node);
  }

  #bufferSplitArray() {

  }

  split(thisNode: Node<T>, newDivNode: { value: T, child: Node<T> | null }): Node<T> {
    console.log("\nstart split")
    //buffer array
    let newItems: T[] = new Array(thisNode.length + 1);
    let newChildrens: Node<T>[] = new Array(thisNode.length + 2);
    let j = 0;

    newChildrens[0] = <Node<T>>thisNode.getChild(0)
    let inserFlag = false;
    for (let i=0; i < thisNode.length; i++) {
      let item = thisNode.getItem(i);
      if (newDivNode.value < item && newDivNode.value > newItems[j-1]) {
        inserFlag = !inserFlag;
        newItems[j] = newDivNode.value;
        console.log(`newItem j=${j} newItems[j]=${newItems[j]}`)
        if (!thisNode.isLeaf()){
          console.log(`newChildrens j+1=${j+1} `)
          newChildrens[j+1] = <Node<T>>newDivNode.child;
        }
        j++;
      }
      newItems[j] = item;
      if (!thisNode.isLeaf()){
        console.log(`newChildrens j+1=${j+1} `)
        newChildrens[j+1] = <Node<T>>thisNode.getChild(i+1);
      }
      j++;
    }
    if (!inserFlag) {
      newItems[newItems.length -1] = newDivNode.value; 
    }
    console.dir(newItems);
    let indexForSplit: number = Math.floor(newItems.length / 2) - 1;
    let newParentValue = newItems[indexForSplit];

    //buffer children links
    // for (let i=0; i < thisNode.length+1; i++) {
    //   let child = thisNode.getChild(i);
    //   if (node < item && node > newItems[j-1]) {
    //     newItems[j] = node;
    //     j++;
    //   }
    //   newItems[j] = item;
    //   j++;
    // }
    // let child2: Node<T> = thisNode.disconnectChild(2);
    // let child3: Node<T> = thisNode.disconnectChild(3);

    // prepare newRight
    let newRight: Node<T> = new Node();
    let itemB: T = newParentValue;
    let i = 0
    for(i = newItems.length - 1; i > indexForSplit; i--) {

    }
    console.log(`\nthisNode refactor thisNode length=${thisNode.length}`)
    for (let i=thisNode.length - 1; i >= 0; i--) {
      let item = thisNode.getItem(i);
      if (item >= newParentValue) {
        console.log(`\nthisNode remove ${item} , child ${i+1}`)
        let tempValue = thisNode.removeItem();
        let child = thisNode.disconnectChild(i+1);
      } else {
        console.log(`\nthisNode leave ${item}`)
      }
    }
    console.log(`thisNode length=${thisNode.length} `)

   

    i = 0;
    j = 0;
    console.log(`\n newRight begin length=${newRight.length} `)
    for(i = indexForSplit+1; i < newItems.length; i++) {
      // let tempValue = thisNode.removeItem();
      // if (newDivNode.value)
      //      let child = thisNode.getChild(i+1);
      console.log(`\n newRight insert length=${newItems[i]} `)
      newRight.insertItem(newItems[i]);
      if (!thisNode.isLeaf()){
        console.log(`\n newRight children link j=${j} `)
        newRight.connectChild(j , newChildrens[i]);
        j++;
      }
      // if (tempValue !== newDivNode.value) {
      //   newChildrens[i+1] = thisNode.disconnectChild(i+1);

      //   thisNode.connectChild( j , newChildrens[i+1]);
      // } else {
      //   thisNode.connectChild( j ,newDivNode.child);
      // }
      // newChildrens[i+1] = thisNode.disconnectChild(i+1);

      // thisNode.connectChild();
    }
    if (!thisNode.isLeaf()){
      console.log(`\n newRight children link j=${j} `)
      newRight.connectChild(j , newChildrens[i]);
    }
    console.log(`\n newRight end length=${newRight.length} `)

    // if (!thisNode.isLeaf()){
    //   newRight.connectChild(i , newChildrens[i]);
    // }

    // prepare item for parent node
    let parent: Node<T>;
    // let itemB: T = thisNode.removeItem();

    if (thisNode === this.#root) {
      console.log(`\n thisNode is root `)
      this.#root = new Node();
      parent = this.#root;
      this.#root.connectChild(0, thisNode);
    } else {
      console.log(`\n thisNode NOT root `)
      parent = <Node<T>>thisNode.getParent();
    }

    // insert item to parent
    let itemIndex: number;
    let parentLength: number ;
    if (parent.isFull()) {
      // parent.print()
      console.log(`\n parent is FULL, start next split `)
      let newRight2 = this.split(parent, { value: itemB, child: newRight });
      console.log(`\n end next split newRight2.length=${newRight2.length}`)
      // current = <Node<T>>current.getParent();
      //     current.connectChild(current.length, newRight);
      //     current = this.getNextChild(current, node);

      //thisNode.setParent();
      parent = <Node<T>>thisNode.getParent();
      parentLength = parent.length;
      console.log(`\n get new parent parent.length=${parent.length}`)
      // itemIndex = parent.insertItem(itemB);
      itemIndex = parent.findItem(itemB);
      console.log(`\n check itemB in parent itemB=${itemB}, position itemIndex=${itemIndex}`)

      console.log(`\n  rebase children links in parent`)
      for (let i = parentLength - 1; i > itemIndex; i--) {
        console.log(`\n  disconnect ${i}, connect ${i+1}`)
        let temp: Node<T> = parent.disconnectChild(i);
        parent.connectChild(i+1, temp);
      }

      console.log(`\n   connect ${itemIndex+1}`)
      parent.connectChild(parent.length, newRight2);
      // current = this.getNextChild(current, node);
    } else {
      itemIndex = parent.insertItem(itemB);
      parentLength = parent.length;
      console.log(`\n get parent.length=${parent.length}`)
      console.log(`\n check itemB in parent itemB=${itemB}, position itemIndex=${itemIndex}`)

      // rebase children links
      console.log(`\n  rebase children links in parent`)
      for (let i = parentLength - 1; i > itemIndex; i--) {
        console.log(`\n  disconnect ${i}, connect ${i+1}`)
        let temp: Node<T> = parent.disconnectChild(i);
        parent.connectChild(i+1, temp);
      }

      console.log(`\n   connect ${itemIndex+1}`)
      parent.connectChild(itemIndex + 1, newRight);
    }
    console.log("exit from split")
    return newRight;

    
    // newRight.insertItem(itemC);
    // newRight.connectChild(0, child2);
    // newRight.connectChild(1,child3);


    // let itemIndex: number;
    // let parent: Node<T>;
    // let itemC: T = thisNode.removeItem();
    // let itemB: T = thisNode.removeItem();
    // let child2: Node<T> = thisNode.disconnectChild(2);
    // let child3: Node<T> = thisNode.disconnectChild(3);
    // let newRight: Node<T> = new Node();

    // if (thisNode === this.#root) {
    //   this.#root = new Node();
    //   parent = this.#root;
    //   this.#root.connectChild(0, thisNode);
    // } else {
    //   parent = <Node<T>>thisNode.getParent();
    // }

    // itemIndex = parent.insertItem(itemB);

    // let parentLength = parent.length;

    // for (let i = parentLength - 1; i > itemIndex; i--) {
    //   let temp: Node<T> = parent.disconnectChild(i);
    //   parent.connectChild(i+1, temp);
    // }

    // parent.connectChild(itemIndex+1, newRight);
    // newRight.insertItem(itemC);
    // newRight.connectChild(0, child2);
    // newRight.connectChild(1,child3);
  }

  getNextChild(current: Node<T>, node: T): Node<T> {
    let i:number;
    let currentLength: number = current.length;

    for (i = 0; i < currentLength; i++) {
      if( node < <T>current.getItem(i) ){
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

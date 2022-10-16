import {
  BinaryTree as IBinaryTree,
  Node as INode,
  NodeLink } from "./Interface";
import Node from "./Node";

export default class BinaryTree<T> implements IBinaryTree<T> {
  root: NodeLink<T> = null;

  constructor(array: Array<T>) {
    for(let i=0;i<=array.length;i++) {
      this.insert(<any>array[i], array[i]);
    }
    console.log(this.root)
  }

  public has(key: number, node: NodeLink<T> = this.root): Boolean {
    if(node === null || node === undefined) {
      return false;
    }

    if(node.key > key) {
      return this.has(key, node.leftChild);
    } else if (node!.key < key) {
      return this.has(key, node.rightChild);
    } else if (node!.key === key) {
      return true;
    }

    return false;
  }

  insert(key: number, data: T): void {
    const newNode = new Node<T>(key, data);

    if (!this.root) {
      this.root = newNode;
    } else {
      let current: NodeLink<T> = this.root;
      let parent: NodeLink<T>;

      while(true) {
        parent = current;

        if(key < current.key) {
          current = current?.leftChild;

          if(!current) {
            parent!.leftChild = newNode;

            return undefined;
          }
        } else {
          current = current?.rightChild;

          if(!current) {
            parent!.rightChild = newNode;

            return undefined;
          }
        }
      }
    }
  }

  list(localRoot: NodeLink<T>) {
    if(localRoot) {
      this.list(localRoot!.leftChild);
      console.log(localRoot!.data + " ");
      this.list(localRoot!.rightChild)
    }
  }

  print() {
    return this.list(this.root);
  }

  public find(key: number): NodeLink<T> {
    let current: NodeLink<T> = this.root;

    if(!current) {
      return null;
    }

    while(current.key !== key) {
      if(current.key > key) {
        current = current?.leftChild;
      } else {
        current = current?.rightChild;
      }
      if(!current) {
        return null;
      }
    }

    return current;
  }

  delete(key: number): Boolean {

    return false;
  };




}

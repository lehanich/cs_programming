import {
  Node as INode,
  NodeLink } from "./Interface";

export default class Node<T> implements INode<T> {
  public key: number;
  public data: T;
  public leftChild: NodeLink<T>;
  public rightChild: NodeLink<T>;

  constructor(key: number, data: T) {
    this.key = key;
    this.data = data;
  }


  displayNode() {

  }
}

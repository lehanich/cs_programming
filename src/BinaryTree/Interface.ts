
export interface BinaryTree<T> {
  root: NodeLink<T>;

  has(key: number, node: NodeLink<T>): Boolean;
  insert(key: number, data: T): void;
  delete(key: number): Boolean;
  find(key: number): NodeLink<T>;
}

export type Node<T> = {
  key: number;
  data: T;
  leftChild: NodeLink<T>,
  rightChild: NodeLink<T>
}

export type NodeLink<T> = undefined | null | Node<T>;

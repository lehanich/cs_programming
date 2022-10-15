
export interface BinaryTree<T> {
  root: NodeLink<T>;

  find(key: number) :NodeLink<T>;
  insert(key: number, data: T): void;
  delete(key: number): Boolean;
}

export type Node<T> = {
  key: number;
  data: T;
  leftChild: NodeLink<T>,
  rightChild: NodeLink<T>
}

export type NodeLink<T> = undefined | null | Node<T>;

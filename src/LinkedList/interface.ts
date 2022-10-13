export interface LinkedList<T> {
  first: ListNodeLink<T>;
  last: ListNodeLink<T>;
  next: ListNodeLink<T>;

  add(value: ListNodeVal<T>): LinkedList<T>;

  // first: LinkedListItem<T>;
  // last: LinkedListItem<T>;
  // next: LinkedListItem<T>;
  // prev: LinkedListItem<T>;

  // addFirst:;
  // addLast:;

  insertFirst(value: ListNodeVal<T>): LinkedList<T>;
  deleteFirst(): ListNodeLink<T>;
  deleteLast(): ListNodeLink<T>;

  // deleteElement():;
  // insert():;
  // find():;
}

export interface LinkedListNode<T> {
  value: ListNodeVal<T>;
  array?: ListNodeVal<T>[];
  next: ListNodeLink<T>;
  prev?: ListNodeLink<T>;
}

export type ListNodeVal<T> = T | undefined;

export type ListNodeLink<T> = undefined | null | LinkedListNode<T>;

export type ListNodeArray<T> = ListNodeVal<T>[];
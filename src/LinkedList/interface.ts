export interface LinkedList<T> {
  add(value: ListItemVal<T>): LinkedList<T>;

  // first: LinkedListItem<T>;
  // last: LinkedListItem<T>;
  // next: LinkedListItem<T>;
  // prev: LinkedListItem<T>;

  // addFirst:;
  // addLast:;

  insertFirst(value: ListItemVal<T>): LinkedList<T>;
  deleteFirst(): ListItemLink<T>;
  deleteLast(): ListItemLink<T>;

  // deleteElement():;
  // insert():;
  // find():;
}

export interface LinkedListItem<T> {
  value: ListItemVal<T>;
  next: ListItemLink<T>;
  prev?: ListItemLink<T>;
}

export type ListItemVal<T> = T;

export type ListItemLink<T> = undefined | null | LinkedListItem<T>;
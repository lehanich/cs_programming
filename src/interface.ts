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

export interface Queue<T> {
  maxSize: number;
  length: number;
  head?: ListItemLink<T>;
  rear?: ListItemLink<T>;

  push(value: ListItemVal<T>): void;
  pop(): ListItemVal<T>;
}

// двусторонняя очередь
export interface DoubleQueue<T> {
  maxSize: number;
  length: number;
  head?: ListItemLink<T>;
  rear?: ListItemLink<T>;

  push(value: ListItemVal<T>): void;
  pop(): ListItemVal<T>;

  unshift(value: ListItemVal<T>): void;
  shift(): ListItemVal<T>;
}

export interface Stack<T> {
  readonly maxSize: number;
  head: ListItemVal<T> | undefined;
  // top: number;
  // stackArray: ListItemVal<T>[];

  push(value: ListItemVal<T>): void;
  pop(): ListItemVal<T>;
}

export interface Structure<T> {
  get(key: string): StructureItem<T>;
  set(key: string, value: StructureItem<T>): void;
}

export type StructureItem<T> = number | string | null;
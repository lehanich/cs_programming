import {
  LinkedListNode as ILinkedListNode,
  ListNodeVal,
  ListNodeArray,
  ListNodeLink
} from "./interface";

export default class LinkedListNode<T> implements ILinkedListNode<T> {
  value: ListNodeVal<T>;
  array: ListNodeArray<T> | undefined;
  next: ListNodeLink<T> = null;
  prev: ListNodeLink<T> = null;
  
  constructor(value: ListNodeVal<T> | ListNodeArray<T>,
              next?: ListNodeLink<T>,
              prev?: ListNodeLink<T>) {
    if (value !== undefined && Array.isArray(value)) {
      this.array = <ListNodeArray<T>>value;
    } else {
      this.value = value;
      this.array = undefined;
    }

    this.next = next;
    this.prev = prev;
  }
}

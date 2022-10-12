import {
  LinkedListItem as ILinkedListItem,
  ListItemVal,
  ListItemLink
} from "../interface";

export default class LinkedListItem<T> implements ILinkedListItem<T> {
  value: ListItemVal<T>;
  next: ListItemLink<T> = null;
  prev: ListItemLink<T> = null;
  
  constructor(value: ListItemVal<T>,
              next?: ListItemLink<T>,
              prev?: ListItemLink<T>) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

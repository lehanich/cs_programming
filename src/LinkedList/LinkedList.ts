//  двусторонний двусвязанный список
import {
  LinkedList as ILinkedList,
  ListNodeVal,
  ListNodeLink,
  ListNodeArray
} from "./interface";
import LinkedListNode from "./LinkedListNode";

export default class LinkedList<T> implements ILinkedList<T> {
  first: ListNodeLink<T> = null;
  last: ListNodeLink<T> = null;
  next: ListNodeLink<T> = null;

  constructor() {
    this.first = null;
    this.last = null;
    this.next = null;
  }

  public add(value: ListNodeVal<T> | ListNodeArray<T>): ILinkedList<T> {
    const newItem = new LinkedListNode(value);

    if (!this.first || !this.last) {
      this.first = newItem;
      this.last = newItem;
      this.next = newItem;

      return this;
    }

    newItem.prev = this.last;
    this.last.next = newItem;
    this.last = newItem;

    return this;
  }

  *[Symbol.iterator]() {
    yield this.first?.value;

    let currentNode = this.first;

    while (currentNode) {
      currentNode = currentNode.next;
      yield currentNode?.value;
    }
  }

  // public first(): LinkedListItem<T> {

  //   return true;
  // }

  // public last(): LinkedListItem<T> {

  // }

  // public next(): LinkedListItem<T> {

  // }

  // public prev(): LinkedListItem<T> {

  // }

  insertFirst(value: ListNodeVal<T>): ILinkedList<T> {
    const newItem = new LinkedListNode(value);

    if (!this.first || !this.last) {
      this.first = newItem;
      this.last = newItem;
      this.next = newItem;

      return this;
    }

    newItem.next = this.first;
    this.first.prev = newItem;
    this.first = newItem;

    return this;
  }

  deleteFirst(): ListNodeLink<T> {
    if (!this.first) {
      return null;
    }

    const deletedFirst = this.first

    this.first =  this.first?.next;

    if (this.first) {
      delete this.first.prev;
    }

    return deletedFirst;
  }

  deleteLast(): ListNodeLink<T> {
    if (!this.last) {
      return null;
    }

    const deletedLast = this.last

    this.last =  this.last?.prev;

    if (this.last) {
      delete this.last.next;
    }

    return deletedLast;
  }
}

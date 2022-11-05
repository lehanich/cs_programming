import { Priority } from "./interface";

type I = [Priority, any];

export default class PriorityQ<T> {
  #maxSize: number = 100;
  #queArray: I[] = new Array(100);
  #length: number = 0;

  constructor(size: number) {
    this.#maxSize = size;
    this.#queArray = new Array(size);
    this.#length = 0;
  }

  insert(value: any, priority: Priority) {
    let j: number;
    let item: I = [priority, value];

    if (this.#length ===0) {
      this.#queArray[0] = item;
    } else {
      switch(priority) {
        case "low":
          this.#queArray[this.#length - 1] = item
          break;
        case "normal":
          let insert = Math.floor(this.#length / 2)

          for (j=this.#length - 1; j >= insert; j--) {
            this.#queArray[j+1] = this.#queArray[j]
          }

          this.#queArray[insert] = item;
          break;
        case "height":
          for (j=this.#length - 1; j >= 0; j--) {
            this.#queArray[j+1] = this.#queArray[j]
          }

          this.#queArray[0] = item;
          break;
        default: 


      }
    }

    this.#length++;
  }

  remove(delWorker: T) {
    let i = 0;
      console.dir(this.#queArray)
      let array = new Array(this.#maxSize)
      for (let worker of this.#queArray) {
        console.log("delWorker:")
        console.dir(worker)
        if (i>= this.#length) {
          break;
        }

        if (worker && worker != undefined && worker[1] === delWorker) {
          // delete Scheduler.#instance!.workers[i];
          // break;
        } else {
          array[i] = worker
          i++
        }
      }
      this.#length--;
      this.#queArray = array
      console.log(`after del ${this.#length}`) 
      console.dir(this.#queArray)
  }

  peekMin() {
    return this.#queArray[this.#length - 1]
  }

  peekMax() {
    return this.#queArray[0]
  }

  peek(i: number) {
    return this.#queArray[i]
  }

  isEmpty() {
    return this.#length === 0;
  }

  isFull() {
    return this.#length === this.#maxSize;
  }

  get length() {
    return this.#length;
  }
}
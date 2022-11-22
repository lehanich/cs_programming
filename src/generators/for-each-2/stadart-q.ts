import { Priority,
         StrategyAdapter,
         WorkerContainer } from "./interface";

export default class StadartQ<T> implements StrategyAdapter {
  #maxSize?: number | null;
  #queueArray: WorkerContainer[] = new Array(100);
  #length: number = 0;

  constructor(size?: number | null) {
    this.#maxSize = size;
    this.#queueArray = [];
    this.#length = 0;
  }

  insert(worker: any, priority: Priority): void {
    this.#queueArray.push([priority, worker]);
  };

  remove(delWorker: Worker): void {
    let i = 0;
    let array = []

    for (let worker of this.#queueArray) {
      if (worker && worker[1] !== delWorker) {
        array.push(worker)
      }
      i++
    }

    this.#queueArray = array
  };

  peek(index: number): WorkerContainer {
    return this.#queueArray[index];
  };

  get length(): number {

    return this.#length;
  };
}
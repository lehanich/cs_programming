import Scheduler from "./scheduler";

type State = "run" | "waiting";

export default class TaskWorker<T> {
  #callback;
  #iterable;
  #worker:any;
  #state: State = "waiting"; 
  #sheduler;


  constructor (iterable: any, callback: any, options:any) {
    if (iterable[Symbol.iterator] === undefined) {
      throw new Error("Object not iterable")
    }

    if (typeof callback !== "function"){
      throw new Error("Callback is not a function")
    }

    this.#iterable = iterable;
    this.#callback = callback;
    this.#sheduler = new Scheduler(this, options);
  }

  #sleepTime(sleepDuration: number): void {
    var now = new Date().getTime();
  
    while (new Date().getTime() < now + sleepDuration){ 
      /* Do nothing */ 
    }
  }

  *iter(resolve: any, reject: any): any {
    let status;
    let cursor = this.#iterable[Symbol.iterator]();
    let i=0;

    while (true) {
      if (status === "run") {
        let item = cursor.next();

        if (item.done) {
          this.#sheduler.deleteWorker(this);
          resolve();

          return { done:true };
        }

        try {
          this.#callback(i, item, this.#iterable);
          i++;
        } catch(err) {
          reject(err);
        }

        status = yield item;
      } else {
        status = yield;
      }
    }

    this.#sheduler.deleteWorker(this)
    resolve()
  }

  iterate(resolve: any, reject: any) {
    this.#sheduler.start()
    this.#worker = this.iter(resolve, reject);
    let status = this.#worker.next();

    if (status.done) {
      resolve();
    }
  }

  set state(state: State) {
    this.#state = state;

    if (this.#worker) {
      this.#worker.next(state)
    }
  }
}

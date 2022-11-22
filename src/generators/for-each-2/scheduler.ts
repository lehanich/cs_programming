import { Priority } from "./interface";
import PriorityQ from "./priority-q";
import StandartQ from "./stadart-q";
import { Strategy } from "./strategy";

type I = any;

export default class Scheduler<T> {
  #timeout = 100; // timeout for threads
  #delay = 1000; // for other apps
  workers: [Priority, I][] = [];
  worker: any;
  static #instance: any;
  cursor: any;
  status: any;
  static queueType: any;

  constructor (worker: any, options: any) {
    if (Scheduler.#instance == null || options.init) {
      Scheduler.#instance = this;

      if (options.priority === "PriorityQ") {
        Scheduler.queueType = "PriorityQ";
        Scheduler.#instance.workers = new Strategy(new PriorityQ(100));
      } else {
        Scheduler.queueType = "Vector";
        Scheduler.#instance.workers = new Strategy(new StandartQ());
      }
    }

    if (worker) {
      Scheduler.#instance.addWorker(worker, options);
    }

    if (options.timeout) {
      Scheduler.#instance.#timeout = options.timeout
    }

    if (options.delay) {
      Scheduler.#instance.#delay = options.delay
    }

    return <any> Scheduler.#instance;
  }

  addWorker(worker: any, options: any) {
    Scheduler.#instance.workers.insert(worker, options.priority);
  }

  deleteWorker(delWorker: any) {
    Scheduler.#instance.workers.remove(delWorker);

    if (Scheduler.#instance!.workers.length === 0) {
      let status = Scheduler.#instance!.cursor.next("stop");
    }
  }

  timeout(priority: Priority) {
    let time = 100;
    let length = Scheduler.#instance!.workers.length > 0 ?
                 Scheduler.#instance!.workers.length : 1;

    switch(priority) {
      case "height":
        time = Math.ceil(this.#timeout / length * 50 / 100);
        break;

      case "normal":
        time = Math.ceil(this.#timeout / length * 30 / 100);
        break;

      case "low":
        time = Math.ceil(this.#timeout / length * 20 / 100);
        break;

      default:
        return Math.ceil(this.#timeout / length)
    }

    return time;
  }

  *execute(): any {
    let now = new Date().getTime();
    let status: any

    while (Scheduler.#instance!.workers.length > 0) {
      if (new Date().getTime() > now + this.#timeout) {
        setTimeout(() => {
          now = new Date().getTime();

          for (let i=0; i < Scheduler.#instance!.workers.length; i++) {
            let worker: any;

            worker = Scheduler.#instance!.workers.peek(i);

            if (worker) {
              let now2 = new Date().getTime();

              while (new Date().getTime() < now2 + this.timeout(worker[0])) {
                this.updateState(worker[1], "run");
              }

              this.updateState(worker[1], "waiting");
            }
          }

          Scheduler.#instance!.cursor.next();
        }, this.#delay);

        status = yield "";

        if (status === "stop") {
          return "done";
        }
      }
    }
  }

  updateState(worker: any,  state: any) {
    worker.state = state
  }

  static init(options: any) {
    Scheduler.#instance = new Scheduler(null, options);
    Scheduler.#instance.#timeout = options.timeout ? options.timeout : 100;
    Scheduler.#instance.#delay = options.delay ? options.delay : 1000;
  }

  start() {
    if (Scheduler.#instance!.cursor == null) {
      Scheduler.#instance!.cursor = Scheduler.#instance!.execute();
      Scheduler.#instance!.cursor.next();
    }
  }

  // deprecated
  #sleepTime(sleepDuration: number): void {
    var now = new Date().getTime();
  
    while (new Date().getTime() < now + sleepDuration){ 
      /* Do nothing */ 
    }
  }
}
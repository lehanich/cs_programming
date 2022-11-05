import { Priority } from "./interface";
import PriorityQ from "./priority-q";

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
      console.log("schedule is null")
      Scheduler.#instance = this;

      if (options.priority === "PriorityQ") {
        Scheduler.queueType = "PriorityQ";
        Scheduler.#instance.workers = new PriorityQ(100);
      } else {
        Scheduler.queueType = "Vector";
        Scheduler.#instance.workers = [];
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
    if (Scheduler.queueType = "PriorityQ") {
      Scheduler.#instance.workers.insert(worker, options.priority);
    } else {
      Scheduler.#instance!.workers.push([options.priority, worker]);
      console.log("add worker", Scheduler.#instance!.workers)
    }
  }

  deleteWorker(delWorker: any) {
    if (Scheduler.queueType = "PriorityQ") {
      Scheduler.#instance.workers.remove(delWorker);
    } else {
      let i = 0;
      console.dir(Scheduler.#instance!.workers)
      let array = []
      for (let worker of Scheduler.#instance!.workers) {
        console.log("delWorker:")
        console.dir(worker)
        if (worker && worker[1] === delWorker) {
          // delete Scheduler.#instance!.workers[i];
          // break;
        } else {
          array.push(worker)
        }
        i++
      }
      Scheduler.#instance!.workers = array
    }

    if (Scheduler.#instance!.workers.length === 0) {
      let status = Scheduler.#instance!.cursor.next("stop");
      console.log(status)
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
    console.log("start scheduler")
    console.dir(Scheduler.#instance!.workers)

    console.log("timeout", this.timeout)

    while (Scheduler.#instance!.workers.length > 0) {
    // while (true) {
        if (new Date().getTime() > now + this.#timeout) {
          console.log("lnegth workers " + Scheduler.#instance!.workers.length)

          setTimeout(() => {
            console.log(`schedule waik ${this.#delay}ms `, new Date().getTime() , now + this.#delay)
            now = new Date().getTime();

                for (let i=0; i < Scheduler.#instance!.workers.length; i++) {
                  let worker: any;

                  if (Scheduler.queueType = "PriorityQ") {
                    worker = Scheduler.#instance!.workers.peek(i);
                  } else {
                    worker = Scheduler.#instance!.workers[i];
                  }

                  if (worker) {
                    let now2 = new Date().getTime();

                    // setTimeout(() => {
                    //       console.log(`task item wake for ${this.timeout(worker[0])}ms`, now);
                    //       this.updateState(worker[1], "run");
                    //       now2 = new Date().getTime();

                    //       // while (new Date().getTime() < now2 + this.timeout(worker[0])){
                    //       //   this.updateState(worker[1], "run");
                    //       // }
                    // }, this.#timeout - this.timeout(worker[0]));

                    while (new Date().getTime() < now2 + this.timeout(worker[0])) {
                      console.log(`task item wake for ${this.timeout(worker[0])}ms`, now);
                      this.updateState(worker[1], "run");
                    }
        
                    console.log("task item waiting");
                    this.updateState(worker[1], "waiting");
                  }
                }
            Scheduler.#instance!.cursor.next();
          }, this.#delay);
          
          status = yield "";
          console.log(`workers length ${Scheduler.#instance!.workers.length}`)
          console.log(`schedule sleep ${status}`)

          if (status === "stop") {
            console.log("stop!");
            return "done";
          }
        }
    }

    console.log("end schedule generator")
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

  #sleepTime(sleepDuration: number): void {
    var now = new Date().getTime();
  
    while (new Date().getTime() < now + sleepDuration){ 
      /* Do nothing */ 
    }
  }
}
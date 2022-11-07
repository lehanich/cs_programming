export function setImmediate(cb: Function, ...args: [any]): unknown {
  let task = new Task(cb, args)

  queueMicrotask(() => {
    while (task.active) {
      task.start(...args);
    }
  });

  return task;
}

export function clearImmediate(task: any) {

  console.log("clear!!! " + String(task.active))
  task.stop();

}

class Task {
  #active: Boolean;
  start: Function;

  constructor(cb: Function, ...args: [any]) {
    this.#active = true;
    this.start = cb;
  }

  get active() {
    return this.#active;
  }
  stop() {
    this.#active = !this.#active;
  }
}
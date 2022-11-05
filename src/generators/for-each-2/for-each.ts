import TaskWorker from "./task-worker";

export default function forEach<T, I extends Iterable<T>>(iterable: I,
                                                          callback: (el: T, i: number, data: I) => void,
                                                          options: any): Promise<void> {
  return new Promise((resolve, reject) => {
    let worker = new TaskWorker(iterable, callback, options);

    worker.iterate(resolve, reject);
  });
}

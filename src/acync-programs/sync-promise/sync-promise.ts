
export default class SyncPromise<T> {

  #status: "pending" | "fullfiled" | "rejected";
  #value: any;

  constructor(fn: (resolve: Function, reject: Function) => void) {
    this.#status = "pending";

    let resolve = (value: any) => {
      if (this.#status === "pending") {
        this.#status = "fullfiled";
        this.#value = value;
      }
    }

    let reject = (e: Error | unknown) => {
      if (this.#status === "pending") {
        this.#status = "rejected";
      }
    }

    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled?: any | undefined | null, onRejected?: any | undefined | null) {
    return new SyncPromise((resolve, reject) => {
      
      const fnFullFilled = (value: any) => { 
        try {
          resolve(onFulfilled ? onFulfilled(value) : value )
        } catch (e) {
          reject(e);
        }
      }

      const fnRejected = (e: any) => { 
        try {
          reject(onRejected ? onRejected(e) : e )
        } catch (e) {
          reject(e);
        }
      }

      if (this.#status === "fullfiled") {
        fnFullFilled(this.#value);
        return;
      }

      if (this.#status === "rejected") {
        fnRejected(this.#value);
        return;
      }

    });
  }

  catch(cb: (e: Error) => Function) {
    return new SyncPromise((resolve, reject) => {

    });
  }

  static resolve<T>(value: T): SyncPromise<T> {
    return new SyncPromise<T>((resolve) => resolve(value));
  }

  static reject<T>(err: T): SyncPromise<T> {
    return new SyncPromise<T>((resolve, reject) => reject(err));
  }

  static all(iterable: []) {
    this.#it
  }

  static any(iterable: []) {

  }
}
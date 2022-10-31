let timeout = 50;

export default function forEach<T, I extends Iterable<T>>(iterable: I, callback: (el: T, i: number, data: I) => void): Promise<void> {
  return new Promise((resolve, reject) => {
    function* iterate(): any {

      if (typeof iterable[Symbol.iterator]() === "function") {
        reject("Object not iterable")
      }

      if (typeof callback !== "function"){
        reject("Callback is not a function")
      }

      let now = new Date().getTime();
      let i=0;

      for (const item of iterable) {
        try {
          callback(item, i++, iterable);
        } catch(err) {
          reject(err);
          return;
        }

        if (new Date().getTime() < now + timeout) {
          setTimeout(() => {
            console.log("wake")
            now = new Date().getTime();
            worker.next();
          }, timeout);

          yield;
          console.log("sleep");
        }
      }

      resolve();
    }

    let worker = iterate();
    worker.next();
  });
}

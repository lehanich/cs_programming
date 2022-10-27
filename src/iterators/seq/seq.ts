
// export default function<T extends Iterable<any>>(...args: T[]): T extends Iterable<infer V> ?
//                                                               Iterable<V> : Iterable<unknown>     { // IterableIterator<undefined> {

export default function(...args: any[]): IterableIterator<undefined> {
  let cursor:any = null;
  let argsCursor = args[Symbol.iterator]();

  return {
    [Symbol.iterator](): IterableIterator<undefined> {
      return this;
    },

    next(): IteratorResult<undefined> {
      if (!cursor) {
        let test = argsCursor.next();

        if (test.done) {
          return { done: true, value: null }
        }

        cursor = test.value[Symbol.iterator]();
      }

      const res = cursor.next();

      if (res.done) {
        cursor = null;

        return this.next();
      }

      return res;
    }
  }
}

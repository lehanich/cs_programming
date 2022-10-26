
export default function(object: any, func: Function): IterableIterator<number> {
  return {
    [Symbol.iterator](): IterableIterator<number> {
      return this;
    },
    next(): IteratorResult<number> {
      let el = object.next();

      for (el of object) {
        if (func(el)) {
          return {
            value: el,
            done: false
          }
        }
      }

      return {
        value: null,
        done: true
      }
    }
  }
}

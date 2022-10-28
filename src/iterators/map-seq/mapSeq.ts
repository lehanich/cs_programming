
export default function(array: any[], funcs: Function[]): IterableIterator<undefined> {
  let cursor = array[Symbol.iterator]();

  return {
    [Symbol.iterator](): IterableIterator<undefined> {
      return this;
    },

    next(): IteratorResult<any> {
      let funcsArr = funcs;
      let el = cursor.next()
      let newValue = el.value;

      if (el.done) {
        return {done: true, value: null}
      }

      for (let func of funcsArr) {
        newValue = func(newValue);
      }

      return { done: false, value: newValue }
    }
  }
}

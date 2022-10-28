
export default function(array: number[], funcs: Function[]): IterableIterator<number> {
  let cursor = array[Symbol.iterator]();

  return {
    [Symbol.iterator](): IterableIterator<number> {
      return this;
    },

    next(): IteratorResult<number> {
      let el = cursor.next()
      let newValue:number = el.value;

      if (el.done) {
        return { done: true, value: null }
      }

      for (let func of funcs) {
        newValue = func(newValue);
      }

      return { done: false, value: newValue }
    }
  }
}

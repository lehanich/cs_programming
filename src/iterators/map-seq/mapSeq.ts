
export default function(array: number[], funcs: Function[]): IterableIterator<number> {
  let cursor: IterableIterator<number> = array[Symbol.iterator]();

  return {
    [Symbol.iterator](): IterableIterator<number> {
      return this;
    },

    next(): IteratorResult<number> {
      let el: IteratorResult<number> = cursor.next()
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

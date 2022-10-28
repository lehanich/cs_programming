
export default function(...args: any[]): IterableIterator<undefined> {
  let buffCursor:any[] = [];

  for (let el of args) {
    buffCursor.push(el[Symbol.iterator]());
  }

  return {
    [Symbol.iterator](): IterableIterator<undefined> {
      return this;
    },

    next(): IteratorResult<any> {
      let el = Array();

      for (let i=0; i < args.length; i++) {
        let cursor = buffCursor[i].next();

        if (cursor.done) {
          return { done: true, value: null }
        } else {
          el.push(cursor.value)
        }
      }

      return { done: false, value: el }

    }
  }
}

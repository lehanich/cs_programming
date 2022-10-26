
export default function(...args: any) {//: IterableIterator<undefined> {
  let index: number = 0;
  let cursor:any;
  let state = 0;

  return {
    [Symbol.iterator]() { //: IterableIterator<undefined> {
      return this;
    },
    next() { //: IteratorResult<undefined> {
      if (args.length <= index) {
        return { done: true, value: null }
      }

      if (state == 0) {
        cursor = args[index][Symbol.iterator]();
        state = 1;
      }

      if (cursor == null) {
        index++;
      } else {
        const res = cursor.next();
        console.log("res.value", res.value);
        console.log("res.done", String(res.done));

        if (res.done) {
          cursor = null;
          index++;
          state = 0;
          // this.next();
          return { done: false, value: "__" }
        } else { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          // return res;
          return { value: res.value, done: false }
        }
      }
    }
  }
}

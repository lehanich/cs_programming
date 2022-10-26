type Enum<T> = [number, T]

export default function(object: IterableIterator<Object>, col: number): IterableIterator<Object> {
  let index = 0;

  return {
    [Symbol.iterator](): IterableIterator<Object> {
      return this;
    },
    next(): IteratorResult<Enum<Object>> {
      col--;

      return  (col > -1) ?
              {
                value: [ index++, object.next().value ],
                done: false
              } :
              { done: true, value: null };
    }
  }
}

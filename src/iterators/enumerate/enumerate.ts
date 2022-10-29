export type Enum<T> = [number, T]

export default function(object: IterableIterator<Object>, col: number): IterableIterator<Enum<unknown>> {
  let index = 0;

  return {
    [Symbol.iterator](): IterableIterator<Enum<unknown>> {
      return this;
    },
    next(): IteratorResult<Enum<unknown>> {
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


export default function(object: any, col: number): IterableIterator<number> {
  return {
    [Symbol.iterator](): IterableIterator<number> {
      return this;
    },
    next(): IteratorResult<number> {
      col--;

      return (col > -1) ? object.next() : { done: true };
    }
  }
}

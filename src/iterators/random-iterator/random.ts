
export default function(start: number, end: number): IterableIterator<number> {
  return {
    [Symbol.iterator](): IterableIterator<number> {
      return this;
    },
    next(): IteratorResult<number> {
      return {
        value: getRandomIntInclusive(start, end),
        done: false
      }
    }
  }
}

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

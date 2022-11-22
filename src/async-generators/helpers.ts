
export function on(element: any, event: any) {
  let value:any = undefined;

  return {
    [Symbol.asyncIterator]() {
      return {
        [Symbol.asyncIterator]() {
          return this;
        },

        async next(): Promise<any> {
          return new Promise((resolve) => {
            element.addEventListener(event, (e: Event) => {
              resolve({ value: e, done: false });
            });
          });
        }
      }
    }
  }
}

export function take (iter: AsyncIterable<any>, max: number) {
  const cursor = iter[Symbol.asyncIterator]();

  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    async next() {
      max--;

      return (max > -1) ? cursor.next() : Promise.resolve({ done: true })
    }
  }
}

function filter () {

}

function map () {
  
}

function seq () {
  
}

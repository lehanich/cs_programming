

function on(element, event) {
  let value = undefined;

  return {
    [Symbol.asyncIterator]() {
      // const queue = [];

      // function nextEvent(fn) {
      //   queue.push(fn);
      // }

      // function callback(e) {
      //   queue.forEach((next) => next(e));
      //   queue.length = 0;
      // }

      // element.addEventListener(event, callback);
      
      // return {
      //   async next() {
      //     return new Promise((resolve) => {
      //       nextEvent((
      //         value
      //       ) => {
      //         resolve({ value, done: false });
      //       });
      //     });
      //   }
      // }

      return {
        [Symbol.asyncIterator]() {
          return this;
        },

        async next() {
          return new Promise((resolve) => {
            element.addEventListener(event, (e) => {
              resolve({ value: e, done: false });
            });
          });
        }
      }
    }
  }
}

function take (iter, max) {
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

function once(element, event) {
  return take(on(element, event), 1)
  // let value = undefined;
  // let i = 1;

  // return {
  //   [Symbol.asyncIterator]() {
  //     return {
  //       [Symbol.asyncIterator]() {
  //         return this;
  //       },

  //       async next() {
  //         i--;

  //         return (i > -1) ? 
  //                 new Promise((resolve) => {
  //                   element.addEventListener(event, (e) => {
  //                     resolve({ value: e, done: false });
  //                   });
  //                 }) :
  //                 Promise.resolve({ done: true })
  //       }
  //     }
  //   }
  // }
}

function filter(iter, checkEvent) {
  // return {
  //   [Symbol.asyncIterator]() {
      return {
        [Symbol.asyncIterator]() {
          return this;
        },
        async next() {
          let el = await iter.next();

          for await (el of iter) {
            if (checkEvent(el)) {
              return new Promise.resolve({
                value: el,
                done: false
              });
              // return {
              //   value: el,
              //   done: false
              // }
              
            }
          }

          return Promise.resolve({
            value: null,
            done: true
          })
        }
      }
  //   }
  // }
}

function seq(...args) {
  let cursor = null;
  let argsCursor = args[Symbol.iterator]();

  return {
    [Symbol.asyncIterator]() {
      return this;
    },

    async next() {
      if (!cursor) {
        let test = argsCursor.next();

        if (test.done) {
          return Promise.resolve({ done: true, value: null });
        }

        cursor = test.value[Symbol.asyncIterator]();
      }

      const res = await cursor.next();
      console.log(res)

      // res.then((val) => {
      //   if (res.done) {
      //     cursor = null;
  
      //     return this.next();
      //   }

      //   return res;
      // })
      if (res.done) {
        cursor = null;

        return this.next();
      }

      return res;
    }
  }
}

function map(iter, func) {
  let cursor = iter[Symbol.asyncIterator] ? iter[Symbol.asyncIterator]() : iter[Symbol.iterator]();

  return {
    [Symbol.asyncIterator]() {
      return this;
    },

    async next() {
      let el = await cursor.next();
      let newValue = el.value;

      if (el.done) {
        return Promise.resolve({ done: true, value: null });
      }

      // for (let func of funcs) {
      //   newValue = func(newValue);
      // }
      newValue = func(newValue);

      return Promise.resolve({ done: false, value: newValue })
    }
  }
}

function any(...args) {
  let array = [];
  for(let i=0; i < args.length; i++) {
    let cursor = args[i][Symbol.asyncIterator]();
    array.push(cursor.next());
  }

  console.log(array)

  return {
    [Symbol.asyncIterator]() {
      return this;
    },

    async next() {
      return Promise.race([...array])
      .then((value) => {
        console.log(value);
        // return Promise.resolve({ done: true, value: null })
        // Both resolve, but promise2 is faster
      });
    }
  }
}

function every(iter) {

}

function onlyEvent(eventName) {
  fn = (e) => {
    if (e.type === eventName) {
      return true;
    }

    return false;
  }

  return fn
}

function repeat(fn) {

}

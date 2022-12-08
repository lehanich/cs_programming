function on(element, event){ //onClick
  let cb = null;

  // function func (e) {
  //   element.removeEventListener(event, func)
  //   resolve({ value: e, done: false});
  // }
  function func(e) {
    if (typeof cb === "function") {
      cb(e);
    }
    cb = null
  }
  element.addEventListener(event, func)

  return {
    [Symbol.asyncIterator](){
      return this
    },

    next: ()=> new Promise((resolve => {
      cb = (event) => resolve({done: false,value: event})
    })),

    return: ()=> {
      console.log("test")
      element.removeEventListener(event,func);
      return Promise.resolve({done: true , value: {}})
    }
  }
}

// function on(emitter, event) {
//   async function* loop() {
//     while (true) {
//       yield await onceClick(emitter, event) // onClick
//     }
//   }

//   const iter = loop();
//   let i = iter.next();
//   console.log(i.value)

//   return {
//     [Symbol.asyncIterator]() {
//       return this; // loop()
//     },

//     async next() {
//       let t = await iter.next();
//       console.log(t)
//       console.log(t.value)
//       return  Promise.resolve({value: t.value, done: false}); //t.value; // 
//     },

//     return() {
//       iter.return();
//       return Promise.resolve({done:true})
//     }
//   }
// }

//aply
function onceClick(element, event) {
  return new Promise((resolve) => {
    function func (e) {
      element.removeEventListener(event, func)
      resolve({ value: e, done: false});
    }
    element.addEventListener(event, func); // , { once: true }
  });
}

async function* once(element, event) {
  yield onceClick(element, event) //onceClick
  return Promise.resolve({done:true})
}

async function* seq (...iterables) {
  // console.dir(iterables)
  for (const i of iterables) {
    for await (const el of i) {
      yield el;
    }
  }
}

async function* any (...iterables) {
  const iters = iterables.map((el) => el[Symbol.asyncIterator]())
  
  while (true) {
    yield (await Promise.race(iters.map(i => i.next()))).value; // any
  }
}

async function* repeat(fn) {
  for(;;){
    const startFn = fn();
    for await(const e of startFn) {
      yield e;
    }
  }
}

async function* every(iterables, fn){
  for await(const event of iterables){
    if(!event || !fn(event)) {
      break;
    }

    yield event
  }
}

function onlyEvent(eventName) {
  return (e) => e.type === eventName ? true : false;
}

function filter(iterable, fn) {
  const iter = iterable[Symbol.asyncIterator]();

  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    async next() {
      let el = await iter.next();

      console.log(1,el);

      if (el.done || !el.value){
        return this.return();
      }

      while (!el.value && !fn(el.value)) {
        el = await iter.next();
        console.log(2,el.value);

      }

      return !el ? this.return() : Promise.resolve(el);
    },

    return() {
      return Promise.resolve({
        value: null,
        done: true
      })
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

      newValue = func(newValue);

      return Promise.resolve({ done: false, value: newValue })
    },

    return() {
      return Promise({done: true});
    }
  }
}

async function* take (obj, max) {
  for await (const el of obj) {
    max--
    yield await el;
    if (max === 0) {
      break;
    }
  }
}

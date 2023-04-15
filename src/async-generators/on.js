// Lambda closure chaos.
//
// Send an anonymous function to the listener, but execute it immediately.
// This will cause the arguments are captured, which is useful when running 
// within loops.
//
// The anonymous function returns a closure, that will be executed when 
// the event triggers. And since the arguments were captured, any vars 
// that were sent in will be unique to the function.

function addListenerWithArgs(elem, evt, func, vars){
  var f = function(ff, vv){
          return (function (){
              ff(vv);
          });
  }(func, vars);

  elem.addEventListener(evt, f);

  return f;
}

// Usage:

function doSomething(withThis){
  console.log("withThis", withThis);
}

// Capture the function so we can remove it later.
var storeFunc = addListenerWithArgs(someElem, "click", doSomething, "foo");

// To remove the listener, use the normal routine:
someElem.removeEventListener("click", storeFunc);

function func (resolve, e) {
  console.log("CLICK");
  return function (e) {
    console.log("REMOVE")
    e.target.removeEventListener(e.type, this)
    resolve({ value: e, done: false, func});
  }
}

function once(element, event) {
  return new Promise((resolve) => {
  
    element.addEventListener(event, func(resolve)); // , { once: true }
  })
  // .then((value) => {
  //   // console.log(value)
  //   // console.log("REMOVE")
  //   // element.removeEventListener(event, value.func)
  //   // delete value.func
  //   return value;
  // });
}

async function on(emitter, event) {
  async function* loop() {
    while (true) {
      yield await once(emitter, event)
    }
  }
  
  const iter = loop();

  return {
    [Symbol.asyncIterator]() {
      return this
    },

    next() {
      return iter.next();
    },

    return() {
      iter.return();
    }
  }

}

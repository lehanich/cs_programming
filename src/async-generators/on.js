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
    }

    // next() {
    //   return iter.next();
    // }

    // return() {
    //   iter.return();
    // }
  }

}
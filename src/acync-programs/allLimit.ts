function allLimit(iter: Iterable<() => any>, limit: number) {
  return new Promise((resolve, reject) => {
    const
      tasks = [...iter],
      result = new Array(tasks.length);

    if (tasks.length === 0) {
      resolve(result);
      return;
    }

    const 
      i = iter[Symbol.iterator]();
    let
      resolved = 0,
      inAction = 0,
      current = 0,
      rejected = false;

    const allTasks = [...iter];

    const task = allTasks
      .slice(0, limit)
      .map(cb => Promise.resolve(cb()))
      .map(el => el.then(iterate));

      function iterate() {
        const
          chunk = i.next();

        if(chunk.done || inAction >= limit || rejected) {
          return;
        }

        if (resolved === tasks.length) {
          resolve(result);
        }

        const currentCursor = current;
        const promise = Promise.resolve(chunk.value());

        promise.then((data) => {
          result[currentCursor] = data;
          resolved++;
          inAction--;
          iterate();
        }, (e) => {
          rejected = true;
          reject(e);
        })

        if (inAction < limit) {
          iterate();
        }
      }

      iterate();
  })
    

}
import Result from "../result/result"

export default function exec(fn: () => Generator<any>): void { // Result<T>
  let gen = fn();
  let state = gen.next();

  while (!state.done) {
    if (state.done) {
      gen.return("done");
    }

    if (state.value instanceof Result &&
          state.value.status() === "OK") {

      try {
          state = gen.next(state.value);

          if (state.done) {
            return state.value
          }

      } catch (e) {
        Result.error(e)
      }
    } else if (state.value instanceof Result &&
               state.value.status() === "Error") {
      Result.error(state.value);
    } else { // if (state.value instanceof Promise) { // Promise
      let promise = Promise.resolve(state.value);

      state = gen.next(promise);

      try {
        state = gen.next(promise);
      } catch (err) {
        Promise.reject(err)
      }
    }
  }
}

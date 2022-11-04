import Result from "../result/result"
type T = any;

export default function exec(fn: () => Generator<Result<T>>): void { // Result<T>
  let gen = fn();
  let state = gen.next();

  while (!state.done) {
    if (state.done) {
      gen.return("done");
    }

    if (state.value instanceof Result &&
        state.value.status() === "OK" ||
        state.value.status() === "Error") {

      // state.value.catch((err) => {
      //   console.log("state2", state)
      // });

      state = gen.next(state.value);
    }
    
  }
}

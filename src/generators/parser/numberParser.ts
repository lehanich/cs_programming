

export default function () {
  let expr: string = "";

  function* gen() {
    let state = "start";
    let input: string = "";

    while (true) {
      for (let symbol of input) {
        switch(symbol) {
          case "-":
            if (state !== "start" && state !== "exp") {
              throw new SyntaxError("Syntax error")
            }

            state = "expMinus"
            break;
          case "e":
            if (state !== "digit") {
              throw new SyntaxError("Syntax error")
            }

            state = "exp";
            break;
          case ".":
            if (state !== "digit") {
              throw new SyntaxError("Syntax error")
            }

            state = "dot"
            break;
          default:
            if (!/\d/.test(symbol)) { // digits
              throw new SyntaxError("Syntax error")
            }
            state = "digit"
        }
        expr += symbol;
      }
      input = yield expr;
    }
  }

  let i = gen();
  i.next();

  Object.defineProperty(i, "return", {
    value() {
      return { value: parseFloat(expr), done: true}
    }
  })
  return i;
}

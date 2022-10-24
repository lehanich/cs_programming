import {charHasPair, checkPair} from "./helpers";

export default function iter(string: string) {
  const chars = string.split("");
  console.log(chars)
  let i = -1;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      i++;
      let returnValue;

      if (i === chars.length) {
        return {
          done: true
        }
      }

      returnValue = chars[i];

      if (charHasPair(chars[i])) {
        let { string, index } = checkPair({chars, index: i, first: true});

        returnValue = string
        i = index
      }

      return {
        value: returnValue,
        done: false
      }
    }
  }
}

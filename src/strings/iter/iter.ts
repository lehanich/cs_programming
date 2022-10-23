export default function iter(string: any) {
  const chars = string.split("");
  let done = false;
  let i = -1;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      console.log(chars[i])
      i++;
      if (i=== chars.length) {
        done = true;
      }
      return {
        value: chars[i],
        done
      }
    },

    get done(): Boolean {
      return done;
    }
  }
}

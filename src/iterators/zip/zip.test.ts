import {describe, expect, test} from '@jest/globals';
import zip from "./zip";

describe("Zip iterator ", function () {

  it("returns iterator with cortege", () => {
    const array: any[] = [...zip([1, 2], new Set([3, 4]), 'bl')];

    expect( array.length === 2 && array[Symbol.iterator] &&
            array[0][0] === 1 && array[0][1] === 3 && array[0][2] === "b" &&
            array[1][0] === 2 && array[1][1] === 4 && array[1][2] === "l"); // [[1, 3, b], [2, 4, 'l']]
  });
});

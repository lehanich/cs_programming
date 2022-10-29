import {describe, expect, test} from '@jest/globals';
import seq from "./seq";

describe("Seq iterator ", function () {

  it("get union iterator of all incoming iterators", () => {
    const array = [...seq([1, 2], new Set([3, 4]), 'bla')]; // 1, 2, 3, 4, 'b', 'l', 'a'

    expect( array[0] === 1 && array[2] === 3 &&
            array[4] === "b" && array.length === 7);
  });
});

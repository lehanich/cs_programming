import {describe, expect, test} from '@jest/globals';
import random from "../random-iterator/random";
import enumerate, {Enum} from "./enumerate";

describe("Enumerate iterator ", function () {

  it("returns array, each element has structure, 0th element is index", () => {
    const randomInt = random(0, 100);
    const array: Array<Enum<unknown>> = [...enumerate(randomInt, 3)]; // [[0, ...], [1, ...], [2, ...]]
    let index: number = 0;

    for (let el of array) {
      if (el.length === 2) {
        index ++;
      }
    }

    expect( array[0][0] === 0 && array[1][0] === 1 &&
            array[2][0] === 0 && index === 3);
  });
});

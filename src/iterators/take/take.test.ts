import {describe, expect, test} from '@jest/globals';
import random from "../random-iterator/random";
import take from "./take";

describe("Take iterator ", function () {

  it("returns iterator with given length", () => {
    const randomInt: IterableIterator<Object> = random(0, 100);
    const array: number[] = [...take(randomInt, 15)];

    expect(array.length === 15 && array[Symbol.iterator]);
  });
});

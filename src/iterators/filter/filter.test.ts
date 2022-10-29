import {describe, expect, test} from '@jest/globals';
import random from "../random-iterator/random";
import take from "../take/take";
import filter from "./filter";

describe("Take iterator ", function () {

  it("returns iterator with given length", () => {
    let checkFilterValue = 30;
    let checkTakeLength = 15;

    const randomInt: IterableIterator<Object> = random(0, 100);
    const array: number[] = [...take(filter(randomInt, (el: number) => el > checkFilterValue), checkTakeLength)]

    let index: number = 0;

    for (let el of array) {
      if (el > checkFilterValue) {
        index ++;
      }
    }

    expect(index === checkTakeLength && array[Symbol.iterator] && index === checkTakeLength);
  });
});

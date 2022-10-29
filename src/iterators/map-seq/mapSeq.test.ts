import {describe, expect, test} from '@jest/globals';
import mapSeq from "./mapSeq";

describe("MapSeq iterator ", function () {

  it("returns iterator, right functions was applied with left values", () => {
    const array: any[] = [...mapSeq([1, 2, 3], [(el:any) => el * 2, (el:any) => el - 1])];

    expect( array.length === 3 && array[Symbol.iterator] &&
            array[0] === 1 && array[1] === 3 && array[2] === 5); // [1,3,5]
  });
});

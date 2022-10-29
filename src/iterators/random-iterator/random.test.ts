import {describe, expect, test} from '@jest/globals';
import random from "./random";

describe("Random iterator", function () {

  it("Returns value between start & end value", () => {
    const randomInt: IterableIterator<Object> = random(0, 100);
    const val1: IteratorResult<Object> = randomInt.next();

    const randomInt2: IterableIterator<Object> = random(200, 300);
    const val2: IteratorResult<Object> = randomInt2.next();

    expect( val1.value <= 100 && val1.value >= 0 &&
            val2.value <= 300 && val2.value >= 200);
  });
});

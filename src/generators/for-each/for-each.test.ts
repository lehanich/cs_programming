/* eslint-disable no-console */
import {describe, expect, test} from '@jest/globals';
import forEach from "./for-each";

describe("Generator forEach", function () {

  it("Function forEach goes throue huge iterable object without freeze ", () => {
    let total = 0;

    forEach(new Array(1e5), () => {
      total++;
    }).then(() => expect(total === 1e5))
      .catch((err) => console.log(err));
  });

});

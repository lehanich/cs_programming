import {describe, expect, test} from '@jest/globals';
import binarySearch from "./BinarySearch";

describe("BinarySearch", function () {
  const array = [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98];

  test("find first half", () => {
    const find = binarySearch(1, array);

    expect(find === 2);
  });

  test("find last half", () => {
    const find = binarySearch(4, array);

    expect(find === 8);
  });

  test("find not included", () => {
    const find = binarySearch(44, array);

    expect(find === -1);
  });

});
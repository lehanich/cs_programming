import {describe, expect, test} from '@jest/globals';
import isDigit from "./isDigit";

describe("Is Digit", function () {

  it("Check digits 123", () => {
    const test = isDigit('123');
    expect(test === true);
  });

  it("Check digits Ⅻ", () => {
    const test = isDigit('Ⅻ');
    expect(test === true);
  });

  it("Check digits with char 1e23e ", () => {
    const test = isDigit('1e23e');
    expect(test === false);
  });
  it("Check digits with char Ⅻx ", () => {
    const test = isDigit('Ⅻx');
    expect(test === false);
  });
});

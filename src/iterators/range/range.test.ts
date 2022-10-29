import {describe, expect, test} from '@jest/globals';
import Range from "./range";

describe("Range iterator ", function () {

  it("char iterator return right range", () => {
    const symbolRange: Range = new Range('a', 'f');
    const iteratorCharRange = Array.from(symbolRange);
    const array = [...iteratorCharRange];

    expect(iteratorCharRange[0] === "a" && iteratorCharRange[iteratorCharRange.length-1] === "f");
  });

  it("char iterator return right REVERCE range", () => {
    const symbolRange: Range = new Range('a', 'f');
    const iteratorCharRange = Array.from(symbolRange.reverse());
    const array = [...iteratorCharRange];

    expect(iteratorCharRange[0] === "f" && iteratorCharRange[iteratorCharRange.length-1] === "a");
  });

  it("number iterator return right range", () => {
    const numberRange = new Range(-5, 1);
    const iteratorNumberRange = Array.from(numberRange);
    const array = [...iteratorNumberRange];

    expect(iteratorNumberRange[0] === -5 && iteratorNumberRange[iteratorNumberRange.length-1] === 1);
  });

  it("number iterator return right range", () => {
    const numberRange = new Range(-5, 1);
    const iteratorNumberRange = Array.from(numberRange.reverse());
    const array = [...iteratorNumberRange];

    expect(iteratorNumberRange[0] === 1 && iteratorNumberRange[iteratorNumberRange.length-1] === -5);
  });
});

import {describe, expect, test} from '@jest/globals';
import iter from "./iter";

describe("String iterator", function () {

  it("Spread word test to array [t,e,s,t]", () => {
    const test = [...iter("test")];
    expect(Array.isArray(test) && test.length === 4);
  });

  it("Spread emoji 😀 to array length=1", () => {
    const test = [...iter("😀")];
    expect(Array.isArray(test) && test.length === 1);
  });

  it("Spread emoji 💑 to array length=1", () => {
    const test = [...iter("💑")];
    expect(Array.isArray(test) && test.length === 1);
  });
});

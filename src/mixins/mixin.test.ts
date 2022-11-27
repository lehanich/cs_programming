import {describe, expect, test} from '@jest/globals';
import {mixin} from "./mixin";

describe("Mixins", function () {
  it("Mixin objects", () => {
    let mixinObj: any = mixin({a: {b: 1, c: 2}}, {a: {b: 42, e: 7}}, {j: 2});

    expect(typeof mixinObj.a === "object" && mixinObj.j === 2 &&
      mixinObj.a.b === 42 && mixinObj.a.e === 7 && mixinObj.a.c === 2);
  });
});
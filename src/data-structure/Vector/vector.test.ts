import {describe, expect, test} from '@jest/globals';
import Vector from "./Vector";

describe("Vector create", function () {

  it("empty Vector", () => {
    const arr = new Vector(2);
    expect(arr.length === 0);
  });
});

describe("Vector functions", function () {
  const arr_v = new Vector(2);

  it("can add", () => {
    arr_v.add(2);
    expect(arr_v.length === 1);
  });

  it("can read", () => {
    const el = arr_v.get(0);
    expect(el === 2);
  });

  it("can add more than capacity", () => {
    const arr_v = new Vector(2);
    arr_v.add(1);
    arr_v.add(2);
    arr_v.add(3);
    arr_v.add(4);
    arr_v.add(5);
    expect(arr_v.get(4) === 5);
  });

  it("can remove", () => {
    const arr_v = new Vector(2);

    arr_v.add(2);
    arr_v.add(3);
    arr_v.add(4);
    arr_v.add(5);
    arr_v.remove(2);

    const el = arr_v.get(2);

    expect(el === 5);
  });

  it("get out of memory - undefined", () => {
    const arr_v = new Vector(2);

    arr_v.add(2);
    arr_v.add(3);

    expect(arr_v.get(10) === undefined);
  });
});

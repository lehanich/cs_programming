import {describe, expect, test} from '@jest/globals';
import HashMap from "./HashMap";

describe("HashMap functions", function () {
  const map = new HashMap(20);

  it("empty array", () => {
    const map = new HashMap(20);
    expect(map);
  });

  it("can insert element with key int", () => {
    map.set(10, "bla");

    expect(map.get(10) === "bla");
  });

  it("can insert element with key string", () => {
    map.set("foo", "bar");

    expect(map.get("foo") === "bar");
  });

  it("can update element", () => {
    map.set("foo", "bar1");
    map.set("foo", "bar2");
    map.set("foo", "bar3");

    expect(map.get("foo") === "bar3");
  });

  it("keys() is iterable", () => {
    const map = new HashMap(20);

    map.set(10, "bla");
    map.set("foo", "bar");

    const test = [...map.keys()];

    expect(typeof map.keys()[Symbol.iterator] === "function");
    expect(test.length === 2 && 
      (test[0] === 10 || test[0] === "foo") && 
      (test[1] === 10 || test[1] === "foo"));
  });

});

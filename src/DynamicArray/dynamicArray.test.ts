import DynamicArray from "./DynamicArray";

describe("DynamicArray create", function () {

  it("empty array", () => {
    const arr = new DynamicArray(3);
    expect(arr.length === 0);
  });
});

describe("DynamicArray functions", function () {
  const arr = new DynamicArray(3);

  it("can insert element", () => {
    arr.add(1);
    expect(arr.length === 1 && arr.get(0) === 1);
  });

  it("is iterable", () => {
    expect(typeof arr[Symbol.iterator] === "function");
  });

  it("can insert more than 3", () => {
    arr.add(2);
    arr.add(3);
    arr.add(4);
    arr.add(5);
    expect(arr.length === 5 && arr.get(4) === 5);
  });

  it("incorrect element == undefined", () => {
    arr.add(2);
    arr.add(3);
    arr.add(4);
    arr.add(5);
    expect(arr.get(6) === undefined);
  });

});

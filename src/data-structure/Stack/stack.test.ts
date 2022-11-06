import {describe, expect, test} from '@jest/globals';
import Stack from "./Stack";

describe("Stack create", function () {

  it("empty stack", () => {
    const stack = new Stack(3);
    expect(stack.maxSize === 3);
  });
});

describe("Stack functions", function () {
  const stack = new Stack(3);

  stack.push(10);
  stack.push(11);
  stack.push(12);

  it("Stack is overflow", () => {
    const t = () => {
      const last = stack.push(15);
    };
    expect(t).toThrow(Error);
  });

  it("can read head element", () => {
    expect(stack.head === 12);
  });

  it("can pop head element", () => {
    const first = stack.pop();
    expect(first === 12);
  });

  it("first element changed to 11", () => {
    expect(stack.head === 11);
  });

  it("can pop head element", () => {
    const first = stack.pop();
    expect(first === 11);
  });

  it("can pop head element", () => {
    const first = stack.pop();
    expect(first === 12);
  });

  it("Stack is empty", () => {
    const t = () => {
      const last = stack.pop()
    };
    expect(t).toThrow(Error);
  });
});

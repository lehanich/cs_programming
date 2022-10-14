import DoubleQueue from "./DoubleQueue";

describe("DoubleQueue create", function () {

  it("empty queue", () => {
    const dequeue = new DoubleQueue(3);
    expect(dequeue.length === 3);
  });
});

describe("DoubleQueue functions", function () {
  const dequeue = new DoubleQueue(3);

  dequeue.push(10);
  dequeue.unshift(11);
  dequeue.push(12);

  it("DoubleQueue is iterable", () => {
    expect(typeof dequeue[Symbol.iterator] === "function");
  });

  it("DoubleQueue get last element", () => {
    const last = dequeue.pop()
    expect(last === 12);
  });

  it("DoubleQueue get first", () => {
    const first = dequeue.shift();
    expect(first === 11);
  });

  it("DoubleQueue ", () => {
    const last = dequeue.pop()
    expect(last === 10);
  });

  it("DoubleQueue ", () => {
    const t = () => {
      const last = dequeue.pop()
    };
    expect(t).toThrow(Error);
  });
});

import HashMap from "./HashMap";

describe("HashMap create", function () {

  it("empty array", () => {
    const map = new HashMap(20);
    expect(map);
  });
});

describe("HashMap functions", function () {
  const map = new HashMap(20);

  it("can insert element with key int", () => {
    map.set(10, "bla");

    expect(map.get(10) === "bla");
  });

  it("can insert element with key string", () => {
    map.set("foo", "bar");

    expect(map.get("foo") === "bar");
  });

});

import Structure from "./Structure";

describe("Structure create", function () {

  it("empty structure", () => {
    const jackBlack = new Structure(["name", "lastName", "age"]);
    expect(jackBlack);
  });
});

describe("Structure functions", function () {
  const jackBlack = new Structure(["name", "lastName", "age"]);

  // утсанавливаются значения полей структуры
  jackBlack.set("name", "Jack");
  jackBlack.set("lastName", "Black");
  jackBlack.set("age", 53);

  it("get name", () => {
    expect(jackBlack.get("name") === "Jack");
  });

  it("get age", () => {
    expect(jackBlack.get("age") === 53);
  });

  it("get lastName", () => {
    expect(jackBlack.get("lastName") === "Black");
  });
});

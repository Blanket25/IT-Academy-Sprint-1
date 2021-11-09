const { sum } = require("../app/calculate");

test("given 2 numbers return the addition of both", () => {
  expect(sum(1, 2)).toBe(3);
});

test("given a value that is not a number", () => {
  expect(sum("hola", 2)).toBe("cannot operate without numbers");
});

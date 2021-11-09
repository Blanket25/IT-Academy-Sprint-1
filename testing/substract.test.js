const { substract } = require("../app/calculate");

test("given 2 numbers returns the result of the substraction", () => {
  expect(substract(2, 1)).toBe(1);
});

test("given 1 number returns the only given number", () => {
  expect(substract(2)).toBe(2);
});

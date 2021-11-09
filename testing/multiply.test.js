const { multiply } = require("../app/calculate");

test("given 2 numbers return the result of multiplying them", () => {
  expect(multiply(2, 2)).toBe(4);
});

test("given an undefined it returns an undefined", () => {
  expect(multiply(undefined, 2)).toBe(undefined);
});

const { divide } = require("../app/calculate");

test("given 2 numbers return the result of dividing the first one by teh second one", () => {
  expect(divide(6, 2)).toBe(3);
});

test("given a 0 as second parameter it cannot operate", () => {
  expect(divide(6, 0)).toBe("It cannot operate with 0");
});

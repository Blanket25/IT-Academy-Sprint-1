const { showAfter2Secs } = require("../app/async-await-2-1");

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

test("waits 1 second before printing a message", () => {
  showAfter2Secs();

  expect(setTimeout).toHaveBeenCalledTimes(1);
});

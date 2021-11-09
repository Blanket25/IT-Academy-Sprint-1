const { showMessage } = require("../app/async-await-2-1");

test("the message appears after 2 secs", async () => {
  await expect(showMessage()).resolves.toBe("I've waited 2 seconds");
});

// test("the fetch fails with an error", async () => {
//   await expect(fetchData()).rejects.toMatch("error");
// });

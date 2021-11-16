const { getEmployee, getSalary } = require("../app/promises-callbacks-2-3");

test("given an id, gets the right salary", () => {
  getEmployee(1)
    .then((data) => getSalary(data))
    .then((data) => expect(data).toStrictEqual(4000));
});

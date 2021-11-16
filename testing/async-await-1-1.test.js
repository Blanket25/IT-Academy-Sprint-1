const { getEmployee, getSalary } = require("../app/async-await-1-1");

test("given an id, gets the right employee", () => {
  expect.assertions(1);
  return getEmployee(1).then((data) => {
    expect(data).toStrictEqual({
      id: 1,
      name: "Linux Torvalds",
    });
  });
});

test("given an object, it returns its salary", () => {
  const employeeObj = {
    id: 1,
    name: "Linux Torvalds",
  };
  expect.assertions(1);
  return getSalary(employeeObj).then((data) => {
    expect(data).toStrictEqual(4000);
  });
});

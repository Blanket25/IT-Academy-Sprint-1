function getEmployee(id) {
  const myPromise = new Promise((resolve, reject) => {
    let findEmployee = employees.find((e) => e.id === id);
    if (findEmployee) {
      resolve(findEmployee);
    } else {
      reject(new Error("No employee found"));
    }
  });
  return myPromise;
}

function getSalary(employee) {
  const myPromise = new Promise((resolve, reject) => {
    let findSalary = salaries.find((s) => s.id === employee.id);
    if (findSalary) {
      resolve(findSalary.salary);
    } else {
      reject(new Error("No salary found"));
    }
  });
  return myPromise;
}

getEmployee(2)
  .then((res) => {
    console.log(getSalary(res));
  })
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

module.exports = {
  getEmployee,
  getSalary,
};

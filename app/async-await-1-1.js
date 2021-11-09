const getEmployee = (id) => {
  const myPromise = new Promise((resolve, reject) => {
    let findEmployee = employees.find((e) => e.id === id);
    if (findEmployee) {
      resolve(findEmployee);
    } else {
      reject(new Error("No employee found"));
    }
  });
  return myPromise;
};

const employee = async () => {
  try {
    const result = await getEmployee(1);
    return result;
  } catch (error) {
    console.log(error);
  }
};

employee().then((result) => {
  console.log("Nivel 1, ejercicio 1:");
  console.log(result);
  return result;
});

const getSalary = (employee) => {
  const myPromise = new Promise((resolve, reject) => {
    let findSalary = salaries.find((s) => s.id === employee.id);
    if (findSalary) {
      resolve(findSalary.salary);
    } else {
      reject(new Error("No salary found"));
    }
  });
  return myPromise;
};

const salary = async () => {
  try {
    const obj = await employee();
    console.log(await getSalary(obj));
  } catch (error) {
    console.log(error);
  }
};

salary().then((result) => {
  console.log(result);
  return result;
});

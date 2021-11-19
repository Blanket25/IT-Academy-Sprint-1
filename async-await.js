console.log("Async / Await");

let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

//Nivel 1
//ejercicio 1

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
    return await getSalary(obj);
  } catch (error) {
    console.log(error);
  }
};

salary().then((result) => {
  console.log(result);
  return result;
});

//Ejercicio 2
const getEmployeeName = async (id) => {
  try {
    const employee = await getEmployee(id);
    console.log("Nivel 1, ejercicio 2:");
    console.log(employee.name);
    return getSalary(employee);
  } catch (error) {
    console.log(error);
  }
};

getEmployeeName(2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//Nivel 2
const showAfter2Secs = () => {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("I've waited 2 seconds");
    }, 2000);
  });
  return myPromise;
};

const showMessage = async () => {
  try {
    const result = await showAfter2Secs();
    console.log("Nivel 2:");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

showMessage();

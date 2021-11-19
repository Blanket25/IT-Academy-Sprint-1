console.log("Promises and Callbacks");

//Nivel 1
//Ejercicio 1

const returnPromise = (connection) =>
  new Promise((resolve, reject) => {
    if (connection === true) {
      resolve("Succesfully connected");
    } else {
      reject("Something went wrong");
    }
  });

returnPromise(true)
  .then((message) => {
    console.log("Nivel 1, ejercicio 1:");
    console.log(message);
  })
  .catch((err) => {
    console.log("Nivel 1, ejercicio 1:");
    console.log(err);
  });

//Ejercicio 2
console.log("Nivel 1, ejercicio 2:");

const evenOrOdd = (num, callback) => {
  num % 2 === 0
    ? callback(`your number ${num} is even`)
    : callback(`your number ${num} is odd`);
};

evenOrOdd(2, (result) => console.log(result));

//Nivel 2
//Ejercicio 1

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

//Ejercicio 1
function getEmployee(id) {
  return new Promise((resolve, reject) => {
    let findEmployee = employees.find((e) => e.id === id);
    if (findEmployee) {
      resolve(findEmployee);
    } else {
      reject(new Error("No employee found"));
    }
  });
}

console.log("Nivel 2, ejercicio 1:");
console.log(getEmployee(1));

//Ejercicio 2
function getSalary(employee) {
  return new Promise((resolve, reject) => {
    let findSalary = salaries.find((s) => s.id === employee.id);
    if (findSalary) {
      resolve(findSalary.salary);
    } else {
      reject(new Error("No salary found"));
    }
  });
}

console.log("Nivel 2, ejercicio 2:");
console.log(
  getSalary({
    id: 3,
    name: "Jeff Bezos",
  })
);

//Ejercicio 3
getEmployee(2)
  .then((res) => {
    console.log("Nivel 2, ejercicio 3:");
    return getSalary(res);
  })
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

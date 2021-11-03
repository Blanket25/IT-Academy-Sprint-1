console.log("Promises and Callbacks");

//Nivel 1
//Ejercicio 1
const returnPromise = (resolve, reject) =>
  new Promise(() => {
    const connection = true;

    connection
      ? resolve("Succesfully connected")
      : reject("Something went wrong");
  });

returnPromise(
  (message) => {
    console.log("Nivel 1, ejercicio 1:");
    console.log(message);
  },
  (message) => console.log(message)
);

//Ejercicio 2
console.log("Nivel 1, ejercicio 2:");

const evenOrOdd = (num, callback) => {
  callback(num);
};

evenOrOdd(2, (x) => {
  x % 2 === 0
    ? console.log(`your number ${x} is even`)
    : console.log(`your number ${x} is odd`);
});

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

console.log("Nivel 2, ejercicio 1:");
console.log(getEmployee(1));

//Ejercicio 2
function getSalary(employee) {
  let findSalary = salaries.find((s) => s.id === employee.id);

  return findSalary.salary;
}

console.log("Nivel 2, ejercicio 2:");
console.log(
  getSalary({
    id: 3,
    salary: 2000,
  })
);

//Ejercicio 3
const salary = getEmployee(2)
  .then((res) => {
    console.log("Nivel 2, ejercicio 3:");
    return getSalary(res);
  })
  .catch((error) => console.log(error))
  .then((res) => console.log(res));

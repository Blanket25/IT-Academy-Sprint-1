console.log("Promises and Callbacks");

//Nivel 1
//Ejercicio 1
console.log("Nivel 1, ejercicio 1:");

const returnPromise = (resolve, reject) =>
  new Promise(() => {
    const connection = true;

    connection
      ? resolve("Succesfully connected")
      : reject("Something went wrong");
  });

returnPromise(
  (message) => console.log(message),
  (message) => console.log(message)
);

//Ejercicio 2
console.log("Nivel 1, ejercicio 2:");

const names = ["Daniel", "James", "Irina", "Diego", "Laura"];

function findSomeone(personName) {
  if (names.find((name) => name === personName)) {
    return `I found you, ${personName}!`;
  } else {
    return `Sorry ${personName}, I cannot find you`;
  }
}

console.log(findSomeone("Daniel"));
console.log(findSomeone("Bianca"));

//Nivel 2
//Ejercicio 1
console.log("Nivel 2, ejercicio 1:");

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

const getEmployee = (id) =>
  employees.find((e) => {
    let findEmployee = new Promise((resolve, reject) => {
      e.id === id ? resolve(e.name) : reject("No employees found");
    });
    findEmployee
      .then((employee) => console.log(employee))
      .catch((message) => console.log(message));
  });

getEmployee(2);

//Ejercicio 2
console.log("Nivel 2, ejercicio 2:");

const getSalary = (employee) => {
  salaries.find((s) => {
    if (s.id === employee.id) {
      return s.salary;
    }
  });
};

getSalary(employees[0].id);

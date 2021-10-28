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

//crea una arrow function getEmployee que retorne una Promise
//efectuando la búsqueda en el objecto por su id.
const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    let findEmployee = employees.find((e) => e.id === id);
    if (findEmployee) {
      resolve(id);
    } else {
      reject(new Error("No id found"));
    }
  });
};
getEmployee(2)
  .then((id) => id)
  .catch((error) => console.log(error));

//Ejercicio 2
console.log("Nivel 2, ejercicio 2:");

const getSalary = (employee) => {
  let findSalary = salaries.find((s) => s.id === employee);
  return findSalary.salary;
};

console.log(getSalary(2));

//Ejercicio 3
console.log("Nivel 2, ejercicio 3");

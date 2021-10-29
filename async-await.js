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
console.log("Nivel 1, ejercicio 1:");
//crea una arrow function getEmployee que retorni una Promise
//efectuant la cerca en l'objecte pel seu id. Crea una altra arrow
//function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getEmployee = async (id) => {
  const myPromise = await new Promise((resolve, reject) => {
    let findEmployee = employees.find((e) => e.id === id);
    if (findEmployee) {
      resolve(findEmployee);
    } else {
      reject(new Error("No employee found"));
    }
  });
  return myPromise;
};

getEmployee(1)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const getSalary = (employee) => employee.salary;

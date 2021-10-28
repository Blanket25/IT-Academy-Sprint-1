console.log("Functions and template literals");

//Nivel 1
console.log("Nivel 1");

function printUserName(name) {
  return "name : " + name;
}

console.log(printUserName("Ada"));

//Nivel 2
//Ejercicio 1
console.log("Nivel 2, ejercicio 1:");

const userName = "Ada";
const userSurname = "Lovelace";

console.log(`username: ${userName} ${userSurname}`);

//Ejercicio 2
console.log("Nivel 2, ejercicio 2:");

function returnAge(age) {
  return `I'm ${age} years old`;
}

console.log(returnAge(30));

//Nivel 3
//Ejercicio 1
console.log("Nivel 3, ejercicio 1:");

let arrOfFunc = [];

for (let i = 0; i < 10; i++) {
  arrOfFunc.push(() => {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  });
}

arrOfFunc.forEach((f) => f());

//Ejercicio 2
console.log("Nivel 3, ejercicio 2:");

let showUserName = (function (userName) {
  console.log(`username: ${userName}`);
})("Juana");

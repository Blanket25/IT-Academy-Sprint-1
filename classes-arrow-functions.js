console.log("Classes and arrow functions");

//Nivel 1
console.log("Nivel 1:");
((a, b) => console.log(`${a} + ${b} = ${a + b}`))(1, 2);

//Nivel 2
//Ejercicio 1
console.log("Nivel 2, ejercicio 1:");

let myAge = (age) => ({ age: age });

console.log(myAge(30));

//Ejercicio 2
console.log("Nivel 2, ejercicio 2:");

class Persona {
  constructor(nom) {
    this.nom = nom;
  }
  dirNom() {
    console.log(`person's name: ${this.nom}`);
  }
}

const person = new Persona("Ada");
person.dirNom();

//Nivel 3
console.log("Nivel 3:");
const objCreator = () => {};

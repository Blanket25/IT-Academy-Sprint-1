console.log("Node utils:");
const express = require("express");
const app = express();
const fs = require("fs");
const compressing = require("compressing");

//Nivel 1
console.log("Nivel 1");
//Ejercicio 1
console.log("Nivel 1, ejercicio 1:");

const printMessageEverySec = () => {
  setInterval(() => {
    console.log("To be or not to be");
  }, 1000);
};
printMessageEverySec();

//Ejercicio 2
const writeMessageInAnotherFile = () => {
  fs.writeFile("someText.txt", "Hello, I come from another World!", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Hello, I come from another World! > someText.txt");
  });
};
writeMessageInAnotherFile();

//Ejercicio 3
console.log("Nivel 1, ejercicio 3:");

const showMessageFromAnotherFile = () => {
  fs.readFile("someText.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
};

showMessageFromAnotherFile();

//Nivel 2
const compFile = () => {
  new compressing.gzip.FileStream({ source: "someText.txt" })
    .on("error", (err) => console.log(err))
    .pipe(fs.createWriteStream("compFile.gz"))
    .on("error", (err) => console.log(err));
};

compFile();

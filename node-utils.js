console.log("Node utils:");
const fs = require("fs-extra");
const compressing = require("compressing");
const fileger = require("fileger");

//Nivel 1
//Ejercicio 1
console.log("Nivel 1, ejercicio 1:");

const printMessageEverySec = () => {
  setInterval(() => {
    console.log("To be or not to be");
  }, 1000);
};
printMessageEverySec();

//Ejercicio 2
const message = "Hello, I come from another World!";

const writeMessageInAnotherFile = async () => {
  try {
    await fs.writeFile("someText.txt", message, "utf-8");
    console.log("Nivel 1, ejercicio 2:");
    console.log("File created");
  } catch (err) {
    console.error(err);
  }
};
writeMessageInAnotherFile();

//Ejercicio 3
const showMessageFromAnotherFile = async () => {
  try {
    const data = await fs.readFile("someText.txt", "utf-8");
    console.log("Nivel 1, ejercicio 3:");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

showMessageFromAnotherFile();

//Nivel 2
console.log("Nivel 2:");

const compFile = () => {
  new compressing.gzip.FileStream({ source: "someText.txt" })
    .on("error", (err) => console.log(err))
    .pipe(fs.createWriteStream("compFile.gz"))
    .on("error", (err) => console.log(err));
};

compFile();

const showFilesFromDir = () => {
  fs.readdir("/users", (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });
};

showFilesFromDir();

//Nivel 3
const encodeMessages = async (file) => {
  try {
    const hexFile = await fs.readFile(file, "hex");
    const base64File = await fs.readFile(file, "base64");

    console.log("Nivel 3:");

    await fs.writeFile("someTextHex.txt", hexFile, () =>
      console.log("File created and encoded(hex)")
    );
    await fs.writeFile("someTextBase64.txt", base64File);
    console.log("File created and encoded(base64)");
  } catch (err) {
    console.log(err);
  }
};

encodeMessages("someText.txt");

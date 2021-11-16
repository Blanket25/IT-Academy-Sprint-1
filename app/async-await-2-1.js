const showAfter2Secs = () => {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("I've waited 2 seconds");
    }, 2000);
  });
  return myPromise;
};

const showMessage = async () => {
  const result = await showAfter2Secs();
  console.log("Nivel 2:");
  console.log(result);
};

showMessage();

module.exports = {
  showAfter2Secs,
};

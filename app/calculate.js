const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number")
    return "cannot operate without numbers";

  return a + b;
};

const substract = (a, b) => {
  if (!a) return b;
  if (!b) return a;
  return a - b;
};

const multiply = (a, b) => {
  if (a === undefined || b === undefined) return undefined;
  return a * b;
};

const divide = (a, b) => {
  if (b === 0) return "It cannot operate with 0";
  return a / b;
};

module.exports = {
  sum,
  substract,
  multiply,
  divide,
};

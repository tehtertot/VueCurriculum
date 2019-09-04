function sigma(num) {
  // we can't use instanceof because numbers are primitive types
  if (typeof num !== "number") {
    console.log(`${num} is not a number`);
    throw new TypeError("Argument must be a number");
  }

  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

module.exports = {
  sigma
};

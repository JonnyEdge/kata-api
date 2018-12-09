const add = (a, b) => {
  let result = a + b
  return result
};

const subtract = (a, b) => {
  let result = a - b
  return result
};

const multiply = (a, b) => {
  let result = a * b
  return result
};

const divide = (a, b) => {
  let result = a / b
  return result
};

const power = (a, b) => {
  let result = Math.pow(a, b)
  return result
};

const round = (a) => {
  let result = Math.round(a)
  return result
};

const roundUp = (a) => {
  let result = Math.ceil(a)
  return result
};

const roundDown = (a) => {
  let result = Math.floor(a)
  return result
};

const absolute = (a) => {
  let result = Math.abs(a)
  return result
};

const quotient = (a, b) => {
  let result = parseInt(a/b)
  return result
};

const remainder = (a, b) => {
  let result = a%b
  return result
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
}

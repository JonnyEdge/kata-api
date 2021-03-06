const negate = (a) => {
  return !a
};

const both = (a, b) => {
  return a && b
};

const either = (a, b) => {
  return a || b
};

const none = (a, b) => {
  return !a && !b
};

const one = (a, b) => {
  return ((a === true && b === false )||(a === false && b === true))
};

const truthiness = (a) => {
  return Boolean(a)
};

const isEqual = (a, b) => {
  return a === b
};

const isGreaterThan = (a, b) => {
  return a > b
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b
};

const isOdd = (a) => {
  if (a % 2 === 0) {
    return false
  } else {
    return true
  }
};

const isEven = (a) => {
  if (a % 2 === 0) {
    return true
  } else {
    return false
  }
};

const isSquare = (a) => {
  if (Math.sqrt(a) % 1 === 0) {
    return true
  } else {
    return false
  }
};

const startsWith = (char, string) => {
  return string.startsWith(char)
};

const containsVowels = (string) => {
  if (string.match(/[aeiou]/gi)) {
    return true
  } else {
    return false
  }
};

const isLowerCase = (string) => {
  if (string === string.toLowerCase()) {
    return true
  } else {
    return false
  }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
}

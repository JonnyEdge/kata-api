const getNthElement = (index, array) => {
  if (index >= array.length) {
    index = (index - array.length)
    return array[index]
  } else {
    return array[index]
  } 
};

const arrayToCSVString = (array) => {
  return array.join(',')
};

const csvStringToArray = (string) => {
  return string.split(',')
};

const addToArray = (element, array) => {
  array.push(element)
};

const addToArray2 = (element, array) => {
  let array2 = array.concat(element)
  return array2
};

const removeNthElement = (index, array) => {
  array.splice(index, 1)
};

const numbersToStrings = (numbers) => {
  return numbers.map(String)
};

const uppercaseWordsInArray = (strings) => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].toUpperCase()
  }
  return strings
};

const reverseWordsInArray = (strings) => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].split('').reverse().join('')
  }
  return strings
};

const onlyEven = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0)
      numbers.splice(i, 1)
  }
  return numbers
};

const removeNthElement2 = (index, array) => {
 return array.filter(function (el, i) {
   return index !== i
 })
};

const elementsStartingWithAVowel = (strings) => {
  let results = []

  for (let i = 0; i < strings.length; i++) {
    if ((strings[i].startsWith('a')) || (strings[i].startsWith('A')) || (strings[i].startsWith('e')) || (strings[i].startsWith('E')) || (strings[i].startsWith('i')) || (strings[i].startsWith('I')) || (strings[i].startsWith('o')) || (strings[i].startsWith('O')) || (strings[i].startsWith('u')) || (strings[i].startsWith('U'))) {
      results.push(strings[i])
    } 
  }
  return results
};

const removeSpaces = (string) => {
  return string.replace(/\s/g, '')
};

const sumNumbers = (numbers) => {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
};

const sortByLastLetter = (strings) => {
  let sorted = strings.sort(function (a, b) {
    if (a[a.length - 1] > b[b.length - 1]) {
      return 1
    } else {
      return -1
    }
  })
  return sorted
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
}

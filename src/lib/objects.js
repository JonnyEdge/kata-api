const createPerson = (name, age) => {
  let person = {}
  person['name'] = name
  person['age'] = age
  return person
};

const getName = (object) => {
  return object.name
};

const getProperty = (property, object) => {
  return object[property]
};

const hasProperty = (property, object) => {
  if ("undefined" === typeof(object[property])){
    return false
  } else {
    return true
  }
};

const isOver65 = (person) => {
  if (person.age > 65) {
    return true
  } else {
    return false
  }
};

const getAges = (people) => {
  let gottenAges = []
  Object.keys(people).forEach(function(key) {
    let value = people[key]["age"]
    gottenAges.push(value)
  })
  return gottenAges
};

const findByName = (name, people) => {
  function isName(people) {
    return people.name === name
  }
  
  return people.find(isName)
};

const findHondas = (cars) => {
  const foundHondas = cars.filter(car => car.manufacturer === 'Honda')
  return foundHondas
};

const averageAge = (people) => {
  let gottenAges = []
  Object.keys(people).forEach(function(key) {
    let value = people[key]["age"]
    gottenAges.push(value)
  })
  return gottenAges.reduce((a, b) => a + b, 0) / gottenAges.length
};

const createTalkingPerson = (name, age) => {
  let person = {}
  person['name'] = name
  person['age'] = age
  person['introduce'] = function () {
    return "Hi Fred, my name is " + name + " and I am " + age + "!"
  }

  return person
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
}

let numbers = [4, 6, 8];

function doubleNumbers(num) {
  return num * 2;
}

let numbers2 = numbers.map(doubleNumbers);

console.log(numbers2);

let numbers3 = numbers.map((num) => num.toString());

console.log(numbers3);

let arr = ["raghad", "sara", "foton"];
let capitalizeNames = arr.map((name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
});
console.log(capitalizeNames);

let celebrities = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];

let namesOnly = celebrities.map((person) => person.name);
console.log(namesOnly);

function makeStrings(celebrities) {
  return celebrities.map((person) => {
    if (person.age >= 18) {
      return person.name + "can go to The Matrix";
    } else {
      return person.name + "is under age!";
    }
  });
}
let result = makeStrings(celebrities);
console.log(result);

function readyToPutInTheDOM(celebrities) {
  return celebrities.map((person) => {
    return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
  });
}
let result2 = readyToPutInTheDOM(celebrities);
console.log(result2);

let forDouble = [2, -3, 4];
function doubleValues(forDouble) {
  return forDouble.map((num) => {
    return num + num;
  });
}
let newValues = doubleValues(forDouble);
console.log(newValues);

function valTimesIndex(forDouble) {
  return forDouble.map((num, index) => {
    return num * index;
  });
}
let valTimesIndex2 = valTimesIndex(forDouble);
console.log(valTimesIndex2);

let newArr = [
  { name: "Elie", age: 20 },
  { name: "Tim", age: 25 },
  { name: "Matt" },
  { name: "Colt" },
];
function extractKey(newArr, key) {
  return newArr.map((person, key) => {
    return person.name;
  });
}
let extractKey2 = extractKey(newArr);
console.log(extractKey2);

let extractFullName = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia" },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele" },
];
function fullName(extractFullName) {
  return extractFullName.map((person, key) => {
    return person.first + " " + person.last;
  });
}
let fullname = fullName(extractFullName);
console.log(fullname);

let array = [1, 2, 3, 7, 10];
function doubleValues(array) {
  return array.map((num) => num * 2);
}
let myResult = doubleValues(array);
console.log(myResult);

function onlyEvenValues(array) {
  return array.filter((num) => num % 2 === 0);
}
let myResult2 = onlyEvenValues(array);
console.log(myResult2);

function showFirstAndLast(arr) {
  return arr.map((str) => str[0] + str[str.length - 1]);
}
console.log(
  showFirstAndLast(["colt", "matt", "tim", "udemy", "hi", "goodbye", "smile"])
);

function addKeyAndValue(arr, key, value) {
  arr.forEach((obj) => {
    obj[key] = value;
  });
  return arr;
}

let add = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

let resultNew = addKeyAndValue(celebrities, "title", "instructor");
console.log(JSON.stringify(resultNew, null, 2));

function vowelCount(str) {
  let lower = str.toLowerCase();
  let result = {};
  let vowels = "aeiou";

  for (let char of lower) {
    if (vowels.includes(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  return result;
}
console.log(vowelCount("Elie"));
console.log(vowelCount("Tim"));
console.log(vowelCount("Matt"));

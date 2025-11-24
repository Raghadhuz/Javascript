let birthdate = Number(prompt("Enter Your Birthdate Month In Numbers"));

switch (birthdate) {
  case 1:
    document.write("January");
    break;

  case 2:
    document.write("February");
    break;

  case 3:
    document.write("March");
    break;

  case 4:
    document.write("April");
    break;

  case 5:
    document.write("May");
    break;

  case 6:
    document.write("June");
    break;

  case 7:
    document.write("July");
    break;

  case 8:
    document.write("August");
    break;

  case 9:
    document.write("September");
    break;

  case 10:
    document.write("October");
    break;

  case 11:
    document.write("November");
    break;

  case 12:
    document.write("December");
    break;

  default:
    document.write("wrong value");
}

document.write("<br>");

let num = 1;

for (let row = 1; row <= 4; row++) {
  for (let col = 1; col <= row; col++) {
    document.write(num + " ");
    num++;
  }
  document.write("<br>");
}

document.write("<br>");

for (let i = 1; i <= 1000; i++) {
  if (i % 13 === 0) {
    console.log(i);
  }
}

document.write("<br>");
function multiplication2(a, b) {
  let result = 0;

  for (let i = 0; i < b; i++) {
    result = result + a;
  }

  return result;
}

document.write("<br>");

function triangleArea(base, height) {
  return 0.5 * base * height;
}

document.write("<br>");

function pandigital(num) {
  let str = String(num);

  for (let digit = 0; digit <= 9; digit++) {
    if (!str.includes(digit)) {
      return false;
    }
  }

  return true;
}

document.write("<br>");

let drink = prompt("Enter your favorite drink:").toLowerCase();

switch (drink) {
  case "banana":
    document.write("The price of a banana drink is 20 dollars");
    break;

  case "orange":
    document.write("The price of an orange drink is 15 dollars");
    break;

  case "mango":
    document.write("The price of a mango drink is 25 dollars");
    break;

  case "apple":
    document.write("The price of an apple drink is 18 dollars");
    break;

  case "lemon":
    document.write("The price of a lemon drink is 10 dollars");
    break;

  default:
    document.write("Sorry, this drink is not available.");
}

document.write("<br>");
function fullName(firstName, lastName) {
  return firstName.concat(" ", lastName);
}

document.write("<br>");

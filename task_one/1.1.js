let operation = prompt("Enter the operation (+, -, *, /):");
let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));

document.getElementById(
  "info"
).innerHTML = `Operation: ${operation} | Number 1: ${num1} | Number 2: ${num2}`;

let result;

switch (operation) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    result = num1 / num2;
    break;

  default:
    console.log("Invalid operation");
    result = "Error";
}

console.log("Result:", result);

let mark = 85;
let grade;

if (mark < 50) grade = "FAIL";
else if (mark <= 59) grade = "D";
else if (mark <= 69) grade = "C";
else if (mark <= 79) grade = "B";
else if (mark <= 89) grade = "A";
else if (mark <= 100) grade = "A+";
else grade = "INVALID";

switch (grade) {
  case "FAIL":
  case "D":
  case "C":
  case "B":
  case "A":
  case "A+":
    document.write("Your grade is: " + grade);
    break;

  default:
    document.write("Invalid mark");
}

let x = Number(prompt("Enter value for x:"));
let y = Number(prompt("Enter value for y:"));

let message;

if (x > y) {
  message = "Hello World";
} else {
  message = "Goodbye";
}
alert(message);
console.log(message);
document.getElementById("result").innerHTML = message;

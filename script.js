// Ordinære functions

function greet() {
  console.log("Hello world");
}
greet();

function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
greetUser("Maria");

function add(a, b) {
  return a + b;
}
let result = add(5, 3);
let result2 = add(6, 7);
console.log(result);
console.log(result2);

// anonym function

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5));

// Arrow function
const divide = (a, b) => a / b;
console.log(divide(18, 2));

// high order function

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(8));
console.log(triple(5));

// Methods

// String methods

let message = "Hello world!";

console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.includes("world"));
console.log(message.includes("beach"));

// Array methods

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.push(6));
console.log(numbers);

console.log(numbers.pop());
console.log(numbers);

let doubled = numbers.map((num) => num * 2);
console.log(doubled);

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// date methods
let now = new Date();

console.log(now.toDateString());
console.log(now.getFullYear());
console.log(now.getHours());

//chaining methods

let resultMethod = "   Hello, Javascript!    "
  .trim()
  .toUpperCase()
  .replace("JAVASCRIPT", "KARTLEGGING");
console.log(resultMethod);

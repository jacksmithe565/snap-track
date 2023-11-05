/* 
   Filename: ComplexCodeExample.js
   Content: Advanced example showcasing various JavaScript concepts
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create instances of Person class
const person1 = new Person("John", 25);
const person2 = new Person("Sara", 30);

// Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers from the array
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);

// Function to calculate factorial of a number recursively
function calculateFactorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}

// Calculate factorial of a number
const factorial = calculateFactorial(5);
console.log(factorial);

// Promisify setTimeout function
function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

// Example usage of promisified setTimeout
console.log("Before delay");
delay(2000).then(() => {
  console.log("After delay");
});

// Asynchronous function
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Example usage of asynchronous function
fetchData("https://api.example.com/data").then(data => {
  console.log(data);
});

// Regular expression to validate email addresses
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// HTML form validation
function validateForm() {
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  
  if (!emailRegex.test(emailInput.value)) {
    errorMessage.innerText = "Invalid email address";
    return false;
  }
  
  return true;
}

// Event listener for form submission
const form = document.getElementById("my-form");
form.addEventListener("submit", (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});

// ... (more advanced code continues)
/*
  Filename: ComplexCode.js
  Content: A Complex JavaScript Code
*/

// Utility function to generate random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Class representing a complex number
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Method to add two complex numbers
  add(other) {
    return new Complex(this.real + other.real, this.imaginary + other.imaginary);
  }

  // Method to subtract two complex numbers
  subtract(other) {
    return new Complex(this.real - other.real, this.imaginary - other.imaginary);
  }

  // Method to multiply two complex numbers
  multiply(other) {
    const realPart = this.real * other.real - this.imaginary * other.imaginary;
    const imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
    return new Complex(realPart, imaginaryPart);
  }

  // Method to compute the magnitude of the complex number
  magnitude() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }

  // Method to stringify the complex number
  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}

// Function to generate a random complex number
function generateRandomComplexNumber() {
  const real = getRandomNumber(1, 10);
  const imaginary = getRandomNumber(1, 10);
  return new Complex(real, imaginary);
}

// Create an array to hold complex numbers
const complexNumberArray = [];

// Generate 10 random complex numbers and add them to the array
for (let i = 0; i < 10; i++) {
  const complexNumber = generateRandomComplexNumber();
  complexNumberArray.push(complexNumber);
}

// Print the generated complex numbers
console.log("Generated Complex Numbers:");
complexNumberArray.forEach(complexNumber => console.log(complexNumber.toString()));
console.log('\n');

// Perform arithmetic operations on the complex numbers
console.log("Arithmetic Operations:");
const firstNumber = complexNumberArray[0];
const secondNumber = complexNumberArray[1];
const sum = firstNumber.add(secondNumber);
const difference = firstNumber.subtract(secondNumber);
const product = firstNumber.multiply(secondNumber);
console.log(`Sum: ${sum.toString()}`);
console.log(`Difference: ${difference.toString()}`);
console.log(`Product: ${product.toString()}`);
console.log('\n');

// Calculate and print the magnitudes of complex numbers
console.log("Magnitudes:");
complexNumberArray.forEach((complexNumber, index) => {
  console.log(`Magnitude of Complex Number ${index + 1}: ${complexNumber.magnitude()}`);
});
console.log('\n');

console.log("End of Complex Code.");
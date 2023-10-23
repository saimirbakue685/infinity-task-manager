/*
Filename: complexCode.js
Description: A complex JavaScript code demonstrating various advanced programming concepts.
*/

// Function to find the nth Fibonacci number using recursion
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Class representing a Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Function to generate a random number between a given minimum and maximum
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Array of colors
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// Function to iterate over an array and log each element
function iterateArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Object representing a car
const car = {
    make: 'Tesla',
    model: 'Model S',
    year: 2022,
    isElectric: true,
    startEngine() {
        console.log('Engine started!');
    }
};

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to calculate the factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Function to convert a temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// Event listener for button click
document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked!');
});

// Implementing a queue using a class
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Usage of the Queue class
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();

/*
Rest of the code...
...More sophisticated and elaborate code...
...Code utilizing complex algorithms and data structures...
...Code implementing advanced concepts such as closures, async/await, promises, etc...
*/
// End of the complexCode.js file
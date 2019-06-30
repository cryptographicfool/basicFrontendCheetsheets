// String, Numbers, Boolean, Null, undefined, Symbol

const name = 'John';
const age = 30;

// Concatentation
console.log('My name is ' + name + ' and I am ' + age);

// Template String
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

// Strings
const s = 'Hello World';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split(', '));

//Arrays - variables that hold multiple values
// Old way
const numbers = new Array('1, 2, 3, 4, 5');
console.log(numbers);

//New Way
const fruits = ['Apples', 'Oranges', 'Peaes', 10, true];
console.log(fruits);
console.log(fruits[1]);

fruits[3] = 'Grapes';
console.log(fruits);

fruits.push('mangoes');
console.log(fruits);

fruits.unshift('strawberries');
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('Oranges'));

// Object Literals
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'sports', 'movies'],
  address: {
    street: '32 main st',
    city: 'MainCity',
    state: 'MainState',
  },
};

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[2]);
console.log(person.address.city);

const { firstName, lastName, address: { city } } = person;
console.log(firstName);
console.log(city);

person.email = 'john@pm.me';
console.log(person);

// Arrays of Objects

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Meeting with Bob',
    isCompleted: true,
  },
  {
    id: 3,
    text: 'Dentist Appointment',
    isCompleted: false,
  },
];

console.log(todos);
console.log(todos[1].text);

// JSON conversion

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// Loops

/* for */

for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

/* while */

let i = 0;
while (i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

/* for loop in arrays */

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}

/* for off */

for (let todo of todos) {
  console.log(todo.text);
}

/* high order array methods */

// forEach, map, filter

todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);

const todoTrue = todos.filter(function (todo) {
  return todo.isCompleted === true;
}).map(function (todo) {
  return todo.text;
});

console.log(todoTrue);

/* Conditionals */

const x = 20;

if (x === 10) {
  console.log('x is 10');
} else if (x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
};

const y = 10;

if (x > 5 || y > 10) {
  console.log('x is more than 5 or y is more than 10');
};

// Turniary operator = '?', ':'

const a = 10;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

//Switches

switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not red or blue');
    break;
}

// Functions

function addNums(num1, num2) {
  return (num1 + num2);
}

console.log(addNums(5, 4));

// Arow Function

const addNum = (num1, num2) => {
  return (num1 + num2);
};

console.log(addNum(5, 4));

const add = (num1, num2) => console.log(num1 + num2);
add(5, 3);

/* OOP */

// Constructor function
//function Person(firstName, lastName, dob) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.dob = new Date(dob);
//}

//Person.prototype.getBirthYear = function () {
//  return this.dob.getFullYear();
//};

//Person.prototype.getFullName = function () {
//  return `${this.firstName} ${this.lastName}`;
//};

//class
class Person {
  constructor (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear () {
    return this.dob.getFullYear();
  }

  getFullName () {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate object
const person1 = new Person('John', 'Bobby', '1/1/1901');
const person2 = new Person('Bard', 'Bobby', '4/5/1991');
const person3 = new Person('Lenny', 'Smith', '3/6/1999');

console.log(person1);
console.log(person1.lastName);
console.log(person2.firstName);
console.log(person3.dob.getFullYear());
console.log(person2.getBirthYear());
console.log(person3.getFullName());

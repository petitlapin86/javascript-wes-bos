
//this is a basic way to declare a function:
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anonymous Function Example
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
//here were saving an anonymous function inside a variable
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

/* eslint-disable */
const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

//here is another arrow function example:
//we declared a variable called add, set s 
// const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });


// IIFE
// Immediately Invoked Function Expression

(function(age) {
  return `You are cool and age ${age}`;
})(10);

// Methods!!!
const wes = {
  name: 'Westopher Bos',
  // Method!
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow function
  // arrow functions are just shorthand. => replaces the need to write function
  wisperHi: () => {
    console.log('hii wesss im a mouse');
  }
}

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!');
}

button.addEventListener('click', function() {
  console.log('NIce Job!!!');
});

// Timer Callback
setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);

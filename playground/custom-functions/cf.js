// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call. Or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);


/*functions are defined and then called or run
you can define a function in a few different ways:

function givethefunctionaname(give it some params) {
  create a function block
}

to run:
givethefunctionaname();

*/

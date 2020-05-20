
// there are 6 data types
//string === word or letter
//number === 2
//object === collections {}
//boolean === true or false
//null === nothing
//undefined === not yet assigned
//symbol ===

//STRINGS
// there 3 different ways to create strings in js
const name = 'wes'; //single quote
const middle = "topher"; //double quote
const last = `bos`; //backtick

// you can use the opposite quote to use quotes within a string:
const sentence = "shes's so \"cool\"";
const sentence2 = `shes's so "cool"`;

//if you wanted to wrote something multiline you could do this:
const song = `Ohhh

ya

I like
pizza`;

//concatonation is whem you combine two strings
// in order to concatonate you surround in quotes but technically you can use either style as shown below:
const hello = 'hello my name is ' + name + ". Nice to meet you";

//this is a very annoying way of doing concatonation and interpolation:
let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + ' Nice to meet you';


//this is the newer version of concatonation, using object literals
//this way is preferable:
const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

//you can perform math right inside an object literal
const anotherExample = `I am ${1 + 100} years old`;

//you can even write html:
const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;

*/

//NUMBERS
// integers are whole number and decimals are called floats

//there are helper methods that help with Math
Math.round(20.5) //rounds up or down to whole number gives you 21
Math.random() //random number you can provide a range parameter
Math.floor(20.9999) //give you the lower end of the number so 20
Math.ceil(20.2) //give you the upper end of number so 21

// const age = 100.5;
// const name = 'wes';

// const a = 10;
// const b = 20;

//MATH.FLOOR EXAMPLE:
const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kids gets ${eachKidGets}`);

const price = 1034;

//You can do to the power of in js like so
10 ** 2 //would equal 100

//NaN stands for not a number

/*
EVERYTHING IN JAVASCRIPT IS AN object
objects are collections
so you can group togeher data and/or variables
*/
const person = {
  first: 'wes',
  last: 'bos',
  age: 100
};

/*UNDEFINED EXPLAINED
undefined is something that has been created but not UNDEFINED
for example dog:
*/
let dog;
console.log(dog);
dog = 'snickers';

/*NULL is nothing
null is something that has a value of nothing like this:
*/
let somethingUndefined;
const somethingNull = null;


//here is an example of undefined, chers last name is unknown or undefined
const cher = {
  first: 'cher'
};

//whereas teller has explicitly set his last name to null
const teller = {
  first: 'Raymond',
  last: 'Teller'
}

teller.first = 'Teller';
teller.last = null;

//undefined and null are both representations of nothing, just in different ways
*/

let isDrawing = false;
let age = 18;
const ofAge = age > 19;
console.log(ofAge);

age = 100;
let age2 = 100;


// there are 6 data types
//string === word or letter
//number === 2
//boolean === true or false
//null === nothing
//undefined === not yet assigned
//symbol ===


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

// in order to concatonate you surround in quotes but technically you can use either style as shown below:
const hello = 'hello my name is ' + name + ". Nice to meet you";

let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + ' Nice to meet you';

const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;

*/

// const age = 100.5;
// const name = 'wes';

// const a = 10;
// const b = 20;
/*
const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kids gets ${eachKidGets}`);

const price = 1034;
*/


/*
const person = {
  first: 'wes',
  last: 'bos',
  age: 100
};


let dog;
console.log(dog);
dog = 'snickers';


let somethingUndefined;
const somethingNull = null;

const cher = {
  first: 'cher'
};

const teller = {
  first: 'Raymond',
  last: 'Teller'
}

teller.first = 'Teller';
teller.last = null;

*/

let isDrawing = false;
let age = 18;
const ofAge = age > 19;
console.log(ofAge);

age = 100;
let age2 = 100;

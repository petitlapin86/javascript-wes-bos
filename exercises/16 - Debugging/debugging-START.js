const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// Console Methods
.error will change the way it looks to red
.table will display in a table
.count can count how many times a function runs for example
.group and .groupend can be used to basically test a bunch of stuff in the console and keep it all together


// Callstack
tell you what function called what function

// Grabbing Elements
within the dom console you can grab elements from a webpage by $('p') would for example match the first paragraph tag

// Breakpoints


// Scope

// Network Requests
within the dom tools network request tabs essentially shows the history of what has been preformed

// Break On Attribute
under elements  you can right click on the line of code your interested in and add a break on - this is basically a wa to add  breakpoint
// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}

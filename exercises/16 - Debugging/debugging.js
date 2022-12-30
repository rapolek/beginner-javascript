const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'America' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.log('DONE');
  console.groupEnd(`${person.name}`);
});

console.table(people);

// Console Methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
  console.group('doing some stuff');
  console.log('hey Im one');
  console.warn('watch out!');
  console.error('hey');
  console.groupEnd('doing some stuff');
}

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // this will cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('starting the app');
  go();
}

// bootstrap();

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

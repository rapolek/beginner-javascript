console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// oh shoot! we need to add somethint to the top. like a heading!
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('beforebegin', heading);

// <ul>
// <li>One</li>
// <li>two</li>
// <li>three</li>
// <li>four</li>
// <li>five</li>
// </ul>

const list = document.createElement('list');
const li = document.createElement('li');
li.textContent = 'one';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li2 = document.createElement('li');
li2.textContent = 'two';
list.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = 'three';
list.appendChild(li3);

const li4 = document.createElement('li');
li4.textContent = 'four';
list.appendChild(li4);

const li5 = document.createElement('li');
li5.textContent = 'five';
list.appendChild(li5);

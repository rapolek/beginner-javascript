// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.insertAdjacentElement('afterbegin', div);
// make an unordered list
const ul = document.createElement('ul');
// add three list items with the words "one, two three" in them
const li = document.createElement('li');
li.textContent = 'one';
ul.appendChild(li);

const li2 = document.createElement('li');
li2.textContent = 'two';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = 'three';
ul.appendChild(li3);

// put that list into the above wrapper
div.insertAdjacentElement('afterbegin', ul);

// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/500';
// set the width to 250
img.width = '250';
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class="myDiv">
<p>First Paragraph</p>
<p>Second Paragrph</p>
</div>
`;
// put this div before the unordered list from above
div.insertAdjacentHTML('afterbegin', myHTML);
// add a class to the second paragraph called warning
const myDiv = document.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.children[0].remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard (name, age, height){
    const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} cm tall and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
      <button class="delete" type="button">&times; DELETE CARD!</button>
    </div>
        `;
        return html;
};
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function makes 4 cards
let cardsHTML = generatePlayerCard('sunny', 12, 150);
cardsHTML = cardsHTML + generatePlayerCard('bunny', 13, 160);
cardsHTML = cardsHTML + generatePlayerCard('yummy', 14, 170);
cardsHTML = cardsHTML + generatePlayerCard('funny', 15, 180);
// append those cards to the div
cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event){
const buttonThatGotClicked = event.currentTarget;
buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
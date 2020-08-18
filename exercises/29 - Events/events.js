const butts = document.querySelector(".button1");
const coolButton = document.querySelector(".button2");

function handleClick() {
  console.log("IT GOT CLICKED!");
}

const hooray = () => console.log("HOORAY!");

butts.addEventListener("click", function () {
  console.log("Im an anon!");
});
coolButton.addEventListener("click", hooray);

butts.removeEventListener("click", handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll("button.buy");

function handleBuyButtonClick(event) {
  console.log("You clicked a button!");
  const button = event.target;
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});

window.addEventListener(
  "click",
  function (event) {
    console.log("YOU CLICKED THE WINDOW");
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
  },
  { capture: true }
);

const photoEl = document.querySelector(".photo");

photoEl.addEventListener("mouseenter", (e) => {
  console.log(e.currentTarget);
  console.log(this);
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
}

const stringColor = document.querySelector('span.color');
const colorBtn = document.querySelector("button.change-color");
const bodyColor = document.querySelector('body')

colorBtn.addEventListener('click', updateColor);

function updateColor() {

  stringColor.textContent = `${getRandomHexColor()}`
  bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  
};
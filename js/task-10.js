

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const newBoxes = document.querySelector('div#boxes');
const newItems = document.querySelectorAll('.newItems');

let counter = 0;
let clickCounter = 0;
let sizeCounter = 0;
let divWidth = 30;

inputEl.addEventListener("input", (event) => {
  counter = event.currentTarget.value;
  
});

createBtn.addEventListener("click", () => {
  
  console.log('counter', counter);
  
  if (clickCounter > 0) {
    divWidth = sizeCounter;
  }   
  
  for (let i = 0; i < counter; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newItem');
    newDiv.style.width = `${divWidth}px`;
    newDiv.style.height = `${divWidth}px`;
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;
    divWidth += 10;
    newBoxes.append(newDiv);
    sizeCounter = divWidth;
  } 
  
  clickCounter += 1;
  
});

destroyBtn.addEventListener("click", () => {
  newBoxes.innerHTML = '';
  clickCounter = 0;
  divWidth = 30;
})

 
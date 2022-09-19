

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const newBoxes = document.querySelector('div#boxes');
const newItems = document.querySelectorAll('.newItems');

let counter = 0;

inputEl.addEventListener("input", (event) => {
  counter = event.currentTarget.value;
  
});

createBtn.addEventListener("click", () => {
  console.log(counter);
  let divWidth = 30;
let divHeight = 30;
  for (let i = 0; i < counter; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newItem');
    newDiv.style.width = `${divWidth}px`;
    newDiv.style.height = `${divHeight}px`;
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;
    divWidth += 10;
    divHeight += 10;
    newBoxes.append(newDiv);
  }
  
});

destroyBtn.addEventListener("click", () => {
  newBoxes.innerHTML = '';
  
})

 
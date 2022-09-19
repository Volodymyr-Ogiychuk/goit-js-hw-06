const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let list = document.querySelector('ul#ingredients');

const newArr = ingredients.map(item => {
  let element = document.createElement("li");
  element.classList.add("item");
  element.textContent = item;
  return element;
});

list.append(...newArr);
  

// for (const elem of ingredients) {
  
//   let element = document.createElement("li");
//   element.classList.add("item");
//   element.textContent = elem;
//   list.append(element);
  
// }


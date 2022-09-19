const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let listEl = document.querySelector('ul#ingredients');

const ingrArr = ingredients.map(item => {
  let element = document.createElement("li");
  element.classList.add("item");
  element.textContent = item;
  return element;
});

listEl.append(...ingrArr);
  


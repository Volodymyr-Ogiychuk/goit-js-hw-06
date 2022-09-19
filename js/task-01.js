
const mainList = document.querySelector('#categories');

console.log("Number of categories: ", mainList.children.length);

const includedList = mainList.querySelectorAll('.item');

for (const element of includedList) {

    console.log("Category: ", element.querySelector('h2').textContent);
    console.log("Elements: ", element.querySelector('ul').children.length);

};
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',

  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listImages = document.querySelector(".gallery");

let elements = [];

images.map(picture => {
  
  elements.push(`<li class="gallery-item"><img src= ${picture.url}" alt="${picture.alt}" width=650px></li>`);
  
});

listImages.insertAdjacentHTML('beforeend', elements.join(' '))

const item = document.querySelectorAll('.gallery-item');
item.forEach((elem) => {
  elem.style.display = "flex";
  elem.style.flexDirection = "column";
  elem.style.listStyle = "none";
  elem.style.marginBottom = "20px";
})

 
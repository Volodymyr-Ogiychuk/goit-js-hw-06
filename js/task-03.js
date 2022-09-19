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

const elements = images.map(picture => {
  listImages.insertAdjacentHTML('beforeend', `<img class="image__situation" src= "${picture.url}" alt="${picture.alt}" width=650px>`);
  });



  
    // const imageEl = document.createElement("img");
    // imageEl.src = picture.url;
    // imageEl.alt = picture.alt;
    // imageEl.style.width = '650px';
    // imageEl.style.margin = '20px';
    
    // return imageEl;
  
// listImages.append(...elements);


// const listImages = document.querySelector(".gallery");

// const makeGallery = pictures => {
//   return images.map(picture => {
//     const imageEl = document.createElement("img");
//     imageEl.src = picture.url;
//     imageEl.alt = picture.alt;
//     imageEl.style.width = '650px';
//     imageEl.style.margin = '20px';
    
//     return imageEl;
//   });
  
// };

// const elements = makeGallery(images);
// listImages.insertAdjacentHTML(beforeend, '<img src= "${picture.url}" alt="${picture.alt}">');





// const listImages = document.querySelector(".gallery");

// const elements = images.map(picture => {
//     const imageEl = document.createElement("img");
//     imageEl.src = picture.url;
//     imageEl.alt = picture.alt;
//     imageEl.style.width = '650px';
//     imageEl.style.margin = '20px';
    
//     return imageEl;
//   });

// console.log(elements);
// listImages.append(...elements);


// const makeGallery = pictures => {
//   return images.map(picture => {
//     const imageEl = document.createElement("img");
//     imageEl.src = picture.url;
//     imageEl.alt = picture.alt;
//     imageEl.style.width = '650px';
//     imageEl.style.margin = '20px';
    
//     return imageEl;
//   });
// };

// const elements = makeGallery(images);
// listImages.append(...elements);






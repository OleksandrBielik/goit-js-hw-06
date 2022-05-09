const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Whiteand Black Long Fur Cat',
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


const galleryList = document.querySelector('.gallery');

function setImages(parent) {

  images.forEach(item => {
    parent.insertAdjacentHTML('beforeend', `<li><img src=${item.url} /></li>`);
  })

  parent.style.display = 'flex';
  parent.style.justifyContent = 'space-between';
  parent.style.backgroundColor = 'gray';
  parent.style.border = '1px solid black';
}


function setImagesStyle(parent) {

  const imagesArray = parent.querySelectorAll('img');
  
  images.forEach((item, i) => {
    imagesArray[i].setAttribute('alt', item.alt);
    imagesArray[i].style.width = '200px';
    })
}


setImages(galleryList);
setImagesStyle(galleryList);


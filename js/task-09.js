const bodyElement = document.querySelector('body');
const buttonElement = document.querySelector('button');
const spanElement = document.querySelector('span');

let background;

function setSpanData(bg) {
  spanElement.textContent = bg;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


buttonElement.addEventListener('click', () => {
  background = getRandomHexColor();
  bodyElement.style.backgroundColor = background;
  setSpanData(background)
})



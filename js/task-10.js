const inputElement = document.querySelector('input');
const controlContainer = document.getElementById('controls');
const boxes = document.getElementById('boxes');



controlContainer.addEventListener('click', (e) => {

  if (Object.keys(e.target.dataset)[0] === 'create') {
    createBoxes(Number(inputElement.value))

  } else if (Object.keys(e.target.dataset)[0] === 'destroy') {
    destroyBoxes(boxes)
  }
})



function createBoxes(amount) {
  let arr = [];
  arr.length = amount;

  arr.fill(null, 0)

  arr.forEach((item, i) => {
    const divElement = document.createElement('div')

    divElement.style.backgroundColor = getRandomHexColor();
    divElement.style.width = `${30 + (i * 10)}px`;
    divElement.style.height = `${30 + (i * 10)}px`;

    boxes.appendChild(divElement)
  })
  inputElement.value = "";
}

function destroyBoxes(parent) {
  Array.from(parent.children).forEach(item => {
    item.remove()
  })
  inputElement.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


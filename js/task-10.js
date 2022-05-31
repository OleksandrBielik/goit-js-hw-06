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
  boxes.innerHTML = "";

  const arr = [...Array(amount)];

  const elements = arr.map((item, i) => 
    `<div style="background-color: ${getRandomHexColor()}; width: ${30 + (i * 10)}px; height: ${30 + (i * 10)}px;"></div>`
  )

  boxes.insertAdjacentHTML('beforeend', elements.join(''))

  inputElement.value = "";
}


function destroyBoxes(parent) {
  parent.innerHTML = "";
  inputElement.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


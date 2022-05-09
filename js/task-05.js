const inputElement = document.getElementById('name-input');
const outputElement = document.getElementById('name-output');

inputElement.addEventListener('input', () => {
    inputElement.value === '' ? outputElement.textContent = 'Anonymous' : outputElement.textContent = inputElement.value;
})
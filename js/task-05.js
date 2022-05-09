const inputElement = document.getElementById('name-input');
const outputElement = document.getElementById('name-output');

inputElement.addEventListener('input', () => {
    const value = inputElement.value;
    value === '' ? outputElement.textContent = 'Anonymous' : outputElement.textContent = value;
})
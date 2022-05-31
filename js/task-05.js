const inputElement = document.getElementById('name-input');
const outputElement = document.getElementById('name-output');

inputElement.addEventListener('input', () => {
    const value = inputElement.value;
    outputElement.textContent = value === '' ? 'Anonymous' : value;
})

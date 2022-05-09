const inputElement = document.getElementById('font-size-control');
const outputElement = document.getElementById('text');

inputElement.addEventListener('input', () => {
    const size = Number(inputElement.value);
    outputElement.style.fontSize = `${size}px`
})

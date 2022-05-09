const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', () => {
    const validLength = Number(inputElement.getAttribute('data-length'));
    const currentLength = inputElement.value.length;

    if (validLength === currentLength) {
        inputElement.classList.add('valid');
    } else {
        inputElement.classList.add('invalid');
    }
})
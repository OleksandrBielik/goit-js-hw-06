const counterContainer = document.getElementById('counter');
const counterElement = document.getElementById('value');
let counterValue = 0;

function updateCounter() {
    counterElement.textContent = counterValue;
}

updateCounter()

counterContainer.addEventListener('click', (e) => {
    e.target.getAttribute('data-action') === "increment" ? counterValue += 1 : counterValue -= 1;
    updateCounter()
})
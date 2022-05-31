const counterContainer = document.getElementById('counter');
const counterElement = document.getElementById('value');
let counterValue = 0;

function updateCounter() {
    counterElement.textContent = counterValue;
}

updateCounter()

counterContainer.addEventListener('click', (e) => {

    if (e.target.dataset.action === "increment") {
        counterValue += 1
        updateCounter()
    } else if (e.target.dataset.action === "decrement") {
        counterValue -= 1
        updateCounter()
    }
    
})
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const button = form.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    if (!email || !password) {      
        alert('Все поля должны быть заполнены.')

    } else {
        const result = {}
        const formData = new FormData(e.currentTarget)
        formData.forEach((value, name) => {
            result[name] = value
        })
        console.log(result)
        e.currentTarget.reset()
    }
})





const categoriesList = document.getElementById('categories');
const categories = categoriesContainer.querySelectorAll('.item');

function getCategories(parent) {
    console.log(`Number of categories: ${parent.children.length}`)
}

function getInfo(categories) {
    categories.forEach(item => {
        console.log(`Category: ${item.children[0].textContent}`);
        console.log(`Elements: ${item.children[1].children.length}`);
    })
}

getCategories(categoriesList);
getInfo(categories);
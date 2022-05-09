const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

function setItems(parent) {
  ingredients.forEach(item => {
    const ingredient = document.createElement('li');
    ingredient.className = 'item';
    ingredient.textContent = item;
    parent.appendChild(ingredient)
  })
}

setItems(ingredientsList);
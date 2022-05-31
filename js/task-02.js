const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

function setItems() {
  const arr = ingredients.map(item => {
    const ingredient = document.createElement('li');
    ingredient.className = 'item';
    ingredient.textContent = item;
    return ingredient;
  })
  return arr
}

const elements = setItems()

ingredientsList.append(...elements)


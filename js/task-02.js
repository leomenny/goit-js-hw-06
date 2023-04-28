const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("ul#ingredients");

const createList = content => {
return content.map((ingredient) => {
  const liIngredient = document.createElement('li');
  liIngredient.textContent = ingredient;
  liIngredient.classList.add("item");
  return liIngredient;
});
}

const elements = createList(ingredients);
ingredientsList.append(...elements);
console.log(ingredientsList);



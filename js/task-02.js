const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsElement = document.querySelector("#ingredients");
const ingredientItem = (items) => {
  return items.map((item) => {
    const ingredientItemElement = document.createElement("li");
    ingredientItemElement.classList.add("item");
    ingredientItemElement.textContent = item;
    return ingredientItemElement;
  });
};
ingredientsElement.append(...ingredientItem(ingredients));
console.log(ingredientsElement);
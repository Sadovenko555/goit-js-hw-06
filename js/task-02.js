const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector(`#ingredients`);
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredients) => {
  const li = document.createElement('li');
  li.textContent = ingredients;
  li.classList.add(`item`);
  fragment.appendChild(li);
});

ul.appendChild(fragment);
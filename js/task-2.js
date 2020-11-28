const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();

const ingredientArr = ingredients.map(ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  fragment.append(ingredientRef);
  return fragment;
});

ingredientsRef.append(fragment);

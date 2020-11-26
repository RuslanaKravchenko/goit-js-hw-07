const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const ingredientArr = ingredients.map(ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;

  return ingredientRef;
});

// ingredientsRef.append(...ingredientArr);

// ============ Вариант 2 ===========

const fragment = document.createDocumentFragment();
fragment.append(...ingredientArr);
ingredientsRef.append(fragment);

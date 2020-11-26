const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(category =>
  console.log(
    `Категория: ${category.firstElementChild.textContent}\nКоличество элементов: ${category.lastElementChild.children.length}`,
  ),
);

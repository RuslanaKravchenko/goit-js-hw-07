const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');

// ============ Вариант 1 ===========
images.forEach(item => {
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<li><img src=${item.url} alt=${item.alt}></li>`,
  );
});

// ============ Вариант 2 ===========

// const createNewItem = elem => {
//   const li = document.createElement('li');
//   li.classList.add('list__item');

//   const img = document.createElement('img');
//   img.setAttribute('src', `${elem.url}`);
//   img.setAttribute('alt', `${elem.alt}`);

//   li.append(img);

//   return li;
// };

// const itemArr = images.map(item => createNewItem(item));

// const fragment = document.createDocumentFragment();
// fragment.append(...itemArr);

// galleryRef.append(fragment);

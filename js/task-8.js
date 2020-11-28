const inputRef = document.querySelector("[type = 'number']");
const btnRenderRef = document.querySelector("[data-action='render']");
const btnDestroyRef = document.querySelector("[data-action='destroy']");
const boxesRef = document.querySelector('#boxes');

let amount = 0;
let sizeBox = 30;

const createBoxes = amount => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const newBoxRef = document.createElement('div');
    newBoxRef.classList.add('box');
    newBoxRef.style.width = `${sizeBox}px`;
    newBoxRef.style.height = `${sizeBox}px`;
    newBoxRef.style.backgroundColor = `rgb(${Math.round(
      Math.random() * 255,
    )}, ${Math.round(Math.random() * 255)},
     ${Math.round(Math.random() * 255)})`;

    sizeBox += 10;
    fragment.append(newBoxRef);
  }
  boxesRef.appendChild(fragment);
  return boxesRef;
};

const destroyBoxes = () => {
  while (boxesRef.firstChild) {
    boxesRef.removeChild(boxesRef.firstChild);
    sizeBox = 30;
  }
};

const onClickBtnRender = () => {
  amount = Number(inputRef.value);
  return createBoxes(amount);
};

btnRenderRef.addEventListener('click', onClickBtnRender);
btnDestroyRef.addEventListener('click', destroyBoxes);

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const changeSize = () => {
  spanRef.style.fontSize = `${inputRef.value}px`;
};
inputRef.addEventListener('input', changeSize);

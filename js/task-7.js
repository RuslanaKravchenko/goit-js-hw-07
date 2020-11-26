const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const changeSize = () => {
  console.log(inputRef.value);
  spanRef.style.fontSize = `${inputRef.value}px`;
};
inputRef.addEventListener('input', changeSize);

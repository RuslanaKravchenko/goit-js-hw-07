const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const addName = () => {
  inputRef.value
    ? (spanRef.textContent = inputRef.value)
    : (spanRef.textContent = 'незнакомец');
};

inputRef.addEventListener('input', addName);

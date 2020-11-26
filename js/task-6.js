const inputRef = document.querySelector('#validation-input');
const inputLength = Number(inputRef.getAttribute('data-length'));

const isValidLength = () => {
  if (inputRef.value.length !== inputLength) {
    inputRef.classList.add('invalid');
  }
  if (inputRef.value.length === inputLength) {
    inputRef.classList.add('valid');
    inputRef.classList.replace('invalid', 'valid');
  }
};

inputRef.addEventListener('blur', isValidLength);

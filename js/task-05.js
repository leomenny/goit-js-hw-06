
const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name-output');

  nameInput.addEventListener('input', onTextInput);
  function onTextInput() {
    if (nameInput.value.trim() !== '') {
      nameOutput.textContent = nameInput.value;
    } else {
      nameOutput.textContent = 'Anonymous';
    }
  };




const textInput = document.querySelector('#validation-input')

const inputSymbolLength = +textInput.dataset.length;

textInput.addEventListener('blur', onCheckSymbols);

function onCheckSymbols(event) {
    const symbolsEnteredLength = event.currentTarget.value.length;

    if (symbolsEnteredLength === inputSymbolLength) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid')
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid')
    }
}
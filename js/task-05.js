const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener ("input", onAddTextInput);

function onAddTextInput(event) {
  let name = event.currentTarget.value;
  if (name.trim() === "") {
    nameOutput = "Anonymous";
  }
  nameOutput.textContent = name.trim();
}


const changeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

changeColor.addEventListener('click', onChangeColor);
function onChangeColor() {
  const color = getRandomHexColor();
  textColor.textContent = color;
  document.body.style.backgroundColor = color;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





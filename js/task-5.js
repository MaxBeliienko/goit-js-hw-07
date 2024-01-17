function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnChangeColor = document.querySelector('.change-color')
btnChangeColor.addEventListener('click', changeColor)

function changeColor() {
  const body = document.querySelector('body')
  const colorName = document.querySelector('.color')
  body.style.backgroundColor = getRandomHexColor()
  colorName.textContent = body.style.backgroundColor
}
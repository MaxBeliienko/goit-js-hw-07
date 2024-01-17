function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('#controls input')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')

createBtn.addEventListener('click', onInpValid)

function onInpValid() {
  const amount = parseInt(numberInput.value)
  if (amount <= numberInput.getAttribute('max') && amount >= numberInput.getAttribute('min')) {
    createBoxes(amount)
  } else {
    alert('The number must be between 1 and 100')
    numberInput.value = ''
  }
}

function createBoxes(amount) {
  destroyBoxes()
  const arr = [];
  for (let i = 0; i < amount; i++) {
    const newElem = `<div style="background-color:${getRandomHexColor()}; width:${i * 10 + 30
      }px; height:${i * 10 + 30}px"></div>`;
    arr.push(newElem);
  }
  boxes.insertAdjacentHTML('beforeend', arr.join(''))
  numberInput.value = ''
}


destroyBtn.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  boxes.innerHTML = ''
}
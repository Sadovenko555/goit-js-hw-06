const input = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls [data-create]');
const destroyBtn = document.querySelector('#controls [data-destroy]');
const boxesContainer = document.querySelector('#boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBox(size) {
  const box = document.createElement('div');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}


function createBoxes(amount) {
  let size = 30;
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = createBox(size);
    boxes.push(box);
    size += 10;
  }
  boxesContainer.append(...boxes);
}


function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);
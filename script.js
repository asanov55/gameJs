let timeHeader = document.querySelector('#time-header');
let time = document.querySelector('#time');
let resultHeader = document.querySelector('#result-header');
let result = document.querySelector('#result');
let start = document.querySelector('#start');
let gameField = document.querySelector('#game-field');
let gameTime = document.querySelector('#game-time');

start.addEventListener('click', onStartGame);
function onStartGame() {
  gameTime.setAttribute('disabled', true);
  start.classList.add('hide');
  time.textContent = gameTime.value;
  createBox();
}
gameTime.addEventListener('input', onInputChange);
function onInputChange() {
  time.textContent = gameTime.value;
}

function createBox() {
  let box = document.createElement('div');
  console.log(box);
  let sizeBox = getRandom(40, 60);
  let left = getRandom(0, 300 - sizeBox);
  let top = getRandom(0, 300 - sizeBox);

  box.style.cssText = `
width: ${sizeBox}px;
height :${sizeBox}px;
background-color: blue;
position:absolute;
left:${left}px;
top:${top}px;
background-color:rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(
    0,
    255
  )})
`;

  gameField.insertAdjacentElement('afterbegin', box);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

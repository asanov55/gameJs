let timeHeader = document.querySelector('#time-header');
let time = document.querySelector('#time');
let resulHeader = document.querySelector('#result-header');
let result = document.querySelector('#result');
let start = document.querySelector('#start');
let gameField = document.querySelector('#game-field');
let gameTime = document.querySelector('#game-time');

let score = 0;

start.addEventListener('click', onStartGame);

function onStartGame() {
  gameTime.setAttribute('disabled', true);
  start.classList.add('hide');
  time.textContent = gameTime.value;
  createBox();
  timer();
}

gameTime.addEventListener('input', onInputChange);

function onInputChange() {
  time.textContent = gameTime.value;
}

function createBox() {
  gameField.innerHTML = '';
  let box = document.createElement('div');
  console.log(box);
  let sizeBox = getRandom(30, 60);
  let left = getRandom(0, 300 - sizeBox);
  let top = getRandom(0, 300 - sizeBox);

  box.style.cssText = `
  width:${sizeBox}px;
  height:${sizeBox}px;
  background-color: blue;
  position:absolute;
  left:${left}px;
  top:${top}px;
  background-color:rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(
    0,
    255
  )})
  `;
  box.setAttribute('data-box', true);
  gameField.insertAdjacentElement('afterbegin', box);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

gameField.addEventListener('click', createRandomBoxes);

function createRandomBoxes(event) {
  if (event.target.dataset.box) {
    createBox();
    score++;
  }
  console.log(event);
}

function timer() {
  let interval = setInterval(function () {
    time.textContent = (Number(time.textContent) - 0.1).toFixed(1);
    if (time.textContent <= 0) {
      clearInterval(interval);
      endGame();
      console.log(interval);
    }
  }, 100);
}

function endGame() {
  gameField.innerHTML = '';
  start.classList.remove('hide');
  resulHeader.classList.remove('hide');
  timeHeader.classList.add('hide');
  result.textContent = score;
  gameTime.removeAttribute('disabled');
}

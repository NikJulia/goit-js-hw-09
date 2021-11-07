const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

const BODY_COLOR_DELAY = 1000;
let timeoutId = null;
refs.startBtn.disabled = false;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick () {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    timeoutId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
      }, BODY_COLOR_DELAY);
}

function onStopBtnClick () {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(timeoutId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]')
let isChangingColor = false;
let interval;

function changeBackgroundColor () {
    interval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

stopButton.disabled = true;
startButton.addEventListener('click', () => {

    isChangingColor = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    changeBackgroundColor();
});

stopButton.addEventListener('click', () => {
    isChangingColor = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(interval);
});

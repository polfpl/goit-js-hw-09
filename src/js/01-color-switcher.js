function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getWhiteColor(){
    return document.body.style.backgroundColor = "white";
    setTimeout(getWhiteColor, 0)
}    

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]')
let isChangingColor = false;

function changeBackgroundColor () {
    document.body.style.backgroundColor = getRandomHexColor(); 
    setTimeout(changeBackgroundColor, 1000);
}
stopButton.disabled = true;
startButton.addEventListener('click', () => {

    isChangingColor = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    changeBackgroundColor();
});
const intervalId = getWhiteColor()
stopButton.addEventListener('click', () => {
    isChangingColor = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(intervalId);
    return getWhiteColor()
});
clearInterval(intervalId);
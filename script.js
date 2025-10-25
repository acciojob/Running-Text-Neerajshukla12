//your JS code here. If required.
const textElement = document.getElementById("text");
const speedInput = document.getElementById("speed");
const startBtn = document.getElementById("startBtn");

const textToRender = "We love Programming!";

startBtn.addEventListener("click", () => {
    let speedValue = parseInt(speedInput.value);

    if (speedValue < 1) speedValue = 1;
    if (speedValue > 10) speedValue = 10;

    const charDelay = 500 / speedValue; // calculate delay per character
    textElement.textContent = ""; // clear previous text

    let index = 0;
    const interval = setInterval(() => {
        textElement.textContent += textToRender[index];
        index++;
        if (index === textToRender.length) {
            clearInterval(interval);
        }
    }, charDelay);
});

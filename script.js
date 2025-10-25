const textElement = document.getElementById("text");
const speedInput = document.getElementById("speed");

const textToRender = "We love Programming!";
let intervalId = null; // store interval to clear it later

function renderText() {
    // Clear any existing interval
    if (intervalId) clearInterval(intervalId);

    let speedValue = parseInt(speedInput.value);
    if (isNaN(speedValue) || speedValue < 1) speedValue = 1;
    if (speedValue > 10) speedValue = 10;

    const charDelay = 500 / speedValue;
    textElement.textContent = "";

    let index = 0;
    intervalId = setInterval(() => {
        textElement.textContent += textToRender[index];
        index++;
        if (index === textToRender.length) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }, charDelay);
}

// Render text automatically on page load
window.onload = renderText;

// Render text whenever speed input changes
speedInput.addEventListener("input", renderText);

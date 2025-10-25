const textElement = document.getElementById("text");
const speedInput = document.getElementById("speed");

const textToRender = "We love Programming!";

function renderText() {
    let speedValue = parseInt(speedInput.value);
    if (isNaN(speedValue) || speedValue < 1) speedValue = 1;
    if (speedValue > 10) speedValue = 10;

    const charDelay = 500 / speedValue;
    textElement.textContent = ""; // clear previous text

    let index = 0;
    const interval = setInterval(() => {
        textElement.textContent += textToRender[index];
        index++;
        if (index === textToRender.length) clearInterval(interval);
    }, charDelay);
}

// Trigger automatically when page loads
window.onload = renderText;

// Also re-render whenever speed changes
speedInput.addEventListener("input", renderText);

// cheaking sync to github
let buffer = '0';
let runningTotal = 0;
let previousOperator;
// get screen and show inputs
const screen =
    document.querySelector(".screen");

function rerender() {
    screen.innerText = buffer;
}

function handleNumber(value) {
    if (buffer === '0') {
        buffer = value;
    } else {
        buffer = buffer + value;
    }
}
function handleMath(value) {
    if (previousOperator) {
        flushOperator(parseInt(buffer));
    } else {
        runningTotal = parseInt(buffer);
    }
    previousOperator = value;
    buffer = '0';
}
function flushOperator(numberBuffer) {
    if (previousOperator === "+") {
        runningTotal = runningTotal + numberBuffer;
        return;
    }
    if (previousOperator === "-") {
        runningTotal = runningTotal - numberBuffer;
        return;
    }
    if (previousOperator === "*") {
        runningTotal = runningTotal * numberBuffer;
        return;
    }
    if (previousOperator === "/") {
        runningTotal = runningTotal / numberBuffer;
        return;
    }
}
function handleSymbol(value) {


    if (['+', '-', '/', '*'].includes(value)) {

        handleMath(value)
        return;
    }
    if (value === '←') {
        if (buffer.length === 1) {
            buffer = '0';
            return;
        }

        buffer = buffer.substring(0, buffer.length - 1);
        return;
    }
    if (value === '=') {
        if (!previousOperator) {
            return;
        }
        flushOperator(parseInt(buffer))
        previousOperator = undefined;
        buffer = runningTotal.toString();
        runningTotal = 0;
    }
    if (value === 'C') {

        runningTotal = 0;
        buffer = '0';
        return;
    }
}
function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);

    } else {

        handleNumber(value);
    }

    rerender();
}
//listen on button clicks and change the screen
document.querySelector('.cal-button').addEventListener('click', (event) => {
    buttonClick(event.target.innerText);
});
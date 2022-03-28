let buffer = '0';
let runningTotal = 0;
let previousOperator;

const screen =
    document.querySelector('.screen');

function rerender() {
    screen.innerText = buffer;
}

function handleMath(value) {
    if (buffer === '0') {
        buffer = value;
    } else {
        buffer = buffer + value;
    }
}
function handleMath(numberBuffer) {
    if (previousOperator) {
        flushOperator(parseInt(buffer));
    } else {
        runningTotal(parseInt(buffer));
    }
    previousOperator = value;
    buffer = '0';
}
function flushOperator(numberBuffer) {
    if (previousOperator === '+') {
        runningTotal = runningTotal + numberBuffer;
        return;
    }
    if (previousOperator === '-') {
        runningTotal = runningTotal + numberBuffer;
        return;
    }
    if (previousOperator === '*') {
        runningTotal = runningTotal + numberBuffer;
        return;
    }
    if (previousOperator === '/') {
        runningTotal = runningTotal + numberBuffer;
        return;
    }
}
function handleSymbol(value) {
    if (['+', '-', '/', '*'].includes(value)) {
        handleSymbol(value);
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
    if (isNaN(parsent(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}
document.querySelector('.cal-button').addEventListener('click', (value) => {
    buttonClick(event.target.innerText)
});
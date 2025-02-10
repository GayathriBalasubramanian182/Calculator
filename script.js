let currentInput = '';
let operator = '';
let firstOperand = '';
let shouldResetDisplay = false;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('display').value = '0';
});

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    currentInput += number.toString();
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function performOperation(op) {
    if (currentInput === '' && firstOperand === '') return;
    if (firstOperand === '') {
        firstOperand = currentInput;
        operator = op;
        currentInput = '';
    } else {
        calculateResult();
        operator = op;
    }
    shouldResetDisplay = true;
}

function calculateResult() {
    if (currentInput === '' || firstOperand === '') return;
    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        default:
            return;
    }

    firstOperand = result.toString();
    currentInput = '';
    updateDisplay();
    shouldResetDisplay = true;
}

function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    operator = '';
    shouldResetDisplay = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput || firstOperand || '0';
}

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';
let result = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            clearCalculator();
        } else if (value === '⌫') {
            backspace();
        } else if (['+', '-', '*', '/'].includes(value)) {
            selectOperator(value);
        } else if (value === '=') {
            calculateResult();
        } else {
            inputNumber(value);
        }
    });
});

function clearCalculator() {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    display.value = '';
}

function backspace() {
    if (num1 !== '') {
        num1 = num1.slice(0, -1);
        display.value = num1;
    }
}

function selectOperator(op) {
    num2 = num1;
    num1 = '';
    operator = op;
    display.value = operator;
}

function inputNumber(num) {
    if (operator === '') {
        num1 += num;
        display.value = num1;
    } else {
        num1 += num;
        display.value = num1;
    }
}

function calculateResult() {
    if (num1 !== '' && num2 !== '' && operator !== '') {
        switch (operator) {
            case '+':
                result = parseFloat(num2) + parseFloat(num1);
                break;
            case '-':
                result = parseFloat(num2) - parseFloat(num1);
                break;
            case '*':
                result = parseFloat(num2) * parseFloat(num1);
                break;
            case '/':
                result = parseFloat(num2) / parseFloat(num1);
                break;
            default:
                result = 'Error';
        }
        display.value = result;
        num1 = result.toString();
        num2 = '';
        operator = '';
    }
}
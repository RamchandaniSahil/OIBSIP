const screen = document.getElementById('screen');
const answer = document.getElementById('answer');
const button = document.querySelectorAll('.btn');
let finalValue = 0;
let previousValue = 0;
let operator = null;
let finalAnswer = null;

button.forEach(element => {
   element.addEventListener('click', () => {
    calculator(element);
   });
});

document.addEventListener('keydown', e => {
    button.forEach((buttons) => {
        if ((e.key === buttons.innerText)
        || ((e.key === 'Enter') && (buttons.innerText === '='))
        || ((e.key === 'Backspace') && (buttons.innerText === 'C'))
        || ((e.key === 'Escape') && (buttons.innerText === 'AC'))
        || ((e.key === '*') && (buttons.innerText === '×'))
        || ((e.key === '/') && (buttons.innerText === '÷'))) {
                e.preventDefault();
                buttons.click();
        }
    });
});

function calculator(element) {
    if (element.id === 'number') {
        finalValue = Number(finalValue + element.innerText);
        answer.innerText = finalValue;
    }
    else if (element.id === 'operator') {
        if ((operator !== null) && (finalValue === 0)) {
            finalValue = 0;
        }
        else if (operator === null) {
            previousValue = finalValue + previousValue;
            operator = element.innerText;
            finalValue = 0;
            screen.innerText = null;
            screen.innerText += previousValue + element.innerText;
            answer.innerText = finalValue;
        }
        else {
            previousValue = operate(previousValue, finalValue, operator);
            operator = element.innerText;
            finalValue = 0;
            screen.innerText += answer.innerText + element.innerText;
            answer.innerText = finalValue;
        }
    }
    else if (element.id === 'decimal') {
        finalValue.toString().includes('.') ? finalValue : finalValue += '.';
        answer.innerText = finalValue;
    }
    else if (element.id === 'equal') {
        if (operator === null) {
            finalValue;
        }
        else {
            finalAnswer = operate(previousValue, finalValue, operator);
            answer.innerText = 0;
            screen.innerText = previousValue + operator + finalValue + element.innerText + finalAnswer;
            finalValue = 0;
            previousValue = 0;
            operator = null;
        }
    }
    else if (element.id === 'clear') {
        finalValue = Number(finalValue.toString().slice(0, -1));
        answer.innerText = finalValue;
    }
    else if (element.id === 'delete') {
        finalValue = 0;
        previousValue = 0;
        operator = null;
        finalAnswer = null;
        answer.innerText = 0;
        screen.innerText = null;
    }
}

function operate (a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
            break;
    
        case '-':
            return a - b;
            break;
    
        case '×':
            return a * b;
            break;
    
        case '÷':
            return a / b;
            break;
        case '%':
            return a/100 *b;
            break;
    }
}
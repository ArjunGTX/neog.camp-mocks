const inputOne = document.querySelector('#number-one');
const inputTwo = document.querySelector('#number-two');
const addBtn = document.querySelector('#add-btn');
const subtractBtn = document.querySelector('#subtract-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const divideBtn = document.querySelector('#divide-btn');
const outputDiv = document.querySelector('#output');

inputOne.addEventListener('input',validateInput) 
inputTwo.addEventListener('input',validateInput) 

addBtn.addEventListener('click', () => {
    add(Number(inputOne.value),Number(inputTwo.value))
})
subtractBtn.addEventListener('click', () => {
    subtract(Number(inputOne.value),Number(inputTwo.value))
})
multiplyBtn.addEventListener('click', () => {
    multiply(Number(inputOne.value),Number(inputTwo.value))
})
divideBtn.addEventListener('click', () => {
    divide(Number(inputOne.value),Number(inputTwo.value))
})

function validateInput() {
    if(Number(inputOne.value) > 0 && Number(inputTwo.value) > 0) {
        addBtn.disabled = false;
        subtractBtn.disabled = false;
        multiplyBtn.disabled= false;
        divideBtn.disabled = false;
    } else {
        addBtn.disabled = true;
        subtractBtn.disabled = true;
        multiplyBtn.disabled= true;
        divideBtn.disabled = true;
    } 
}

function add(number1,number2) {
    outputDiv.innerText = number1 + number2
}
function subtract(number1,number2) {
    outputDiv.innerText = number1 - number2
}
function multiply(number1,number2) {
    outputDiv.innerText = number1 * number2
}
function divide(number1,number2) {
    outputDiv.innerText = number1 / number2
}


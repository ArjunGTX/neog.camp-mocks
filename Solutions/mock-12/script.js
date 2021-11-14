const inputTxt = document.querySelector('#txt-input');
const outputDiv = document.querySelector('#output');
const btnList = document.querySelectorAll('.color-btn');

inputTxt.addEventListener('input',() => {
    outputDiv.innerText = inputTxt.value;
})

btnList.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        outputDiv.style.color = e.target.innerText;
    })
})

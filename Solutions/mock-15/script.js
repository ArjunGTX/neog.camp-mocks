const nameInput = document.querySelector('#name-input');
const ageInput = document.querySelector('#age-input');
const checkBtn = document.querySelector('#check-btn');
const outputDiv = document.querySelector('#output');

checkBtn.addEventListener('click',() => {
    if(ageInput.checked) {
        outputDiv.innerText = 'you are eligible';
        outputDiv.style.color = 'green';
    } else {
        outputDiv.innerText = 'you are not eligible';
        outputDiv.style.color = 'red';
    }
})
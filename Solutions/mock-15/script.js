const nameInput = document.querySelector('#name-input');
const ageInput = document.querySelector('#age-input');
const checkBtn = document.querySelector('#check-btn');
const outputDiv = document.querySelector('#output');

checkBtn.addEventListener('click',() => {
    if(ageInput.checked) {
        outputDiv.innerText = `${nameInput.value} is eligible`;
        outputDiv.style.color = 'green';
    } else {
        outputDiv.innerText = `${nameInput.value} is not eligible`;
        outputDiv.style.color = 'red';
    }
})
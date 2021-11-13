const nameInput = document.querySelector('#name');
const password = document.querySelector('#password');
const checkBtn = document.querySelector('#check-btn');
const outputDiv = document.querySelector('#output');

checkBtn.addEventListener('click', () => {
    let result = validate(nameInput.value.toLowerCase(),password.value.toLowerCase());
    outputDiv.innerText = result;
})

function validate(name,password) {
    if(password === `${name}123`) {
        outputDiv.style.color = 'green';
        return 'Success';
    } else {
        outputDiv.style.color = 'red';
        return 'failure';
    }
}
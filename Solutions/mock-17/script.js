const userName = document.querySelector('#username');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');
const outputDiv = document.querySelector('#output');

password.addEventListener('input', (e) => {
    if(e.target.value.includes(userName.value)) {
        submitBtn.disabled = true;
        outputDiv.innerText = 'weak password';
    } else {
        submitBtn.disabled = false;
        outputDiv.innerText = '';
    }
})
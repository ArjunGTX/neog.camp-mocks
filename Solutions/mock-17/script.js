const userName = document.querySelector('#username');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');
const outputDiv = document.querySelector('#output');

password.addEventListener('input', (e) => {
    let passwordTxt = e.target.value.toLowerCase();
    let name = userName.toLowerCase();
    if(passwordTxt.includes(name)) {
        submitBtn.disabled = true;
        outputDiv.innerText = 'weak password';
        outputDiv.style.color = 'red';
    } else {
        submitBtn.disabled = false;
        outputDiv.innerText = '';
    }
})

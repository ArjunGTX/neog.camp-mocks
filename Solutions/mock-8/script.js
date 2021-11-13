const inputUSD = document.querySelector('#usd-input');
const getBtn = document.querySelector('#get-btn');
const outputDiv = document.querySelector('#output');

getBtn.addEventListener('click',function() {
    getInr(Number(inputUSD.value));
});

function getInr(usd) {
    // console.log(usd);
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
    .then(res => res.json())
    .then(data => {
        let inr = Number(data.usd.inr);
        outputDiv.innerText = (usd * inr).toFixed(3);
        outputDiv.style.color = 'red';
    })
    .catch(err => console.log(err));
}
const quoteBtn = document.querySelector('#display-btn');
const outputDiv = document.querySelector('#output');

quoteBtn.addEventListener('click',getQuote);

function getQuote() {
    fetch("https://api.kanye.rest/")
    .then( response => response.json())
    .then( quoteObj => outputDiv.innerText = quoteObj.quote)
    .catch( err => outputDiv.innerText = `Error occured : ${err}`);
}
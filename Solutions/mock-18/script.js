const numInput = document.querySelector('#number');
const getBtn = document.querySelector('#get-btn');
const outputDiv = document.querySelector('#output');

getBtn.addEventListener('click',() => {
    let limit = Number(numInput.value);
    for(let i=0; i<limit; i++) {
        outputDiv.innerHTML += `<img src="https://source.unsplash.com/random">`
    }
})
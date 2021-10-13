const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const outputDiv = document.querySelector('#output');


checkBtn.addEventListener('click',clickHandler);

function clickHandler() {
    let inputText = textInput.value;
    outputDiv.innerText = inputText ;
    if(!checkLength(inputText)) {
        outputDiv.style.color = 'red';
    } else {
        outputDiv.style.color = 'green';
    }
    
}

function checkLength(text)  {
    if(text.length % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

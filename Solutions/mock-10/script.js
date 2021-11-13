const inputTxt = document.getElementById('txt-input');
const caseBtn = document.getElementById('case-btn');
const outputDiv = document.getElementById('output');

caseBtn.addEventListener('click',() => {
    outputDiv.innerText = convertCase(inputTxt.value);
});

function convertCase(sentence) {
    let convertedStr = sentence[0];
    for(let i=1; i<sentence.length; i++) {
        if(i%2 === 0) {
            convertedStr += sentence[i];
        } else {
            convertedStr += sentence[i].toUpperCase();
        }
    }
    return convertedStr;
}
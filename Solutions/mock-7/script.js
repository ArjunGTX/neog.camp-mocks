const inputField = document.querySelector('#text-input');
const highlightBtn = document.querySelector('#highlight');
const outputDiv = document.querySelector('#output');

highlightBtn.addEventListener('click',() => {
    highlightWord(inputField.value);
});

function highlightWord(sentence) {
    let wordObj = {};
    let word ='';
    let maxWord = '';
    let maxLength = 0;
    for(let i=0; i< sentence.length; i++) {
        if(sentence[i] === " " || sentence[i] === "."){
            wordObj[word] = word.length;
            word = "";
        } else {
            word += sentence[i];
        }
    }
    for(let i in wordObj) {
        if(wordObj[i] > maxLength) {
            maxLength = wordObj[i];
            maxWord = i;
        }
    }
    outputDiv.innerHTML = `${sentence.replace(maxWord,`<span>${maxWord}</span>`)}`;
}


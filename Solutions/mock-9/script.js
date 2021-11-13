const inputText = document.querySelector('#paragraph');
const btn = document.querySelector('#check-btn');
const output = document.querySelector('#output');

btn.addEventListener('click',getNumberOfWords)

function getNumberOfWords(str) {
    let numberOfWords = 0;
    if(str) {
        numberOfWords = 1;
        for(let i=0; i<str.length; i++) {
            if(str[i] === ' ') {
                numberOfWords += 1;
            } 
        }
    }
    output.innerText = numberOfWords;
    
}
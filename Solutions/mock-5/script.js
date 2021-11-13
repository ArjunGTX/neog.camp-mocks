const jokeBtn = document.getElementById('joke-btn');
const outputDiv = document.getElementById('output');

jokeBtn.addEventListener('click',getJoke);
let counter = 0;
function getJoke() {
    counter++;
    if(counter <= 5) {
        jokeBtn.disabled = false;
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(jokeObj => {
            outputDiv.innerText = jokeObj.value;
        })
        .catch(err => outputDiv.innerText = err);  
    } else {
        jokeBtn.disabled = true;
        outputDiv.innerText = "You have reached the limit !"
    }
    
}
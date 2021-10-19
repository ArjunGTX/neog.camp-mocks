const number = document.querySelector('#number');
const increaseBtn = document.querySelector('#increment-btn');
const decreaseBtn = document.querySelector('#decrement-btn');

function increment(numValue) {
    decreaseBtn.disabled = false
    number.innerText = numValue + 1;
}
function decrement(numValue) {
    if(numValue < 1) {
        decreaseBtn.disabled = true
    } else {
        decreaseBtn.disabled = false
        number.innerText = numValue - 1;
    }
    
}
increaseBtn.addEventListener('click',() => {
    increment(Number(number.innerText))
});
decreaseBtn.addEventListener('click',() => {
    decrement(Number(number.innerText))
});
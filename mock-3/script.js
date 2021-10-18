const likeCounter = document.querySelector('#like-count');
const likeBtn = document.querySelector('#like-btn');

function incrementLike() {
    likeCounter.innerText = Number(likeCounter.innerText) + 1;
}
likeBtn.addEventListener('click',incrementLike)
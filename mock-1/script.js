const containerDiv = document.querySelector(".container");
const profileImg = document.querySelector('#avatar');
const repoList = document.querySelector('#repo');

document.addEventListener('DOMContentLoaded', getUserData('ArjunGTX'))
function getUserData(userName) {
    fetch(`https://api.github.com/users/${userName}`)
.then(response => response.json())
.then(data => {
    
    profileImg.src = data.avatar_url;
    // repoList.innerHTML = ``
    // console.log(data.repos_url);
    fetch(data.repos_url)
    .then(repo => repo.json())
    .then(repoData => {
        
        repoData.forEach(element => {
            let listItem = document.createElement('li');
            listItem.innerText = element.name;
           repoList.appendChild(listItem)
    
        });
    })
})
}



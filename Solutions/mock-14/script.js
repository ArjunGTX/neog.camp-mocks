const getBtn = document.querySelector('#get-todos');
const outputList = document.querySelector('#todo');

getBtn.addEventListener('click',() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        let outputText = '';
        todos.forEach(todo => {
            outputText += `<li>${todo.title}</li>`;
        })
        outputList.innerHTML = outputText;
    })
})
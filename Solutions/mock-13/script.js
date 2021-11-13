const getBtn = document.querySelector('#get-item');
const outputDiv = document.querySelector('#output');

getBtn.addEventListener('click',clickHandler)

function clickHandler() {
    let url = 'https://mock-practice.prakhar10v.repl.co/items';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let item = getCostlierItem(data);
        outputDiv.innerText = item;
    })
}

function getCostlierItem(items) {
    let highestPrice = 0;
    let costlierItem = '';
    items.forEach(obj => {
        let price = Number(obj.price);
        console.log(obj);
        if(price > highestPrice) {
            highestPrice = price;
            costlierItem = obj.item;
        }
    })
    return costlierItem;
}
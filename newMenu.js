let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'product 1',
        desc: 'description 1',
        image: '1.png',
        price: 100
    },
    {
        id: 2,
        name: 'product 2',
        desc: 'description 2',
        image: '1.png',
        price: 100
    },
    {
        id: 3,
        name: 'product 3',
        desc: 'description 3',
        image: '1.png',
        price: 100
    },
    {
        id: 4,
        name: 'product 4',
        desc: 'description 4',
        image: '1.png',
        price: 100
    },
    {
        id: 5,
        name: 'product 5',
        desc: 'description 5',
        image: '1.png',
        price: 100
    },
    {
        id: 6,
        name: 'product 6',
        desc: 'description 6',
        image: '1.png',
        price: 100
    },
    {
        id: 7,
        name: 'product 7',
        desc: 'description 7',
        image: '1.png',
        price: 100
    },
    {
        id: 8,
        name: 'product 8',
        desc: 'description 8',
        image: '1.png',
        price: 100
    },
    {
        id: 9,
        name: 'product 9',
        desc: 'description 9',
        image: '1.png',
        price: 100
    },
    {
        id: 10,
        name: 'product 10',
        desc: 'description 10',
        image: '1.png',
        price: 100
    },
    {
        id: 11,
        name: 'product 11',
        desc: 'description 11',
        image: '1.png',
        price: 100
    },
    {
        id: 12,
        name: 'product 12',
        desc: 'description 12',
        image: '1.png',
        price: 100
    },
    {
        id: 13,
        name: 'product 13',
        desc: 'description 13',
        image: '1.png',
        price: 100
    },
    {
        id: 14,
        name: 'product 14',
        desc: 'description 14',
        image: '1.png',
        price: 100
    },
    {
        id: 15,
        name: 'product 15',
        desc: 'description 15',
        image: '1.png',
        price: 100
    },
    {
        id: 16,
        name: 'product 16',
        desc: 'description 16',
        image: '1.png',
        price: 100
    },
    {
        id: 17,
        name: 'product 17',
        desc: 'description 17',
        image: '1.png',
        price: 100
    },
    {
        id: 18,
        name: 'product 18',
        desc: 'description 18',
        image: '1.png',
        price: 100
    },
    {
        id: 19,
        name: 'product 19',
        desc: 'description 19',
        image: '1.png',
        price: 100
    },
    {
        id: 20,
        name: 'product 20',
        desc: 'description 20',
        image: '1.png',
        price: 100
    },
];

let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="desc">${value.desc}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add to Card</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
        prices = products[key].price
    }
    reloadCard()
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>
            `;
            listCard.appendChild(newDiv);

        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * prices;
    }
    reloadCard();
}
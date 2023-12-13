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

let mProducts = [
    {
        id: 1,
        name: 'Müddy Shirt',
        desc: 'Rep the Müd everywhere you go!.',
        image: 'images/merch/mudddddd - Copy.png',
        price: 119.99
    },
    {
        id: 2,
        name: 'Müddie',
        desc: 'Hoodie + Müd! What else is gonna keep you warm..',
        image: 'images/merch/hoodie.png',
        price: 149.99
    },
    {
        id: 3,
        name: 'Müd hat',
        desc: 'rep the Müd on top of your head.',
        image: 'images/merch/hat shirt.png',
        price: 99.99
    },
    {
        id: 4,
        name: 'Wet-Dirt shirt',
        desc: 'The wettest and dirtiest shirt you will evert own.',
        image: 'images/merch/shirt temp.png',
        price: 119.99
    },
]

var storedItems = localStorage.getItem("certItems");

if (storedItems) {
    var items = JSON.parse(storedItems);


    listCards = listCards.concat(items);
}

console.log(mProducts);
let listCards = [];
function initApp(){
    mProducts.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="desc">${value.desc}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

function loadCartFromStorage(){
    listCards = JSON.parse(localStorage.getItem('cartItems')) || [];
    reloadCard()
}

loadCartFromStorage();

function saveCartToStorage(){
    localStorage.setItem('cartItems', JSON.stringify(listCards));
}

function addToCard(key){
    if(listCards[key] == undefined){
        listCards[key] = mProducts[key];
        listCards[key].quantity = 1;
        prices = mProducts[key].price
    }
    reloadCard()
    saveCartToStorage();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    function isValidValue(value) {
        return value !== null && value !== undefined;
    }
    listCards.forEach((value, key) => {
        if (isValidValue(value)) {
            totalPrice = totalPrice + (isValidValue(value.price) ? value.price : 0);
            count = count + (isValidValue(value.quantity) ? value.quantity : 0);
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${isValidValue(value.image) ? value.image : ''}"/></div>
                <div>${isValidValue(value.name) ? value.name : ''}</div>
                <div>${isValidValue(value.price) ? value.price.toLocaleString() : ''}</div>
                <div>${isValidValue(value.quantity) ? value.quantity : ''}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${isValidValue(value.quantity) ? value.quantity - 1 : 0})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${isValidValue(value.quantity) ? value.quantity + 1 : 1})">+</button>
                    </div>
            `;
            listCard.appendChild(newDiv);

        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
    saveCartToStorage()
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * prices;
    }
    saveCartToStorage()
    reloadCard();
}

localStorage.setItem('listCards[key]', JSON.stringify(listCards[key]));

function checkOut(){
    location.replace("payment.html")
}

function storeproductdata() {
    var id = document.getElementById("id").value;
    var desc = document.getElementById("desc").value;
    var price = document.getElementById("price").value;

    var newProduct = {
        id: id,
        price: price,
        desc: desc,
    };

    var storedData = JSON.parse(localStorage.getItem("products")) || [];
    storedData.push(newProduct);
    console.log(id);
    localStorage.setItem("products", JSON.stringify(storedData));
}

var storedData = JSON.parse(localStorage.getItem("products")) || [];

products = products.concat(storedData);
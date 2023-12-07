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

let mproducts = [
    {
        id: 1,
        name: 'Muddy Shirt',
        desc: 'Rep the Mud everywhere you go!.',
        image: 'images/mudddddd - Copy.png',
        price: 12.99
    },
    {
        id: 2,
        name: 'Muddie',
        desc: '1 pocket 1 hood and one Mud design is all you need in a good hoodie.',
        image: 'images/hoodie.jpg',
        price: 14.99
    },
    {
        id: 3,
        name: 'Mud hat',
        desc: 'rep the mud on top of your head.',
        image: 'images/hat shirt.png',
        price: 9.99
    },
    {
        id: 4,
        name: 'Wet-Dirt shirt',
        desc: 'The wettest and dirtiest shirt you will evert own.',
        image: 'images/shirt temp.png',
        price: 19.99
    },
];

let listCards = [];
function initApp(){
    mproducts.forEach((value, key)=>{
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

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = mproducts[key];
        listCards[key].quantity = 1;
        prices = mproducts[key].price
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
                <div><img src="${value.image}"/></div>
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
localStorage.setItem('listCards[key]', JSON.stringify(listCards[key]));

var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  var myInput = document.getElementById("myInput");
  var inputValue = myInput.value;
  console.log(inputValue);
});

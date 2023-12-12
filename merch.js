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



let listCards = [];
function initApp(){
    mproducts.forEach((value, key)=>{

let products = [
    {
        id: 1,
        name: 'Mudzzarella Sticks',
        desc: 'Deep fried and delicious sticks of local mud created in house.',
        image: 'images/mozzarrekea.png',
        price: 12.99
    },
    {
        id: 2,
        name: 'Bloomin Mudions',
        desc: 'Fried, battered, and finely harvested mud from our own backyard.',
        image: 'images/blloming_mduios.png',
        price: 14.99
    },
    {
        id: 3,
        name: 'Mud Stuffed Mud',
        desc: 'Finely pressed mud wrapped in the highest quality local mud in the country.',
        image: 'images/mudzoneeee.png',
        price: 9.99
    },
    {
        id: 4,
        name: 'Buffalo Mud Dip',
        desc: 'Shredded mud mixed with buffalo sauce and locally bought  ese.',
        image: 'images/buffalo_mud_dip.png',
        price: 19.99
    },
    {
        id: 5,
        name: 'Mud Balls',
        desc: 'Perfectly seasoned and spiced mud balls served with a side of mudinara sauce',
        image: 'images/mudballs.png',
        price: 14.99
    },
    {
        id: 6,
        name: 'Mudsanga',
        desc: 'Stacked layers of pasta packed with meat and cheese, covered in mud sauce.   ',
        image: 'images/mudsagna.png',
        price: 26.99
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

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
    {
        id: 7,
        name: 'Mudfredo',
        desc: 'Pasta cooked al dente and tossed in our creamy homemade alfredo sauce & sliced mud.',
        image: 'images/fettuccine.png',
        price: 29.99
    },
    {
        id: 8,
        name: 'MLT',
        desc: 'Finely pressed mud wrapped in the highest quality local mud in the country.',
        image: 'images/MLT.png',
        price: 41.99
    },
    {
        id: 9,
        name: 'Philly Mudsteak',
        desc: 'A mudsteak with finely ground mud topped with mud and fried onions.',
        image: 'images/mudsteak.png',
        price: 33.99
    },
    {
        id: 10,
        name: 'Ceasars Mud Salad',
        desc: 'Romaine lettuce, parmesan cheese, tomatoes, croutons, & mud.',
        image: 'images/CSALAD.png',
        price: 28.99
    },
    {
        id: 11,
        name: 'Southwest Mud Salad',
        desc: 'Slices of grilled spicy chicken breast served on a fresh bed of mixed greens, topped with mud.',
        image: 'images/southwest_mud.png',
        price: 29.99
    },
    {
        id: 12,
        name: 'Mud Pie',
        desc: 'A true classic and a staple for any mud based dessert.',
        image: 'images/mudddd_pie.png',
        price: 26.99
    },
    {
        id: 13,
        name: 'Soft Served Mudcream',
        desc: 'Freshly made soft served Mud in a waffle cone.',
        image: 'images/mudcream.png',
        price: 29.99
    },
    {
        id: 14,
        name: 'Angel Mud Cake',
        desc: 'A soft and plump cake made of our finest mud.',
        image: 'images/angel_mud.png',
        price: 41.99
    },
    {
        id: 15,
        name: 'Tiramudsu',
        desc: 'Elegant cake made with espresso and mud.',
        image: 'images/tiramudsu.png',
        price: 33.99
    },
    {
        id: 16,
        name: 'Mudcuterie Board',
        desc: 'Aged Cheeses with mud and crackers.',
        image: 'images/mud_cuterie.png',
        price: 28.99
    },
    {
        id: 17,
        name: 'Mudonnay',
        desc: 'The finest chardonnay with mud.',
        image: 'images/mudonnay.png',
        price: 26.99
    },
    {
        id: 18,
        name: 'Mudgarita',
        desc: 'A well crafted mixed drink that features mud.',
        image: 'images/mudgariyat.png',
        price: 29.99
    },
    {
        id: 19,
        name: 'Diet Dr Mud',
        desc: 'The greatest soda ever created.',
        image: 'images/DRMUD.png',
        price: 41.99
    },
    {
        id: 20,
        name: 'Muddy Water',
        desc: 'The finest water filtered through pounds of mud.',
        image: 'images/muddy_water.png',
        price: 33.99
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

function loadCartFromStorage(){
    listCards = JSON.parse(localStorage.getItem('cartItems')) || [];
    reloadCard()
}

loadCartFromStorage();

function saveCartToStorage(){
    localStorage.setItem('cartItems', JSON.stringify(listCards));
}

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
        prices = products[key].price
    }
    reloadCard()
    saveCartToStorage();
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

var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  var myInput = document.getElementById("myInput");
  var inputValue = myInput.value;
  console.log(inputValue);
});

function checkOut(){
    location.replace("payment.html")
}

function storeproductdata() {
    var id = document.getElementById("id").value;
    var desc = document.getElementById("desc").value;
    var price = document.getElementById("price").value;
    var data = { id: id, price: price, desc: desc };

    var newProduct = {
        
        id:id,
        price:price,
        desc:desc,
    }

    var storedData = JSON.parse(localStorage.getItem("products")) || [];
    storedData.push(newProduct);
    console.log(id)
    localStorage.setItem("products", JSON.stringify(storedData));
  }
  var storedData = JSON.parse(localStorage.getItem("products")) || [];

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var remove = document.getElementsByClassName('btn-danger')
    for( var i = 0; i <remove.length; i++) {
    var button = remove[i]
    button.addEventListener('click', removeItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for( var i = 0; i <remove.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    var addButton = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addButton.length; i++) {
        var button = addButton[i]
        button.addEventListener('click', addButtonClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateTotal()
}


function removeItem(event){
    var clicked = event.target
    clicked.parentElement.parentElement.remove()
    updateTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal()
}

function addButtonClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    addToCart(title, price)
    updateTotal()
}

function addToCart(title, price, imgSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var itemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < itemNames.length; i++) {
        if(itemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateTotal() {
    var items = document.getElementsByClassName('cart-items')[0]
    var rows = items.getElementsByClassName('cart-row')
    var total = 0
    for(var i = 0; i< rows.length; i++) {
        var row = rows[i]
        var priceElement = row.getElementsByClassName('cart-price')[0]
        var quantityElement = row.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price*quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

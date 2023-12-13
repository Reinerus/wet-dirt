document,addEventListener('DOMContentLoaded',function() {
    var savedProducts = JSON.parse(localStorage.getItem('cartItems')) || [];

    var itemsContainer = document.querySelector('.items');

    var totalPrice = 0;

    savedProducts.forEach(function (product) {
        var itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        totalPrice += product.price;

        itemDiv.innerHTML = `
            <div class="itemRow">
                <div class="itemName">${product.name}</div>
                <div class="itemPrice itemTaxable">${product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>
            </div>
            <div class="itemRow">
                <div class="itemColor"></div>
                <div class="itemData1">${product.id}</div>
                <div class="itemData3 itemQuantity">${product.quantity}</div>
            </div>
            <div class="itemRow">
                <div class="itemColor"></div>
                <div class="itemData1">Print</div>
                <div class="itemData3">${product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>
            </div>
                `;
            itemsContainer.appendChild(itemDiv);
            
    });
    var totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.innerHTML = `
        <hr>
        <div class = "totalRow"
            <div class = "totalLabel">Total:</div>
            <div class = "totalAmount">${totalPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>
        <div>`;
        itemsContainer.appendChild(totalElement);
});
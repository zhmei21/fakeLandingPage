const clearCartButton = document.querySelector('.clear-cart-button');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector("h3").textContent;
        const productPrice = parseFloat(product.querySelector("p").textContent.split(" ")[1]);

        const existingCartItem = cartItems.find(item => item.name === productName);
        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            cartItems.push({ name: productName, price: productPrice, quantity: 1 });
        }

        updateCart();
    });
});

clearCartButton.addEventListener('click', () => {
    cartItems.length = 0;
    updateCart();
});


function updateCart() {
    const cartList = document.querySelector('.cart-items');
    cartList.innerHTML = '';

    let total = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.quantity}x $${(item.price * item.quantity).toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    const cartTotal = document.querySelector('.cart-total');
    cartTotal.textContent = total.toFixed(2);
}
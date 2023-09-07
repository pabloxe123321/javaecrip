let cartItems = [];
    let total = 0;

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    total += productPrice;


    updateCartDisplay();
        }

function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");


    cartList.innerHTML = "";


    cartItems.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price.toFixed(0)}`;
        cartList.appendChild(li);
    });

 
    cartTotal.innerText = total.toFixed(0);
}
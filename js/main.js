let cartItems = [];
let total = 0;
function loadCartFromLocalStorage() {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const storedTotal = parseFloat(localStorage.getItem("cartTotal"));
    
    if (storedCartItems) {
        cartItems = storedCartItems;
    }
    
    if (!isNaN(storedTotal)) {
        total = storedTotal;
    }
    
    updateCartDisplay();
}

function saveCartToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartTotal", total.toFixed(2));
}

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    total += productPrice;

    saveCartToLocalStorage();

    updateCartDisplay();
}

function clearCart() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, vaciar carrito',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            cartItems = [];
            total = 0;

            saveCartToLocalStorage();

            updateCartDisplay();

            Swal.fire(
                'Carrito vaciado',
                'El carrito ha sido vaciado correctamente.',
                'success'
            );
        }
    });
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

window.onload = function () {
    loadCartFromLocalStorage();
    const clearCartButton = document.getElementById("clear-cart-button");
    clearCartButton.addEventListener("click", clearCart);
};

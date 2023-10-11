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
    localStorage.setItem("cartTotal", total.toFixed(0));
}


function addToCart(producto, precio) {
    cartItems.push({ name: producto, price: precio });
    total += precio;

    saveCartToLocalStorage();

    updateCartDisplay();
}

function removeFromCart(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    total -= removedItem.price;

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

function finalizarCompra() {
    Swal.fire({
        title: 'Finalizar Compra',
        text: '¿Deseas finalizar tu compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, Finalizar Compra',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            cartItems = [];
            total = 0;

            saveCartToLocalStorage();

            updateCartDisplay();

            Swal.fire(
                'Compra Finalizada',
                'Tu compra ha sido realizada con exito, gracias por preferirnos.',
                'success'
            );
        }
    });
}

function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    
    cartList.innerHTML = "";

    cartItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price.toFixed(0)}`;
        
        const removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.addEventListener("click", () => removeFromCart(index));

        li.appendChild(removeButton);
        cartList.appendChild(li);
    });

    cartTotal.innerText = total.toFixed(0);
}

window.onload = function () {
    loadCartFromLocalStorage();

    const productosContainer = document.getElementById("productos");

    fetch('productos.json')
        .then(response => response.json())
        .then(productos => {
            productos.forEach((producto, index) => {
                setTimeout(() => {
                    const productDiv = document.createElement("div");
                    productDiv.classList.add("product");

                    const imagen = document.createElement("img");
                    imagen.src = producto.imagen;

                    const productName = document.createElement("p");
                    productName.textContent = producto.producto;

                    const productPrice = document.createElement("p");
                    productPrice.textContent = `$${producto.precio.toFixed(0)}`;

                    const addButton = document.createElement("button");
                    addButton.textContent = "Agregar al carrito";
                    addButton.addEventListener("click", function () {
                        addToCart(producto.producto, producto.precio);
                    });

                    productDiv.appendChild(imagen);
                    productDiv.appendChild(productName);
                    productDiv.appendChild(productPrice);
                    productDiv.appendChild(addButton);

                    productosContainer.appendChild(productDiv);
                }, index * 50);
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));

    const clearCartButton = document.getElementById("limpiarcarrito");
    clearCartButton.addEventListener("click", clearCart);

    const finalizarCompraButton = document.getElementById("finalizar-compra");
    finalizarCompraButton.addEventListener("click", finalizarCompra);
};

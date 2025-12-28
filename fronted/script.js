const API = "http://localhost:3000/products";
let cart = [];

fetch(API)
    .then(res => res.json())
    .then(products => {
        const container = document.getElementById("products");
        products.forEach(p => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart('${p.name}', ${p.price})">
                    Add to Cart
                </button>
            `;
            container.appendChild(div);
        });
    });

function addToCart(name, price) {
    cart.push({ name, price });
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">❌</button>`;
        cartList.appendChild(li);
    });
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

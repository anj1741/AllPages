document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".cart-btn");
    const cartCountElement = document.querySelector(".cart-item-count");

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Sum of quantities
        cartCountElement.innerText = totalItems;
        cartCountElement.style.display = totalItems > 0 ? "flex" : "none"; // Hide when 0
    }

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.closest(".product");
            const product = {
                title: productElement.querySelector(".title").innerText,
                price: productElement.querySelector(".price").innerText.replace("Offer price: ", ""),
                image: productElement.querySelector("img").src,
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            const existingItem = cart.find((item) => item.title === product.title);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount(); // Update the cart number
        });
    });

    updateCartCount(); // Update on page load
});


document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".cart-btn");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.closest(".product");
            const product = {
                title: productElement.querySelector(".title").innerText, // Corrected selector
                price: productElement.querySelector(".price").innerText.replace("Offer price: ", ""), // Remove extra text
                image: productElement.querySelector("img").src,
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            const existingItem = cart.find((item) => item.title === product.title);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        });
    });

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartCountElement = document.getElementById("cart-count");

        if (cartCountElement) {
            cartCountElement.innerText = cart.length;
        }
    }

    updateCartCount();
});

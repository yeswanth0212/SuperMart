document.addEventListener("DOMContentLoaded", function () {
    const checkoutForm = document.getElementById("checkout-form");
    const totalAmountElement = document.getElementById("total-amount");
    const totalDisplay = document.getElementById("total-display");

    // Retrieve cart data from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let totalAmount = 0;
    cart.forEach(product => {
        totalAmount += product.price;
    });

    // Set total amount in form and display
    totalAmountElement.value = totalAmount;
    totalDisplay.textContent = "Total Amount: ₹" + totalAmount;

    // Handle form submission
    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;

        if (name && address && phone) {
            alert("Order placed successfully!");
            localStorage.removeItem('cart'); // Clear cart after order is placed
            window.location.href = '/'; // Redirect to home page (adjust if needed)
        } else {
            alert("Please fill in all fields!");
        }
    });
});

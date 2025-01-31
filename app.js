document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: 'Apple', description: 'Fresh red apples', price: 250, category: 'fruits', imageUrl: 'images/red-apples-2487443.jpg' },
        { id: 2, name: 'Banana', description: 'Ripe bananas', price: 100, category: 'fruits', imageUrl: 'images/banana.jpeg' },
        { id: 3, name: 'Mango', description: 'Juicy and sweet mangoes', price: 300, category: 'fruits', imageUrl: 'images/mango.avif' },
        { id: 4, name: 'Carrot', description: 'Crunchy carrots', price: 60, category: 'vegetables', imageUrl: 'images/carrot.jpeg' },
        { id: 5, name: 'Potato', description: 'Fresh potatoes', price: 80, category: 'vegetables', imageUrl: 'images/potato.jpeg' },
        { id: 6, name: 'Chips', description: 'Crispy potato chips', price: 50, category: 'snacks', imageUrl: 'images/chips.jpeg' },
        { id: 7, name: 'Chocolate Bar', description: 'Delicious chocolate bar', price: 150, category: 'snacks', imageUrl: 'images/chocalate.jpeg' },
        { id: 8, name: 'Gummy Bears', description: 'Sweet gummy bears', price: 120, category: 'snacks', imageUrl: 'images/beer choco.avif' },
        { id: 9, name: 'Orange Juice', description: 'Freshly squeezed orange juice', price: 180, category: 'beverages', imageUrl: 'images/orangejuice.jpeg' },
        { id: 10, name: 'Apple Juice', description: 'Sweet and tangy apple juice', price: 160, category: 'beverages', imageUrl: 'images/applejuice.jpeg' },
        { id: 11, name: 'Coca-Cola', description: 'Refreshing Coca-Cola', price: 120, category: 'beverages', imageUrl: 'images/cola.jpeg' },
        { id: 12, name: 'Peach', description: 'Sweet and juicy peach', price: 200, category: 'fruits', imageUrl: 'images/peach.jpeg' },
        { id: 13, name: 'Strawberry', description: 'Fresh strawberries', price: 220, category: 'fruits', imageUrl: 'images/strawberry.jpeg' },
        { id: 14, name: 'Broccoli', description: 'Fresh green broccoli', price: 90, category: 'vegetables', imageUrl: 'images/brocoli.jpeg' },
        { id: 15, name: 'Spinach', description: 'Fresh spinach leaves', price: 70, category: 'vegetables', imageUrl: 'images/spinach.jpeg' },
        { id: 16, name: 'Lemon', description: 'Fresh lemons', price: 50, category: 'fruits', imageUrl: 'images/lemon.jpeg' },
        { id: 17, name: 'Ice Cream', description: 'Chocolate ice cream', price: 180, category: 'snacks', imageUrl: 'images/icecream.jpeg' },
        { id: 18, name: 'Biscuits', description: 'Delicious sweet biscuits', price: 40, category: 'snacks', imageUrl: 'images/biscuits.jpeg' },
        { id: 19, name: 'Milk', description: 'Fresh dairy milk', price: 60, category: 'dairy', imageUrl: 'images/milk.jpeg' },
        { id: 20, name: 'Yogurt', description: 'Creamy yogurt', price: 80, category: 'dairy', imageUrl: 'images/yogurt.jpeg' },
        { id: 21, name: 'Cheese', description: 'Mozzarella cheese', price: 120, category: 'dairy', imageUrl: 'images/cheese.jpeg' },
        { id: 22, name: 'Butter', description: 'Fresh butter', price: 100, category: 'dairy', imageUrl: 'images/butter.jpeg' },
        { id: 23, name: 'Avocado', description: 'Fresh ripe avocado', price: 250, category: 'fruits', imageUrl: 'images/avocada.jpeg' },
        { id: 24, name: 'Grapes', description: 'Fresh green grapes', price: 200, category: 'fruits', imageUrl: 'images/grapes.jpg' },
        { id: 25, name: 'Cherry', description: 'Sweet cherries', price: 300, category: 'fruits', imageUrl: 'images/cherry.jpeg' },
        { id: 26, name: 'Cucumber', description: 'Fresh cucumber', price: 60, category: 'vegetables', imageUrl: 'images/cucumber.jpeg' },
        { id: 27, name: 'Tomato', description: 'Fresh red tomatoes', price: 40, category: 'vegetables', imageUrl: 'images/tomato.jpeg' },
        { id: 28, name: 'Cabbage', description: 'Fresh cabbage', price: 80, category: 'vegetables', imageUrl: 'images/cabbage.webp' },
        { id: 29, name: 'Onion', description: 'Fresh onions', price: 40, category: 'vegetables', imageUrl: 'images/onion.jpg' },
        { id: 30, name: 'Garlic', description: 'Fresh garlic cloves', price: 50, category: 'vegetables', imageUrl: 'images/garlic.jpeg' },
        { id: 31, name: 'Choco Milk', description: 'Chocolate flavored milk', price: 100, category: 'beverages', imageUrl: 'images/choco milk.jpg' },
        { id: 32, name: 'Energy Drink', description: 'Boost your energy', price: 150, category: 'beverages', imageUrl: 'images/energy drink.jpeg' },
        { id: 33, name: 'Tea', description: 'Refreshing tea', price: 50, category: 'beverages', imageUrl: 'images/tea.jpg' },
        { id: 34, name: 'Coffee', description: 'Strong brewed coffee', price: 90, category: 'beverages', imageUrl: 'images/coffe.jpg' },
        { id: 35, name: 'Fruit Juice', description: 'Various fruit juice mix', price: 180, category: 'beverages', imageUrl: 'images/fruit juice.jpeg' },
        { id: 36, name: 'Coconut Water', description: 'Fresh coconut water', price: 120, category: 'beverages', imageUrl: 'images/coco water.jpg' },
        { id: 37, name: 'Taco Chips', description: 'Crunchy taco chips', price: 120, category: 'snacks', imageUrl: 'images/chips.jpeg' },
        { id: 38, name: 'Salted Peanuts', description: 'Roasted salted peanuts', price: 90, category: 'snacks', imageUrl: 'images/peanunt.jpeg' },
        { id: 39, name: 'Lollipop', description: 'Colorful lollipop', price: 50, category: 'snacks', imageUrl: 'images/lollipop.jpg' },
        { id: 40, name: 'Candy', description: 'Assorted candies', price: 60, category: 'snacks', imageUrl: 'images/candy.jpeg' },
        { id: 41, name: 'Choco Biscuit', description: 'Biscuits with chocolate filling', price: 120, category: 'snacks', imageUrl: 'images/choco biscuit.jpg' },
        { id: 42, name: 'Peach Iced Tea', description: 'Refreshing peach iced tea', price: 150, category: 'beverages', imageUrl: 'images/peach tea.jpg' },
        { id: 43, name: 'Green Tea', description: 'Healthy green tea', price: 90, category: 'beverages', imageUrl: 'images/green tea.jpeg' },
        { id: 44, name: 'Lemonade', description: 'Fresh lemonade', price: 70, category: 'beverages', imageUrl: 'images/Lemonade.jpeg' },
        { id: 45, name: 'Pineapple Juice', description: 'Fresh pineapple juice', price: 180, category: 'beverages', imageUrl: 'images/pine juice.jpeg' },
        { id: 46, name: 'Crispy Onion Rings', description: 'Crispy fried onion rings', price: 100, category: 'snacks', imageUrl: 'images/ring.jpg' },
        { id: 47, name: 'Frozen Pizza', description: 'Delicious frozen pizza', price: 250, category: 'frozen food', imageUrl: 'images/pizza.jpeg' },
        { id: 48, name: 'Ice Lollies', description: 'Refreshing ice lollies', price: 40, category: 'snacks', imageUrl: 'images/ice.webp' },
        { id: 49, name: 'Bread', description: 'Freshly baked bread', price: 40, category: 'bakery', imageUrl: 'images/bread.jpeg' },
        { id: 50, name: 'Croissant', description: 'Fresh buttery croissant', price: 80, category: 'bakery', imageUrl: 'images/puff.jpeg' }
    ];

        const productListElement = document.getElementById("product-list");
        const cartSection = document.getElementById("cart-section");
        const cartList = document.getElementById("cart-list");
        const cartTotalPrice = document.getElementById("cart-total-price");
        const cartCountElement = document.getElementById("cart-count");
        const searchBar = document.getElementById("search-bar");
    
        let cart = [];
    
        // Function to display all products in the product section
        function displayProducts(productsToDisplay) {
            productListElement.innerHTML = '';
            productsToDisplay.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product';
                productElement.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p><strong>₹${product.price}</strong></p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productListElement.appendChild(productElement);
            });
        }
    
        // Function to add products to the cart
        window.addToCart = function (productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCart();
                
                // Show success popup
                showSuccessPopup();
            }
        };
    
        // Function to show success popup
        function showSuccessPopup() {
            const popup = document.getElementById("success-popup");
            popup.classList.add("show");
    
            // Hide the popup after 2 seconds
            setTimeout(() => {
                popup.classList.remove("show");
            }, 2000);
        }
    
        // Function to update the cart display and total price
        function updateCart() {
            cartList.innerHTML = '';
            let total = 0;
    
            cart.forEach(product => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>₹${product.price}</p>
                    <button onclick="removeFromCart(${product.id})">Remove</button>
                `;
                cartList.appendChild(cartItem);
                total += product.price;
            });
    
            cartTotalPrice.textContent = `Total Price: ₹${total}`;
            cartCountElement.textContent = cart.length;
        }
    
        // Function to remove products from the cart
        window.removeFromCart = function (productId) {
            cart = cart.filter(product => product.id !== productId);
            updateCart();
        };
    
        // Function to proceed to checkout
        window.proceedToCheckout = function () {
            localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
            window.location.href = 'checkout.html'; // Redirect to checkout page
        };
    
        // Function to search products
        function searchProducts() {
            const searchTerm = searchBar.value.toLowerCase();
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
            displayProducts(filteredProducts);
        }
    
        // Function to display cart
        window.showCart = function () {
            cartSection.style.display = 'block';
        };
    
        // Function to close cart
        window.closeCart = function () {
            cartSection.style.display = 'none';
        };
    
        displayProducts(products);
    
        searchBar.addEventListener("input", searchProducts);
    });
    
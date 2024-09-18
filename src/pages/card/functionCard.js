document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('btnDecrease');
    const increaseBtn = document.getElementById('btnIncrease');
    const quantitySpan = document.getElementById('quantity');
    const totalPriceSpan = document.getElementById('total-price');
    const addToCartButton = document.getElementById('btnCart'); // Исправлено на ID кнопки "В корзину"
    const cartItemsList = document.getElementById('cart-items');
    const totalCostSpan = document.getElementById('total-cost');

    let quantity = 1;
    const pricePerItem = parseFloat(addToCartButton.getAttribute('data-price')); // Цена за единицу товара
    let totalPrice = pricePerItem; // Итоговая цена

    const cart = []; // Инициализация корзины

    function updatePrice() {
        totalPrice = quantity * pricePerItem;
        totalPriceSpan.textContent = totalPrice;
        addToCartButton.setAttribute('data-price', totalPrice);
    }

    decreaseBtn.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantitySpan.textContent = quantity;
            updatePrice();
        }
    });

    increaseBtn.addEventListener('click', function() {
        quantity++;
        quantitySpan.textContent = quantity;
        updatePrice();
    });

    addToCartButton.addEventListener('click', function() {
        const productName = addToCartButton.getAttribute('data-name');
        const productPrice = parseFloat(addToCartButton.getAttribute('data-price'));

        // Добавляем товар в корзину
        cart.push({ name: productName, price: productPrice });

        // Обновляем отображение корзины
        updateCart();
    });

    function updateCart() {
        // Очищаем список товаров в корзине
        cartItemsList.innerHTML = '';

        // Обновляем список товаров в корзине
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} руб.`;
            cartItemsList.appendChild(li);
        });

        // Обновляем общую стоимость
        const totalCost = cart.reduce((sum, item) => sum + item.price, 0);
        totalCostSpan.textContent = totalCost;
    }

    // Инициализация цены
    updatePrice();
});
document.addEventListener("DOMContentLoaded", function() {
    const quantityInputs = document.querySelectorAll('.quantity');
    const itemPriceElements = document.querySelectorAll('.item-price');
    const totalPriceElements = document.querySelectorAll('.total-price');
    const itemsTotalDisplay = document.getElementById('items-total');
    const shippingDisplay = document.getElementById('shipping-cost');
    const grandTotalDisplay = document.getElementById('grand-total');
    const cartItems = document.querySelectorAll('.item');
    const removeButtons = document.querySelectorAll('.remove-button');

    function updateCartTotal() {
        let totalAmount = 0;

        cartItems.forEach((item, index) => {
            if (item.style.display !== 'none') {
                const itemPrice = parseFloat(itemPriceElements[index].textContent);
                const itemQuantity = parseInt(quantityInputs[index].value);
                const itemTotalPrice = itemPrice * itemQuantity;
                totalPriceElements[index].textContent = itemTotalPrice.toFixed(2);
                totalAmount += itemTotalPrice;
            }
        });

        itemsTotalDisplay.textContent = `Items Total: $${totalAmount.toFixed(2)}`;
        const shippingCost = 5.00;
        const grandTotal = totalAmount + shippingCost;
        grandTotalDisplay.innerHTML = `<strong>Total: $${grandTotal.toFixed(2)}</strong>`;
    }

    function removeItemFromCart(index) {
        cartItems[index].style.display = 'none';
        updateCartTotal();
    }

    removeButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            removeItemFromCart(index);
        });
    });

    quantityInputs.forEach(input => {
        input.addEventListener('change', updateCartTotal);
    });

    updateCartTotal();
});

let cart = [];

function addToCart(name, price) {
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartUI();
}

function updateQuantity(name, change) {
    let item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.name !== name);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    let cartBar = document.getElementById('cart-bar');
    let cartCount = document.getElementById('cart-count');
    let cartTotal = document.getElementById('cart-total');
    let modalTotal = document.getElementById('modal-total');
    let itemsContainer = document.getElementById('cart-items-container');

    let totalCount = 0;
    let totalPrice = 0;
    itemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartBar.classList.add('translate-y-28');
        itemsContainer.innerHTML = '<p class="text-center text-gray-400 py-8 text-sm">السلة فارغة حالياً 🍔</p>';
    } else {
        cartBar.classList.remove('translate-y-28');
        cart.forEach(item => {
            totalCount += item.quantity;
            totalPrice += item.price * item.quantity;

            itemsContainer.innerHTML += `
                <div class="flex justify-between items-center pt-3 first:pt-0">
                    <div>
                        <h4 class="font-bold text-sm">${item.name}</h4>
                        <p class="text-xs text-amber-400 font-semibold">${(item.price * item.quantity).toFixed(2)} د.أ</p>
                    </div>
                    <div class="flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-full border border-gray-700">
                        <button onclick="updateQuantity('${item.name}', -1)" class="text-red-400 hover:text-red-300 font-bold px-1.5"><i class="fa-solid fa-minus text-xs"></i></button>
                        <span class="font-black text-sm w-5 text-center">${item.quantity}</span>
                        <button onclick="updateQuantity('${item.name}', 1)" class="text-green-400 hover:text-green-300 font-bold px-1.5"><i class="fa-solid fa-plus text-xs"></i></button>
                    </div>
                </div>
            `;
        });
    }

    cartCount.innerText = totalCount;
    cartTotal.innerText = totalPrice.toFixed(2);
    modalTotal.innerText = totalPrice.toFixed(2);
}

function toggleCartModal() {
    let modal = document.getElementById('cart-modal');
    modal.classList.toggle('hidden');
}

function sendToWhatsApp() {
    let tableNumber = document.getElementById('table-number').value.trim();
    
    if (!tableNumber) {
        alert('⚠️ الرجاء إدخال رقم الطاولة أولاً!');
        document.getElementById('table-number').focus();
        return;
    }

    if (cart.length === 0) {
        alert('⚠️ السلة فارغة!');
        return;
    }

    let restaurantPhone = "962790000000"; // استبدله برقم واتساب المطعم الحقيقي
    let message = `🛒 *طلب جديد عبر MenuQR*\n`;
    message += `🪑 *رقم الطاولة:* ${tableNumber}\n`;
    message += `------------------------\n`;

    let total = 0;
    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.name} (×${item.quantity}) - ${itemTotal.toFixed(2)} د.أ\n`;
    });

    message += `------------------------\n`;
    message += `💰 *المجموع الكلي:* ${total.toFixed(2)} د.أ`;

    let encodedMessage = encodeURIComponent(message);
    let whatsappURL = `https://wa.me/${restaurantPhone}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}

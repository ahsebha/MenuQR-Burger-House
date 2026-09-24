let cart = [];

// إضافة منتج للسلة
function addToCart(name, price) {
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }
    
    updateCartUI();
    showToast(`تمت إضافة ${name} لسلتك 🛒`);
}

// تحديث الواجهة الخاصة بالسلة
function updateCartUI() {
    let cartBar = document.getElementById('cartBar');
    let cartCount = document.getElementById('cartCount');
    let cartTotal = document.getElementById('cartTotal');

    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (totalItems > 0) {
        cartBar.style.display = 'flex';
        cartCount.textContent = `${totalItems} منتجات مضافة`;
        cartTotal.textContent = `${totalPrice.toFixed(2)} JOD`;
    } else {
        cartBar.style.display = 'none';
    }
}

// عرض تنبيه احترافي (Toast)
function showToast(message) {
    let toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 2600);
}

// فتح نافذة إدخال رقم الطاولة
function openCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'flex';
}

// إغلاق نافذة رقم الطاولة
function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// إرسال الطلب مباشرة إلى الواتساب
function sendOrderToWhatsApp() {
    let tableNumber = document.getElementById('tableNumber').value;
    
    if (!tableNumber) {
        showToast("⚠️ يرجى إدخال رقم الطاولة أولاً!");
        return;
    }

    let message = `🔥 *طلب جديد لمطعم اللحظة*:\n📍 *رقم الطاولة:* ${tableNumber}\n\n`;
    
    cart.forEach(item => {
        message += `▪️ ${item.name} (العدد: ${item.quantity}) - ${(item.price * item.quantity).toFixed(2)} JOD\n`;
    });

    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n💰 *المجموع الكلي:* ${totalPrice.toFixed(2)} JOD`;

    // رقم واتساب المطعم
    let restaurantWhatsApp = "962700000000"; 
    let encodedMessage = encodeURIComponent(message);
    
    let whatsappURL = `https://wa.me/${restaurantWhatsApp}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    closeCheckoutModal();
}

// قاعدة بيانات تجريبية موسعة للمنتجات (15 صنف كحد أدنى)
const products = [
    // قسم البرجر
    { id: 1, name: "برجر كلاسيك", category: "برجر", price: 3.50, desc: "لحم بقري، جبنة، خس، صوص خاص", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300" },
    { id: 2, name: "دبل تشيز برجر", category: "برجر", price: 4.75, desc: "قطعتين لحم بقري، شريحتين جبنة شيدر، صوص المدخن", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300" },
    { id: 3, name: "برجر مشوي على الفحم", category: "برجر", price: 4.25, desc: "لحم بقرى مدخن، بصل مكرمل، صوص باربيكيو", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300" },
    { id: 4, name: "مشروم برجر", category: "برجر", price: 4.50, desc: "لحم بقري، صوص الفطر الكريمي، جبنة سويسرية", img: "https://images.unsplash.com/photo-1583545464195-2fb98801d033?w=300" },

    // قسم الدجاج
    { id: 5, name: "زنجر دجاج حار", category: "دجاج", price: 3.75, desc: "صدور دجاج مقرمشة حارة، خس، مايونيز حار", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=300" },
    { id: 6, name: "ساندويتش تشكين فاهيتا", category: "دجاج", price: 3.90, desc: "قطع دجاج مشوية، فلفل رومي، بصل، جبنة موزاريلا", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=300" },
    { id: 7, name: "وجبة ناجتس دجاج (6 قطع)", category: "دجاج", price: 2.90, desc: "قطع دجاج مقرمشة مع صوص الثوم والبطاطا", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300" },
    { id: 8, name: "تويستر دجاج", category: "دجاج", price: 3.20, desc: "دجاج مقرمش ملفوف بخبز التورتيلا مع صوص الثومية", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300" },

    // قسم المشروبات
    { id: 9, name: "عصير برتقال طازج", category: "مشروبات", price: 1.75, desc: "عصير طبيعي 100% منعش ومبرد", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 10, name: "كوكا كولا", category: "مشروبات", price: 0.85, desc: "مشروب غازي بارد (علبة)", img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 11, name: "ميلك شيك شوكولاتة", category: "مشروبات", price: 2.50, desc: "آيس كريم شوكولاتة غني مع حليب وزينة", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: 12, name: "عصير ليمون بالنعناع", category: "مشروبات", price: 1.90, desc: "ليمون طبيعي منعش مع أوراق النعناع الطازجة", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300" },

    // قسم الإضافات والمقبلات
    { id: 13, name: "بطاطس مقلية كبيرة", category: "إضافات", price: 1.50, desc: "بطاطس مقرمشة ذهبية مع البهارات الخاصة", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300" },
    { id: 14, name: "حلقات البصل المقرمشة", category: "إضافات", price: 1.75, desc: "حلقات بصل ذهبية مقلية تقدم مع صوص الباربيكيو", img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300" },
    { id: 15, name: "موتزاريلا ستيكس", category: "إضافات", price: 2.25, desc: "أصابع الجبن المقرمشة والممطاطية (5 قطع)", img: "https://images.unsplash.com/photo-1548340748-6d2b7d7da28e?w=300" }
];

// مصفوفة سلة المشتريات
let cart = [];

// عرض المنتجات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});

// دالة عرض المنتجات في الشاشة
function displayProducts(items) {
    const container = document.getElementById("products-list");
    container.innerHTML = "";

    items.forEach(product => {
        container.innerHTML += `
            <div class="menu-item">
                <img src="${product.img}" alt="${product.name}" class="item-img">
                <div class="item-details">
                    <div>
                        <div class="item-title">${product.name}</div>
                        <div class="item-desc">${product.desc}</div>
                    </div>
                    <div class="item-footer">
                        <span class="item-price">${product.price.toFixed(2)} د.أ</span>
                        <button class="add-btn" onclick="addToCart(${product.id})">أضف للسلة</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// تصفية المنتجات حسب القسم
function filterMenu(category) {
    document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    if (category === "الكل") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}


// تحديث واجهة السلة
function updateCartUI() {
    const cartCountBadge = document.getElementById("cart-count");
    const cartItemsList = document.getElementById("cart-items-list");
    const cartSummaryBox = document.getElementById("cart-summary-box");
    const cartTotalPrice = document.getElementById("cart-total-price");

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (totalCount > 0) {
        cartCountBadge.style.display = "inline-block";
        cartCountBadge.innerText = totalCount;
    } else {
        cartCountBadge.style.display = "none";
    }

    if (cart.length === 0) {
        cartItemsList.innerHTML = `<p style="text-align:center; color:#888; margin-top:20px;">السلة فارغة حالياً 🛒</p>`;
        cartSummaryBox.style.display = "none";
        return;
    }

    cartItemsList.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartItemsList.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>${(item.price * item.quantity).toFixed(2)} د.أ</span>
                </div>
                <div style="display: flex; align-items: center;">
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="delete-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            </div>
        `;
    });

    cartTotalPrice.innerText = `${totalPrice.toFixed(2)} د.أ`;
    cartSummaryBox.style.display = "block";
}

// تغيير الكمية
function changeQuantity(productId, amount) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        updateCartUI();
    }
}

// حذف منتج من السلة
function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
}

// التنقل بين التبويبات
function switchTab(tab) {
    const menuSection = document.getElementById("menu-section");
    const cartSection = document.getElementById("cart-section");
    const categoriesContainer = document.getElementById("categories-container");
    const navMenu = document.getElementById("nav-menu");
    const navCart = document.getElementById("nav-cart");

    if (tab === 'menu') {
        menuSection.style.display = "block";
        categoriesContainer.style.display = "flex";
        cartSection.style.display = "none";
        navMenu.classList.add("active");
        navCart.classList.remove("active");
    } else if (tab === 'cart') {
        menuSection.style.display = "none";
        categoriesContainer.style.display = "none";
        cartSection.style.display = "block";
        navCart.classList.add("active");
        navMenu.classList.remove("active");
    }
}
// دالة إظهار تنبيه عصري داخل الصفحة بدون نافذة المتصفح المزعجة
function showToast(message, type = 'error') {
    const toast = document.getElementById("toast-notification");
    toast.innerText = message;
    
    // تغيير اللون حسب نوع التنبيه (خطأ أو نجاح)
    if (type === 'success') {
        toast.style.backgroundColor = "#27ae60"; // أخضر للإضافة الناجحة
    } else {
        toast.style.backgroundColor = "#e74c3c"; // أحمر للتنبيهات والأخطاء
    }

    // إظهار التنبيه
    toast.style.transform = "translateX(-50%) translateY(0)";
    toast.style.opacity = "1";

    // إخفاؤه تلقائياً بعد ثانيتين ونصف
    setTimeout(() => {
        toast.style.transform = "translateX(-50%) translateY(100px)";
        toast.style.opacity = "0";
    }, 2500);
}

// إضافة منتج إلى السلة مع التنبيه الجديد
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`تمت إضافة ${product.name} إلى السلة 🛒`, 'success');
}

// إرسال الطلب عبر واتساب مع التحقق الإجباري للطاولة
function sendToWhatsApp() {
    const restaurantPhone = "962781257483"; // رقم المطعم التجريبي
    const tableInput = document.getElementById("table-number");
    const tableNum = tableInput.value.trim();

    if (cart.length === 0) {
        showToast("السلة فارغة، يرجى إضافة منتجات أولاً!");
        return;
    }

    // التحقق الإجباري من رقم الطاولة
    if (!tableNum) {
        showToast("⚠️ يرجى إدخال رقم الطاولة لإرسال الطلب!");
        tableInput.focus();
        return;
    }

    // بناء نص الرسالة بأسلوب مرتب
    let message = `🛒 *طلب جديد من المنيو الرقمي (MenuQR)*\n`;
    message += `──────────────────\n`;
    message += `🪑 *رقم الطاولة:* ${tableNum}\n`;
    message += `📋 *تفاصيل الطلب:*\n`;

    let total = 0;
    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.name} × ${item.quantity} = ${itemTotal.toFixed(2)} د.أ\n`;
    });

    message += `──────────────────\n`;
    message += `💰 *المجموع الإجمالي: ${total.toFixed(2)} د.أ*\n`;
    message += `🚀 *تم الإرسال عبر نظام MenuQR*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${restaurantPhone}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}
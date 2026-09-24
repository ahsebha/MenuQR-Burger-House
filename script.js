const products = [
    {
        id: 1,
        name: "Classic Burger",
        price: 2.50,
        category: "burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
    },
    {
        id: 2,
        name: "Cheese Burger",
        price: 3.00,
        category: "burger",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800"
    },
    {
        id: 3,
        name: "Double Burger",
        price: 3.75,
        category: "burger",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800"
    },
    {
        id: 4,
        name: "Chicken Burger",
        price: 2.75,
        category: "burger",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800"
    },
    {
        id: 5,
        name: "Margherita Pizza",
        price: 3.50,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800"
    },
    {
        id: 6,
        name: "Pepperoni Pizza",
        price: 4.00,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800"
    },
    {
        id: 7,
        name: "Chicken Pizza",
        price: 4.25,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800"
    },
    {
        id: 8,
        name: "Vegetable Pizza",
        price: 3.75,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800"
    },
    {
        id: 9,
        name: "Grilled Chicken",
        price: 5.00,
        category: "meals",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800"
    },
    {
        id: 10,
        name: "Special Steak",
        price: 7.50,
        category: "meals",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800"
    },
    {
        id: 11,
        name: "Crispy Chicken",
        price: 4.50,
        category: "meals",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800"
    },
    {
        id: 12,
        name: "Chicken Rice",
        price: 4.75,
        category: "meals",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800"
    },
    {
        id: 13,
        name: "Cola",
        price: 0.50,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800"
    },
    {
        id: 14,
        name: "Fresh Juice",
        price: 1.50,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800"
    },
    {
        id: 15,
        name: "Lemon Mint",
        price: 1.75,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800"
    },
    {
        id: 16,
        name: "Iced Coffee",
        price: 2.00,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800"
    }
];


let cart = [];


/* إضافة منتج */

function addToCart(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();

}


/* تحديث السلة */

function updateCart() {

    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    cartCount.textContent = totalQuantity;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <div>🛒</div>
                <h3>السلة فارغة</h3>
                <p>أضف بعض المنتجات اللذيذة!</p>
            </div>
        `;

        cartTotal.textContent = "0.00 د.أ";

        return;
    }


    cartItems.innerHTML = cart.map(item => {

        return `
            <div class="cart-item">

                <img
                    class="cart-item-image"
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <strong>
                        ${(item.price * item.quantity).toFixed(2)} د.أ
                    </strong>

                    <div class="quantity">

                        <button onclick="changeQuantity(${item.id}, 1)">
                            +
                        </button>

                        <span>${item.quantity}</span>

                        <button onclick="changeQuantity(${item.id}, -1)">
                            −
                        </button>

                    </div>

                </div>

                <button
                    class="remove"
                    onclick="removeFromCart(${item.id})"
                >
                    حذف
                </button>

            </div>
        `;

    }).join("");


    const total = cart.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
    );

    cartTotal.textContent = total.toFixed(2) + " د.أ";

}


/* تغيير الكمية */

function changeQuantity(id, amount) {

    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    updateCart();

}


/* حذف منتج */

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    updateCart();

}


/* فتح السلة */

function openCart() {

    document
        .getElementById("cart-overlay")
        .classList.add("show");

}


/* إغلاق السلة */

function closeCart(event) {

    if (
        event &&
        event.target !== document.getElementById("cart-overlay")
    ) {
        return;
    }

    document
        .getElementById("cart-overlay")
        .classList.remove("show");

}


/* فلترة المنتجات */

function filterProducts(category, button) {

    const cards = document.querySelectorAll(".product-card");

    const buttons = document.querySelectorAll(".category");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");


    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

}


/* النزول للمنيو */

function scrollToMenu() {

    document
        .getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* إتمام الطلب */

function checkout() {

    if (cart.length === 0) {

        alert("السلة فارغة، أضف منتجات أولاً.");

        return;
    }


    let message = "مرحباً، أريد طلب:%0A%0A";

    cart.forEach(item => {

        message +=
            `${item.name} × ${item.quantity} - ${(item.price * item.quantity).toFixed(2)} د.أ%0A`;

    });


    const total = cart.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
    );


    message += `%0Aالمجموع: ${total.toFixed(2)} د.أ`;


    // غيّر الرقم لاحقاً إلى رقم المطعم
    const phone = "962700000000";

    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );

}

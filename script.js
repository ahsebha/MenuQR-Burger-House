* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --dark: #111111;
    --dark-2: #1a1a1a;
    --orange: #ff6b00;
    --orange-light: #ff8c2a;
    --gold: #ffb703;
    --cream: #fff8ef;
    --white: #ffffff;
    --text: #171717;
    --muted: #777777;
    --border: #eeeeee;
}

body {
    font-family: "Cairo", sans-serif;
    background: var(--cream);
    color: var(--text);
}


/* =========================
   HEADER
========================= */

.header {
    height: 78px;
    background: rgba(17, 17, 17, 0.97);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7%;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    color: white;
}

.logo-icon {
    width: 45px;
    height: 45px;
    border-radius: 14px;
    background: linear-gradient(135deg, var(--orange), var(--gold));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    box-shadow: 0 5px 20px rgba(255, 107, 0, 0.3);
}

.logo h1 {
    font-size: 20px;
    line-height: 22px;
    color: white;
}

.logo p {
    font-size: 10px;
    color: #aaa;
}

.cart-button {
    border: none;
    background: linear-gradient(135deg, var(--orange), var(--orange-light));
    color: white;
    padding: 11px 17px;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 5px 20px rgba(255, 107, 0, 0.25);
    transition: 0.25s;
}

.cart-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 0, 0.4);
}

.cart-button b {
    background: white;
    color: var(--orange);
    width: 23px;
    height: 23px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 500px;

    background:
        linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.85),
            rgba(0, 0, 0, 0.45)
        ),
        url("https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=1600")
        center/cover;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    color: white;

    position: relative;
    overflow: hidden;
}

.hero::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background: var(--orange);
    filter: blur(180px);
    opacity: 0.15;
    right: -150px;
    bottom: -200px;
}

.hero-content {
    max-width: 750px;
    padding: 30px;
    position: relative;
    z-index: 2;
}

.hero-badge {
    display: inline-block;

    background: rgba(255, 107, 0, 0.15);
    border: 1px solid rgba(255, 107, 0, 0.6);

    color: #ffb36b;

    padding: 8px 20px;
    border-radius: 30px;

    font-size: 14px;
}

.hero h2 {
    font-size: 58px;
    margin: 25px 0 10px;
    font-weight: 800;

    background: linear-gradient(
        90deg,
        white,
        #ffd2ad
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero p {
    font-size: 18px;
    color: #e5e5e5;
}

.hero-button {
    margin-top: 30px;

    padding: 14px 35px;

    border: none;

    background: linear-gradient(
        135deg,
        var(--orange),
        var(--gold)
    );

    color: white;

    border-radius: 12px;

    font-family: inherit;
    font-weight: 800;

    cursor: pointer;

    box-shadow:
        0 10px 30px rgba(255, 107, 0, 0.35);

    transition: 0.25s;
}

.hero-button:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow:
        0 15px 40px rgba(255, 107, 0, 0.5);
}


/* =========================
   CATEGORIES
========================= */

.categories {
    display: flex;
    justify-content: center;
    gap: 12px;

    padding: 40px 20px 20px;

    flex-wrap: wrap;

    background: var(--cream);
}

.category {
    border: 2px solid transparent;

    background: white;

    padding: 11px 25px;

    border-radius: 40px;

    font-family: inherit;

    cursor: pointer;

    font-weight: 700;

    color: #555;

    box-shadow:
        0 5px 20px rgba(0, 0, 0, 0.06);

    transition: 0.25s;
}

.category:hover {
    border-color: var(--orange);
    color: var(--orange);

    transform: translateY(-2px);
}

.category.active {
    background: linear-gradient(
        135deg,
        var(--orange),
        var(--gold)
    );

    color: white;

    border-color: transparent;

    box-shadow:
        0 8px 25px rgba(255, 107, 0, 0.3);
}


/* =========================
   PRODUCTS
========================= */

.products-container {
    max-width: 1250px;

    margin: auto;

    padding: 30px 20px 80px;
}

.section-title {
    margin-bottom: 30px;
    text-align: center;
}

.section-title span {
    color: var(--orange);

    font-size: 14px;

    font-weight: 800;

    letter-spacing: 1px;
}

.section-title h2 {
    font-size: 34px;

    margin-top: 4px;

    font-weight: 800;
}

.products {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 22px;
}


/* =========================
   PRODUCT CARD
========================= */

.product-card {
    background: white;

    border-radius: 20px;

    overflow: hidden;

    border: 1px solid #eeeeee;

    transition: 0.3s;

    box-shadow:
        0 5px 20px rgba(0, 0, 0, 0.04);
}

.product-card:hover {
    transform: translateY(-8px);

    box-shadow:
        0 20px 45px rgba(0, 0, 0, 0.12);

    border-color: rgba(255, 107, 0, 0.25);
}

.product-image {
    width: 100%;
    height: 200px;

    overflow: hidden;

    position: relative;
}

.product-image::after {
    content: "";

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            to top,
            rgba(0, 0, 0, 0.2),
            transparent
        );

    pointer-events: none;
}

.product-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: 0.5s;
}

.product-card:hover img {
    transform: scale(1.08);
}

.product-info {
    padding: 18px;
}

.product-info h3 {
    font-size: 18px;

    margin-bottom: 6px;

    font-weight: 800;
}

.product-info p {
    font-size: 12px;

    color: var(--muted);

    line-height: 1.8;

    min-height: 45px;
}

.product-bottom {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-top: 17px;
}

.product-bottom strong {
    color: var(--orange);

    font-size: 18px;

    font-weight: 800;
}

.product-bottom button {
    width: 42px;
    height: 42px;

    border: none;

    border-radius: 13px;

    background:
        linear-gradient(
            135deg,
            var(--orange),
            var(--gold)
        );

    color: white;

    font-size: 27px;

    line-height: 1;

    cursor: pointer;

    box-shadow:
        0 6px 15px rgba(255, 107, 0, 0.25);

    transition: 0.25s;
}

.product-bottom button:hover {
    transform: scale(1.12) rotate(5deg);

    box-shadow:
        0 10px 25px rgba(255, 107, 0, 0.4);
}


/* =========================
   CART
========================= */

.cart-overlay {
    position: fixed;

    inset: 0;

    background:
        rgba(0, 0, 0, 0.65);

    backdrop-filter: blur(4px);

    z-index: 2000;

    display: none;
}

.cart-overlay.show {
    display: flex;

    justify-content: flex-start;
}

.cart {
    width: 450px;

    max-width: 100%;

    height: 100%;

    background: #fff;

    padding: 25px;

    display: flex;

    flex-direction: column;

    animation: slideIn 0.3s ease;
}

@keyframes slideIn {

    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }

}

.cart-header {
    display: flex;

    justify-content: space-between;

    align-items: center;

    padding-bottom: 20px;

    border-bottom: 1px solid var(--border);
}

.cart-header h2 {
    font-size: 21px;

    font-weight: 800;
}

.cart-header button {
    border: none;

    background: #f4f4f4;

    width: 38px;
    height: 38px;

    border-radius: 50%;

    font-size: 25px;

    cursor: pointer;

    transition: 0.2s;
}

.cart-header button:hover {
    background: #ffe5d0;

    color: var(--orange);
}

.cart-items {
    flex: 1;

    overflow-y: auto;

    padding: 15px 0;
}

.empty-cart {
    text-align: center;

    margin-top: 100px;

    color: var(--muted);
}

.empty-cart div {
    font-size: 55px;

    margin-bottom: 10px;
}

.cart-item {
    display: flex;

    align-items: center;

    gap: 12px;

    padding: 13px 0;

    border-bottom: 1px solid var(--border);
}

.cart-item-image {
    width: 65px;
    height: 65px;

    object-fit: cover;

    border-radius: 12px;
}

.cart-item-info {
    flex: 1;
}

.cart-item-info h4 {
    font-size: 14px;
}

.cart-item-info strong {
    color: var(--orange);

    font-size: 13px;
}

.quantity {
    display: flex;

    align-items: center;

    gap: 8px;

    margin-top: 6px;
}

.quantity button {
    border: none;

    background: #f4f4f4;

    width: 27px;
    height: 27px;

    border-radius: 7px;

    cursor: pointer;
}

.quantity button:hover {
    background: #ffe5d0;

    color: var(--orange);
}

.remove {
    border: none;

    background: none;

    color: #ef4444;

    cursor: pointer;
}

.cart-footer {
    border-top: 1px solid var(--border);

    padding-top: 20px;
}

.total {
    display: flex;

    justify-content: space-between;

    margin-bottom: 15px;
}

.total strong {
    color: var(--orange);

    font-size: 21px;
}

.checkout-button {
    width: 100%;

    border: none;

    background:
        linear-gradient(
            135deg,
            #111111,
            #292929
        );

    color: white;

    padding: 15px;

    border-radius: 12px;

    font-family: inherit;

    font-weight: 800;

    cursor: pointer;

    transition: 0.25s;
}

.checkout-button:hover {
    background:
        linear-gradient(
            135deg,
            var(--orange),
            var(--gold)
        );

    transform: translateY(-2px);
}


/* =========================
   FOOTER
========================= */

footer {
    background:
        linear-gradient(
            135deg,
            #0d0d0d,
            #1b1b1b
        );

    color: white;

    text-align: center;

    padding: 45px 20px;
}

footer h3 {
    color: var(--orange);

    font-size: 22px;
}

footer p {
    color: #bbb;

    margin: 6px 0 15px;
}

footer small {
    color: #777;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1000px) {

    .products {
        grid-template-columns:
            repeat(3, 1fr);
    }

}

@media (max-width: 700px) {

    .header {
        padding: 0 18px;
    }

    .hero {
        min-height: 420px;
    }

    .hero h2 {
        font-size: 40px;
    }

    .hero p {
        font-size: 15px;
    }

    .products {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 14px;
    }

    .product-image {
        height: 160px;
    }

    .product-info {
        padding: 13px;
    }

    .product-info h3 {
        font-size: 15px;
    }

}

@media (max-width: 450px) {

    .products {
        grid-template-columns: 1fr;
    }

    .product-image {
        height: 220px;
    }

    .hero h2 {
        font-size: 34px;
    }

    .category {
        padding: 9px 17px;
    }

    .cart {
        width: 100%;
    }

}

let sortiment = [
  {
    id: 1,
    image: "./Assets/top-cards/top-card1.svg",
    name: "Шестигранник 250x220x70",
    count: "21 шт/кв.м",
    colors: 8,
    grayPrice: 450,
    redPrice: 530,
    brownPrice: 590,
    yellowPrice: "По запросу",
    restPrice: 510,
    maxCount: 65,
  },
  {
    id: 2,
    image: "./Assets/top-cards/top-card2.svg",
    name: "Брусчатка 200x100x50",
    count: "50 пара шт/кв.м",
    colors: 8,
    grayPrice: 440,
    redPrice: 500,
    brownPrice: 550,
    yellowPrice: 700,
    restPrice: "По запросу",
    maxCount: 50,
  },
  {
    id: 3,
    image: "./Assets/top-cards/top-card3.svg",
    name: "Плитка квадрат 330x330x60",
    count: "9 шт/кв.м",
    colors: 8,
    grayPrice: 440,
    redPrice: 500,
    brownPrice: 550,
    yellowPrice: 700,
    restPrice: "По запросу",
    maxCount: 60,
  },
  {
    id: 4,
    image: "./Assets/top-cards/top-card4.svg",
    name: "Катушка 250x160x60",
    count: "30шт/кв.м",
    colors: 8,
    grayPrice: 440,
    redPrice: 500,
    brownPrice: 550,
    yellowPrice: 700,
    restPrice: "По запросу",
    maxCount: 55,
  },
  {
    id: 5,
    image: "./Assets/top-cards/top-card5.svg",
    name: "Кирпичик 250x125x60",
    count: "32шт/кв.м",
    colors: 8,
    grayPrice: 440,
    redPrice: 500,
    brownPrice: 550,
    yellowPrice: 700,
    restPrice: "По запросу",
    maxCount: 40,
  },
  {
    id: 6,
    image: "./Assets/top-cards/top-card6.svg",
    name: "Волна 250x125x60",
    count: "32/40шт/кв.м",
    colors: 8,
    grayPrice: 450,
    redPrice: 500,
    brownPrice: 550,
    yellowPrice: 700,
    restPrice: "По запросу",
    maxCount: 45,
  },
];

let plites = [
  {
    id: 1,
    image: "./plite/plite-1.jpg",
    name: "Тротуарная 12-кирпичей 500x500x50мм",
    size: "500x500x50мм",
    count: "5 шт/кв.м",
    weight: "16кг",
    colors: 5,
    grayPrice: 325,
    redPrice: 370,
    brownPrice: 410,
    yellowPrice: "По запросу",
    restPrice: 355,
    maxCount: 60,
  },
  {
    id: 2,
    image: "./plite/plite-2.jpg",
    name: "Тротуарная Калифорния 300x300x30мм",
    size: "300x300x30мм",
    count: "50 пара шт/кв.м",
    weight: "6.2кг",
    colors: 5,
    grayPrice: 126,
    redPrice: 145,
    brownPrice: 155,
    yellowPrice: 180,
    restPrice: "По запросу",
    maxCount: 50,
  },
  {
    id: 3,
    image: "./plite/plite-3.jpg",
    name: "Тротуарная Паркет 300x300x30мм",
    size: "300x300x30мм",
    count: "9 шт/кв.м",
    weight: "6.35кг",
    colors: 8,
    grayPrice: 126,
    redPrice: 145,
    brownPrice: 155,
    yellowPrice: 180,
    restPrice: "По запросу",
    maxCount: 60,
  },
  {
    id: 4,
    image: "./plite/plite-4.jpg",
    name: "Тротуарная 8-кирпичей 400х400х50мм",
    size: "250x160x60мм",
    count: "30 шт/кв.м",
    weight: "16кг",
    colors: 8,
    grayPrice: 355,
    redPrice: 370,
    brownPrice: 390,
    yellowPrice: 420,
    restPrice: "По запросу",
    maxCount: 55,
  },
  {
    id: 5,
    image: "./plite/plite-5.jpg",
    name: "Тротуарная Фантазия 300x300мм",
    size: "300x300мм",
    count: "32 шт/кв.м",
    weight: "6кг",
    colors: 8,
    grayPrice: 126,
    redPrice: 145,
    brownPrice: 155,
    yellowPrice: 180,
    restPrice: "По запросу",
    maxCount: 40,
  },
  {
    id: 6,
    image: "./plite/plite-6.jpg",
    name: "Тротуарная 8-кирпичей 280x280x30",
    size: "280x280x30мм",
    count: "32/40 шт/кв.м",
    weight: "16кг",
    colors: 8,
    grayPrice: 325,
    redPrice: 370,
    brownPrice: 410,
    yellowPrice: 470,
    restPrice: "По запросу",
    maxCount: 45,
  },
];
function openMenu() {
  let menu = document.querySelector(".menu");
  let menuBg = document.querySelector(".menu-bg");
  menuBg.classList.add("active");
  menu.classList.add("active");
}
document.querySelector(".menu-bg").addEventListener("click", () => {
  document.querySelector(".menu").classList.remove("active");
  document.querySelector(".menu-bg").classList.remove("active");
});
function showCart() {
  let cart = document.querySelector(".cart");
  cart.classList.add("show");
  cart.classList.remove("hidden");
  let menu = document.querySelector(".menu");
  let menuBg = document.querySelector(".menu-bg");
  menu.classList.remove("active");
  menuBg.classList.remove("active");
}
function getOffCart() {
  let cart = document.querySelector(".cart");
  cart.classList.remove("show");
  cart.classList.add("hidden");
}

function addToCartFromTop(productId, category) {
  let button = document.querySelector(
    `.plus[data-product-id="${productId}"][data-category="${category}"]`
  );

  if (!button) {
    console.error("Кнопка не найдена");
    return;
  }

  let productData = sortiment.find(p => p.id === productId);
  if (!productData) {
    console.error("Товар не найден в sortiment");
    return;
  }

  let product = {
    id: productData.id,
    category,
    name: productData.name,
    price: productData.grayPrice,
    grayPrice: productData.grayPrice,
    image: productData.image,
    quantity: 1,
  };

  addProductToBasketArray(product);
}

function addProductToBasketArray(product) {
  let existingProduct = basket.find(p => p.id === product.id && p.category === product.category);
  
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    basket.push({
      id: product.id,
      name: product.name,
      image: product.image,
      category: product.category || "default", 
      price: product.grayPrice || product.price,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(basket));
  renderCart()
}


function saveCart() {
  localStorage.setItem("cart", JSON.stringify(basket));
}

function renderCart() {
  let cartBox = document.querySelector(".cart-box");
  cartBox.innerHTML = ""; 
  basket.forEach((prod) => {
    let price = prod.price || prod.grayPrice || "—";
    let count = prod.quantity;
    let card = document.createElement("div");
    card.classList.add("cart-card");
    console.log(prod.image);
    
    card.innerHTML = `
    <img src="${prod.image}">
      <span>${prod.name}</span>
      <span class="cart-price">${price * count}₽</span>
      <div class="count">
        <button onclick="decreaseCount(${prod.id})">-</button>
        <span class="product-count">${count}шт/кв.м</span>
        <button onclick="increaseCount(${prod.id})">+</button>
      </div>`;
    cartBox.appendChild(card);
  });
}

function increaseCount(id) {
  let item = basket.find((p) => p.id === id);
  if (item) {
    item.quantity++;
    saveCart();
    renderCart();
  }
}

function decreaseCount(id) {
  let item = basket.find((i) => i.id === id);
  if (item) {
    item.quantity--;
    if (item.quantity <= 0) {
      basket = basket.filter((p) => p.id !== id);
    }
    saveCart();
    renderCart();
  }
}

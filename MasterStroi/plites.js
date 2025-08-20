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
let blocks = [
  {
    id: 1,
    image: "./build-blocks/build-block1.png",
    name: "Блок HONIK СКЦ-14Р",
    size: "390х140х188мм",
    count: "12,5 шт/кв.м",
    weight: "12кг",
    colors: 1,
    grayPrice: 57,
    price: 57,
    maxCount: 49,
  },
  {
    id: 2,
    image: "./build-blocks/build-block2.png",
    name: "Блок стеновой",
    size: "390х190х188мм",
    count: "12,5 шт/кв.м",
    weight: "12кг",
    colors: 1,
    grayPrice: 57,
    price: 57,
    maxCount: 49,
  },
  {
    id: 3,
    image: "./build-blocks/build-block3.png",
    name: "Щелевой стеновой Блок",
    size: "390x190x188мм",
    count: "12,5 шт/кв.м",
    weight: "16кг",
    colors: 1,
    grayPrice: 120,
    price: 120,
    maxCount: 53,
  },
  {
    id: 4,
    image: "./build-blocks/build-block4.png",
    name: "Блок КСР-ПР-ПС стеновой",
    size: "390x190x188мм",
    count: "12,5 шт/кв.м",
    weight: "14кг",
    colors: 1,
    grayPrice: 41,
    price: 41,
    maxCount: 58,
  },
  {
    id: 5,
    image: "./build-blocks/build-block5.png",
    name: "Щелевой стеновой Блок",
    size: "400x200x200мм",
    count: "11,6 шт/кв.м",
    weight: "15кг",
    colors: 1,
    grayPrice: 70,
    price: 70,
    maxCount: 63,
  },
  {
    id: 6,
    image: "./build-blocks/build-block6.png",
    name: "Отсевный стеновой Блок",
    size: "390x120x188мм",
    count: "13 шт/кв.м",
    weight: "11кг",
    colors: 1,
    grayPrice: 57,
    price: 57,
    maxCount: 64,
  },
];

let border = [
  {
    id: 1,
    image: "./borders/border1.png",
    name: "Бордюр тротуарный вибропрессованный",
    size: "1000х200х80мм",
    count: "5 шт/кв.м",
    weight: "35кг",
    colors: 1,
    grayPrice: 2568,
    price: 2568,
    maxCount: 65,
  },
  {
    id: 2,
    image: "./borders/border2.png",
    name: "Бордюр тротуарный вибролитой",
    size: "1000х220х75мм",
    count: "4.55 шт/кв.м",
    weight: "37.95кг",
    colors: 1,
    grayPrice: 3236,
    price: 3236,
    maxCount: 73,
  },
  {
    id: 3,
    image: "./borders/border3.png",
    name: "Бордюр тротуарный 1000x200x80мм",
    size: "1000х200х80мм",
    count: "5 шт/кв.м",
    weight: "35кг",
    colors: 1,
    grayPrice: 3095,
    price: 3095,
    maxCount: 56,
  },
  {
    id: 4,
    image: "./borders/border4.png",
    name: "Бордюр тротуарный литьевой",
    size: "500х210х70мм",
    count: "9.52 шт/кв.м",
    weight: "14кг",
    colors: 1,
    grayPrice: 317,
    price: 317,
    maxCount: 55,
  },
  {
    id: 5,
    image: "./borders/border5.png",
    name: "Бордюр дорожный",
    size: "1000х300х150мм",
    count: "3.33 шт/кв.м",
    weight: "68кг",
    colors: 1,
    grayPrice: 1068,
    price: 1068,
    maxCount: 45,
  },
  {
    id: 6,
    image: "./borders/border6.png",
    name: "Бордюр тротуарный литьевой",
    size: "500х210х70мм",
    count: "9.52 шт/кв.м",
    weight: "14кг",
    colors: 1,
    grayPrice: 432,
    price: 432,
    maxCount: 45,
  },
];

let facade = [
  {
    id: 1,
    image: "./facade/facade1.png",
    name: "DÖCKE Панель фасадная",
    size: "1167х449х25мм",
    count: "2 шт/кв.м",
    weight: "4кг",
    colors: 1,
    grayPrice: 1815,
    price: 1815,
    maxCount: 55,
  },
  {
    id: 2,
    image: "./facade/facade2.png",
    name: "DÖCKE Панель фасадная",
    size: "480х480x40мм",
    count: "2 шт/кв.м",
    weight: "9кг",
    colors: 1,
    grayPrice: 564,
    price: 564,
    maxCount: 74,
  },
  {
    id: 3,
    image: "./facade/facade3.png",
    name: "Сайдинг панель FineBer",
    size: "1117х590х35мм",
    count: "1.9 шт/кв.м",
    weight: "6.3кг",
    colors: 1,
    grayPrice: 931,
    price: 931,
    maxCount: 56,
  },
  {
    id: 4,
    image: "./facade/facade4.png",
    name: "Панель DOCKE BURG",
    size: "1072х472x22мм",
    count: "2,38 шт/кв.м",
    weight: "1,79кг",
    colors: 1,
    grayPrice: 1354,
    price: 1354,
    maxCount: 52,
  },
  {
    id: 5,
    image: "./facade/facade5.png",
    name: 'Фасадная панель ТН "Камень"',
    size: "1000х420x20мм",
    count: "2,38 шт/кв.м",
    weight: "1,79кг",
    colors: 1,
    grayPrice: 1554,
    price: 1554,
    maxCount: 52,
  },
];

let gutters = [
  {
    id: 1,
    image: "./gutters/gutter1.png",
    name: "Водосток бетон серый",
    size: "500х160х50мм",
    count: "2,38 шт/кв.м",
    weight: "7 кг",
    colors: 1,
    grayPrice: 384,
    price: 384,
    maxCount: 42,
  },
  {
    id: 2,
    image: "./gutters/gutter2.png",
    name: "Водосток бетон красный",
    size: "500х150х50мм",
    count: "13.33 шт/кв.м",
    weight: "8кг",
    colors: 1,
    grayPrice: 410,
    price: 410,
    maxCount: 61,
  },
  {
    id: 3,
    image: "./gutters/gutter3.png",
    name: "Лоток водоотводный бетонный",
    size: "1000x165x165мм",
    count: "6.06 шт/кв.м",
    weight: "18кг",
    colors: 1,
    grayPrice: 1089,
    price: 1089,
    maxCount: 62,
  },
  {
    id: 4,
    image: "./gutters/gutter4.png",
    name: "Лоток водоотводный бетонный",
    size: "1000x160x80мм",
    count: "6.25 шт/кв.м",
    weight: "29кг",
    colors: 1,
    grayPrice: 4143,
    price: 4143,
    maxCount: 72,
  },
];

let lids = [
  {
    id: 1,
    image: "./lids/lid1.png",
    name: "Колпак на столб 400x400",
    size: "400x400мм",
    count: "6.25 шт/кв.м",
    weight: "1.9кг",
    colors: 1,
    grayPrice: 184,
    price: 184,
    maxCount: 72,
  },
  {
    id: 2,
    image: "./lids/lid2.png",
    name: 'Форма на столб "Пирамида"',
    size: "550х550x140мм",
    count: "3.31 шт/кв.м",
    weight: "2.4кг",
    colors: 1,
    grayPrice: 1300,
    price: 1300,
    maxCount: 72,
  },
  {
    id: 3,
    image: "./lids/lid3.png",
    name: "Форма архитектурная на столб",
    size: "500х500x220мм",
    count: "3.31 шт/кв.м",
    weight: "9.5кг",
    colors: 1,
    grayPrice: 1500,
    price: 1500,
    maxCount: 72,
  },
  {
    id: 4,
    image: "./lids/lid4.png",
    name: "Крышка на столб двухярусная ",
    size: "450x450x45мм",
    count: "3.31 шт/кв.м",
    weight: "2.9.кг",
    colors: 1,
    grayPrice: 1230,
    price: 1230,
    maxCount: 72,
  },
  {
    id: 5,
    image: "./lids/lid5.png",
    name: "Колпак на столб двойной",
    size: "390x390мм",
    count: "3.31 шт/кв.м",
    weight: "3.6кг",
    colors: 1,
    grayPrice: 1150,
    price: 1150,
    maxCount: 72,
  },
  {
    id: 6,
    image: "./lids/lid6.png",
    name: "Колпак на столб двойной",
    size: "290x290мм",
    count: "3.31 шт/кв.м",
    weight: "2.9кг",
    colors: 1,
    grayPrice: 1390,
    price: 1390,
    maxCount: 72,
  },
];

let categorys = [
  { id: 1, name: "sortiment" },
  { id: 2, name: "plites" },
  { id: 3, name: "blocks" },
  { id: 4, name: "border" },
  { id: 5, name: "facade" },
  { id: 6, name: "gutters" },
  { id: 7, name: "lids" },
];

let savedUsers = localStorage.getItem("savedUsers");
if (savedUsers) {
  users = JSON.parse(savedUsers);
}


document.addEventListener("DOMContentLoaded", () => {
  renderCart()
  autoLogin()
});
let basket = JSON.parse(localStorage.getItem("cart")) || [];
let cartNew = 0;
let history = JSON.parse(localStorage.getItem("basketHistory")) || [];
var savedMarkers = JSON.parse(localStorage.getItem("markers")) || [];
let selectedAddress = "";
let currentMark = null;

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
function autoLogin() {
  let savedUser = localStorage.getItem("loggedUser");
  if (!savedUser) return;
  let user = users.find((u) => u.id === Number(savedUser));
  if (user) {
    logined = true;
    document.getElementById("userName").textContent = user.name;
  }
}

function addToCartFromPlites(productId, category) {
  let button = document.querySelector(
    `.plus[data-product-id="${productId}"][data-category="${category}"]`
  );

  if (!button) {
    console.error("Кнопка не найдена");
    return;
  }

  let productData = plites.find((p) => p.id === productId);
  if (!productData) {
    console.error("Товар не найден в plites");
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
  let existingProduct = basket.find(
    (p) => p.id === product.id && p.category === product.category
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    basket.push({
      id: product.id,
      name: product.name,
      image: product.image,
      category: product.category || "default",
      price: product.grayPrice || product.price,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(basket));
  renderCart();
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
    // console.log(prod.image);

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

document.addEventListener("DOMContentLoaded", () => {
  let map = L.map("map").setView([56.0357, 35.9586], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);
  let savedMarker = JSON.parse(localStorage.getItem("markers"));
  if (savedMarker && savedMarker.length > 0) {
    let coords = savedMarker[0];
    currentMark = L.marker(coords).addTo(map);
    getAddress(coords[0], coords[1], function (address) {
      selectedAddress = address;
    });
  }

  map.on("click", function (e) {
    let coords = [e.latlng.lat, e.latlng.lng];
    if (currentMark) {
      map.removeLayer(currentMark);
    }

    currentMark = L.marker(coords).addTo(map);
    localStorage.setItem("markers", JSON.stringify([coords]));

    getAddress(coords[0], coords[1], function (address) {
      console.log("Адрес:", address);
      selectedAddress = address;
    });
  });
});

function getAddress(lat, lng, callback) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data.display_name) {
        callback(data.display_name);
      } else {
        callback("Адрес не найден");
      }
    })
    .catch(() => {
      callback("Ошибка при получении адреса");
    });
}

function deliverySuccessClose() {
  document.querySelector(".deliverySuccess-bg").classList.add("hidden");
}

function orderModalOpen() {
  if (basket.length === 0) {
    console.log("Корзина пуста, заказ не возможен!");
    document.getElementById("cartOrderErr").textContent =
      "Заказ невозможен, корзина пуста!";
  } else {
    document.getElementById("cartOrderErr").textContent = "";
    document.querySelector(".deliveryOrder").classList.remove("hidden");
  }
}

function createOrder() {
  if (basket.length === 0) {
    alert("Корзина пуста");
    return;
  }
  let deliveryDateInput = document.getElementById("delivery-date");
  let deliveryDate = deliveryDateInput ? deliveryDateInput.value : "";
  let address = selectedAddress || "";
  let total = 0;
  basket.forEach((item) => {
    total += item.price * item.quantity;
  });
  if (!deliveryDate) {
    document.getElementById("dateError").textContent = "Выберите дату доставки";
    document.getElementById("dateError").style.color = "#CC0000";
    return false;
  }
  if (!address) {
    document.getElementById("addressError").textContent =
      "Укажите на карте адрес доставки";
    return false;
  }
  let now = new Date();
  let year = now.getFullYear().toString().slice(-2);
  let month = (now.getMonth() + 1).toString().padStart(2, "0");
  let day = now.getDate().toString().padStart(2, "0");
  let datePart = `${year}${month}${day}`;
  let randomPart = Math.floor(Math.random() * 9000) + 1000;
  let orderNumber = `ORD-${datePart}-${randomPart}`;
  let order = {
    number: orderNumber,
    date: now.toISOString(),
    items: [...basket],
    total: total,
  };
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  basket = [];
  saveCart();
  renderCart();
  document.getElementById("deliverySuccess-number").textContent = orderNumber;
  document.getElementById("deliverySuccess-cost").textContent = `${total}₽`;
  document.getElementById("deliverySuccess-address").textContent = address;
  document.querySelector(".deliverySuccess-bg").classList.remove("hidden");
  document.querySelector(".deliveryOrder").classList.add("hidden");
}

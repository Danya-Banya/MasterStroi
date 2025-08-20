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
    name: "Тротуарная 400x400x50мм",
    weight: "16кг",
    color: "Серый",
    price: "325₽",
    type: "Тротуарный, эконом",
    maxCount: 45,
  },
  {
    id: 2,
    name: "Тротуарная Калифорния 300x300x30мм",
    weight: "6.2кг",
    color: "Серый",
    price: "126₽",
    type: "Калифорния, эконом",
    maxCount: 45,
  },
  {
    id: 3,
    name: "Тротуарная Паркет 300x300x30мм",
    weight: "6.35кг",
    color: "Серый",
    price: "126₽",
    type: "Паркет, эконом",
    maxCount: 45,
  },
  {
    id: 4,
    name: "",
    weight: "16кг",
    color: "Красный",
    price: "355₽",
    type: "Эконом",
    maxCount: 45,
  },
  {
    id: 5,
    name: "Тротуарная Фантазия 300x300мм",
    weight: "6кг",
    color: "Серый",
    price: "126₽",
    type: "Эконом",
    maxCount: 45,
  },
  {
    id: 6,
    name: "Тротуарная 8-кирпичей",
    weight: "16кг",
    color: "Серый",
    price: "325₽",
    type: "тротуарная, эконом",
    maxCount: 45,
  },
];

let users = [
  {
    id: 1,
    name: "Семён",
    email: "lobanov@gmail.com",
    password: "goida-naveki_363",
    number: "+996707542291  ",
  },
  {
    id: 2,
    name: "Андрей",
    email: "neShastliv85@gmail.com",
    password: "Third-reich-1488",
    number: "+996556734912",
  },
];

let savedUsers = localStorage.getItem("savedUsers");
if (savedUsers) {
  users = JSON.parse(savedUsers);
}

let logined = false;
let cartNew = 0;
let history = JSON.parse(localStorage.getItem("basketHistory")) || [];
let basket = JSON.parse(localStorage.getItem("cart")) || [];
var savedMarkers = JSON.parse(localStorage.getItem("markers")) || [];
let selectedAddress = ""

document.addEventListener("DOMContentLoaded", () => {
  let map = L.map("map").setView([56.0357, 35.9586], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);
  let maxMarkers = 1;
  if (savedMarkers.length > maxMarkers) {
    savedMarkers = savedMarkers.slice(0, maxMarkers);
    localStorage.setItem("markers", JSON.stringify(savedMarkers));
  }
  function createMarker(coords) {
    let marker = L.marker(coords).addTo(map);

    marker.on("click", () => {
      map.removeLayer(marker);
      savedMarkers = savedMarkers.filter(
        (c) => !(c[0] === coords[0] && c[1] === coords[1])
      );
      localStorage.setItem("markers", JSON.stringify(savedMarkers));
    });
  }
  savedMarkers.forEach((coords) => createMarker(coords));
  map.on("click", function (e) {
    if (savedMarkers.length >= maxMarkers) {
      console.log(`харе, достигнут лимит`);
      return;
    }
    let coords = [e.latlng.lat, e.latlng.lng];
    savedMarkers.push(coords);
    localStorage.setItem("markers", JSON.stringify(savedMarkers));
    createMarker(coords);
    getAddress(coords[0], coords[1], function (address) {
      console.log("Адрес:", address);
      selectedAddress = address
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
document.addEventListener("DOMContentLoaded", () => {
  autoLogin();
  localStorage.removeItem("YourMealBasket");
  localStorage.removeItem("orderCount");
  renderCart();
  let topButtons = document.querySelectorAll(".top-container .plus");

  topButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let productId = Number(e.target.dataset.productId);
      let category = e.target.dataset.category;
      addToCartFromTop(productId, category);
    });
  });
  let today = new Date();
  let nextYear = new Date(today.getFullYear() + 1, 11, 31);
  document.getElementById("delivery-date").min = today
    .toISOString()
    .split("T")[0];
  document.getElementById("delivery-date").max = nextYear
    .toISOString()
    .split("T")[0];

  updateCartIndicator();
});
document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("delivery-form").addEventListener("submit", function(e){
    e.preventDefault()
    createOrder()
  })
})
function updateCartIndicator() {
  let indicator = document.getElementById("basketMassage");
  if (!indicator) return;

  if (cartNew >= 1) {
    indicator.closest(".new").classList.remove("hidden");
    indicator.querySelector("text").textContent = cartNew;
  } else {
    indicator.closest(".new").classList.add("hidden");
  }
}

function autoLogin() {
  let savedUser = localStorage.getItem("loggedUser");
  if (!savedUser) return;
  let user = users.find((u) => u.id === Number(savedUser));
  if (user) {
    logined = true;
    document.getElementById("login").classList.add("hidden");
    let headerName = document.querySelector(".for-logined");
    headerName.textContent = "Вы";
    headerName.classList.remove("hidden");
    document.getElementById("account-name").textContent = user.name;
  }
}

document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    register();
  });

  document.addEventListener("DOMContentLoaded", ()=>{
    let toggle = document.getElementById("toggleSwitch")
    toggle.addEventListener("change", handleToggle)
  })
  function handleToggle(event){
    let checkBox = event.target
    if(checkBox.checked){
      document.getElementById("main-body").style.backgroundColor = "#222"
      document.getElementById("main-body").style.color = "#fff"
      document.querySelectorAll(".advantagesCard").style.color = "#000000"
      document.querySelector(".cart-card").style.color = "#000000"
    } else {
      document.getElementById("main-body").style.backgroundColor = "#fff"
      document.getElementById("main-body").style.color = '#000000'
    }
  }

function showLogOut() {
  document.querySelector(".areYouSure-bg").classList.remove("hidden");
  document.querySelector(".account-bg").classList.add("hidden");
}

function logOut() {
  logined = false;
  localStorage.removeItem("loggedUser");
  document.getElementById("login").classList.remove("hidden");
  document.querySelector(".for-logined").classList.add("hidden");
  document.querySelector(".areYouSure-bg").classList.add("hidden");
  document.querySelector(".account-bg").classList.add("hidden");
}
function nope() {
  document.querySelector(".areYouSure-bg").classList.add("hidden");
  document.querySelector(".account-bg").classList.remove("hidden");
}

function openRegisterModal() {
  let modal = document.querySelector(".register-bg");
  let loginModal = document.querySelector(".login-bg");
  modal.classList.remove("hidden");
  loginModal.classList.add("hidden");
}

function openLoginModal() {
  let modal = document.querySelector(".login-bg");
  modal.classList.remove("hidden");
}

function handleLoginSubmit(event) {
  event.preventDefault();
  login();
}

let form = document.getElementById("login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  login();
});

function login() {
  let mailInput = document.getElementById("emailLogin");
  let passInput = document.getElementById("passwordLogin");
  let mailInputValue = document.getElementById("emailLogin").value.trim();
  let mailPassValue = document.getElementById("passwordLogin").value.trim();
  let findUser = users.find(
    (user) => user.email === mailInputValue && mailPassValue === user.password
  );
  if (findUser) {
    console.log(findUser);
    logined = true;
    localStorage.setItem("loggedUser", findUser.id);
    document.getElementById("login").classList.add("hidden");
    let headerName = document.querySelector(".for-logined");
    document.querySelector(".for-logined").textContent = "Вы";
    headerName.classList.remove("hidden");
    document.querySelector(".login-bg").classList.add("hidden");
    document.getElementById("account-name").textContent = findUser.name;
  }
  mailInput.addEventListener("input", () => {
    if (mailInputValue !== users.email) {
      document.getElementById("logMailErr").textContent =
        "Проверьте свой адрес почты";
    }
  });
  passInput.addEventListener("input", () => {
    if (mailPassValue !== users.password) {
      document.getElementById("logPassErr").textContent =
        "Провертье свой пароль";
    }
    if (mailPassValue === "") {
      document.getElementById("logPassErr").textContent = "Введите пароль";
    }
  });
}

function fromRegToLogin() {
  document.querySelector(".login-bg").classList.remove("hidden");
  document.querySelector(".register-bg").classList.add("hidden");
}

function register() {
  let inputName = document.getElementById("regName");
  let inputMail = document.getElementById("emailRegister");
  let passInput = document.getElementById("passwordRegister");
  let phoneInput = document.getElementById("phone-number");

  let mailErr = document.getElementById("regMailErr");
  let nameErr = document.getElementById("regNameErr");
  let phoneErr = document.getElementById("regNumberErr");

  inputMail.addEventListener("input", () => {
    let emailValue = inputMail.value.trim();
    let findExistingUserMail = users.find((user) => user.email === emailValue);

    if (findExistingUserMail) {
      document
        .getElementById("register-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          mailErr.textContent = "Данный адрес почты уже используется";
        });
    } else if (emailValue === "") {
      mailErr.textContent = "Заполните поле";
    } else {
      mailErr.textContent = "";
    }
  });

  inputName.addEventListener("input", () => {
    let nameValue = inputName.value.trim();
    let findExistingUserName = users.find((user) => user.name === nameValue);

    if (findExistingUserName) {
      nameErr.textContent = "Данное имя уже используется";
    } else if (nameValue === "") {
      nameErr.textContent = "Заполните поле";
    } else {
      nameErr.textContent = "";
    }
  });

  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9()+\- ]/g, "");
    let numberValue = document.getElementById("phone-number").value.trim();

    if (/[a-zA-Za-яА-Я]/.test(numberValue)) {
      document.getElementById("regNumberErr").textContent =
        "Номер не должен иметь в себе буквы";
    } else {
      let existingNumber = users.find((num) => num.number === numberValue);

      if (existingNumber) {
        document.getElementById("regNumberErr").textContent =
          "Данный номер уже используется";
      } else {
        document.getElementById("regNumberErr").textContent = "";
      }
    }
  });

  let newUser = {
    id: users.length + 1,
    name: inputName.value.trim(),
    email: inputMail.value.trim(),
    password: passInput.value.trim(),
    number: phoneInput.value.trim(),
  };
  if (
    !newUser.name ||
    !newUser.email ||
    !newUser.password ||
    !newUser.number ||
    mailErr.textContent ||
    nameErr.textContent ||
    phoneErr.textContent
  ) {
    console.log("Blin");
    return;
  }
  users.push(newUser);
  logined = true;
  localStorage.setItem("loggedUser", newUser.id);
  localStorage.setItem("savedUsers", JSON.stringify(users));
  document.querySelector(".register-bg").classList.add("hidden");
  document.querySelector(".for-logined").textContent = "Вы";
  document.querySelector(".for-logined").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("account-name").textContent = newUser.name;
  console.log(logined);
  console.log(users);
}

document.querySelector(".login-hide").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    document.querySelector(".login-bg").classList.add("hidden");
  }
});

document.querySelector(".reg-hide").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    document.querySelector(".register-bg").classList.add("hidden");
  }
});

function openPass() {
  let passInput = document.getElementById("passwordLogin");
  passInput.type = passInput.type === "password" ? "text" : "password";
}

function openPassReg() {
  let passInput = document.getElementById("passwordRegister");
  passInput.type = passInput.type === "password" ? "text" : "password";
}

function showUserData() {
  let userId = localStorage.getItem("loggedUser");
  if (!JSON.parse(userId)) return;
  let accountbg = document.querySelector(".account-bg");
  accountbg.classList.remove("hidden");
  let findUser = users.find((user) => user.id === JSON.parse(userId));
  if (findUser) {
    let nameSpan = document.getElementById("account-name");
    let emailSpan = document.getElementById("account-mail");
    let numberSpan = document.getElementById("account-number");
  }
}

document.querySelector(".account-x").addEventListener("click", () => {
  document.querySelector(".account-bg").classList.add("hidden");
});
function orderCall() {
  if (!logined) return;
  document.querySelector(".login-container").classList.add("hidden");
  document.querySelector(".register-container").classList.add("hidden");
  let modal = document.querySelector(".phone-container");
  let bg = document.querySelector(".phone-bg");
  modal.classList.remove("hidden");
  bg.classList.remove("hidden");
}
document.querySelector(".phone-bg").addEventListener("click", () => {
  document.querySelector(".phone-container").classList.add("hidden");
  document.querySelector(".phone-bg").classList.add("hidden");
});
function openMenu() {
  let menu = document.querySelector(".menu");
  let infoHeader = document.querySelector(".info-header");
  let menuBg = document.querySelector(".menu-bg");
  menuBg.classList.add("active");
  menu.classList.add("active");
}
document.querySelector(".menu-bg").addEventListener("click", () => {
  document.querySelector(".menu").classList.remove("active");
  document.querySelector(".menu-bg").classList.remove("active");
});
function showCart() {
  if (!logined) {
    document.querySelector(".login-bg").classList.remove("hidden");
    return;
  }
  let cart = document.querySelector(".cart");
  cart.classList.add("show");
  cart.classList.remove("hidden");
  let menu = document.querySelector(".menu");
  let menuBg = document.querySelector(".menu-bg");
  menu.classList.remove("active");
  menuBg.classList.remove("active");
  cartNew = 0;
  updateCartIndicator();
}
function getOffCart() {
  let cart = document.querySelector(".cart");
  cart.classList.remove("show");
  cart.classList.add("hidden");
}
function addToCartFromTop(productId, category) {
  if (this.processed) return;
  this.processed = true;
  let button = document.querySelector(
    `.plus[data-product-id="${productId}"][data-category="${category}"]`
  );

  if (!button) {
    // console.error("Кнопка не найдена");
    return;
  }

  let productData = sortiment.find((p) => p.id === productId);
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
    measurement: productData.count,
    quantity: 1,
  };
  cartNew++;
  updateCartIndicator();

  addProductToBasketArray(product);

  setTimeout(() => {
    this.processed = false;
  }, 500);
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
    let productInfo = sortiment.find((item) => item.id === prod.id);

    let price = prod.price || prod.grayPrice || "—";
    let count = prod.quantity;
    let cardCountPrice = productInfo ? productInfo.count : "—";

    let card = document.createElement("div");
    card.classList.add("cart-card");
    card.innerHTML = `
      <img src="${prod.image}">
      <span>${prod.name}</span>
      <span class="cart-price">${price * count}₽</span>
      <span class="cartCount-price">${cardCountPrice}</span>
      <div class="count">
        <button onclick="decreaseCount(${prod.id}, '${
      prod.category || "default"
    }')">-</button>
        <span class="product-count">${count}шт/кв.м</span>
        <button onclick="increaseCount(${prod.id}, '${
      prod.category || "default"
    }')">+</button>
      </div>`;
    cartBox.appendChild(card);
  });
}

function increaseCount(id, category) {
  let item = basket.find((p) => p.id === id && p.category === category);
  if (item) {
    item.quantity++;
    saveCart();
    renderCart();
  }
}

function decreaseCount(id, category) {
  let item = basket.find((i) => i.id === id && i.category === category);
  if (item) {
    item.quantity--;
    if (item.quantity <= 0) {
      basket = basket.filter((p) => !(p.id === id && p.category === category));
    }
    saveCart();
    renderCart();
  }
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

function createOrder(){
  if (basket.length === 0) {
    alert("Корзина пуста");
    return;
  }
  let deliveryDateInput = document.getElementById("delivery-date")
  let deliveryDate = deliveryDateInput ? deliveryDateInput.value : "";
  let address = selectedAddress || "";
  let total = 0
  basket.forEach(item =>{
    total += item.price * item.quantity
  })
  if(!deliveryDate){
    document.getElementById("dateError").textContent = 'Выберите дату доставки'
    document.getElementById("dateError").style.color = '#CC0000'
    return
  }
  if(!address){
    document.getElementById("addressError").textContent = 'Укажите на карте адрес доставки'
    return
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
  document.getElementById("deliverySuccess-number").textContent = orderNumber
  document.getElementById("deliverySuccess-cost").textContent = `${total}₽`
  document.getElementById("deliverySuccess-address").textContent = address
  document.querySelector(".deliverySuccess-bg").classList.remove("hidden")
  document.querySelector(".deliveryOrder").classList.add("hidden")
}

// document.getElementById("checkTheCode").addEventListener("click", ()=>{
//   logInPersonal()
// })
// function secondOrderStage(){
//   let marker = localStorage.getItem("markers")
//   let data = document.getElementById("delivery-date")

//   // document.querySelector(".deliveryOrder").classList.add("hidden")

// }

function orderBasket() {
  let orderTime = new Date();
}

function deliverySuccessClose(){
  document.querySelector(".deliverySuccess-bg").classList.add("hidden")
}
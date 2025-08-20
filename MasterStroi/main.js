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
    name: "Тротуарный3 Паркет 300x300x30мм",
    weight: "6.35кг",
    color: "Серый",
    price: "126₽",
    type: "Паркет, эконом",
    maxCount: 45,
  },
  {
    id: 4,
    name: "Тротуарная 8-кирпичей",
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
let selectedAddress = "";
let currentMark = null;

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
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("delivery-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      createOrder();
    });
});
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
    // Для мобилок
    document.querySelector(".logined").style.color = "#ff6b15ff";
    document.querySelector(".logined").classList.remove("hidden");
    document.querySelector(".infoAccName").classList.add("hidden");
    document.querySelector(".infoAccName").textContent = user.name;
    document.querySelector(".logined").textContent = user.name;

    document.querySelector(".infoAccName").style.display = "block";
  }
  console.log(`Автоматически зашел в Уч.Запись с помощью autoLogin()`);
  console.log(`Добро пожаловать ${user.name}!`);
  
  
}
document.addEventListener("DOMContentLoaded", () => {
  if (logined) {
    document.querySelector(".logJr").classList.add("hidden");
  }
});

document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    register();
  });

document.addEventListener("DOMContentLoaded", () => {
  let toggle = document.getElementById("toggleSwitch");
  toggle.addEventListener("change", handleToggle);
});
function handleToggle(event) {
  let checkBox = event.target;
  if (checkBox.checked) {
    document.getElementById("main-body").style.backgroundColor = "#222";
    document.getElementById("main-body").style.color = "#fff";
    document.querySelectorAll(".card-header").forEach((el) => {
      el.style.color = "#000000";
    });
    document.querySelectorAll(".advantages-description").forEach((el) => {
      el.style.color = "#000000";
    });
    document.querySelector(".cart").style.color = "#000000";
    document.querySelectorAll(".content-span").forEach((el) => {
      el.style.color = "#fff";
    });
    document.querySelector(".are-title").style.color = " #000000";
    document.querySelectorAll(".content-span").forEach((span)=>{
      span.style.color = "#fff"
    })
  } else {
    document.getElementById("main-body").style.backgroundColor = "#fff";
    document.getElementById("main-body").style.color = "#000000";
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
  // Для Мобилок
  document.querySelector(".logined").style.color = "#ff6b15ff";
  document.querySelector(".logined").classList.add("hidden");
  document.querySelector(".infoAccName").classList.remove("hidden");
  document.querySelector(".infoAccName").textContent = "Войти";
  document.querySelector(".logJr").classList.remove("hidden");
  console.log('Вышел из Уч.Записи с помощью logOut()');
  
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
    console.log(`logged in as ${findUser.name} by login()`);
    logined = true;
    localStorage.setItem("loggedUser", findUser.id);
    document.getElementById("login").classList.add("hidden");
    let headerName = document.querySelector(".for-logined");
    document.querySelector(".for-logined").textContent = "Вы";
    headerName.classList.remove("hidden");
    document.querySelector(".login-bg").classList.add("hidden");
    document.getElementById("account-name").textContent = findUser.name;
    // Для Мобилок
    document.querySelector(".logined").textContent = findUser.name;
    document.querySelector(".logined").style.color = "#ff6b15ff";
    document.querySelector(".logined").classList.remove("hidden");
    document.querySelector(".infoAccName").classList.add("hidden");
    document.querySelector(".logJr").classList.add("hidden");
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
    console.log("something went wrong in register()");
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
  document.querySelector(".logined").textContent = newUser.name;
  console.log(`Зарегистрирован как ${newUser.name}, logined в данный момент - ${logined}`);
  console.log(`Список пользователей:`, users);
}

document.querySelector(".login-hide").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    document.querySelector(".login-bg").classList.add("hidden");
  }
});
orderCall;
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
  let menuModal = document.querySelector(".menu");
  let menuBg = document.querySelector(".menu-bg");
  menuBg.classList.remove("active");
  menuModal.classList.remove("active");
  modal.classList.remove("hidden");
  bg.classList.remove("hidden");
}
document.querySelector(".phone-bg").addEventListener("click", () => {
  document.querySelector(".phone-container").classList.add("hidden");
  document.querySelector(".phone-bg").classList.add("hidden");
});
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
  if (!logined) {
    document.querySelector(".login-bg").classList.remove("hidden");
  } else {
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
    let isCartShowing = document.querySelector(".cart");
    if (isCartShowing.classList.contains("show")) {
      cartNew = 0
    } else if (isCartShowing.classList.contains("hidden")) {
      cartNew++;
    }
    updateCartIndicator();

    addProductToBasketArray(product);

    setTimeout(() => {
      this.processed = false;
    }, 500);
  }
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

function goToPage(page) {
  let user = localStorage.getItem("loggedUser");
  if (!user) {
    document.querySelector(".login-bg").classList.remove("hidden");
  } else {
    location.href = page;
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
    return;
  }
  if (!address) {
    document.getElementById("addressError").textContent =
      "Укажите на карте адрес доставки";
    return;
  }
  let user = localStorage.getItem("loggedUser");
  let now = new Date();
  let year = now.getFullYear().toString().slice(-2);
  let month = (now.getMonth() + 1).toString().padStart(2, "0");
  let day = now.getDate().toString().padStart(2, "0");
  let datePart = `${year}${month}${day}`;
  let randomPart = Math.floor(Math.random() * 9000) + 1000;
  let orderNumber = `ORD-${datePart}-${randomPart}`;
  let order = {
    user: Number(user),
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
  cartNew = 0;
  updateCartIndicator();
}
function deliveryOrderClose() {
  document.querySelector(".deliveryOrder").classList.add("hidden");
}

function deliverySuccessClose() {
  document.querySelector(".deliverySuccess-bg").classList.add("hidden");
}
function openChangePassMail() {
  document.querySelector(".changePassword-bg").classList.remove("hidden");
  document.querySelector(".login-bg").classList.add("hidden");
}

function closePhoneModal() {
  document.querySelector(".login-container").classList.add("hidden");
  document.querySelector(".register-container").classList.add("hidden");
  let modal = document.querySelector(".phone-container");
  let bg = document.querySelector(".phone-bg");
  modal.classList.add("hidden");
  bg.classList.add("hidden");
}
document.addEventListener("DOMContentLoaded", () => {
  let width = window.innerWidth;
  if (width < 767) {
    let logo = document.querySelector(".logo");
    logo.src = "./Assets/menu-logo.png";
  }
});

let form1 = document.querySelector(".changePass-form");
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  changePass();
});

// function setPass() {
//   let nodeMail = require('nodemailer');

//   let teleporter = nodeMail.createTransport({
//     service: "gmail",
//     auth: {
//       user: "daniyarmurataliev86@gmail.com",
//       pass: "Ну ка сука, работает?"
//     },
//   });
//   let mailOptions = {
//     from: "daniyarmurata"
//   }
// }
function closeChangePassModal() {
  document.querySelector(".changePassword-bg").classList.add("hidden");
}

function changePass() {
  let mailInput = document.getElementById("mailUser").textContent;
  let newPass = document.getElementById("new-password").textContent;
  let confirmPass = document.getElementById("confirm-password").textContent;
  let findExistEmail = users.find((u) => u.email === mailInput);
  if (newPass !== confirmPass) {
    document.getElementById("incorrectPassword").classList.add("hidden");
    document.getElementById("incorrectPassword").textContent =
      "Пароли не совпадают";
  }
  if (findExistEmail && newPass === confirmPass) {
  }
}

function checkLoginForCabinet() {
  if (!logined) {
    document.querySelector(".login-bg").classList.remove("hidden");
  } else {
    window.location = "personal.html";
  }
}

function deleteAccount(){
  let loggedUser = localStorage.getItem("loggedUser")
  if(loggedUser){
    console.log('Проверка');
  } else{
    console.log('not logined for deleteAccount()');
    
  }
} deleteAccount()

  // let userId = localStorage.getItem("loggedUser");
  // if (!JSON.parse(userId)) return;
  // let accountbg = document.querySelector(".account-bg");
  // accountbg.classList.remove("hidden");
  // let findUser = users.find((user) => user.id === JSON.parse(userId));

  //   if(logined === false){
  //   document.querySelector(".login-bg").classList.remove("hidden")
  //   console.log(`зарегайся ${logined}`);
  //   return
  // } else{
  //   console.log('ыпывп');
    
  // }
  // let userId = localStorage.getItem("loggedUser")
  // if(!JSON.parse(userId)) return
  // if(userId){
  //   console.log(`работает ${userId}`);
    
  // }
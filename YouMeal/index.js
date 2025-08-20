let category = [
  {
    id: 1,
    name: "Burger",
  },
  {
    id: 2,
    name: "Snacks",
  },
  {
    id: 3,
    name: "Hot-dog",
  },
  {
    id: 4,
    name: "Kombo",
  },
  {
    id: 5,
    name: "Lavash",
  },
  {
    id: 6,
    name: "Pizza",
  },
  {
    id: 7,
    name: "Wok",
  },
  {
    id: 8,
    name: "Deserts",
  },
  {
    id: 9,
    name: "Sous",
  },
];
let burgers = [
  {
    id: 1,
    price: "689₽",
    name: "Мясная бомба",
    weight: "520г",
    catId: 1,
    imageSrc: "./burger/burger1.jpg",
    description:
      "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
    structure:
      "Пшеничная булочка Котлета из говядины Красный лук Листья салата Соус горчичный",
    weightTwo: "520г, ккал 430",
  },
  {
    id: 2,
    price: "550₽",
    name: "Супер сырный",
    weight: "512г",
    catId: 1,
    imageSrc: "./burger/burger2.jpg",
    description:
      "Супер сырное наслаждение! Большая рубленая котлета из свежего мраморного говяжего мяса покорит вас своей сочностью, а сыра то сыра сколько: Пармезан, Гауда, Чеддер и Блю Чиз.",
    structure:
      "Пшеничная булочка Котлета из говядины Солёные огурчики Соус сырный Пармезан Гауда Чеддер Блю Чиз",
    weightTwo: "512г, ккал 590",
  },
  {
    id: 3,
    price: "639₽",
    name: "Сытный",
    weight: "580г",
    catId: 1,
    imageSrc: "./burger/burger3.jpg",
    description:
      "Супер сытное наслаждение! Два огромных бифштекса приготовленых по-домашнему покорит вас своей сытностью.",
    structure:
      "Пшеничная булочка с кунжутом 2 Котлеты из говядины с курочкой Хрустящий лук Солёные огурчики Соус горчичный Кетчуп Чеддер",
    weightTwo: "580г, ккал 740",
  },
  {
    id: 4,
    price: "480₽",
    name: "Тяжелый удар",
    weight: "470г",
    catId: 1,
    imageSrc: "./burger/burger4.jpg",
    description:
      "Нужно быть в себе уверенным на 100%, чтобы его съесть! Две огромные свинные котлеты приготовленых на огне сведут тебя с ума сочностью и вкусом.",
    structure:
      "Пшеничная булочка 2 котлеты из свинины Сочный лук Свежий томат Хрустящий салат Соленые огурчики Соус мерри Кетчуп Чеддер",
    weightTwo: "470г, ккал 810",
  },
  {
    id: 5,
    price: "450₽",
    name: "Вечная классика",
    weight: "450г",
    catId: 1,
    imageSrc: "./burger/burger5.jpg",
    description: "Вкуснейшая 100% классика",
    structure:
      "Пшеничная булочка с кунжутом Котлета из 100% говядины Лук репчтый Свежий томат Хрустящий салат Айсберг Солёные огурчики Майонез Кетчуп томатный",
    weightTwo: "450г, ккал 610",
  },
  {
    id: 6,
    price: "560₽",
    name: "Итальянский",
    weight: "520г",
    catId: 1,
    imageSrc: "./burger/burger6.jpg",
    description:
      "Итальянский — бургер с телячьей котлетой, ржаной булочкой, моцареллой, свежим томатом и миксом салатов. Вкус дополняют соус песто и бальзамический крем — настоящий итальянский акцент в каждом укусе.",
    structure:
      "Итальянская ржанная булочка Котлета из телятины Cыр моцарелла Свежий томатБальзамический крем Микс салата Соус песто",
    weightTwo: "510г, ккал 535",
  },
];
let snacks = [
  {
    id: 1,
    price: "250₽",
    name: "Начос",
    weight: "220г",
    catId: 2,
    imageSrc: "./snack/snack1.jpg",
    description: "Хрустящие чипсы из кукурузной тортильи",
    structure: "Начос Соус на выбор",
    weightTwo: "220г, ккал 660",
  },
  {
    id: 2,
    price: "245₽",
    name: "Картошка фри",
    weight: "180г",
    catId: 2,
    imageSrc: "./snack/snack1.jpg",
    description:
      "Любимый во всем мире — крупные ломтики картофеля, обжаренные до хрустящей корочки во фритюре. Сочное, ароматное блюдо с соусами на выбор.",
    structure: "Картофель Соус на выбор",
    weightTwo: "180г, ккал 560",
  },
  {
    id: 3,
    price: "230₽",
    name: "Луковые кольца",
    weight: "160г",
    catId: 2,
    imageSrc: "./snack/snack1.jpg",
    description: "Кольца из рубленного лука в панировке",
    structure: "Репчатый лук Пшенично-кукурузный кляр Соус на выбор",
    weightTwo: "160г, ккал 650",
  },
];
let hotDogs = [
  {
    id: 1,
    price: "265₽",
    name: "Домашний хот-дог",
    weight: "210г",
    catId: 3,
    imageSrc: "./hotdog/hotdog1.jpg",
    description: "Вкусно, по-домашнему",
    structure:
      "Булочка Мясная сосиска Помидор Маринованный и свежий огурец Лист салата Соусы",
    weightTwo: "210г, ккал 526",
  },
  {
    id: 2,
    price: "385₽",
    name: "Хот-дог Premium",
    weight: "430г",
    catId: 3,
    imageSrc: "./hotdog/hotdog2.jpg",

    description:
      "Рубленый бифштекс из натуральной говядины и свинины, а вы уверены что это хот-дог?",
    structure:
      "Булочка Рубленый бифштекс из натуральной говядины и свинины Сыр Чеддер Сыр Моцарелла Ростбиф Помидор Маринованный огурец Красный лук Лист салата Картофель фри Соус",
    weightTwo: "430г, ккал 516",
  },
  {
    id: 3,
    price: "315₽",
    name: "Double Chicken",
    weight: "390г",
    catId: 3,
    imageSrc: "./hotdog/hotdog3.jpg",

    description: "Для любителей курочки",
    structure:
      "Булочка Копченая сосиска Курица горячего копчения Сыр Чеддер Луковые колечки Маринованный огурец Помидор Картофельные чипсы Соус",
    weightTwo: "390г, ккал 890",
  },
  {
    id: 4,
    price: "160₽",
    name: "Классический хот-дог",
    weight: "200г",
    catId: 3,
    imageSrc: "./hotdog/hotdog4.jpg",

    description: "Нестареющая классика",
    structure: "Булочка Сосиска Соусы",
    weightTwo: "200г, ккал 390",
  },
  {
    id: 5,
    price: "280₽",
    name: "Жгучий хот-дог",
    weight: "250г",
    catId: 3,
    imageSrc: "./hotdog/hotdog5.jpg",

    description: "Для любителей остеренького",
    structure: "Булочка Говяжья сосиска Халапень Корейская морковь Острый соус",
    weightTwo: "250г, ккал 610",
  },
];

let combo = [
  {
    id: 1,
    price: "990₽ ",
    name: "Combo-wombo",
    weight: "1200г",
    catId: 4,
    imageSrc: "./combos/combos1.jpg",
    description: "2 любых бургера и картофель фри",
    structure: "Бургер Бургер Картофель фри Соус на выбор",
    weightTwo: "1200г, ккал 1500",
  },
];
let shawerma = [
  {
    id: 1,
    price: "322₽",
    name: "Шаурма деревенская",
    weight: "310г",
    catId: 5,
    imageSrc: "./shawerma/shawerma1.jpg",

    description:
      "Лучшее с ограды и огорода. Если тебе знакомы эти слова, то тебе точно понравится",
    structure:
      "Тортилья Курочка гриль Маринованные огурчики Солёная капуста Опята Чесночный соус Обжаренный лук",
    weightTwo: "310г, ккал 580",
  },
  {
    id: 2,
    price: "350₽",
    name: "Шаурма молодежная",
    weight: "320г",
    catId: 5,
    imageSrc: "./shawerma/shawerma2.jpg",
    description: "Вкусно, сытно, удобно!",
    structure:
      "Тортилья Мясо курицы Картофель фри Пекинская капуста Огурцы маринованные Помидоры свежие Соус",
    weightTwo: "320г, ккал 620",
  },
];
let pizza = [
  {
    id: 1,
    price: "790₽",
    name: "Фета",
    weight: "470г",
    catId: 6,
    imageSrc: "./pizzas/pizzas1.jpg",
    description: "Пицца с творожным сыром, красным соусом, рукколой",
    structure: "Тонкое тесто Красный соус Моцарелла Руккола Творожный сыр",
    weightTwo: "470г, ккал 1605",
  },
  {
    id: 2,
    price: "850₽",
    name: "Рио",
    weight: "550г",
    catId: 6,
    imageSrc: "./pizzas/pizzas2.jpg",
    description: "Пицца с ветчиной, курицей, сладким перцем, оливками",
    structure:
      "Тонкое тестое Томатный соус Ветчина Курица Шампиньоны Сладкий перец Помидоры черри Оливки",
    weightTwo: "550г, ккал 1350",
  },
  {
    id: 3,
    price: "750₽",
    name: "Оливиа",
    weight: "550г",
    catId: 6,
    imageSrc: "./pizzas/pizzas3.jpg",
    description: "Пицца с вялеными томатами, оливками, сыром моцарелла",
    structure:
      "Пышное тесто Сметанный соус Глазунья Сыр моцарелла Вяленые томаты Оливки",
    weightTwo: "550г, ккал 1350",
  },
];

let woks = [
  {
    id: 1,
    price: "450₽",
    name: "Вок с курицей и овощами",
    weight: "450г",
    catId: 7,
    imageSrc: "./wok/wok1.jpg",
    description:
      "Вок — c сочными кусочками курицы, обжаренные с хрустящими овощами в ароматном соусе. Легкое и вкусное блюдо с восточными нотками",
    structure:
      "Куриное филе Болгарский перец Морковь Брокколи Зеленый лук Имбирь Соевый соус Кунжутное масло Лапша",
    weightTwo: "380г, ккал 490",
  },
  {
    id: 2,
    price: "600",
    name: "Вок «Терияки Чикен»",
    weight: "350г",
    catId: 7,
    imageSrc: "./wok/wok2.jpg",
    description:
      "Курица в карамельном соусе терияки с обжаренными овощами — перцем, морковью и брокколи. Сытное, но лёгкое блюдо с насыщенным вкусом и ароматом Азии.",
    structure:
      "Куриное филе Болгарский перец Морковь Брокколи Чеснок Соус терияки Кунжут Кунжутное масло Лапша",
    weightTwo: "350г, ккал 450",
  },
];
let deserts = [
  {
    id: 1,
    price: "460₽",
    name: "Рустик",
    weight: "600г",
    catId: 8,
    imageSrc: "./desert/desert1.jpg",
    description:
      "Пироженное с открытыми коржами, творожным кремом, голубикой, грецким орехом",
    structure: "Бисквитные коржи Творожный крем Голубика Грецкий орех",
    weightTwo: "600г, ккал 2028",
  },
  {
    id: 2,
    price: "99₽",
    name: "Пончик",
    weight: "70г",
    catId: 8,
    imageSrc: "./desert/desert2.jpg",
    description: "Классичесий пончик",
    structure: "Пончик Посыпка Глазурь Начинка на выбор",
    weightTwo: "70г, ккал 320",
  },
  {
    id: 3,
    price: "235₽",
    name: "Чизкейк Нью-Йорк",
    weight: "100г",
    catId: 8,
    imageSrc: "./desert/desert3.jpg",
    description:
      "Настоящая американская классика — нежный чизкейк из сливочно-творожной начинки с ванильной ноткой на тонкой песочно-миндальной подложке. Сверху десерт покрыт желе из абрикосового конфитюра, украшен свежей малиной и сахарной пудрой.",
    structure:
      "Печенье песочноеМасло сливочное Сыр сливочный Сахар Яйца Сливки",
    weightTwo: "100г, ккал 350",
  },
];
let sauses = [
  {
    id: 1,
    price: "60₽",
    name: "Ореховый соус",
    weight: "40г",
    catId: 9,
    imageSrc: "./sauces/sauces1.jpg",
    description:
      "Соус Гамадари - ореховый соус на основе арахиса. Отлично подходит к овощам и холодным закускам",
    structure: "Арахис Кунжут Мирин Кунжутное масло",
    weightTwo: "40г, ккал 156",
  },
  {
    id: 2,
    price: "40₽",
    name: "Сметанный соус",
    weight: "40г",
    catId: 9,
    imageSrc: "./sauces/sauces2.jpg",
    description:
      "Сметанный острый соус - слегка острый, обладает приятным вкусом с нежной сливочной нотой.",
    structure: "Сметана Майонез Лайм Васаби",
    weightTwo: "40г, ккал 178",
  },
  {
    id: 3,
    price: "40₽",
    name: "Соус Шрирача",
    weight: "40г",
    catId: 9,
    imageSrc: "./sauces/sauces3.jpg",
    description:
      "Тайский соус на основе красного перца чили, для тех, кто любит поострее!",
    structure: "Перец чили Чеснок Коричневый сахар Соль Белый уксус",
    weightTwo: "40г, ккал 112",
  },
];

let accounts = [
  {
    id: 1,
    username: "Aktan",
    email: "Bazarbaev",
    password: "Panzerkmpf-228",
  },
];

let productsData = {
  burger: burgers,
  snack: snacks,
  hotdog: hotDogs,
  combos: combo,
  shawerma: shawerma,
  pizzas: pizza,
  wok: woks,
  desert: deserts,
  sauces: sauses,
};

let containers = {
  burger: document.getElementById("burgerContainer"),
  snack: document.getElementById("snacksContainer"),
  hotdog: document.getElementById("hotdogsContainer"),
  combos: document.getElementById("comboContainer"),
  shawerma: document.getElementById("shawermaContainer"),
  pizzas: document.getElementById("pizzaContainer"),
  wok: document.getElementById("wokContainer"),
  desert: document.getElementById("desertsContainer"),
  sauces: document.getElementById("saucesContainer"),
};

var little = false;

var currentBasket = [];

document.querySelector(".delivery").classList.add("hidden");

function hideCartIfLittleScreen() {
  let basketWrapper = document.querySelector(".basic-item-basket");
  let basketOrder = document.querySelector(".basic-item-basket-order");
  let basketTotal = document.querySelector(".basic-item-basket-total");
  let basketButton = document.getElementById("order-btn");
  let deliveryDesc = document.querySelector(".basic-item-basket-description");
  if (window.innerWidth <= 912) {
    if (basketOrder) {
      basketOrder.classList.add("hidden");
      basketOrder.style.display = "none";
    }
    if (basketTotal) {
      basketTotal.classList.add("hidden");
      basketTotal.style.display = "none";
    }
    if (basketButton) {
      basketButton.classList.add("hidden");
      basketButton.style.display = "none";
    }
    if (deliveryDesc) {
      deliveryDesc.classList.add("hidden");
      deliveryDesc.style.display = "none";
    }
    if (basketWrapper) basketWrapper.classList.add("basket-collapsed");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let nameInput = document.getElementById("deliveryName").value.trim();
    let phoneInput = document.getElementById("deliveryNumber").value.trim();

    let valid = true;
    if (nameInput === "") {
      document.getElementById("errorName").textContent = "Введите имя";
      document.getElementById("errorName").style.display = "block";
      valid = false;
    } else if (!isNaN(nameInput)) {
      document.getElementById("errorName").textContent =
        "Имя не должно состоять из цифр";
      document.getElementById("errorName").style.display = "block";
      valid = false;
    } else {
      document.getElementById("errorName").textContent = "";
      document.getElementById("errorName").style.display = "none";
    }
    if (phoneInput === "") {
      document.getElementById("errNumber").textContent =
        "Введите номер телефона";
      document.getElementById("errNumber").style.display = "block";
      valid = false;
    } else {
      document.getElementById("errNumber").textContent = "";
      document.getElementById("errNumber").style.display = "none";
    }

    if (!valid) {
      event.preventDefault();
    } else {
      let start = 1;
      document.querySelector(".delivery").style.display = "none";
      document.querySelector(".delivery").classList.add("hidden");
      document.querySelector(".basic-modal").style.display = "flex";
      localStorage.setItem("orderCount", (start += 1));
      populateOrderList();
    }
  });
});

let lastWidth = window.innerWidth;

window.addEventListener("DOMContentLoaded", () => {
  changeCategory("burger");
  wSize768();
  window.addEventListener("resize", wSize768);
  addXifScreenLittle();
  hideCartIfLittleScreen();
  showSavedOrders();
});

function addXifScreenLittle() {
  if (window.innerWidth <= 912) {
    let x = document.querySelector(".xFor912");
    let image = document.createElement("img");
    image.src = "./Assets/close.svg";
    image.alt = "Кнопка Закрыть";
    x.appendChild(image);
    if (x) {
      image.addEventListener("click", () => {
        let modal = document.querySelector(".basic-modal");
        let overlay = document.querySelector(".deliveryOverlay");
        if (modal) {
          modal.classList.add("hidden");

          overlay.style.display = "none";
        }
      });
    }
  }
}
window.addEventListener("load", () => {
  let basketHeaderTitle = document.getElementById("adaptiveCart");
  let basketBody = document.querySelector(".basic-item-basket");
  basketHeaderTitle?.addEventListener("click", () => {
    basketBody.style.display = "block";
  });
  wSize768();
  window.addEventListener("resize", wSize768);
});
window.addEventListener("resize", wSize768);

let basketHeaderTitle = document.getElementById("adaptiveCart");
let basketOrder = document.querySelector(".basic-item-basket-order");
let basketTotal = document.querySelector(".basic-item-basket-total");
let basketButton = document.getElementById("order-btn");
let deliveryDesc = document.querySelector(".basic-item-basket-description");
let basketItemBasket = document.querySelector(".basic-item-basket");

if (basketHeaderTitle && basketOrder && basketTotal && basketButton) {
  basketHeaderTitle.addEventListener("click", () => {
    if (window.innerWidth <= 912) {
      basketOrder.classList.toggle("hidden");
      basketOrder.style.display = "block";
      basketTotal.classList.toggle("hidden");
      basketTotal.style.display = "block";
      basketButton.classList.toggle("hidden");
      basketButton.style.display = "block";
      deliveryDesc.classList.toggle("hidden");
      deliveryDesc.style.display = "flex";
      let isHidden = basketOrder.classList.contains("hidden");
      if (basketItemBasket) {
        little = 912;
        basketItemBasket.classList.toggle("basket-collapsed");
      }
      console.log("Корзина " + (isHidden ? "Закрыта" : "Открыта"));
    }
  });
} else {
  console.log("Элементы корзины не найдены");
}

let saved = localStorage.getItem("YourMealBasket");
wSize768();

function wSize768() {
  let basketOrder = document.querySelector(".basic-item-basket-order");
  let basketTotal = document.querySelector(".basic-item-basket-total");
  let basketButton = document.getElementById("order-btn");

  if (window.innerWidth > 768) {
    basketOrder.classList.remove("hidden");
    basketTotal.classList.remove("hidden");
    basketButton.classList.remove("hidden");
  } else {
    basketOrder.classList.add("hidden");
    basketTotal.classList.add("hidden");
    basketButton.classList.add("hidden");
  }
}

document.querySelectorAll(".choose-item-category-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let category = btn.dataset.cat.trim();
    changeCategory(category);
  });
});

let orderCount = Number(localStorage.getItem("orderCount")) || 0;

function populateOrderList() {
  let listEl = document.getElementById("list");
  listEl.innerHTML = "";

  currentBasket.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ${item.count} шт.`;
    listEl.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("deliverySubmit");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let nameInput = document.getElementById("deliveryName").value.trim();
    let numberInput = document.getElementById("deliveryNumber").value.trim();
    let valid = true;
    if (nameInput === "") {
      document.getElementById("errorName").textContent = "Введите имя";
      document.getElementById("errorName").style.display = "block";
      valid = false;
    }
    if (numberInput === "") {
      document.getElementById("errNumber").textContent =
        "Введите номер телефона";
      document.getElementById("errNumber").style.display = "block";
      valid = false;
    }
    if (!valid) return;

    populateOrderList();

    document.querySelector(".basic-modal").style.display = "flex";
  });
});

function showSavedOrders() {
  let categoryFolders = {
    1: "burger",
    2: "snack",
    3: "hot-dog",
    4: "combos",
    5: "shawerma",
    6: "pizzas",
    7: "wok",
    8: "desert",
    9: "sauces",
  };

  let basketData = localStorage.getItem("YourMealBasket");
  if (!basketData) {
    console.log("Корзина заказов пуста");
    return;
  }

  let orders = JSON.parse(basketData);
  if (!Array.isArray(orders) || orders.length === 0) {
    console.log("Заказов нет");
    return;
  }

  let basketContainer = document.querySelector(".basic-item-basket-order");
  if (!basketContainer) {
    console.error("basic-item-basket-order не найден");
    return;
  }

  basketContainer.innerHTML = "";

  orders.forEach((product) => {
    let folderName = categoryFolders[product.catId];
    let imageSrc = product.img || "./placeholder.jpg";

    let itemElement = document.createElement("div");
    itemElement.classList.add("basket-item");

    itemElement.innerHTML = `
      <div class="basket-item-img">
        <img class="immg" src="${imageSrc}" alt="${
      product.name
    }" style="width: 64px; height: 52px; border-radius:10px;">
      </div>
      <div class="basket-item-info">
        <div><strong class="info-title">${product.name}</strong></div>
        <div class="weightProduct">${product.weight || ""}</div>
        <div class="info-price">${product.totalPrice}₽</div>
        <div class="basket-item-bottom">
          <div class="wenig">
            <button class="minus">-</button>
            <span class="item-count">${product.count}</span>
            <button class="plus">+</button>
          </div>
        </div>
      </div>
    `;

    let plusBtn = itemElement.querySelector(".plus");
    let minusBtn = itemElement.querySelector(".minus");
    let countElem = itemElement.querySelector(".item-count");
    let priceElem = itemElement.querySelector(".info-price");

    plusBtn.addEventListener("click", () => {
      product.count++;
      product.totalPrice = product.count * product.singlePrice;
      countElem.innerText = product.count;
      priceElem.innerText = `${product.totalPrice}₽`;
      toLocal(orders);
      updateTotal();
    });

    minusBtn.addEventListener("click", () => {
      if (product.count > 1) {
        product.count--;
        product.totalPrice = product.count * product.singlePrice;
        countElem.innerText = product.count;
        priceElem.innerText = `${product.totalPrice}₽`;
        toLocal(orders);
      } else {
        const index = orders.findIndex((i) => i.name === product.name);
        if (index !== -1) {
          orders.splice(index, 1);
          itemElement.remove();
          toLocal(orders);
        }
      }
      updateTotal();
    });

    basketContainer.appendChild(itemElement);
  });
  currentBasket = orders;
}

// function clearLocal() {
//   localStorage.clear();
// }

function renderBasket() {
  let basket = document.querySelector(".basic-item-basket-order");
  basket.innerHTML = "";

  currentBasket.forEach((product) => {
    let item = document.createElement("div");
    item.classList.add("order-item");
    let singlePrice = product.singlePrice;
    item.innerHTML = `
      <div class="basket-item-img">
        <img class="immg" src="./${product.catId}/${
      product.catId
    }1.jpg" id="im" alt="${product.name}" style="width: 64px; height: 52px;">
      </div>
      <div class="basket-item-info">
        <div><strong id="info-title">${product.name}</strong></div>
        <div id="info-weight" class="weightProduct">${
          product.weight || ""
        }</div>
        <div id="info-price">${product.totalPrice}₽</div>
        <div class="basket-item-bottom">
          <div class="wenig">
            <button class="minus">-</button>
            <span class="item-count">${product.count}</span>
            <button class="plus">+</button>
          </div>
        </div>
      </div>
    `;
    basket.appendChild(item);

    let plusBtn = item.querySelector(".plus");
    let minusBtn = item.querySelector(".minus");
    let countElem = item.querySelector(".item-count");
    let priceElem = item.querySelector("#info-price");

    plusBtn.addEventListener("click", () => {
      product.count += 1;
      countElem.innerText = product.count;
      product.totalPrice = product.count * product.singlePrice;
      priceElem.innerText = product.totalPrice + "₽";
      orderButton();
      updateTotal();
    });

    minusBtn.addEventListener("click", () => {
      if (product.count > 1) {
        product.count -= 1;
        countElem.innerText = product.count;
        product.totalPrice = product.count * product.singlePrice;
        priceElem.innerText = product.totalPrice + "₽";
      } else {
        currentBasket = currentBasket.filter((i) => i.name !== product.name);
        item.remove();
      }
      orderButton();
      updateTotal();
    });
  });

  updateTotal();
}

function changeCategory(categoryKey) {
  document.querySelectorAll(".category-container").forEach((container) => {
    container.style.display = "none";
  });
  document.querySelectorAll(".category-title").forEach((title) => {
    title.style.display = "none";
  });
  if (containers[categoryKey]) {
    containers[categoryKey].style.display = "grid";
  }
  let currentTitle = document.querySelector(`.category-title.${categoryKey}`);
  if (currentTitle) {
    currentTitle.style.display = "block";
  }
  let currentCategoryData = productsData[categoryKey];
  let container = containers[categoryKey];

  container.innerHTML = "";

  currentCategoryData.forEach((product, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card-img">
      <img src="./${categoryKey}/${categoryKey}${index + 1}.jpg" alt="${
      product.name
    }">
    </div>
    <div class="card-price">
      <span>${product.price}</span>
    </div>
    <div class="card-title">
      <span>${product.name}</span>
    </div>
    <div class="card-weight">
      <span>${product.weight}</span>
    </div>
    <div class="card-btn">
      <button>Добавить</button>
    </div>
    `;
    container.appendChild(card);
    let addButton = card.querySelector("button");
    addButton.addEventListener("click", () => {
      let basket = document.querySelector(".basic-item-basket-order");
      let exItem = Array.from(
        basket.querySelectorAll(".basic-item-basket-order")
      ).find((basketItem) => {
        return (
          basketItem.querySelector("#info-title").innerText === product.name
        );
      });
      let singlePrice = parseInt(product.price.replace("₽", "").trim());
      if (exItem) {
        console.log("df");

        // let singlePrice = parseInt(product.price.replace("₽", "").trim());
        let countElem = exItem.querySelector(".item-count");
        let priceElem = exItem.querySelector("#info-price");
        let currentCount = parseInt(countElem.innerText);
        countElem.innerText = currentCount + 1;
        priceElem.innerText = singlePrice * (currentCount + 1) + "₽";
        let itemInArray = currentBasket.find((i) => i.name === product.name);
        if (itemInArray) {
          itemInArray.count += 1;
          itemInArray.totalPrice = itemInArray.count * itemInArray.singlePrice;
        }
        orderButton();
        updateTotal();
      } else {
        let singlePrice = parseInt(product.price.replace("₽", "").trim());
        currentBasket.push({
          name: product.name,
          img: `./${categoryKey}/${categoryKey}${index + 1}.jpg`,
          count: 1,
          singlePrice: singlePrice,
          totalPrice: singlePrice,
          catId: categoryKey,
        });
        console.log(currentBasket);

        orderButton();
        let item = document.createElement("div");
        item.classList.add("order-item");
        item.innerHTML = `
<div class="basket-item" style="display: flex; align-items: center;">
  <div class="basket-item-img">
    <img
      class="immg"
      src="./${categoryKey}/${categoryKey}${index + 1}.jpg"
      id="im"
      alt="${product.name}"
      style="width: 64px; height: 52px;"
    />
  </div>

  <div class="basket-item-info" style="margin-left: 10px; flex-grow: 1;">
    <div class="top">
      <div><strong id="info-title">${product.name}</strong></div>
      <div id="info-weight" class="weightProduct">${product.weight}</div>
      <div id="info-price">${product.price}</div>
    </div>
  </div>

  <div class="basket-item-bottom" style="margin-left: 10px;">
    <div class="wenig" style="display: flex; gap: 5px; align-items: center;">
      <button class="minus">-</button>
      <span class="item-count">1</span>
      <button class="plus">+</button>
    </div>
  </div>
</div>
<hr class="basket-hr" />

    `;
        basket.appendChild(item);
        let plusBtn = item.querySelector(".plus");
        let minusBtn = item.querySelector(".minus");
        let countElem = item.querySelector(".item-count");
        let priceElem = item.querySelector("#info-price");
        // let singlePrice = parseInt(product.price.replace("₽", "").trim());

        plusBtn.addEventListener("click", () => {
          let currentCount = parseInt(countElem.innerText);
          countElem.innerText = currentCount + 1;
          priceElem.innerText = singlePrice * (currentCount + 1) + "₽";
          let itemInArray = currentBasket.find((i) => i.name === product.name);
          if (itemInArray) {
            itemInArray.count += 1;
            itemInArray.totalPrice =
              itemInArray.count * itemInArray.singlePrice;
            orderButton();
          }
          updateTotal();
        });
        minusBtn.addEventListener("click", () => {
          let exItem = minusBtn.closest(".order-item");
          if (!exItem) return;
          let countElem = exItem.querySelector(".item-count");
          let priceElem = exItem.querySelector("#info-price");
          let currentCount = parseInt(countElem.innerText);

          if (currentCount > 1) {
            currentCount -= 1;
            countElem.innerText = currentCount;
            priceElem.innerText = singlePrice * currentCount + "";
            let itemInArray = currentBasket.find(
              (i) => i.name === product.name
            );
            if (itemInArray) {
              itemInArray.count = currentCount;
              itemInArray.totalPrice =
                itemInArray.count * itemInArray.singlePrice;
            }
            toLocal();
          } else {
            if (currentBasket.length === 1) {
              currentBasket = [];
              basket.innerHTML = ``;
            } else {
              currentBasket = currentBasket.filter(
                (i) => i.name !== product.name
              );
              exItem.remove();
            }
            toLocal();
          }
          orderButton();
          updateTotal();
        });

        let images = document.querySelectorAll(".immg").forEach((i) => {
          i.style.borderRadius = "7px";
        });
        let s = document.querySelectorAll(".basket-item-order").forEach((e) => {
          e.style.display = "flex";
        });
        updateTotal();
        // let newOrder = document.querySelector("basket-item-order");
      }
      toLocal();
    });
  });
}

function orderButton() {
  let btn = document.getElementById("order-btn");
  if (currentBasket.length > 0) {
    btn.disbled = false;
    btn.style.cursor = "pointer";
    btn.style.background = "#FF7020";
  } else {
    btn.disbled = true;
    btn.style.cursor = "not-allowed";
    btn.style.background = "#ccc";
  }
}

function toLocal() {
  localStorage.setItem("YourMealBasket", JSON.stringify(currentBasket));
}
function deliveryInputs() {
  let selected = document.querySelector('input[name="deliveryOption"]:checked');
  let address = document.getElementById("adressInputs");
  if (selected && selected.value === "delivery") {
    address.classList.remove("hidden");
  } else {
    address.classList.add("hidden");
  }
}
function finalOrder(event) {
  event.preventDefault();
  if (!currentBasket || currentBasket.length === 0) {
    alert("Корзина пуста");
    return;
  }
  let delivery = document.querySelector(".delivery");
  let overlay = document.querySelector(".deliveryOverlay");
  delivery.classList.remove("hidden");
  overlay.classList.remove("hidden");
  delivery.style.display = "block";
  overlay.style.display = "block";
  document.getElementById("errorName").style.display = "none";
  document.getElementById("errNumber").style.display = "none";
  document.getElementById("deliverySubmit").reset();
  document.getElementById("adressInputs").classList.add("hidden");
  let form = document.getElementById("deliverySubmit");
  document.addEventListener("DOMContentLoaded", () => {
    if (!form.hasAttribute("data-handler-added")) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        let nameInput = document.getElementById("deliveryName").value.trim();
        let numberInput = document
          .getElementById("deliveryNumber")
          .value.trim();
        let nameErr = document.getElementById("errorName");
        let numberErr = document.getElementById("errNumber");

        let valid = true;
        nameErr.style.display = "none";
        numberErr.style.display = "none";

        if (nameInput === "") {
          nameErr.textContent = "Введите имя";
          nameErr.style.display = "block";
          valid = false;
        } else if (!isNaN(nameInput)) {
          nameErr.textContent = "Имя не должно состоять из цифр";
          nameErr.style.display = "block";
          valid = false;
        }

        if (numberInput === "") {
          numberErr.textContent = "Введите номер";
          numberErr.style.display = "block";
          valid = false;
        }

        if (!valid) return;

        console.log("Форма успешно отправлена!");
        if (typeof basicModal !== "undefined")
          basicModal.style.display = "flex";

        delivery.classList.add("hidden");
        overlay.classList.add("hidden");

        currentBasket = [];
        localStorage.removeItem("YourMealBasket");

        let basketContainer = document.querySelector(
          ".basic-item-basket-order"
        );
        if (basketContainer) basketContainer.innerHTML = "";

        if (typeof totalElem !== "undefined") totalElem.textContent = "";

        form.reset();
      });

      form.setAttribute("data-handler-added", "true");
    }
  });
}

function closeModal() {
  let dOverlay = document.querySelector(".deliveryOverlay");
  let delivery = document.querySelector(".delivery");
  delivery.style.display = "none";
  dOverlay.style.display = "none";
}

let deliveryOptions = document.querySelectorAll(
  'input[name="deliveryOptions"]'
);
deliveryOptions.forEach((d) => {
  d.addEventListener("change", (event) => {
    let selected = event.target.value;
    if (selected === "delivery") {
      console.log("Выбрана доставка");
    } else if (selected === "pickup") {
      console.log("Выбран самовывоз ");
    }
  });
});

let overlay = document.querySelector(".deliveryOverlay");
overlay.addEventListener("click", () => {
  let delivery = document.querySelector(".delivery");
  let lastModal = document.querySelector(".basic-modal");
  let dOverlay = document.querySelector(".deliveryOverlay");
  delivery.style.display = "none";
  lastModal.style.display = "none";
  dOverlay.style.display = "none";
});

function updateTotal() {
  let totalElement = document.getElementById("total");
  let count = document.querySelector(".count");
  let items = document.querySelectorAll(".basic-item-basket-order .order-item");

  let total = 0;
  items.forEach((item) => {
    let pricetext = item.querySelector("#info-price").textContent;
    let price = parseInt(pricetext.replace("₽", ""), 10);
    total += price;
  });
  totalElement.textContent = `${total}₽`;
  count.textContent = items.length;
}

currentBasket.forEach((e) => {
  // console.log(e);
});

function copyNumber() {
  console.log("asd");

  let number = document.getElementById("num").textContent;
  navigator.clipboard.writeText(number).then(() => {
    let nn = document.getElementById("nn");
    nn.classList.add("show");
    setTimeout(() => {
      nn.classList.remove("show");
    }, 5000);
  });
}

const modalBackdrop = document.getElementById("modalBackdrop");
const basketContainer = document.querySelector(".basic-item-basket-order");

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    modalBackdrop.style.display = "none";
    if (basketContainer) {
      basketContainer.innerHTML = "";
    }
    localStorage.removeItem("YourMealBasket");

    localStorage.removeItem("orderCount");
     orderCount = 0;
  }
});

window.addEventListener("DOMContentLoaded", () => {
  changeCategory("burger");
});

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

var orderCount = 0;

let currentBasket = [];

document.querySelector(".delivery").classList.add("hidden");

let lastWidth = window.innerWidth;

function monitorWIndowWidth() {
  let currentWidth = window.innerWidth;
  if (currentWidth !== lastWidth) {
    lastWidth = currentWidth;
    wSize768();
  }
}
setInterval(monitorWIndowWidth, 300);

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
let basketBody = document.querySelector(".basic-item-basket");
if (basketHeaderTitle && basketBody) {
  basketHeaderTitle.addEventListener("click", () => {
    let basketOrder = document.querySelector(".basic-item-basket-order");
    console.log("basketOrder:", basketOrder);
    console.log("basketOrder display:", getComputedStyle(basketOrder).display);
    let basketTotal = document.querySelector(".basic-item-basket-total");
    let basketButton = document.getElementById("order-btn");
    let isHidden = basketOrder.classList.contains("hidden");
    basketTotal.style.setProperty("display", "block", "important");
    basketOrder.style.setProperty("display", "block", "important");
    basketButton.style.setProperty("display", "block", "important");
    console.log("Корзина" + " " + (isHidden ? "Октрыта" : "Закрыта"));
  });
} else if (!basketHeaderTitle) {
  console.log("не работает");
}
let saved = localStorage.getItem("YourMealBasket");
wSize768();

function wSize768() {
  let windWidth = window.innerWidth;
  let basketBody = document.querySelector(".basic-item-basket");
  let basketOrder = document.querySelector(".basic-item-basket-order");
  let basketTotal = document.querySelector(".basic-item-basket-total");
  let basketHeader = document.querySelector(".basic-item-basket-header");
  let basketButton = document.getElementById("order-btn");
  let basicItem = document.querySelector(".basic-item");
  let basic = document.querySelector(".basic");
  let basketHeaderTitle = document.getElementById("adaptiveCart");

  if (basketOrder && basketTotal) {
    if (windWidth <= 912) {
      let basicItem = document.querySelector(".basic-item");
      let basketBody = document.querySelector(".basic-item-basket");
      basketOrder.classList.add("hidden");
      basketTotal.classList.add("hidden");
      basketButton.classList.add("hidden");
      basketButton.style.display = "none";
      basketHeader.style.gap = "43px";
      basicItem.style.gap = "0px";
      basketBody.style.height = "20px";
      basketBody.style.setProperty("width", "200px", "important");
      basketBody.style.width = "150px";
      basketHeader.style.marginTop = "-15px";
      basic.style.marginTop = "-100px";
      let basketHeaderTitle = document.getElementById("adaptiveCart");
    } else {
      let basicItem = document.querySelector(".basic-item");

      basketOrder.classList.remove("hidden");
      basketOrder.classList.remove("hidden");
      basketButton.classList.remove("hidden");
      basketButton.style.display = "none";

      basketHeader.style.gap = "";
      basketItem.style.gap = "";
      basketBody.style.height = "";
      basketBody.style.removeProperty("width");
      basketHeader.style.marginTop = "";
      basic.style.marginTop = "";
    }
  }
}

document.querySelectorAll(".choose-item-category-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let category = btn.dataset.cat.trim();
    changeCategory(category);
  });
});

function fromLocal() {
  let value = localStorage.getItem("YourMealBasket");
  if (value) {
    currentBasket = JSON.parse(value);
  }
}
fromLocal();

function clearLocal() {
  localStorage.clear();
}

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
      toLocal();
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
      toLocal();
      updateTotal();
    });
  });

  updateTotal();
}

function loadFromStorage() {
  let basket = document.querySelector(".basic-item-basket-order");
  let savedBasket = localStorage.getItem("YourMealBasket");
  if (!savedBasket) return;
  let basketItems = JSON.parse(savedBasket);
  basket.innerHTML = "";
  basket.forEach((item) => {
    let itemElement = document.createElement("div");
    itemElement.classList.add("order-item");
    itemElement.innerHTML = `
       <div class="basket-item-img">
    <img class="immg" src="./${categoryKey}/${categoryKey}${
      index + 1
    }.jpg" id="im" alt="${product.name}"  style="width: 64px; height: 52px";>
        </div>
    <div class="basket-item-info">
    <div><strong id="info-title">${product.name}</strong></div>
    <div id="info-weight" class="weightProduct">${product.weight}
    <div id="info-price">${product.price}</div>
    </div>
    <div class="basket-item-bottom">
    <div class="wenig"><button class="minus">-</button>
    <span class="item-count">1</span>
    <button class="plus">+</button></div>
    </div>
    </div>
    `;
    basketContainer.appendChild(itemElement);
  });
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
        fromBaskettoLocal();
        updateTotal();
      } else {
        let singlePrice = parseInt(product.price.replace("₽", "").trim());
        currentBasket.push({
          name: product.name,
          count: 1,
          singlePrice: singlePrice,
          totalPrice: product.weight,
          catId: product.catId,
        });
        fromBaskettoLocal();
        let item = document.createElement("div");
        item.classList.add("order-item");
        item.innerHTML = `
    <div class="basket-item-img">
    <img class="immg" src="./${categoryKey}/${categoryKey}${
          index + 1
        }.jpg" id="im" alt="${
          product.name
        }"  style="width: 64px; height: 52px";>
        </div>
    <div class="basket-item-info">
    <div><strong id="info-title">${product.name}</strong></div>
    <div id="info-weight" class="weightProduct">${product.weight}
    <div id="info-price">${product.price}</div>
    </div>
    <div class="basket-item-bottom">
    <div class="wenig"><button class="minus">-</button>
    <span class="item-count">1</span>
    <button class="plus">+</button></div>
    </div>
    </div>
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
            fromBaskettoLocal();
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
            priceElem.innerText = singlePrice * currentCount + "₽";
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
          fromBaskettoLocal();
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

function fromBaskettoLocal() {
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

function finalOrder() {
  let dOverlay = document.querySelector(".deliveryOverlay");
  let delivery = document.querySelector(".delivery");
  let orderBtn = document.getElementById("order-btn");
  console.log("корзина", currentBasket);

  if (currentBasket.length === 0) {
    console.log("Пусто");
    orderBtn.style.cursor = "not-allowed";
    orderBtn.disabled = true;
    return;
  } else {
    console.log("заполнено");
    orderBtn.style.cursor = "pointer";
    orderBtn.disabled = false;
    if (delivery && dOverlay) {
      delivery.classList.remove("hidden");
      delivery.style.display = "flex";
      dOverlay.style.display = "block";
    } else {
      console.warn("");
    }
  }

  console.log("Да сука блять ебаная ошибка нахуй я ноут щя ебану нахуй ");
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

function final(event) {
  event.preventDefault();
  let dOverlay = document.querySelector(".deliveryOverlay");
  let delivery = document.querySelector(".delivery");
  orderCount += 1;
  delivery.style.display = "none";
  let lastModal = document.querySelector(".basic-modal");
  lastModal.style.display = "flex";
  clearLocal();
  let cart = document.querySelector(".basic-item-basket-order");
  cart.innerHTML = "";
}

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

document.addEventListener("DOMContentLoaded", ()=>{
changeCategory("burger");
})

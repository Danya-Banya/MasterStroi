let users = [
  {
    id: 1,
    name: "Семён",
    email: "lobanov@gmail.com",
    password: "goida-naveki_363",
    number: "+996707542291",
  },
  {
    id: 2,
    name: "Андрей",
    email: "neShastliv85@gmail.com",
    password: "Third-reich-1488",
    number: "+996556734912",
  },
];

let savedUsers = localStorage.getItem("savedUsers") || [];
let history = localStorage.getItem("orders");

if (savedUsers) {
  users = JSON.parse(savedUsers);
}
document.addEventListener("DOMContentLoaded", () => {
  renderHistoryTitle();
});

document.addEventListener("DOMContentLoaded", () => {
  let user = parseInt(localStorage.getItem("loggedUser"));
  console.log(user);
  let findUser = users.find((item) => item.id === user);
  if (findUser) {
    let nickName = document.getElementById("userName");
    let headerNameNick = document.getElementById("personal-headerName");
    let usermail = document.getElementById("user-mail");
    let userNum = document.getElementById("user-phone");
    nickName.textContent = findUser.name;
    headerNameNick.textContent = findUser.name;
    usermail.textContent = findUser.email;
    userNum.textContent = findUser.number;
    console.log("zashel");
  } else if (!findUser) {
    console.log("code kaputt");
  }
});

function showOrderHistory() {
  document.querySelector(".history").classList.remove("hidden");
}
function closeOrderHistory() {
  document.querySelector(".history").classList.add("hidden");
}

function renderHistoryTitle() {
  let ordersRaw = localStorage.getItem("orders");
  if (!ordersRaw) return;
  let userId  = Number(localStorage.getItem("loggedUser"))
  let orders = JSON.parse(ordersRaw);
  let userOrders = orders.filter(order=> order.user === userId)

  let container = document.querySelector(".historyOrder-container");
  container.innerHTML = "";
  if(userOrders.length === 0){
    container.innerHTML = "<p> У вас пока нет заказов.</p>"
    return
  }
  userOrders.forEach((order) => {
    let data = new Date(order.date);
    let day = data.getDate().toString().padStart(2, "0");
    let month = (data.getMonth() + 1).toString().padStart(2, "0");
    let year = data.getFullYear();
    let hours = data.getHours().toString().padStart(2, "0");
    let minutes = data.getMinutes().toString().padStart(2, "0");
    let formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
    let orderItem = document.createElement("div");
    orderItem.classList.add("orderItem");
    orderItem.innerHTML = `
      <div class="orderItem-left">
        <img src="./Assets/time-icon.png" alt="" />
        <span class="order-date">${formattedDate}</span>
      </div>
      <div class="orderItem-right">
        <span class="order-cost">${order.total}₽</span>
      </div>
    `;
    orderItem.addEventListener("click", () => {
      showHistoryDetails(order);
    });
    container.appendChild(orderItem);
  });
}

function showHistoryDetails(order) {
  let modal = document.querySelector(".historyProduct");
  let title = document.getElementById("orderTitle");
  let historyDate = document.getElementById("historyProduct-date");
  let historyCost = document.getElementById("historyProduct-costTitle");
  let productCont = document.querySelector(".historyProducts-container");
  let date = new Date(order.date);
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();
  let hours = date.getHours().toString().padStart(2, "0");
  let minut = date.getMinutes().toString().padStart(2, "0");
  let fullDate = `${day}.${month}.${year} ${hours}:${minut}`;
  productCont.innerHTML = "";
  title.textContent = "";
  title.textContent = order.number;
  historyDate = "";
  historyDate = fullDate;
  historyCost = order.total;
  historyDate = `Общая сумма заказа: ${order.total}₽`;
  order.items.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("historyProduct-card");
    card.innerHTML = `
    <img src="${item.image}" alt="" style="width: 200px;">
    <span class="productHistory-name">${item.name}</span>
    <span>Количество: ${item.quantity}</span>
    `;
    productCont.appendChild(card);
  });
  modal.classList.remove("hidden");
}

function closeProductHistory() {
  document.querySelector(".historyProduct").classList.add("hidden");
}

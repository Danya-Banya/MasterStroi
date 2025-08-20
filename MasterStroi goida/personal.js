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

let savedUsers = localStorage.getItem("savedUsers");
if (savedUsers) {
  users = JSON.parse(savedUsers);
}

document.addEventListener("DOMContentLoaded", () => {
  let user = parseInt(localStorage.getItem("loggedUser"));
  console.log(user);
  let findUser = users.find((item) => item.id === user);
  if (findUser) {
    let nickName = document.getElementById("userName");
    let headerNameNick = document.getElementById("personal-headerName")
    let usermail = document.getElementById("user-mail")
    let userNum = document.getElementById("user-phone")
    nickName.textContent = findUser.name;
    headerNameNick.textContent = findUser.name
    usermail.textContent = findUser.email
    userNum.textContent = findUser.number
    console.log("zashel");
  } else if (!findUser) {
    console.log("code kaputt");
  }
});


function showOrderHistory(){
    document.querySelector(".history").classList.remove("hidden")
}
function closeOrderHistory(){
    document.querySelector(".history").classList.add("hidden")
}
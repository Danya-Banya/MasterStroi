let category = [
  {
    id: 1,
    name: "salads",
  },
  {
    id: 2,
    name: "fast-foods",
  },
  {
    id: 3,
    name: "pizzas",
  },
  {
    id: 4,
    name: "deserts",
  },
];

let foods = [
  {
    id: 1,
    name: "Margarita",
    catId: 3,
    cost: "$10",
  },
  {
    id: 2,
    name: "Hamburger",
    catId: 2,
    cost: "$6",
  },
  {
    id: 3,
    name: "Italian Salad",
    catId: 1,
    cost: "$11",
  },
  {
    id: 4,
    name: "Cheesecake",
    catId: 4,
    cost: "$14",
  },
  {
    id: 5,
    name: "shawerma",
    catId: 2,
    cost: "$7",
  },
  {
    id: 6,
    name: "Peperoni",
    catId: 3,
    cost: "$9",
  },
  {
    id: 7,
    name: "Baklava",
    catId: 4,
    cost: "$5",
  },
  {
    id: 8,
    name: "Crab Salad",
    catId: 1,
    cost: "$8",
  },
  {
    id: 9,
    name: "French fries",
    catId: 2,
    cost: "$6",
  },
];

let users = [
  {
    id: 1,
    name: "Ulan",
    surname: "Ergeshov",
    email: "ulan@gmail.com",
    password: 19532,
  },
  {
    id: 2,
    name: "Majidbek",
    surname: "Abdillabekov",
    email: "Majidbek@mail.ru",
    password: 54321,
  },
  {
    id: 3,
    name: "Bakyt",
    surname: "Bazarbaev",
    email: "bakyt@inbox.kg",
    password: 98765,
  },
  {
    id: 4,
    name: "Nursultan",
    surname: "Telyakbaev",
    email: "nursultan@yandex.com",
    password: 67890,
  },
];

function clearlocal(){
localStorage.clear()
  location.reload()
}

setTimeout(() => {

  let table = document.getElementById("usersTable")
  let lines = table.querySelectorAll("tr")
  let userMassiv = []

  let headers = Array.from(lines[0].children).map(th => th.textContent)

  for (let i = 1; i < lines.length; i++){
    let cells = lines[i].children
    let obj = {}
    for (let j = 0; j < cells.length; j++) {
     obj[headers[j]] = cells[j].textContent
    }
    userMassiv.push(obj)
   
  }
  localStorage.setItem("users", JSON.stringify(userMassiv))
}, 500);  

function sendUserToTable() {
  let table = document.querySelector("table");
  let lines = table.querySelectorAll("tr.d");
  lines.forEach((line, index) => {
    if (index > 0) {
      line.remove();
    }
  });
  users.forEach((u, index) => {
    let tr = document.createElement("tr");
    tr.classList.add("d");
    tr.innerHTML = `
        <td class="name">${u.name}</td>
        <td class="surname">${u.surname}</td>
        <td class="email">${u.email}</td>
        <td class="password">*****</td>
        <td class="checkPass"><button class="chBtn" data-index="${index}">Check Pass.</button></td>
        <td class="actionDelete" onclick="displayBlockDeleteModal(${index})">Delete</td>
        <td class="actionUpdate" onclick="displayBlockUpdateModal(${index})">Update</td>
        `;
    table.appendChild(tr);
  });

  let button = document.querySelectorAll(".chBtn");
  let passwordCells = document.querySelectorAll(".password");

  button.forEach(function (button, index) {
    button.addEventListener("click", () => {

      let index = button.dataset.index;
      let passwordCell = passwordCells[index];
      if (passwordCell.innerText === `*****`) {
        passwordCell.innerText = users[index].password;
      } else {
        passwordCell.innerText = `*****`;
      }
    });
  });
}
sendUserToTable();

function displayBlockDeleteModal(index){
  deleteIndex = index
  document.querySelector(".modal-delete").classList.remove("hidden")
  document.querySelector(".modal-bg").classList.remove("hidden")
}


function displayBlockUpdateModal(index){
  deleteIndex = index
  document.querySelector(".modal-update").classList.remove("hidden")
  document.querySelector(".modal-bg").classList.remove("hidden")
}

function updateUser(index){
let newName = document.getElementById("newName")
let newSurame = document.getElementById("newName")
let newEmail = document.getElementById("newName")
let newPassword = document.getElementById("newName")
}



function deleteUser(index) {
  // console.log("snjgsldj");
  if(deleteIndex !== null){
    users.splice(deleteIndex, 1)
    sendUserToTable()
    closeModals()
  }
  
  setTimeout(() => {

    let table = document.getElementById("usersTable")
    let lines = table.querySelectorAll("tr")
    let userMassiv = []

    let headers = Array.from(lines[0].children).map(th => th.textContent)

    for (let i = 1; i < lines.length; i++){
      let cells = lines[i].children
      let obj = {}
      for (let j = 0; j < cells.length; j++) {
       obj[headers[j]] = cells[j].textContent
      }
      userMassiv.push(obj)
     
    }
    localStorage.setItem("users", JSON.stringify(userMassiv))
  }, 500);
}

// document.querySelector("notSure").addEventListener("click", closeModals)

function closeModals(){
  document.querySelector(".modal-delete").classList.add("hidden")
  document.querySelector(".modal-bg").classList.add("hidden")
  deleteIndex = null
}

function createUser(){
  document.querySelector(".modal-create").classList.remove("hidden")
  let nameInput = document.getElementById("newName").value 
  let surnameInput = document.getElementById("newSurname").value 
  let mailInput = document.getElementById("newEmail").value
  let passwordInput = document.getElementById("newPassword").value 
   users.push({
    id: users.length + 1,
    name: nameInput,
    surname: surnameInput,
    email: mailInput,
    password: passwordInput,
   }) 

   setTimeout(() => {

    let table = document.getElementById("usersTable")
    let lines = table.querySelectorAll("tr")
    let userMassiv = []
  
    let headers = Array.from(lines[0].children).map(th => th.textContent)
  
    for (let i = 1; i < lines.length; i++){
      let cells = lines[i].children
      let obj = {}
      for (let j = 0; j < cells.length; j++) {
       obj[headers[j]] = cells[j].textContent
      }
      userMassiv.push(obj)
     
    }
    localStorage.setItem("users", JSON.stringify(userMassiv))
  }, 500);  
}
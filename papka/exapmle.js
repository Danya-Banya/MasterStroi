let users = [
  {
    id: 1,
    name: "Ali",
    surname: "Japarov",
    email: "ali@gmail.com",
    password: "341256",
  },
];

let login = document.querySelector(".registerPage");
login.addEventListener("click", () => {
  let modal = document.querySelector(".modal-container");
  modal.classList.add("active");
});

function closeModal() {
  let modal = document.querySelector(".modal-container");
  modal.classList.remove("active");
}

function passError() {
  let pass = document.querySelector(".passwordInp").textContent
  let email = document.querySelector(".emailInp").textContent;
  if (email.endsWith("@gmail.com")){
  }
}
passError();

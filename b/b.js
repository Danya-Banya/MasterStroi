let users = {
  user1: {
    id:1,
    username: "Aibek",
    email: "Aibek@gmail.com",
    password: "LariliLarila228",
  },
  user2: {
    id:2,
    username: "Zinata",
    email: "a@gmail.com",
    password: "14881488",
  },
};

if(localStorage.getItem("users")){
  users = JSON.parse(localStorage.getItem("users"))
}

document.querySelector(".reg").style.display = "none";
document.getElementById("register").style.display = "none";

function login() {
  document.querySelector(".reg").style.display = "none";
  let emailInput = document.getElementById("email").value;
  let passwordInpiut = document.getElementById("userPassword").value;
  let passErr = document.getElementById("errorPass");
  let emailErr = document.getElementById("errorEmail");

  emailErr.style.display = "none";
  passErr.style.display = "none";
  let isAuthenticated = false;
  for (let key in users) {
    if (users[key].email === emailInput) {
      if (users[key].password === passwordInpiut) {
        isAuthenticated = true;
        alert("Вы успешно вошли в" + " " + users[key].username + "!");
        return;
      } else {
        passErr.textContent = "Неверный Пароль!";
        passErr.style.display = "block";
      }
    }
  }
  emailErr.textContent = "Неверный адресс почты!";
  emailErr.style.display = "block";
}

function register(event) {
  event.preventDefault();

  let username = document.getElementById("regUsernameInput").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;
  let errorUsername = document.getElementById("errorUsername");
  let errorEmail = document.getElementById("errorRegEmail");
  let errorPass = document.getElementById("errorRegPass");
  errorUsername.style.display = "none";
  errorEmail.style.display = "none";
  errorPass.style.display = "none";

  if (username === "") {
    errorUsername.textContent = "Введите имя";
    errorUsername.style.display = "block";
    return false;
  }

  if (email === "") {
    errorEmail.textContent = "Введите email";
    errorEmail.style.display = "block";
    return false;
  }
  for (let key in users) {
    if (users[key].email === email) {
      errorEmail.textContent = "Этот email уже используется";
      errorEmail.style.display = "block";
      return false;
    }
  }
  if (password.length < 6) {
    errorPass.textContent = "Пароль должен быть минимум 6 символов";
    errorPass.style.display = "block";
    return false;
  }

  let newKey = "user" + (Object.keys(users).length + 1);
  users[newKey] = {
    id: Object.keys(users).length + 1,
    username,
    email,
    password,
  };

  localStorage.setItem("users", JSON.stringify(users));

  alert("Пользователь успешно зарегистрирован!");
  showLogin();
  return true;
}
function showRegister() {
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "block";
  document.querySelector(".log").style.display = "none";
  document.querySelector(".reg").style.display = "block";
}

function showLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "none";
  document.querySelector(".log").style.display = "block";
  document.querySelector(".reg").style.display = "none";
}

document
  .querySelector(".haveNoAccount")
  .addEventListener("click", showRegister);
document.getElementById("haveAccount").addEventListener("click", showLogin);

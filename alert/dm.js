// function plus_minus() {
//   let counter = document.querySelector(".divan");
//   let buttons = document.querySelectorAll(".buton");
//   let kol_vo = parseInt(counter.textContent);
//   buttons[0].addEventListener("click", () => {
//     kol_vo += 1;
//     counter.textContent = kol_vo;
//   });
//   buttons[1].addEventListener("click", () => {
//     kol_vo -= 1;
//     counter.textContent = kol_vo;
//   });
// }
// plus_minus();

let alerrt = document.querySelector(".alert")
alerrt.style.display = "none"

let negative = document.querySelector(".negative")
negative.style.display = "none"

function getOk() {
  let aleert = document.querySelector(".alert")
  let confyrm = document.querySelector(".confirm");
  let button_ok = document.querySelector(".btn_ok");
  button_ok.addEventListener("click", () => {
    confyrm.style.display = "none";
    aleert.style.display = "Block"
  });
}
getOk();

function getNo(){
  let negative = document.querySelector(".negative")
  let confirm2 = document.querySelector(".confirm")
  let button_no = document.querySelector(".btn_No")
  button_no.addEventListener("click",()=>{
    confirm2.style.display = "none";
    negative.style.display = "Block"
  })
}
getNo()

function getText(text){
  let buttons = document.querySelector(".btn")
  let alyert = document.querySelector(".alert")
  buttons.addEventListener("click", () =>{
    alyert.style.display = "none";
    alyert.textContent = text
  })
}
getText('Heil!')

function get(){
  let buttons = document.querySelector(".butn")
  let niggative = document.querySelector(".negative")
  buttons.addEventListener("click", () =>{
    niggative.style.display = "none";
    niggative.textContent = text
  })
}
getText()
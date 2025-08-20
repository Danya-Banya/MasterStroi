let search_register = document.querySelector(".regisstr")
search_register.style.display = "none"

let search_login = document.querySelector(".login")
search_login.style.display = "none"
function registr (){
let registration = document.querySelector(".header_item_search_registr")
registration.addEventListener("click",() =>{
    let search_login = document.querySelector(".login")
    search_login.style.display = "block"

})

}
document.addEventListener("DOMContentLoaded", registr)

function registr_login (){
    let to_login = document.querySelector(".regisstr_header_b")
    to_login.addEventListener("click",() =>{
        let search_regisstr = document.querySelector(".regisstr")
        search_regisstr.style.display = "block"
    
    })
    
    }
    document.addEventListener("DOMContentLoaded", registr)


function registrYup(){
let registration = document.querySelector(".")
}
document.addEventListener("DOMContentLoaded", registrYup)
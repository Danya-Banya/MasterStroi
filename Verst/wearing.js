let commercial = document.querySelector(".commercial")
commercial.style.display = "block"

function pressX(){
    let commerc = document.querySelector("commercial")
    let comm = document.querySelector("commercial_item_button")
    comm.addEventListener("click", () =>{
        commerc.style.display = "none"
    })
}
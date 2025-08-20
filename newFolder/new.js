const category = [
  {
    id: 1,
    name: "Fast-Food",
  },
  {
    id: 2,
    name: "Pizza",
  },
  {
    id: 3,
    name: "Drinks",
  },
];

const foods = [
  {
    id: 1,
    name: "Burger",
    catId: 1,
    cost: 120,
  },
  {
    id: 2,
    name: "Big-Burger",
    catId: 1,
    cost: 150,
  },
  {
    id: 3,
    name: "Cheese-Burger",
    catId: 1,
    cost: 120,
  },
  {
    id: 4,
    name: "Peperoni",
    catId: 2,
    cost: 220,
  },
  {
    id: 5,
    name: "Cola",
    catId: 3,
    cost: 70,
  },
  {
    id: 6,
    name: "Pepsi",
    catId: 3,
    cost: 70,
  },
];

document.querySelector(".fastFoods").style.display = "none"
document.querySelector(".fastFood").style.display = "none";

function foodsName() {
  let fastFoodSelect = document.querySelector(".fastFood");
  foods.forEach((food) => {
    if(food.catId === 1){
    fastFoodSelect.innerHTML += `<option value="${food.id}">${food.name}</option>`;
    }
  });
}
foodsName();

function selectedCategory() {
  let selected = document.querySelector(".tablle_table");
  let btn = document.querySelector(".ok");
  let fastFoodSelect = document.querySelector(".fastFood");
  fastFoodSelect.style.display = "none"
  btn.addEventListener("click", ()=>{
    let selectedOption = selected.options[selected.selectedIndex];
    if(selectedOption.value === "1"){
      fastFoodSelect.style.display = "block"
    }else {
      fastFoodSelect.style.display = "none"
    }
  })
}
selectedCategory();


function selectedFood(){
let selectedFoodOne = document.querySelector(".fastFoods")
let btn = document.querySelector(".ok2")
btn.addEventListener("click", ()=>{
  let selectedOption = selected.options[selected.selectedIndex]
  
})

}
selectedFood()
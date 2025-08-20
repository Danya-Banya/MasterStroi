let hall = [
  {
    id: 1,
    number: "№1",
    name: "Вип",
    place: 10,
  },
  {
    id: 2,
    number: "№2",
    name: "Малый",
    place: 30,
  },
  {
    id: 3,
    number: "№3",
    name: "Большой",
    place: 50,
  },
];

function categorysNames() {
  let category = document.querySelector(".selector");
  hall.forEach((h) => {
    let name = h.name;
    category.innerHTML += `<option value="${h.name}">${h.name}</option>`;
  });
}
categorysNames();

function changedOption() {
  let selector = document.getElementById("choose");
  selector.addEventListener("change", function () {
    let selectedValue = this.value;

    document.querySelector(".placesVip").style.display = "none";
    document.querySelector(".placesSmall").style.display = "none";
    document.querySelector(".placesLarge").style.display = "none";

    if (selectedValue === "Вип") {
      document.querySelector(".placesVip").style.display = "block";
    } else if (selectedValue === "Малый") {
      document.querySelector(".placesSmall").style.display = "block";
    } else if (selectedValue === "Большой") {
      document.querySelector(".placesLarge").style.display = "block";
    }
    setTimeout(() => {
clickThePlace()
      
    }, 50);
  });
}
changedOption();

function clickThePlace() {
  let places = document.querySelectorAll(".place");
  places.forEach((place) => {
    place.onclick("click", () => {
      place.classList.toggle("selected");
    });
  });
}

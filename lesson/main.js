// async function getUsers() {
//   let arr = [];
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((res) => arr.push(...res));
//   let line = document.querySelector(".container");
//   let elem = document.createElement("table");
//   elem.insertAdjacentHTML(
//     "afterbegin",
//     `
//         <thead">
//         <tr>
//         <th>№</th>
//         <th class="">Name</th>
//         <th>UserName</th>
//         <th>email</th>
//         <th>address</th>
//         </tr>
//         </thead>
//         `
//   );

//   line.append(elem);
//   arr.forEach((e) => {
//     elem.insertAdjacentHTML(
//       "beforeend",
//       `
//               <tr class="b" id="tableForUser">
//                     <td class="id">${e.id}</td>
//                     <td class="name">${e.name}</td>
//                     <td class="username">${e.username}</td>
//                     <td class="email">${e.email}</td>
//                     <td class="adress">${e.address.city}</td>
//                 </tr>
//         `
//     );
//   });

//   console.log(arr);
// }
// getUsers();

function timeStart(minuts, seconds) {
  let stopped;
  document.querySelector(".stop").addEventListener("click", () => {
    stopped = true;
  });
  document.querySelector(".start").addEventListener("click", () => {
    stopped = false;
    countMinus();
  });
  function countMinus() {
    let minut = minuts
    let second= seconds
    if (stopped) return;
    count++;
    document.querySelector(".count").textContent = count;
    setTimeout(countPlus, 1000);
  }
}
timeStart(0, 30);

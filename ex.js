// let bankAccount = {
//   _balance: 1000,
//   get balance() {
//     return this._balance;
//   },

//   set balance(value) {
//     if (value >= 0) {
//       this._balance += value;
//     }
//   },

// };
// bankAccount.withdraw(500);
// console.log(bankAccount.withdraw());
// console.log(bankAccount.withdraw());

// // Пример:
// bankAccount.withdraw(500);  // баланс 500
// bankAccount.withdraw(600);  // ошибка
// console.log(bankAccount.balance); // 500

// let wallet = {
//   _usd: 100,
//   get usd() {
//     return this._usd;
//   },
//   set usd(value) {
//     this._usd += value;
//   },
//   get euro() {
//     return this._usd * 0.9;
//   },
//   set euro(value) {
//     this._usd += Math.floor(value / 0.9);
//   },
//   get som() {
//     return this._usd * 85;
//   },
//   set som(value){
//     this._usd += Math.floor(value / 87)
//   },
//   get ruble(){
//     return this._usd * 81
//   }, 
//   set ruble(value){
//     this._usd += Math.floor(value / 81)
//   }
// };
// wallet.usd = 1000
// console.log(`Unites States Dollar: ${wallet.usd}`);
// console.log(`Euro: ${wallet.euro}`);
// console.log(`Kyrgyz Som: ${wallet.som}`);
// console.log(wallet.usd, "usd");
// console.log(wallet.euro, "euro");
// console.log(wallet.ruble, "ruble");
// console.log(wallet.som, "som");

// console.log(wallet);


let promise = fetch("http://127.0.0.1:5500/YouMeal/index.html?deliveryOption=delivery",[Geolocation()])
console.log(pro);

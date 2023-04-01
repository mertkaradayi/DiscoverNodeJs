const radius = 3;
//Write - Your - Code
const circle = require("./circle.js");

console.log(circle.circumference(radius));
console.log(circle.area(radius));

const Account = require("./accounting.js");

const myAccount = new Account("Mert");
myAccount.credit(150);
console.log(myAccount.describe());

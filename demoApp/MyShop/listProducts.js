var faker = require("faker");
var count = 1
while(count <= 10){
  console.log("=======================================================");
  console.log(count);
var randomName = faker.commerce.productName(); // Rowan Nikolaus
console.log(randomName)
var randomPrice = faker.commerce.price(); // Kassandra.Haley@erich.biz
console.log(randomPrice)
console.log("=======================================================");
count +=1;
}
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties
// console.log(randomCard)

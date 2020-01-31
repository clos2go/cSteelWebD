var faker = require('faker');



faker.seed(123);
var randomProduct = faker.commerce.productName();
var randomPrice = faker.commerce.price();


console.log("=====================");
console.log("WELCOME TO MY SHOP");
console.log("=====================");




for (var i = 0; i < 10; i++) {
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"))
}


// console.log(randomProduct);
// console.log(randomPrice);
console.log("**** ADDING METHODS TO AN OBJECT *****")

var object = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y) {
        return x + y;
    }, 
}


console.log("**** NAMESPACING *****")
function speak() {
    return "WOOF!";
}

function speak() {
    return "MEOW!"
}

var dogSpace = {};

dogSpace.speak = function () {
    return "Woof!";
}

var catSpace = {};

catSpace.speak = function () {
    return "Meow!";
}

console.log("Dog woofing ********")
console.log(dogSpace.speak());
console.log("Cat Meowing ********")
console.log(catSpace.speak());

console.log("**** KEYWORD THIS *****")


var comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."];

// //Global function 
// function print(arr) {
//     arr.forEach(function(el) {
//         console.log(el);
//     });
// }


//Function using this

comments.print = function() {
    this.data.forEach(function(el) {
        console.log(el);
    });
}
console.log(comments.data);
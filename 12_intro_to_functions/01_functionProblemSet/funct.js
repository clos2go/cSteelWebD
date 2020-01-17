// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false
//     }
// }

function isEven(num) {
    return num % 2 === 0;
}

console.log("isEven()")
console.log(isEven(4)); //true
console.log(isEven(21)); //false
console.log(isEven(68)); //true
console.log(isEven(333)); //false

// function factorial(num) {
//     var total = 0;
//     if (num === 0 || num === 1)
//         return 1;
//     for (var i = num - 1; i >= 1; i--) {
//         num *= i
//     }
//     return num;
// }

function factorial(num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log("factorial()")
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

function kebabToSnake(str) {
    //replace all dashes with underscore
    var newStr = str.replace(/-/g, "_");
    return newStr;
}


console.log("kebabToSnake()")
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));

//str.charAt(0).toUpperCase() + str.slicer(1)
//#1: prints array in revers order
var nums = [1, 2, 34, 5, 6, 7, 8, 9, 10];
var colors = ["red", "orange", "yellow", "green"];
var friends = ["Charlie", "Liz", "David", "Mattias"];
var letters = ["a", "b", "c"];



function printRevers(arr) {
    //using built-in
    // var arrReverse = arr.reverse();
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

console.log("**** Print Array in Reverse Order *****")
console.log(printRevers(nums))
console.log(printRevers(colors))
console.log(printRevers(friends))
console.log(printRevers(letters))

//****** isUniform() ********

//for loop **********
function isUniform(arr) {

    var first = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

// //forEach()********* DOES NOT WORK
// function isUniform(arr) {
//     var first = arr[0];
//     arr.forEach(function(element){
//         if (element !== first) {
//             return false;
//         }
//     });
//     return true;
// }

console.log("**** isUniform() checks if all elements are equal *****")
console.log(isUniform([1, 1, 1, 1, 1]));
console.log(isUniform([2, 1, 1, 1]));
console.log(isUniform(["a", "b", "p"]));
console.log(isUniform(["b", "b", "b", "b"]));


//sumArray() **************

function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

console.log("******** sumArray() adds each element in array ***********")
console.log(sumArray([1,2,3]));           //6
console.log(sumArray([10, 3, 10, 4]));    //27
console.log(sumArray([-5, 100]));         //95


//max() **********

// // using builtin Math() methods

// function max(arr) {
//     var maxNum = Math.max(...arr);
//     return maxNum;
//     console.log(maxNum);
// }


function max(arr) {
    var highNum = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] > highNum) {
            highNum = arr[i];
        }
    }
    return highNum;
}

console.log("*** max()returns the largest number in an array *****")
console.log(max([1,2,3]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));




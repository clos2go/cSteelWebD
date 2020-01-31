var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

// //for loop
// function average(arr) {
//     var sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return Math.ceil(sum / arr.length);
// }

// 

// //forEach Solution
// function average(scores) {
//     var total = 0;
//     scores.forEach(function (score) {
//         total += score;
//     });
//     //divide by total number of scores
//     var avg = total / scores.length;

//     //round avg 
//     return Math.round(avg);
// }


//reduce method solution

arrSum = function (arr) {
    return arr.reduce(function (a, b) {
        return a + b
    }, 0);
}

function average(arr) {
    return Math.round(arrSum(arr) / arr.length);
}

console.log("Average Score for Environment Science:")
console.log(average(scores));
console.log("Average Score for Environment Maths:")
console.log(average(scores2));

// console.log(arrSum(scores))
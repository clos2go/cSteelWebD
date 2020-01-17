var  nums = [45, 65, 77, 34];
var colors = ["red", "orange", "green"];

nums.forEach(function(num) {
    console.log(num);
});

// myForEach(nums, function(num) {
//     console.log(num);
// });

function myForEach(arr, func) {
    //loop through array
    for (var i = 0; i < arr.length; i++) {
         //call func for each item in array. 
        func(arr[i]);
    }
}

// myForEach(colors, alert);

myForEach(colors, function(){
    alert('HI!')
});

myForEach(colors, function(color){
    console.log(color);
});

Array.prototype.myForEach = function(func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

var friends = ["charlie", "dave", "maddy", "caitlin"];

friends.myForEach(alert);

friends.myForEach(function(name) {
    console.log("I love " +name);
});


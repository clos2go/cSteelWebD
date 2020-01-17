# ARRAYS

### Suppose I wanted to model a group of friends:
    var friend1 = "Charlie";
    var friend2 = "Liz";
    var friend3 = "David";
    var friend4 = "Mattias";

#### This is a lot of code, and it doesn't let us group the friends together. Not DRY.

### **This is a perfect use case for an ARRAY**

    var friends = ["Charlie", "Liz", "David", "Mattias"];

## Arrays let us group data together in lists.
## Arrays are indexed starting at 0. Every slot has a corresponding number.
## We can use those indices to retrieve data

    var friends = ["Charlie", "Liz", "David", "Mattias"];

    console.log(freinds[0]);         //"Charlie"

    console.log(friends[1] + " <3 " friends[2]); // "Liz <3 David">

## We can also update arrays

    var friends = ["Charlie", "Liz", "David", "Mattias"];

    friends[0] = "Chuck";
    friends[1] = "Lizzie";

## We can also add new Data
    var friends = ["Charlie", "Liz", "David", "Mattias"];
    friends[4] = "Amelie";

## colors example


## Last Few things

    //We can initalize an empty array 2 ways: 
    var friends = [];
    var friends = new Array() //uncommon

    //Arrays can hold any type of data 
    var random_collection = [49, true, "Hermione", null];

    //Arrays have a length property
    var nums = [45, 37, 89, 24];
    nums.length    //4

# Array Methods

## Push and Pop
#### Use push to add to the end of an array

    var colors = ["red", "orange", "yellow"];

    colors.push("green");

    //var colors = ["red", "orange", "yellow", "green"];

#### Use pop to remove the last item in an array

    var colors = ["red", "orange", "yellow"];
    colors.pop();
    // ["red", "orange]

#### pop returns the removed element
    var col = colors.pop(); //orange

## Shift and Unshift

#### Use unshift to add to the front of an array. 
    var colors = ["red", "orange", "yellow", "green"];
    colors.unshift ("infrared");
    //["infrared", "red", "orange", "yellow", "green"]

#### Use shift to remove from the front of an array.
    var colors = ["red", "orange", "yellow", "green"];
    colors.shift();
    //["orange", "yellow", "green"]]

#### Shift also returns the removed element
    var col = colors.shift(); //"red"


## IndexOf
#### Use indexOf() to find the index of an item in an array

    var friends = [["Charlie", "Liz", "David", "Mattias", "Liz"];
    //returns the first index at which a given elemnent can be found
    friends.indexOf("David");   //2
    friends.indexOf("Liz");     //1 not 4

    // returns -1 if the element is not present
    friends.indexOf("Hagrid");  //-1

## Slice
#### Use slice() to copy parts of an array

    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    //Use slice to copy the 2nd and 3d fruits 
    //Specify index where the new array starts(1) and ends(3)
    var citrus = fruits.slice(1, 3);

    //this does not alter the original fruits array
    //citrus contains ['Orange', 'Lemon']
    // fruits contains ["Banana", "Orange", "Lemon", "Apple", "Mango"]

    var nums = [1, 2, 3];
    var otherNums = nums.slice();
    //both arrays are [1,2,3]

# Array Iteration

* Objectives
    * Use a for loop to iterate over an array
    * Use forEach to iterate over an array
    * Compare and contrast for loops and forEach

## For Loop
#### To Loop over an array using a for loop, we need to make use of the array's length property

    var colors = ["red", "orange", "yellow", "green"];

    for (var i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }

# ForEach
#### JavaScript provides an easy built-in way of iterationg over an array: forEach()

    arr.forEach(someFunction);

    var colors = ["red", "orange", "yellow", "green"];
    colors.forEach(function(color) {
        console.log(color);
    });

# For vs. ForEach
#### The following 2 code snippets do the same thing:

##### for
    var colors = ["red", "orange", "yellow", "green"];

    for(var i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }

##### forEach()
    var colors = ["red", "orange", "yellow", "green"];

    colors.forEach(function(color) {
        console.log(color);
    });
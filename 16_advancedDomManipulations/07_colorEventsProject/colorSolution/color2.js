/* Color Game Solution

*/

var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)'
];


//Selectors
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("#colorDisplay")


//Manipulations

//Changes colorDiplay text to show pickedColor RGB number in h1
colorDisplay.textContent = pickedColor;

//Changes colors of squares
for (var i = 0; i < squares.length; i++) {
    //Add addional color to squares
    squares[i].style.background = colors[i];
    
    //add click listeners
    squares[i].addEventlistener("click", function() {
        alert("clicked");
    });
}
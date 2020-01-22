//Variables
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var pickedColor = colors[3];


//Selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");


//Stuff
//Adds picked color to color display
colorDisplay.textContent = pickedColor;

//Adds color to each square
for (var i = 0; i < squares.length; i++) {
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares 
    squares[i].addEventListener("click", function () {
        //grab color of clicked
        var clickedColor = this.style.backgroundColor;
        //compare  clicked color to pickedColor
        if (clickedColor == pickedColor) {
            console.log("yes");
            for (var j = 0; j < squares.length; j++) {
                squares[j].style.backgroundColor = pickedColor;
            }
        } else {
            console.log("no")
            this.style.backgroundColor = "#232323"
        }
    });
}



// //Adds pickedColor to h1
// colorDisplay.innerHTML = "<br>" + pickedColor + "<br>";
/* Color Game Solution

*/

//Variables
var numSquares = 6;
var colors = [];
var pickedColor;

//Selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}
//function setups modeButtons (3 or 6 buttons)
function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSqaures = 3 : numSquares = 6;
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add clickListeners to squares
        squares[i].addEventListener("click", function () {
            //Grab color of picked square
            var clickedColor = this.style.background;
            //Compare colore of clicked square with pickedSquare
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again!"
            }
        });
    }
}


function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random colors
    pickedColor = pickColor();
    //Change colorDisplay to mactch picked color
    colorDisplay.textContent = pickedColor;
    //reset the reset button text
    resetButton.textContent = "New Colors";
    //resets messahe display
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.background = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
});


//function to change all squares to winner color
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}

//function to pick random color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//function generates random colors array
function generateRandomColors(num) {
    //make and array
    var arr = [];
    //add num random colors array
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
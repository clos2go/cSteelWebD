//Variables
var colors = [
	'rgb(255, 0, 0)',
	'rgb(255, 255, 0)',
	'rgb(0, 255, 0)',
	'rgb(0, 255, 255)',
	'rgb(0, 0, 255)',
	'rgb(255, 0, 255)'
];

var pickedColor = pickColor();
var colors2 = [ pickedColor ];
var randoColors = [];
console.log(pickedColor);
console.log(colors2);

//Selectors
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var body = document.querySelector('body');
var messageDisplay = document.getElementById('message');
var title = document.querySelector('.title');
var newColor = document.querySelector('.navbar div');

//Setup Game
//Adds picked color to color display
colorDisplay.innerHTML = '<br>' + pickedColor + '<br>';

//Adds color to each square then allows you to remove  wrong squares by clicking and tells you whether your click was correct or not
for (var i = 0; i < squares.length; i++) {
	//add initial color to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click', function() {
		//grab color of clicked
		var clickedColor = this.style.backgroundColor;
		//compare  clicked color to pickedColor
		if (clickedColor == pickedColor) {
			title.style.backgroundColor = pickedColor;
			// for (var j = 0; j < squares.length; j++) {
			//     squares[j].style.backgroundColor = pickedColor;
			changeColors(pickedColor);
			messageDisplay.textContent = 'Correctamundo!!!';
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	});
}

//eventListener for new colors button
// newColor.addEventListener('click', function () {

// });

//Functions

//Changes all squares to same color
function changeColors(color) {
	//loop through all the colors and change colors
	for (var i = 0; i < squares.length; i++) {
		//Change color
		squares[i].style.background = color;
		console.log(colors[i]);
	}
}

// Create array with pickedColor and 5 more random colors and then randomize array order.
function newColors() {
	//creates new color array
	for (var i = 1; i < squares.length; i++) {
		colors2.push(pickColor());
	}
	console.log(colors2);
	colors2.sort();
	colors2.reverse();
	console.log(colors2);
	for (var i = 0; i < squares.length; i++) {
		//add initial color to squares
		squares[i].style.backgroundColor = colors2[i];
	}
}
console.log(newColors());

function pickColor() {
	return 'rgb(' + rgbNums() + ', ' + rgbNums() + ', ' + rgbNums() + ')';
}

function rgbNums() {
	var randomNum = Math.floor(Math.random() * 256);
	return randomNum;
}

function reset() {
	pickColor();
	pickedColor = pickColor();
	colors2 = pickedColor;
	console.log(colors2);
	console.log(pickedColor);
	colorDisplay.innerHTML = '<br>' + pickedColor + '<br>';
	newColors();
}

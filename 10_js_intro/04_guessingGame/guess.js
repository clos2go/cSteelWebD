// var secretNum =Math.floor(Math.random() * 100);
var secretNum = 5;
console.log(secretNum);

var stringGuess = Number(prompt("guess a number between 0 and 100"));
var numGuess = Number(stringGuess);

if (numGuess === secretNum) {
    alert("YOU GOT IT RIGHT!!!");
} else if (numGuess > secretNum) {
    alert("Your number is too high. Guess again")
} else {
    alert("Youe number is too low. Guess again. ")
}
//set starting score 
//create player counters
//player 1 score on click
//player 2  score on click
//reset score on click
//player 1 input to render <p></p>
//render player score after each click 


var p1Score = 0;
var p2Score = 0;
var winningScore = 7;
var gameOver = false;

//SELECT BUTTONS
var btnP1 = document.getElementById("btnP1");
var btnP2 = document.getElementById("btnP2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var input = document.querySelector("input");
var log = document.getElementById("values");
var h3Display = document.getElementsByTagName("h3")[0];


//Score event listeners
btnP1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.style.color = "green";
            h3Display.style.color = "green";
            h3Display.textContent = "Player 1 is the winner!!! Congrats!!!"
            "Player 1 is the winner!!! Congrats!!! \n\n Click Reset to play again. "
        }
        p1Display.textContent = p1Score;
    }
})

btnP2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.style.color = "green";
            h3Display.style.color = "green";
            h3Display.textContent = "Player 2 is the winner1!! Congrats!!! \n \n Click reset to play again!!"
        }
        p2Display.textContent = p2Score;
    }
})
reset.addEventListener("click", function () {
    // alert("reset clicked");
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    h3Display.style.color = "black";
    p1Display.style.color = "black";
    p2Display.style.color = "black";
    h3Display.textContent = "";
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    input.value = "";
    // console.log(p1Score, p2Score);
})

//Logging input value to <p></p>
input.addEventListener("input", function (e) {
    log.textContent = e.target.value;
    winningScore = parseInt(log.textContent);
});
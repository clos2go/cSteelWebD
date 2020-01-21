var counter = 0;
var isPurple = false;
console.log(counter)
var button = document.querySelector("button");
var bg = document.querySelector("body");

//Event listener with function call
button.addEventListener("click", style);

// Solution with counter
// function style() {
//     counter++;
//     if (counter % 2 === 1) {
//         bg.style.background = "purple";

//     } else {
//         bg.style.background = "white";
//     }
// }

// //Solution with booleans
// function style() {
//     if (isPurple) {
//         document.body.style.background = "white";
//         // isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         // isPurple = true;
//     }
//     isPurple = !isPurple; // < toggles isPurple and you can remove change in each check
// }


//solution with toggle method
function style() {
    document.body.classList.toggle("purple");
}
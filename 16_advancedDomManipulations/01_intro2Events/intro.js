var button = document.querySelector("button");
console.log(button);
var paragraph = document.querySelector("p");
console.log(paragraph.textContent);
var h1 = document.querySelector("h1");
console.log(h1.textContent);
var ul = document.querySelector("ul");
console.log(ul.textContent);
var lis = document.querySelectorAll("li");
//Setup click listener
button.addEventListener("click", changeText);
//Changing the h1 when the h1 is clicked
h1.addEventListener("click", function() {
    h1.style.color = "pink";
    h1.style.border = "10px solid red";
});

// adding a listener to ul
ul.addEventListener("click", function() {
    console.log("ul was clicked");
});

//for loop for lis

for (var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";
    });
}

//using a named function in eventListenr() 

function changeText() {
    paragraph.changeText = "Someone Clicked on the button!!!";
    paragraph.style.color = "blue";
    paragraph.style.border = "2px dashed red";
}
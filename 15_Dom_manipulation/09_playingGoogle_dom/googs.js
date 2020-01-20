//variable for logo
var logo = document.getElementById("#hplogo");  //querySelector can also be used

document.getElementById("#hplogo").setAttribute("src", "https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png")


logo.setAttribute("src", "https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png")

//change the height & width

logo.style.width: "500px";
logo.style.height: "500px";
logo.style.border: "2px solid purple";

//get all the links

var links = document.getElementsByTagName("a");

// loop through all the links

for (var i = 0; i < links.length; i++) {
    links[i].style.background = "pink";
    links[i].style.border = "1px dashed purple";
}

// Get all the links with for loop

for (var i = 0; i < links.length; i++) {
    console.log(links[i].getAttribute("href"));
}

// set all the links to bing.com
for (var i = 0; i < links.length; i++) {
  links[i].setAttribute("href", "https://www.bing.com");
}
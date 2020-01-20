var img1 = document.getElementsByTagName("img")[0];
console.log(img1);
img1;
img1.getAttribute("src");

img1.setAttribute("src", "https://thesmartcanine.com/wp-content/uploads/2019/04/corgi-mixes-810x540.jpg");

//Changes a tag href
var a = document.querySelector("a");
console.log(a);
a.setAttribute("href", "http://www.corgi.com")

//Change text
a.textContent = "LINK TO CORGI.COM";
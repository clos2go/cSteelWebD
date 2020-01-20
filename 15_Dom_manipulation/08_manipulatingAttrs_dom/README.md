# Attributes

## Use getAttribute() and setAttribut() to read and write attributes like src or href

```html
<a href= "www.google.com">I am a link</a>
<img src= "logo.png">
```

```javascript
var link = document.querySelector("a");
link.getAttribute("href"); // "www.google.com"
//CHANGE HREF ATTRIBUTE
link.setAttribute("href", "www.dogs.com"); /// <a href="www.dogs.com">I am a link</a>

// CHANGE THE IMAGE SRC
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png"); //<img src= "corgi.png">
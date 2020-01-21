# DOM EVENTS
## Making things interactive

## Events are everywhere

* clicking on a button
* Hovering over a link
* Dragging and Dropping
* Pressing the Enter key

# THE PROCESS
## We select an element and then add an event listener

* "Listen for a click on this `<button>`"
* "Listen for a hover event on the `<h1>`"
* "Listen for a kepress event on text input"

# THE SYNTAX
### To add a listener, we use a method called *addEventListener()*;

```javascript
element.addEventListener(type, functionToCall);
```

```javscript
var button = document.quesySelector("button");
button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON!!!");
});
```

## An Example
### We could also rewrite it using a named function

```javascript
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", changeText);

function changeText() {
    paragraph.textContent = "Someone clicked the button!!";
}
```
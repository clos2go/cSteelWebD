# The DOM
## Documemt Object Model
### The Document Object Model is the interface between your Javascript and HTML+CSS

* Objectives
  * Define what the DOM is 
  * Understand why the DOM manipulation is awesome
  * List a few examples of sites that use JS to manipualate the DOM
  * Understand the SELECT, then Manipulate workflow

The browser turns every HTML tag into a Javascript object that we can manipulate |![Image of HTML](../01_intro_dom/images/html.png)
-------------------------------------------------------------------------------- | -----------------------------------------------
![Image of What we see](../01_intro_dom/images/see.png) What you see | ![Image of Arrow](../01_intro_dom/images/arrow.png)
Everything is stored inside the document object | ![Image of DOM Chart](../01_intro_dom/images/dom1.png)

# The Process
## SELECT an element and then MANIPULATE
![Image of HTML](../01_intro_dom/images/html.png)
### For our example, we'll change `<h1>` color using JS

BEFORE![Image of What we see before](../01_intro_dom/images/before.png) | AFTER ![Image of what you see after JS changes](../01_intro_dom/images/after.png)
------------------------------------------------------------------- | ---------------------------------------------------------------------------------

# Selecting
## One way to select

    ```javascript
    var h1 = document.querySelector("h1");
    ```

![Image of What is selected](../01_intro_dom/images/select1.png)

# Manipulating
## All sorts of things can be manipulated

    ```javascript
    var h1 = document.querySelector("h1");
    h1.style.color = "pink";
    ```

#### MANIPULATE using the `<h1>` we selected

![Image of h1 being turned pink with JS](../01_intro_dom/images/manipulate.png)

## One more example
### SELECT the `<body>` and change its color every second

    ```javascript
    var body = document.querySelector("body");  //SELECT
    var isBlue = false;
    ```

    ```javascript
    setInterval(function() {
        if(isBlue) {
            body.style.background = "white";
        } else {
            body.style.background = "#3498db"
        }
        isBlue = !isBlue;
    }, 1000);
    ```
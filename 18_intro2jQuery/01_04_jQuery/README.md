# What is JQuery?

## JQuery is a DOM manipulation Library

> jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

## What is a library
### A single file that someone wrote with all sorts of methods that can be used with JavaScript

### JQuery comes with a bunch of useful methods to do things like:

* Select Elements
* Manipulate Elements 
* Create Elements
* Add Event Listeners 
* Animate Elements 
* Add Effects
* Make HTTP requests (AJAX)

## Reasons For and Against JQuery
You Might Not Need JQuery [JQuery vs JavaScript](https://www.youmightnotneedjquery.com).

## Why Use JQuery
* Fixes "broken" DOM API
* Brevity and Clarity
* Ease of use
* Cross-Browser support
* AJAX
* Lot's of people use jQuery

## Why Not Use JQuery
* The DOM API is no longer "broken"
* It doesn't do anything you can't do on your own
* It's and unnecessary dependency
* Performance
* Lot's of people are moving away from jQuery

#### Either way it's worth knowing

# Adding jQuery
### Download jQuery and link to it locally:

```html
<script type="text/javascript" srv="jquery.js"></script>
```
## or
### Link to a CDN(a hosted copy)

```html
<sript type="text/javascript" src"linkn"></sript>
```

### open dev tools and type `jQuery` or a `$` and if you see `(e,t){return new k.fn.niit(e,t)}` you've connected jQuery correctly

## Quick Preview
### Here's a 30 second preview of what jQuery looks like:

```javascript
//when a user clicks a button with id 'trigger'
$('#trigger').click(function() {
    //change the body's background color to yellow
    $('body').css("background", "yellow");

    //fade our all img's over 3 seconds
    $('img').fadeOut(3000, function() {
        //remove imgs from page when fadeOut is done
        $(this).remove();
    });
});
```
## Objectives

* Select elements with $()
* Use .css() to style elements

## Selecting with jQuery
### $("selectorGoesHere")

#### Selecting with jQuery is very similar to querySelectorAll, in that we provide a CSS style selectoru and jQuery will return all matching elements. 

### Example

```javascript
//to select all img tags
$("img")

//to select all elements with the class "sale"
$(".sale")

// to select element ith id "bonus"
$("#bonus")

//to select all a tags inside li's
$("li a");
```

# Manipulating Style
### .css(property, value)
#### We select and then manipulate

```javascript
//select elem with id "special" and give it a border
$("#special").css("border", "2px solid, red");

//We can also pass in an object with styles
    var styles = {
        backgroundColor: "pink",
        fontWeight: "bold"
    };

// We can also pass in multiple styles
$("#special").css({
    fontSize: "10px",
    border: "3px dashed purple",
    background:"rgba(89,45, 20, 0.5)"
});

    $("$special").css(styles);
```

# jQuery Exercise
## Use the following starter HTML

```html
<div>Div 1</div>
<div class="highlight">Div 2</div>
<div id="third">Div 3</div>
<div class="highlight">Div 4</div>
```

* Correctly include jQuery
* Select all divs and give them a purple background
* Select the divs with the *class* "highligh" and make them 200px wide
* Select div with *id* "third" and give it a orange border.
* Bonus: Select the first div only and chnage its font color to pink


# Common jQuery Methods
* val()
* text()
* attr()
* html()
* addClass()
* removeClass()
* toggleClass()

## attr()
### Can select and manipulate attributes in html

```javascript
// accesses img's src
$('img').attr("src")
// changes all img's src's
$('img').attr("src", "https://scx1.b-cdn.net/csz/news/800/2019/whythepinema.jpg")
//only changes the first image
$('img:first-of-type').css("width", "200px")
$('img:first-of-type').attr("src", "https://scx1.b-cdn.net/csz/news/800/2019/whythepinema.jpg")
//shorthand
$('img:first').css("width", "200px")
//Next 2 change the input type to color or checkbox
$('input').attr("type", "color");
$('input').attr("type", "checkbox");
// change the last image
$('img').last().css("width", "200px")
$('img').last().attr("src", "https://scx1.b-cdn.net/csz/news/800/2019/whythepinema.jpg")
```
## val()
### Helps us extract current value of every matched element

```javascript
//Checks to see value of an input
$("input").val();
//Setter method
$("input").val("Carlos Martinez");
// delete/reset value of element with an empty string
$('input').val("");
//You can use val() on anything with input: inputs, checkboxes, dropdown menus, etc..
$('select').val();
```

## .addClass() and removeClass() toggleClass()
### adds/removes classes to elements

```javascript 
// adding 'correct' class turns h1 green
$('h1').addClass("correct");

//removing

//add class to all
$('li').addClass("wrong");
//remove all
$('li').removeClass("wrong");

//toggle Class : every time you run this it will add or remove the class
$('li').toggleClass("correct");
//toggle only first li
$('li').first().toggleClass("done");
```
# click() Event

```javascript
$('h1').click(function () {
    alert("h1 clicked");
})

$('button').click(function () {
    $(this).css("background", "pink");
    alert("button clicked");
});

$('button').click(function () {
    var text = $(this).text();
    console.log(text);
});
```

# keypress()

### jQuery's keypress method is a quick and easy way to add a keypress listener to element(s).

```javascript
//listen for any keypress in any text input
$('input[type = "text"]').keypress(function() {
    alert("text input keypress");
});
```
### samples from problems

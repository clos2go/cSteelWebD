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

```jquery
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
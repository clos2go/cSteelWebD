# jQuery Events
## Making things interactive

### 3 important methods
* click()
* keypress()
* on()

## click()
### jQuery's click() metod is a quick and easy way to add a click listener to element(s);
```javascript
//prints when item with id 'submit is clicked
$('#submit').click(function() {
    console.log("Another click");
});

//alerts when ANY button is clicked
$('button').click(finctino() {
    alert("Someone clicked a bitton");
});
```

# keypress()
### monitors keypresses

```javascript
// gets document ready for jQuery
$(document).ready(function () {
    //counts every key presses in input
    $('input').keypress(function () {
        console.log("You presses a key");
    });
    //logs keypress event
    $('input').keypress(function (event) {
        console.log(event);
    });
    // logs specific keycode presses event
    $('input').keypress(function (event) {
        if (event.which === 13) {
            alert("you pressed enter")
        }
    });
    console.log(event);
});
```

# on()

```javascript
//prints when item whith id 'submit' is clicked
$("#submit").on('click', function(){
    console.log("Another Click");
});

//alerts when ANY button is clicked
$("button").on('click', function() {
    console.log("button clicked!");
});

//double click event
$("button").on("dblclick", function() {
    alert("DOUBLE CLICKED!!");
});

//drag start evern
$("a").on("dragstart", function() {
    console.log("DRAG START");
});

// keypress event
$("input[type="text"]).on("keypress", function() {
    alert("key press in an input!");
});

// gets data from a table
$("#dataTable tbody tr").on("click", function() {
    console.log($(this).text());
});
```


## Why use on()?
#### In most cases, click() and on("click") will both get the job done. HOWEVER, there is one key difference:

* click() only adds listeners for existing elements
* on() will add listeners for all potential future elements
* this will make sense later

## jQuery Effects

```javascript 

$(document).ready(function () {
    //fadeOut
    $("#fade").click(function () {
        $("div").fadeOut(1000, function () {
            // $(this).remove();
        });
    });

    //FadeIn
    $("#fade").click(function () {
        $("div").fadeIn(1000, function () {
            // $(this).remove();
        });
    });


    //Fade Toggle
    $("#fade").click(function () {
        $("div").fadeToggle(1000, function () {
            // $(this).remove();
        });
    });

    //Slide (SlideDown: elements must be hidden ((display: none)))
    $("#slide").click(function () {
        $("div").slideDown("slow", function () {
            // console.log("slide");
        });
    })
    //slideToggle
    $("#sToggle").click(function () {
        $("div").slideToggle("slow", function () {
            // console.log("slide");
        });
    })
});

```
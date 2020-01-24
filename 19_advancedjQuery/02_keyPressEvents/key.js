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
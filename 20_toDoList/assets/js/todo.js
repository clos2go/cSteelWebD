//Check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    });
    event.stopPropagation();
});

//Listener for enter key in input
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        console.log("you hit enter key");
        //create a new li and add to ul
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');

    }
});

//Append adds an element
//Using on() to account for elements that don't exist yet
// $(this).val("");  clears the var
//event.which === keyboard number to check for specific keys

//Toggle + input 

$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle();
});
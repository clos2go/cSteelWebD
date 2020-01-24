$(document).ready(function () {
    // Changes all h1's
    $("h1").on("click", function () {
        $("h1").css("color", "purple");
    });
    //Changes only the h1 you click on 
    $("h1").on("click", function () {
        $(this).css("color", "purple");
    });
    // console.logs that any key was pressed
    $("input").on('keypress', function () {
        console.log("any key was presses!")
    });
    // change colors on hover over all h1's
    $("h1").on("mouseenter", function () {
        $(this).css({
            "color": "blue",
            "font-weight": "bold"
        });
    });
    $("h1").on("mouseleave", function () {
        $(this).css({
            "color": "black",
            "font-weight": "normal"
        });
    });
});
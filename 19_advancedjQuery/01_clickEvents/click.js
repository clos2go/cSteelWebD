$(document).ready(function () {
    $('h1').click(function () {
        alert("h1 clicked");
    })
    $('button').click(function () {
        $(this).css("background", "pink");
        alert("button clicked");
    });
    // $('button').click(function () {
    //     $(this).css("background", "pink");
    // });

    $('button').click(function () {
        var text = $(this).text();
        console.log(text);
    });
    // $('button:first').click(function () {
    //     console.log("button 1");
    // });
    // $('button:nth-child(2)').click(function () {
    //     console.log("button 2");
    // });
    // $('button:last').click(function () {
    //     console.log("button 3");
    // });
});
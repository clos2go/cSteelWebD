//fadeOut
$(document).ready(function () {
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

    $("#sToggle").click(function () {
        $("div").slideToggle("slow", function () {
            // console.log("slide");
        });
    })


});
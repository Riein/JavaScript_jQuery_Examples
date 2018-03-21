/* 
Description: JavaScript file for Code Player html 
Author: Sasha Demyanik
*/
$(function() {
    //On toggle button hover, add/remove highlighted styling
    $(".toggle-button").hover(function() {

        $(this).addClass("highlighted-button");

    }, function() {

        $(this).removeClass("highlighted-button");

    });

    //On toggle button click, toggle active class and remove highlighted class
    $(".toggle-button").click(function() {
        $(this).toggleClass("active");

        $(this).removeClass("highlighted-button");
    });


    //Set panel height and width to fit within the window
    $(".panel").height($(window).height() - $("#header").height() - 15);

    $(".panel").width(($(window).width() / 2) - 10);


    //Set the iframe contents to contain the html panel values
    $("iframe").contents().find("html").html($("#html-panel").val());

    //On change to html-panel, set the iframe text only if different
    $("#html-panel").on("change keyup paste", function() {
        var currentVal = $(this).val();
        var iframeText = $("iframe").contents().find("html");
        if (currentVal == iframeText) {
            return;
        }

        $("iframe").contents().find("html").html($("#html-panel").val());

    });

});

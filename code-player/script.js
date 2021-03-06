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

        //Retrieve the clicked panel id and toggle the hidden class
        var panelID = $(this).attr("id") + "-panel";
        $("#" + panelID).toggleClass("hidden");

        //Get the total number of panels and subtract hidden panels
        //to calculate the total active panels
        var numPanels = $(".panel").length - $(".hidden").length;

        //Adjust the width of the panel based on active panels
        $(".panel").width(($(window).width() / numPanels) - 10);
    });


    //Set panel height and width to fit within the window
    $(".panel").height($(window).height() - $("#header").height() - 15);
    $(".panel").width(($(window).width() / 2) - 10);


    //Set the iframe contents to contain the html panel values
    updateOutput();

    //On change to html-panel, set the iframe text
    $("textarea").on("change keyup paste", function() {

        updateOutput();

    });

});

//Updates the iframe output window with latest html and css properties
function updateOutput() {
    $("iframe").contents().find("html").html(
        "<html><head><style type='text/css'>" 
        + $("#css-panel").val() 
        + "</style></head><body>"
        + $("#html-panel").val()
        + "</body></html>"
    );

    document.getElementById("output-panel").contentWindow.eval($("#javascript-panel").val());

    
}

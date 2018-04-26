/*jshint browser: true, esversion: 6, jquery: true */

$(document).ready(function()
{
    $("header, main, footer").attr({
        "class" : "generalBox"
    });

    $("header").prepend("1. ");
    $("main").prepend("2. ");
    $("footer").prepend("3. ");

    $("header, main, footer").append(" - this is the ");
    $("header").append("header");
    $("main").append("main section");
    $("footer").append("footer");
    $("header, main, footer").append(" of this page.");

    $("header").click(function()
    {
        $(this).toggleClass("headerClass");
    });

    $("main").click(function()
    {
        $(this).toggleClass("mainClass");
    });

    $("footer").click(function()
    {
        $(this).toggleClass("footerClass");
    });

    $("header, main, footer").on({
        dblclick: function()
        {
            $(this).toggleClass("shyMode");
        },
        mouseenter: function()
        {
            $(this).toggleClass("invertColors");
        },
        mouseleave: function()
        {
            $(this).toggleClass("invertColors");
        }
    });

    $("button").click(function()
    {
        $("header").fadeToggle(2000);
        $("main").fadeToggle(1500);
        $("footer").fadeToggle(1000, function()
        {
            $("button").toggleClass("shyMode");
        });
    });
});

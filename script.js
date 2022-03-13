
$("body").ready(function() {
    $(".header").hide();
    $(".about").hide();
    $(".footer").hide();
    $(".copyrights").hide();
    $(".header").slideDown(1000);
    $(".about").delay(800).fadeIn(1000);
    $(".footer").delay(1600).slideDown(1000);
    $(".copyrights").delay(2000).fadeIn(500);
});
$(document).ready(function () {
    var timeout;

    // When hovering over .has-sub or .hidden-menu
    $(".has-sub, .hidden-menu").hover(function () {
        clearTimeout(timeout);
        // Find the .hidden-menu within the current element's parent
        $(this).closest("li").find(".hidden-menu").addClass("block").stop().slideDown();
    }, function () {
        var $hiddenMenu = $(this).closest("li").find(".hidden-menu");
        // Set a timeout to hide the .hidden-menu after a delay
        timeout = setTimeout(function () {
            $hiddenMenu.stop().slideUp();
        }, 10);
    });
});

// Toggle the dropdown menu when clicking the menu item
$(".dropdown-toggle").click(function () {
    $(this).next(".dropdown-menu").toggle();
});

// Prevent the click event on the dropdown menu from closing it
$(".dropdown-menu").click(function (e) {
    e.stopPropagation(); // Prevent the event from propagating to the document
});

// Close the dropdown menu when clicking outside of it
$(document).click(function (e) {
    if (!$(e.target).closest(".navbar-item").length) {
        $(".dropdown-menu").hide();
    }
});

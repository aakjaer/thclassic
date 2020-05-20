$(document).ready(function($) {
    $(".car-list .row-clickable").click(function() {
        window.document.location = $(this).data("href");
    });
});

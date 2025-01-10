$(function () {

    // Custom validation for email format
    $("#email").on("input", function () {
        var email = $(this).val();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            $(this).next(".help-block").text("Please enter a valid email address.");
        } else {
            $(this).next(".help-block").text("");
        }
    });

    // Custom validation for required fields
    $("#contactForm input, #contactForm textarea").on("input", function () {
        if ($(this).val() === "") {
            $(this).next(".help-block").text("This field is required.");
        } else {
            $(this).next(".help-block").text("");
        }
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
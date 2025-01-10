$(function () {
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // Error handling code
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
            $('#success > .alert-danger').append("<strong>Sorry, it seems that our mail server is not responding. Please try again later!</strong>");
            $('#success > .alert-danger').append('</div>');
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

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
// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#submitButton").click(function () {
        var button = $(this);
        var formData = $("#myForm").serialize();

        button.prop("disabled", true);

        $.ajax({
            url: "/Employees/Create",
            type: "POST",
            data: formData,
            success: function (response) {
                
                $("#resultMessage").text(response.message);
                $("#formContainer").html(response.formHtml);
                
                window.location.href = "/Employees/Index";
                console.log("ajax successful");
                alert("Form submitted successfully!  ajax successful");
            },
            error: function (xhr, status, error) {
                console.log(error);
                alert("Form submission failed.2211");
                button.prop("disabled", false);
            }
        });
    });
});

$(document).ready(function () {
  // Event handler for input change
  const emailElement = $("#email");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  emailElement.on("input", function () {
    const inputValue = $(this).val();
    if (!emailRegex.test(inputValue) && inputValue.length > 0) {
      emailElement.addClass("is-invalid");
      emailElement.removeClass("is-valid");
      emailElement
        .siblings(".invalid-feedback")
        .text("not a valid email eg. 1@gmail.com");
    } else {
      if (inputValue.length > 0) emailElement.addClass("is-valid");
      emailElement.removeClass("is-invalid");
    }
  });

  // Event handler for select box change
  $("#selectElement").on("change", function () {
    const selectedOption = $(this).val();
    // Perform actions based on the selected option
    console.log("Select box changed:", selectedOption);
  });
});

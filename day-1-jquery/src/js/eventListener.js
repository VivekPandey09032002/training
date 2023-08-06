$(document).ready(function () {
  const currentDate = new Date().toISOString().split("T")[0];

  // Set the max attribute of the date input to the current date
  $("#dob").attr("max", currentDate);

  $("#name").on("input", function () {
    const value = $(this).val();
    if (value.length === 0) {
      $(this).siblings(".invalid-feedback").text("filed must not be empty");
      return;
    }
    if (!/^[A-Za-z\s]{6,}$/.test(value)) {
      $(this)
        .siblings(".invalid-feedback")
        .text("must contain only letters and greater than 6 characters");
    }
  });

  $("#email").on("input", function () {
    const value = $(this).val();
    if (value.length === 0) {
      $(this).siblings(".invalid-feedback").text("filed must not be empty");
      return;
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      $(this)
        .siblings(".invalid-feedback")
        .text("not a valid email contain @ and domain");
    }
  });
});

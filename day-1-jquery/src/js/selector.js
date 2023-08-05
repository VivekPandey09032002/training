$(document).ready(function () {
  // change heading content
  const originalHeading = $("#heading").text();
  $("#heading-changer").on("input", function (e) {
    let currentValue = e.target.value;
    if (currentValue.length === 0) {
      $("#heading").text(originalHeading);
    } else {
      $("#heading").text(currentValue.toUpperCase());
    }
  });

  // change color of selector demonstration
  $("#color-picker").on("input", function (e) {
    const currentValue = e.target.value;

    $("#selector-demo").css({
      "background-color": currentValue,
    });

    $("#color-picker").css("background-color", currentValue);
  });

  // toogle heading
  $("#heading-btn").on("click", function (e) {
    const btnElement = $("#heading");
    if (btnElement.hasClass("visible")) {
      btnElement.removeClass("visible");
      btnElement.addClass("hidden");
      $("#heading-btn").text("show");
    } else {
      btnElement.removeClass("hidden");
      btnElement.addClass("visible");
      $("#heading-btn").text("hide");
    }
  });
});

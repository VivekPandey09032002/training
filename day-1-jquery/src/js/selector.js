$(document).ready(function () {
  // when document is ready
  // change heading content
  const originalHeading = $("#heading").text();
  $("#heading-changer").on("input", function (e) {
    let currentValue = e.target.value;
    console.log(currentValue);
    if (currentValue.length === 0) {
      $("#heading").text(originalHeading);
    } else {
      $("#heading").text(currentValue);
    }
  });

  // change color of heading
  $("#color-picker").on("input", function (e) {
    const currentValue = e.target.value;
    // reverse value with remove # symbol
    const reverseValue = e.target.value
      .split("")
      .reverse()
      .join("")
      .slice(0, -1);
    $("#heading").css({
      "background-color": currentValue,
      color: "#" + reverseValue,
    });
  });

  // toogle heading
  $("#heading-btn").on("click", function (e) {
    const btnElement = $("#heading");
    if (btnElement.hasClass("visible")) {
      console.log("visible");
      btnElement.removeClass("visible");
      btnElement.addClass("hidden");
      $("#heading-btn").text("show");
    } else {
      console.log("hidden");
      btnElement.removeClass("hidden");
      btnElement.addClass("visible");
      $("#heading-btn").text("hide");
    }
  });
});

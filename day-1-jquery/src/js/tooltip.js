$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip({
    html: true,
  });
  const elementToToggle = $("#nav-bar");
  $("#nav-toogle").on("click", function () {
    if (elementToToggle.css("display") === "none") {
      elementToToggle.show();
    } else {
      elementToToggle.hide();
    }
  });
});

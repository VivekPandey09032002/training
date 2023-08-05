function isEmpty(data) {
  // object hai
  let validData = true;
  $.each(data, function (key, val) {
    if (key === "courses") {
      const coursesData = val;
      console.log("course data", coursesData);
      coursesData.forEach(function (course) {
        $.each(course, function (key, val) {
          if (val.trim().length == 0) {
            $(`[name = "${key}"]`).addClass("is-invalid");
            $(`[name = "${key}"]`)
              .siblings(".invalid-feedback")
              .text("field cannot be empty");
            validData = false;
          }
        });
      });
    } else {
      if (val.trim().length == 0) {
        $(`[name = "${key}"]`).addClass("is-invalid");
        $(`[name = "${key}"]`)
          .siblings(".invalid-feedback")
          .text("field cannot be empty");
        validData = false;
      }
    }
  });
  return validData;
}

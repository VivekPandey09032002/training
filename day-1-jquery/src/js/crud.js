$(document).ready(function () {
  // when document is loaded
  $("#submitBtn").click(function (e) {
    $("#myModal").modal("show");
    e.preventDefault();
    console.log("Submit Button Clicked");
    const formData = $("#studentForm").serializeArray();
    const jsonData = {};
    const courses = [];
    formData.forEach((item) => {
      if (!item.name.includes("[]")) jsonData[item.name] = item.value;
    });

    $('input[name="courseInstitution[]"]').each(function (index) {
      const courseObj = {
        institution: $(this).val(),
        degree: $('input[name="courseDegree[]"]').eq(index).val(),
        year: $('input[name="courseYear[]"]').eq(index).val(),
        degreeType: $('input[name="coursedegreeType[]"]').eq(index).val(),
      };
      courses.push(courseObj);
    });

    jsonData.courses = courses;
    // Display the JSON data in the console (optional)
    console.log(jsonData);
    $("#modal-content").text(JSON.stringify(jsonData));

    // Now you can use the jsonData object to send it to the server, save it to a database, etc.
  });
});

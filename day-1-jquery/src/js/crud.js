$(document).ready(function () {
  // Close the modal when the close button is clicked
  $("#close-modal").click(function () {
    $("#myModal").modal("hide");
  });

  // when form is submitted
  $("#studentForm").submit(function (e) {
    e.preventDefault();
    $("#myModal").modal("show");
    console.log("form submitted");
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
    // Display the JSON data in the console
    console.log(jsonData);
    // making modal pretty
    $("#modal-content").empty();
    $.each(jsonData, function (key) {
      const preElement = $("<pre></pre>");
      const codeElement = $("<code></code>").text(
        JSON.stringify({ [key]: jsonData[key] }, null, 2)
      );
      preElement.append(codeElement);
      $("#modal-content").append(preElement);
      hljs.highlightElement(codeElement[0]);
    });
  });
});

$(document).ready(function () {
  // global variables
  const modalElement = $("#myModal");
  const formElement = $("#studentForm");
  const modelContentElement = $("#modal-content");
  const URL = "http://localhost:3000";
  // when form is submitted
  formElement.submit(function (e) {
    e.preventDefault();
    const formData = formElement.serializeArray();
    const jsonData = convertToJson(formData);
    // Display the JSON data in the console
    console.log(jsonData);
    // making modal pretty
    if (!isEmpty(jsonData) && isValid()) {
      addDataToModal(jsonData);
      modalElement.modal("show");
    } else {
      e.stopPropagation();
    }
    // ajax call to url
    // sendData(jsonData);
    $(this).addClass("was-validated");
    $(this).removeClass("needs-validation");
  });

  function isValid() {
    let validData = true;
    $.each(formElement[0], function () {
      if ($(this).hasClass("is-invalid")) {
        validData = false;
      }
    });
    return validData;
  }

  function isEmpty(data) {
    // object hai
    let emptyData = false;
    $.each(data, function (key, val) {
      if (key === "courses") {
        const coursesData = val;
        console.log("course data", coursesData);
        coursesData.forEach(function (course) {
          $.each(course, function (key, val) {
            if (val.trim().length == 0) {
              emptyData = true;
            }
          });
        });
      } else {
        if (val.trim().length == 0) {
          emptyData = true;
        }
      }
    });
    return emptyData;
  }

  function sendData(jsonData) {
    $.ajax({
      type: "post",
      url: URL + "/students",
      data: JSON.stringify(jsonData),
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        // Request was successful, handle the response
        console.log(response);
      },
      error: function (error) {
        // Request failed, handle the error
        console.log("Error: " + error);
      },
    });
  }

  function addDataToModal(jsonData) {
    modelContentElement.empty();
    $.each(jsonData, function (key) {
      const preElement = $("<pre></pre>");
      const codeElement = $("<code></code>").text(
        JSON.stringify({ [key]: jsonData[key] }, null, 2)
      );
      preElement.append(codeElement);
      modelContentElement.append(preElement);
      hljs.highlightElement(codeElement[0]);
    });
  }

  // convert formData to json
  function convertToJson(formData) {
    const jsonData = {};
    const courses = [];
    // for all the other fields at doesn't contain array of elements
    formData.forEach((item) => {
      if (!item.name.includes("[]")) jsonData[item.name] = item.value;
    });
    // adding education fileds using loop
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
    return jsonData;
  }

  // Close the modal when the close button is clicked
  $("#close-modal").click(function () {
    modalElement.modal("hide");
  });

  // when reset button clicked
  $("#resetBtn").click(function () {
    formElement[0].reset();
    formElement.removeClass("was-validated");
    formElement.addClass("needs-validation");
    $.each(formElement[0], function () {
      $(this).removeClass("is-invalid");
    });
  });
});

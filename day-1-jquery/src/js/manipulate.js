function addEducation() {
  const educationItem = `<div class="education-item d-flex align-items-center justify-content-evenly p-2">
                    <div class="flex-grow-1 d-flex gap-5">
                        <div class="form-group">
                            <label for="institution">Institution</label>
                            <input type="text" class="form-control" name="courseInstitution[]" placeholder="college name" required>
                        </div>
                        <div class="form-group">
                            <label for="degree">Degree</label>
                            <input type="text" class="form-control" name="courseDegree[]" placeholder="college degree" required>
                        </div>
                        <div class="form-group">
                            <label for="year">Year</label>
                            <input type="number" class="form-control" name="courseYear[]" placeholder="course year" required>
                        </div>
                        <div class="form-group">
                            <label for="degree">Degree Type</label>
                            <input type="text" class="form-control" name="coursedegreeType[]" placeholder="Masters | Gradudation" required>
                        </div>
                    </div>
                    <button type="button" class="btn btn-outline-danger h-75" onclick="removeEducation(this)">Remove</button>
                </div>`;

  $("#education-form").append(educationItem);
}

function removeEducation(button) {
  $(button).closest(".education-item").remove();
}

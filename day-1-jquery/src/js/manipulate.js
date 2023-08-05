// when document is read
let count = 0;

function addEducation() {
  count++;
  const educationItem = `<div class="education-item d-flex align-items-center justify-content-evenly">
                    <div class="flex-grow-1 d-flex gap-5">
                        <div class="form-group">
                            <label for="institution">Institution</label>
                            <input type="text" class="form-control" name="courseInstitution[]" required>
                        </div>
                        <div class="form-group">
                            <label for="degree">Degree</label>
                            <input type="text" class="form-control" name="courseDegree[]" required>
                        </div>
                        <div class="form-group">
                            <label for="year">Year</label>
                            <input type="number" class="form-control" name="courseYear[]" required>
                        </div>
                        <div class="form-group">
                            <label for="degree">Degree Type</label>
                            <input type="text" class="form-control" name="coursedegreeType[]" required>
                        </div>
                    </div>
                    <button type="button" class="btn btn-danger h-75" onclick="removeEducation(this)">Remove</button>
                </div>`;

  $("#education-form").append(educationItem);
}

function removeEducation(button) {
  count--;
  $(button).closest(".education-item").remove();
}
